import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar({ team1Name, team2Name, team1Score, team2Score, onScoreClick }) {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link to="/" className="nav-link">Categories</Link>
        <Link to="/scoreboard" className="nav-link">Score</Link>
      </div>
      <div className="navbar-score">
        <span 
          className="team-score clickable" 
          onClick={() => onScoreClick(1)}
          title="Click to increment score"
        >
          {team1Name} {team1Score}
        </span>
        <span className="score-separator">-</span>
        <span 
          className="team-score clickable" 
          onClick={() => onScoreClick(2)}
          title="Click to increment score"
        >
          {team2Score} {team2Name}
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
