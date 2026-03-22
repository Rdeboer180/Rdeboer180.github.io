import React, { useState, useEffect, useRef, useCallback } from 'react';
import SectionBadge from './SectionBadge';

const ProcessIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

const steps = [
  {
    label: 'Understand & Align',
    phase: 'Discovery',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    annotations: ['Stakeholder interviews', 'Business goals', 'User research'],
    body: 'I ask the right questions before a single pixel moves. I map business goals to user research, surface the real problem early, and align stakeholders across product, engineering, and brand so everyone\u2019s building the same thing.',
  },
  {
    label: 'Design With Intent',
    phase: 'Design',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" /><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" /><path d="M2 2l7.586 7.586" /><circle cx="11" cy="11" r="2" />
      </svg>
    ),
    annotations: ['Design tokens', 'Component specs', 'Hi-fi prototypes'],
    body: 'Every decision is documented and defensible. From high-fidelity prototypes and annotated UI behavior specs to design tokens and component libraries \u2014 I design so engineers can build confidently and teams can extend the work without me in the room.',
  },
  {
    label: 'Build for the Long Game',
    phase: 'Build',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    annotations: ['SCSS/BEM', 'CMS architecture', 'Scalable systems'],
    body: 'With 10+ years of hands-on code experience, I understand how design decisions live in production. I build sustainable components inside complex CMS architectures, translate brand identity into scalable web systems, and deliver work that holds up long after launch.',
  },
  {
    label: 'Validate, Optimize & Drive Results',
    phase: 'Validate',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    annotations: ['A/B testing', 'SEO analysis', 'Conversion tracking'],
    body: 'I design for outcomes, not deliverables. A/B testing, usability reviews, SEO-informed information architecture, and post-launch analysis aren\u2019t afterthoughts \u2014 they\u2019re built into how I work, with every release feeding directly back into the next iteration to protect conversion and drive measurable impact.',
  },
  {
    label: 'Putting in the reps',
    phase: 'Grow',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    annotations: ['AI workflows', 'Certifications', 'Emerging tools'],
    body: 'I treat my craft the way an athlete treats performance \u2014 deliberately. That means ongoing certifications, continuous refinement of soft skills like facilitation and storytelling, and staying ahead of the tools redefining the field. I was an early adopter of AI-augmented workflows and I actively integrate emerging tools to work faster, communicate more clearly, and deliver at a higher level.',
  },
];

const CYCLE_DURATION = 8000;
const CURSOR_TRAVEL_MS = 600;

// AI Prompt animation config
const PRE_FILLED = "I've uploaded hundreds of files \u2014 notes, process documents, wireframes, design systems, presentation proofs, and finished products. ";
const TYPED_PORTION = "Can you take those files and tell the world what makes me Awesome?";
const FULL_PROMPT = PRE_FILLED + TYPED_PORTION;
const DELETE_PORTION = "makes me Awesome?";
const REPLACEMENT = "sets me apart";

type PromptPhase = 'idle' | 'typing' | 'pause-before-delete' | 'deleting' | 'pause-before-retype' | 'retyping' | 'pause-before-submit' | 'submitting' | 'computing' | 'vibing' | 'streaming' | 'done';

