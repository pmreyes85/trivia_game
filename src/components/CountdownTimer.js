import React, { useEffect, useRef, useState } from 'react';
import './CountdownTimer.css';

const RADIUS = 54;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

/**
 * Countdown ring. Starts automatically on mount.
 * Click: pause / resume, or restart once time is up.
 * `stopped` freezes it (e.g. while the answer is shown).
 * `toggleSignal`: bump this number to act like a click (used by the ↑ key).
 */
function CountdownTimer({ seconds, stopped = false, toggleSignal = 0 }) {
  const totalMs = seconds * 1000;
  const [remainingMs, setRemainingMs] = useState(totalMs);
  const [paused, setPaused] = useState(false);
  const endRef = useRef(Date.now() + totalMs);

  const running = !paused && !stopped && remainingMs > 0;

  useEffect(() => {
    if (!running) return undefined;
    endRef.current = Date.now() + remainingMs;
    const id = setInterval(() => {
      const left = Math.max(0, endRef.current - Date.now());
      setRemainingMs(left);
    }, 100);
    return () => clearInterval(id);
    // remainingMs intentionally read only when (re)starting
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running]);

  const handleClick = () => {
    if (stopped) return;
    if (remainingMs <= 0) {
      setRemainingMs(totalMs);
      setPaused(false);
    } else {
      setPaused((p) => !p);
    }
  };

  // Treat each change of toggleSignal (not the first render) as a click
  const lastSignal = useRef(toggleSignal);
  useEffect(() => {
    if (toggleSignal === lastSignal.current) return;
    lastSignal.current = toggleSignal;
    handleClick();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [toggleSignal]);

  const secsLeft = Math.ceil(remainingMs / 1000);
  const fraction = totalMs ? remainingMs / totalMs : 0;
  const timeUp = remainingMs <= 0;
  const urgency = timeUp ? 'up' : secsLeft <= 5 ? 'danger' : fraction <= 0.5 ? 'warn' : 'ok';

  const mm = Math.floor(secsLeft / 60);
  const ss = String(secsLeft % 60).padStart(2, '0');
  const label = seconds >= 60 ? `${mm}:${ss}` : String(secsLeft);

  return (
    <button
      type="button"
      className={`countdown ${urgency} ${paused ? 'paused' : ''}`}
      onClick={handleClick}
      title={timeUp ? 'Click to restart' : paused ? 'Click to resume' : 'Click to pause'}
    >
      <svg className="countdown-ring" viewBox="0 0 120 120" aria-hidden="true">
        <circle className="ring-bg" cx="60" cy="60" r={RADIUS} />
        <circle
          className="ring-fg"
          cx="60"
          cy="60"
          r={RADIUS}
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={CIRCUMFERENCE * (1 - fraction)}
        />
      </svg>
      <span className="countdown-center">
        {timeUp ? (
          <span className="countdown-up">TIME'S UP!</span>
        ) : (
          <span className="countdown-number num" key={secsLeft}>{label}</span>
        )}
      </span>
      <span className="countdown-hint">
        {timeUp ? 'click to restart' : paused ? 'paused · click to resume' : 'click to pause'}
      </span>
    </button>
  );
}

export default CountdownTimer;
