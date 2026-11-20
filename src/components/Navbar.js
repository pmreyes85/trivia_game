import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function TeamScore({ team, name, score, onScoreChange }) {
  // Flash the pill whenever this team's score goes up (e.g. a question is awarded).
  // The class alternates between flash-a and flash-b so a new gain restarts the animation.
  const [flashCount, setFlashCount] = useState(0);
  const prevScore = useRef(score);
  useEffect(() => {
    if (score > prevScore.current) setFlashCount((n) => n + 1);
    prevScore.current = score;
  }, [score]);
  const flashClass = flashCount === 0 ? '' : flashCount % 2 ? 'flash-a' : 'flash-b';

  return (
    <div className={`team-score team-${team} ${flashClass}`}>
      <span className="team-label" title={name}>{name}</span>
      <button
        className="score-step"
        onClick={() => onScoreChange(team, -1)}
        disabled={score <= 0}
        aria-label={`Subtract a point from ${name}`}
        title="Subtract a point"
      >
        −
      </button>
      <span className="team-points num">{score}</span>
      <button
        className="score-step"
        onClick={() => onScoreChange(team, 1)}
        aria-label={`Add a point to ${name}`}
        title="Add a point"
      >
        +
      </button>
    </div>
  );
}

function Navbar({ team1Name, team2Name, team1Score, team2Score, onScoreChange }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Trivia Party</div>

      <div className="navbar-links">
        <NavLink to="/" end className="nav-link">Categories</NavLink>
        <NavLink to="/settings" className="nav-link">Settings</NavLink>
      </div>

      <div className="navbar-score">
        <TeamScore team={1} name={team1Name} score={team1Score} onScoreChange={onScoreChange} />
        <span className="score-separator">vs</span>
        <TeamScore team={2} name={team2Name} score={team2Score} onScoreChange={onScoreChange} />
      </div>
    </nav>
  );
}

export default Navbar;