const HowIWork: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [userClicked, setUserClicked] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [cursorClicking, setCursorClicking] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startRef = useRef<number>(Date.now());
  const sectionRef = useRef<HTMLElement>(null);
  const boardRef = useRef<HTMLDivElement>(null);
  const noteRefs = useRef<(HTMLDivElement | null)[]>([]);

  // AI prompt state
  const [promptPhase, setPromptPhase] = useState<PromptPhase>('idle');
  const [promptText, setPromptText] = useState(PRE_FILLED);
  const [statusText, setStatusText] = useState('');
  const hasPlayed = useRef(false);

  // Streaming body text — tracks how many chars of each step's real body are revealed
  const [streamedChars, setStreamedChars] = useState<number[]>(steps.map(() => 0));
  const streamIndexRef = useRef(0); // which step is currently streaming

  const contentRevealed = promptPhase === 'done' || promptPhase === 'streaming';

  const getNoteCenter = useCallback((index: number) => {
    const note = noteRefs.current[index];
    const board = boardRef.current;
    if (!note || !board) return { x: 0, y: 0 };
    const boardRect = board.getBoundingClientRect();
    const noteRect = note.getBoundingClientRect();
    return {
      x: noteRect.left - boardRect.left + noteRect.width / 2,
      y: noteRect.top - boardRect.top + noteRect.height / 2,
    };
  }, []);

  const handleUserClick = (index: number) => {
    setUserClicked(true);
    setActiveIndex(index);
    setProgress(0);
    startRef.current = Date.now();
  };

  // Start prompt animation when section comes into view
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting && !hasPlayed.current) {
          hasPlayed.current = true;
          setPromptPhase('typing');
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // AI prompt typing state machine
  useEffect(() => {
    if (promptPhase === 'idle' || promptPhase === 'done') return;

    let timer: ReturnType<typeof setTimeout>;

    switch (promptPhase) {
      case 'typing': {
        if (promptText.length < FULL_PROMPT.length) {
          timer = setTimeout(() => {
            setPromptText(FULL_PROMPT.substring(0, promptText.length + 1));
          }, 20);
        } else {
          timer = setTimeout(() => setPromptPhase('pause-before-delete'), 600);
        }
        break;
      }
      case 'pause-before-delete': {
        timer = setTimeout(() => setPromptPhase('deleting'), 300);
        break;
      }
      case 'deleting': {
        const targetLength = FULL_PROMPT.length - DELETE_PORTION.length;
        if (promptText.length > targetLength) {
          timer = setTimeout(() => {
            setPromptText(promptText.substring(0, promptText.length - 1));
          }, 15);
        } else {
          timer = setTimeout(() => setPromptPhase('pause-before-retype'), 200);
        }
        break;
      }
      case 'pause-before-retype': {
        timer = setTimeout(() => setPromptPhase('retyping'), 150);
        break;
      }
      case 'retyping': {
        const base = FULL_PROMPT.substring(0, FULL_PROMPT.length - DELETE_PORTION.length);
        const currentReplacement = promptText.substring(base.length);
        if (currentReplacement.length < REPLACEMENT.length) {
          timer = setTimeout(() => {
            setPromptText(base + REPLACEMENT.substring(0, currentReplacement.length + 1));
          }, 35);
        } else {
          timer = setTimeout(() => setPromptPhase('pause-before-submit'), 800);
        }
        break;
      }
      case 'pause-before-submit': {
        timer = setTimeout(() => setPromptPhase('submitting'), 80);
        break;
      }
      case 'submitting': {
        timer = setTimeout(() => {
          setStatusText('Computing');
          setPromptPhase('computing');
        }, 300);
        break;
      }
      case 'computing': {
        timer = setTimeout(() => {
          setStatusText('Vibing');
          setPromptPhase('vibing');
        }, 700);
        break;
      }
      case 'vibing': {
        timer = setTimeout(() => {
          streamIndexRef.current = 0;
          setPromptPhase('streaming');
        }, 600);
        break;
      }
      case 'streaming': {
        const idx = streamIndexRef.current;
        if (idx >= steps.length) {
          // All steps streamed
          timer = setTimeout(() => setPromptPhase('done'), 200);
        } else {
          const currentChars = streamedChars[idx];
          const targetBody = steps[idx].body;
          if (currentChars < targetBody.length) {
            // Stream 3-6 chars at a time for speed
            const chunkSize = Math.min(4, targetBody.length - currentChars);
            timer = setTimeout(() => {
              setStreamedChars(prev => {
                const next = [...prev];
                next[idx] = Math.min(currentChars + chunkSize, targetBody.length);
                return next;
              });
            }, 8);
          } else {
            // This step is done, move to next
            streamIndexRef.current = idx + 1;
            timer = setTimeout(() => {
              // Force re-render to pick up next index
              setStreamedChars(prev => [...prev]);
            }, 150);
          }
        }
        break;
      }
    }

    return () => clearTimeout(timer);
  }, [promptPhase, promptText, streamedChars]);

  // Set initial cursor position
  useEffect(() => {
    const pos = getNoteCenter(0);
    if (pos.x !== 0) setCursorPos(pos);
  }, [getNoteCenter]);

  // Canvas auto-cycle (only runs after prompt is done)
  useEffect(() => {
    if (!isInView || promptPhase !== 'done') {
      if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
      return;
    }

    startRef.current = Date.now();
    timerRef.current = setInterval(() => {
      const elapsed = Date.now() - startRef.current;
      const pct = Math.min(elapsed / CYCLE_DURATION, 1);
      setProgress(pct);

      if (!userClicked) {
        const timeLeft = CYCLE_DURATION - elapsed;
        const nextIndex = (activeIndex + 1) % steps.length;

        if (timeLeft <= CURSOR_TRAVEL_MS + 200 && timeLeft > 200) {
          const target = getNoteCenter(nextIndex);
          if (target.x !== 0) setCursorPos(target);
        }

        if (timeLeft <= 300 && timeLeft > 100) {
          setCursorClicking(true);
        } else {
          setCursorClicking(false);
        }
      }

      if (pct >= 1) {
        setActiveIndex((prev) => (prev + 1) % steps.length);
        setProgress(0);
        startRef.current = Date.now();

        if (!userClicked) {
          const newIndex = (activeIndex + 1) % steps.length;
          const pos = getNoteCenter(newIndex);
          if (pos.x !== 0) setCursorPos(pos);
        }
      }
    }, 50);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeIndex, userClicked, isInView, getNoteCenter, promptPhase]);

  const isProcessing = promptPhase === 'computing' || promptPhase === 'vibing';
  const hasSubmitted = promptPhase === 'submitting' || isProcessing;
  const showPromptInBoard = promptPhase !== 'idle' && promptPhase !== 'done';

  // Get the display text for each step body
  const getStepBody = (index: number) => {
    if (promptPhase === 'done') return steps[index].body;
    if (promptPhase === 'streaming') {
      const chars = streamedChars[index];
      if (chars > 0) {
        return steps[index].body.substring(0, chars) + (chars < steps[index].body.length ? '\u2588' : '');
      }
    }
    return '';
  };

  return (
    <section className="how-i-work" ref={sectionRef}>
      <div className="how-i-work__header">
        <SectionBadge icon={<ProcessIcon />} label="Process" />
        <h2 className="how-i-work__title">I Don't Just Design. I Document, Ship, and Prove It.</h2>
      </div>

      <div className="how-i-work__container">
        <div className="how-i-work__layout">
          {/* Left — FigJam-style canvas */}
          <div className="how-i-work__canvas">
            <div className="how-i-work__toolbar">
              <span className="how-i-work__toolbar-dot how-i-work__toolbar-dot--red" />
              <span className="how-i-work__toolbar-dot how-i-work__toolbar-dot--yellow" />
              <span className="how-i-work__toolbar-dot how-i-work__toolbar-dot--green" />
              <span className="how-i-work__toolbar-label">process-map.fig</span>
            </div>

            <div className="how-i-work__board" ref={boardRef}>
              <div className="how-i-work__board-dots" />

              {/* AI Prompt — inside the board */}
              {showPromptInBoard && (
                <div className={`how-i-work__board-prompt ${promptPhase === 'streaming' ? 'how-i-work__board-prompt--fading' : ''}`}>
                  {/* Status area (computing/vibing) */}
                  {isProcessing && (
                    <div className="how-i-work__ai-status">
                      <div className="how-i-work__ai-spinner" />
                      <span className="how-i-work__ai-status-text">{statusText}</span>
                    </div>
                  )}

                  {/* Prompt input */}
                  {!hasSubmitted && (
                    <div className="how-i-work__ai-prompt">
                      <div className="how-i-work__ai-input">
                        <span className="how-i-work__ai-prompt-text">{promptText}</span>
                        <span className="how-i-work__ai-prompt-cursor" />
                      </div>
                      <button
                        className={`how-i-work__ai-send ${promptPhase === 'pause-before-submit' ? 'how-i-work__ai-send--active' : ''}`}
                        aria-label="Send"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="22" y1="2" x2="11" y2="13" />
                          <polygon points="22 2 15 22 11 13 2 9 22 2" />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* SVG connectors — visible after content reveals */}
              <svg className={`how-i-work__connectors ${contentRevealed ? 'how-i-work__connectors--visible' : ''}`} viewBox="0 0 520 400" fill="none" preserveAspectRatio="xMidYMid meet">
                <path d="M145 75 C180 75, 195 45, 230 45"
                  className={`how-i-work__path ${activeIndex > 0 ? 'how-i-work__path--complete' : ''} ${activeIndex === 0 ? 'how-i-work__path--active' : ''}`}
                  strokeDasharray="5 4" />
                <polygon points="228,40 238,45 228,50" className={`how-i-work__arrow-head ${activeIndex > 0 ? 'how-i-work__arrow-head--complete' : ''}`} />

                <path d="M340 70 C370 70, 400 100, 400 135"
                  className={`how-i-work__path ${activeIndex > 1 ? 'how-i-work__path--complete' : ''} ${activeIndex === 1 ? 'how-i-work__path--active' : ''}`}
                  strokeDasharray="5 4" />
                <polygon points="395,133 400,143 405,133" className={`how-i-work__arrow-head ${activeIndex > 1 ? 'how-i-work__arrow-head--complete' : ''}`} />

                <path d="M345 185 C310 195, 260 210, 220 220"
                  className={`how-i-work__path ${activeIndex > 2 ? 'how-i-work__path--complete' : ''} ${activeIndex === 2 ? 'how-i-work__path--active' : ''}`}
                  strokeDasharray="5 4" />
                <polygon points="222,215 212,220 222,225" className={`how-i-work__arrow-head ${activeIndex > 2 ? 'how-i-work__arrow-head--complete' : ''}`} />

                <path d="M155 270 C140 300, 200 340, 280 325"
                  className={`how-i-work__path ${activeIndex > 3 ? 'how-i-work__path--complete' : ''} ${activeIndex === 3 ? 'how-i-work__path--active' : ''}`}
                  strokeDasharray="5 4" />
                <polygon points="278,320 288,325 278,330" className={`how-i-work__arrow-head ${activeIndex > 3 ? 'how-i-work__arrow-head--complete' : ''}`} />

                <path d="M390 310 C440 280, 480 180, 460 100 C445 40, 380 10, 145 40"
                  className="how-i-work__path how-i-work__path--loop" strokeDasharray="4 6" />
                <polygon points="147,35 137,40 147,45" className="how-i-work__arrow-head how-i-work__arrow-head--loop" />
              </svg>

              {/* Sticky notes — visible after content reveals */}
              {steps.map((step, i) => (
                <div
                  key={step.phase}
                  ref={(el) => { noteRefs.current[i] = el; }}
                  className={`how-i-work__note how-i-work__note--pos-${i + 1} ${i === activeIndex ? 'how-i-work__note--active' : ''} ${i < activeIndex ? 'how-i-work__note--complete' : ''} ${!contentRevealed ? 'how-i-work__note--hidden' : ''}`}
                  onClick={() => handleUserClick(i)}
                >
                  <div className="how-i-work__note-icon">{step.icon}</div>
                  <span className="how-i-work__note-label">{step.phase}</span>
                  <div className="how-i-work__note-tags">
                    {step.annotations.map((t) => <span key={t}>{t}</span>)}
                  </div>
                  {i === activeIndex && <div className="how-i-work__note-handles" />}
                </div>
              ))}

              {/* Decorative elements */}
              <div className={`how-i-work__deco how-i-work__deco--lightbulb ${!contentRevealed ? 'how-i-work__deco--hidden' : ''}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18h6" /><path d="M10 22h4" />
                  <path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" />
                </svg>
              </div>
              <div className={`how-i-work__deco how-i-work__deco--star ${!contentRevealed ? 'how-i-work__deco--hidden' : ''}`}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5z" />
                </svg>
              </div>
              <div className={`how-i-work__deco how-i-work__deco--grid ${!contentRevealed ? 'how-i-work__deco--hidden' : ''}`}>
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="0.8">
                  {[0,8,16,24].map(x => [0,8,16,24].map(y => (
                    <rect key={`${x}-${y}`} x={x+1} y={y+1} width="6" height="6" rx="1" />
                  )))}
                </svg>
              </div>
              <div className={`how-i-work__deco how-i-work__deco--user ${!contentRevealed ? 'how-i-work__deco--hidden' : ''}`}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                </svg>
              </div>

              {/* Animated cursor — hidden when user takes over */}
              {!userClicked && promptPhase === 'done' && (
                <div
                  className={`how-i-work__cursor ${cursorClicking ? 'how-i-work__cursor--clicking' : ''}`}
                  style={{
                    transform: `translate(${cursorPos.x}px, ${cursorPos.y}px)`,
                  }}
                >
                  <svg width="14" height="18" viewBox="0 0 14 18" fill="none">
                    <path d="M1 1L1 13L4.5 9.5L8 17L10.5 15.8L7 8.5L12 7.5L1 1Z" fill="currentColor" stroke="currentColor" strokeWidth="0.5" strokeLinejoin="round" />
                  </svg>
                  <span className="how-i-work__cursor-name">Ryan D.</span>
                  {cursorClicking && <span className="how-i-work__cursor-ripple" />}
                </div>
              )}

            </div>
          </div>

          {/* Right — tabbed steps */}
          <div className="how-i-work__steps">
            {steps.map((step, i) => (
              <button
                key={step.label}
                className={`how-i-work__step ${i === activeIndex ? 'how-i-work__step--active' : ''}`}
                onClick={() => handleUserClick(i)}
              >
                <div className="how-i-work__step-indicator">
                  <div
                    className="how-i-work__step-progress"
                    style={{ height: i === activeIndex ? `${progress * 100}%` : i < activeIndex ? '100%' : '0%' }}
                  />
                </div>
                <div className="how-i-work__step-content">
                  <h3 className="how-i-work__step-label">{step.label}</h3>
                  <div className={`how-i-work__step-body ${i === activeIndex ? 'how-i-work__step-body--visible' : ''}`}>
                    <span>{getStepBody(i)}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowIWork;
