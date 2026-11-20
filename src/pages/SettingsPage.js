import React, { useState } from 'react';
import {
  getTeamName,
  setTeamName,
  getTimerSeconds,
  setTimerSeconds,
  resetAllData,
  MIN_TIMER_SECONDS,
  MAX_TIMER_SECONDS,
} from '../utils/storage';
import './SettingsPage.css';

const clampSeconds = (n) => Math.min(MAX_TIMER_SECONDS, Math.max(MIN_TIMER_SECONDS, n));

function SettingsPage({ onDataChange }) {
  const [team1Name, setTeam1NameState] = useState(getTeamName(1));
  const [team2Name, setTeam2NameState] = useState(getTeamName(2));
  // Kept as a string so the field can be cleared while typing
  const [seconds, setSeconds] = useState(String(getTimerSeconds()));
  const [resetDone, setResetDone] = useState(false);

  const handleTeamName = (num, setter) => (e) => {
    const name = e.target.value;
    setter(name);
    setTeamName(num, name);
    onDataChange();
  };

  const saveSeconds = (n) => {
    const clamped = clampSeconds(n);
    setSeconds(String(clamped));
    setTimerSeconds(clamped);
  };

  const handleSecondsChange = (e) => {
    const raw = e.target.value.replace(/[^0-9]/g, '');
    setSeconds(raw);
    const n = parseInt(raw, 10);
    if (Number.isFinite(n) && n >= MIN_TIMER_SECONDS && n <= MAX_TIMER_SECONDS) {
      setTimerSeconds(n);
    }
  };

  const handleSecondsBlur = () => {
    const n = parseInt(seconds, 10);
    saveSeconds(Number.isFinite(n) ? n : getTimerSeconds());
  };

  const stepSeconds = (delta) => {
    const n = parseInt(seconds, 10);
    saveSeconds((Number.isFinite(n) ? n : getTimerSeconds()) + delta);
  };

  const handleReset = () => {
    if (window.confirm('Reset all scores and answered questions? Team names and the timer will be kept.')) {
      resetAllData();
      onDataChange();
      setResetDone(true);
      setTimeout(() => setResetDone(false), 2500);
    }
  };

  return (
    <div className="settings-page">
      <h1 className="page-title">Settings</h1>

      <div className="settings-grid">
        <section className="settings-card team-a" style={{ '--i': 0 }}>
          <label className="settings-label" htmlFor="team1-name">Team Red name</label>
          <input
            id="team1-name"
            type="text"
            className="settings-input"
            value={team1Name}
            onChange={handleTeamName(1, setTeam1NameState)}
            placeholder="Team Red"
            maxLength={30}
          />
        </section>

        <section className="settings-card team-b" style={{ '--i': 1 }}>
          <label className="settings-label" htmlFor="team2-name">Team Blue name</label>
          <input
            id="team2-name"
            type="text"
            className="settings-input"
            value={team2Name}
            onChange={handleTeamName(2, setTeam2NameState)}
            placeholder="Team Blue"
            maxLength={30}
          />
        </section>

        <section className="settings-card timer" style={{ '--i': 2 }}>
          <label className="settings-label" htmlFor="timer-seconds">Timer (seconds)</label>
          <div className="timer-stepper">
            <button className="step-button" onClick={() => stepSeconds(-5)} aria-label="Decrease by 5 seconds">−5</button>
            <input
              id="timer-seconds"
              type="text"
              inputMode="numeric"
              className="settings-input timer-input num"
              value={seconds}
              onChange={handleSecondsChange}
              onBlur={handleSecondsBlur}
              onKeyDown={(e) => e.key === 'Enter' && e.currentTarget.blur()}
            />
            <button className="step-button" onClick={() => stepSeconds(5)} aria-label="Increase by 5 seconds">+5</button>
          </div>
          <p className="settings-hint">Between {MIN_TIMER_SECONDS} and {MAX_TIMER_SECONDS} seconds</p>
        </section>

        <section className="settings-card reset" style={{ '--i': 3 }}>
          <span className="settings-label">Reset game</span>
          <button className="reset-button" onClick={handleReset}>
            {resetDone ? 'Done ✓' : 'Reset'}
          </button>
          <p className="settings-hint">Clears scores, answered questions and who won each question. Settings are kept.</p>
        </section>
      </div>

      <p className="settings-footer">Changes save automatically.</p>
    </div>
  );
}

export default SettingsPage;
