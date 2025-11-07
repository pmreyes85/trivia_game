import React, { useState, useEffect } from 'react';
import { getTeamName, getTeamScore, setTeamName, setTeamScore, resetAllData } from '../utils/storage';
import './ScoreBoardPage.css';

function ScoreBoardPage({ onScoreUpdate }) {
  const [team1Name, setTeam1NameState] = useState('');
  const [team2Name, setTeam2NameState] = useState('');
  const [team1Score, setTeam1ScoreState] = useState(0);
  const [team2Score, setTeam2ScoreState] = useState(0);

  useEffect(() => {
    // Load data from localStorage
    setTeam1NameState(getTeamName(1));
    setTeam2NameState(getTeamName(2));
    setTeam1ScoreState(getTeamScore(1));
    setTeam2ScoreState(getTeamScore(2));
  }, []);

  const handleTeam1NameChange = (e) => {
    const newName = e.target.value;
    setTeam1NameState(newName);
    setTeamName(1, newName);
    onScoreUpdate();
  };

  const handleTeam2NameChange = (e) => {
    const newName = e.target.value;
    setTeam2NameState(newName);
    setTeamName(2, newName);
    onScoreUpdate();
  };

  const handleTeam1ScoreChange = (delta) => {
    const newScore = Math.max(0, team1Score + delta);
    setTeam1ScoreState(newScore);
    setTeamScore(1, newScore);
    onScoreUpdate();
  };

  const handleTeam2ScoreChange = (delta) => {
    const newScore = Math.max(0, team2Score + delta);
    setTeam2ScoreState(newScore);
    setTeamScore(2, newScore);
    onScoreUpdate();
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all scores and answered questions?')) {
      resetAllData();
      setTeam1ScoreState(0);
      setTeam2ScoreState(0);
      onScoreUpdate();
    }
  };

  return (
    <div className="scoreboard-page">
      <h1 className="page-title">Score Board</h1>
      
      <div className="scoreboard-content">
        <div className="team-section">
          <div className="team-header">
            <input
              type="text"
              className="team-name-input"
              value={team1Name}
              onChange={handleTeam1NameChange}
              placeholder="Team 1 Name"
            />
          </div>
          <div className="score-display">
            {team1Score}
          </div>
          <div className="score-controls">
            <button 
              className="score-button increment"
              onClick={() => handleTeam1ScoreChange(1)}
            >
              +
            </button>
            <button 
              className="score-button decrement"
              onClick={() => handleTeam1ScoreChange(-1)}
            >
              −
            </button>
          </div>
        </div>

        <div className="vs-divider">VS</div>

        <div className="team-section">
          <div className="team-header">
            <input
              type="text"
              className="team-name-input"
              value={team2Name}
              onChange={handleTeam2NameChange}
              placeholder="Team 2 Name"
            />
          </div>
          <div className="score-display">
            {team2Score}
          </div>
          <div className="score-controls">
            <button 
              className="score-button increment"
              onClick={() => handleTeam2ScoreChange(1)}
            >
              +
            </button>
            <button 
              className="score-button decrement"
              onClick={() => handleTeam2ScoreChange(-1)}
            >
              −
            </button>
          </div>
        </div>
      </div>

      <button className="reset-button" onClick={handleReset}>
        Reset Game
      </button>
    </div>
  );
}

export default ScoreBoardPage;
