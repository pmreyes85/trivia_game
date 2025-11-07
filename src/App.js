import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CategoriesPage from './pages/CategoriesPage';
import QuestionsPage from './pages/QuestionsPage';
import QuestionPage from './pages/QuestionPage';
import ScoreBoardPage from './pages/ScoreBoardPage';
import { getTeamName, getTeamScore, setTeamScore } from './utils/storage';
import './App.css';

function App() {
  const [team1Name, setTeam1Name] = useState('Team A');
  const [team2Name, setTeam2Name] = useState('Team B');
  const [team1Score, setTeam1Score] = useState(0);
  const [team2Score, setTeam2Score] = useState(0);

  // Load initial data from localStorage
  useEffect(() => {
    loadScores();
  }, []);

  const loadScores = () => {
    setTeam1Name(getTeamName(1));
    setTeam2Name(getTeamName(2));
    setTeam1Score(getTeamScore(1));
    setTeam2Score(getTeamScore(2));
  };

  const handleScoreClick = (teamNumber) => {
    if (teamNumber === 1) {
      const newScore = team1Score + 1;
      setTeam1Score(newScore);
      setTeamScore(1, newScore);
    } else {
      const newScore = team2Score + 1;
      setTeam2Score(newScore);
      setTeamScore(2, newScore);
    }
  };

  const handleScoreUpdate = () => {
    // Reload scores from localStorage when ScoreBoard updates
    loadScores();
  };

  return (
    <Router>
      <div className="app">
        <Navbar
          team1Name={team1Name}
          team2Name={team2Name}
          team1Score={team1Score}
          team2Score={team2Score}
          onScoreClick={handleScoreClick}
        />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<CategoriesPage />} />
            <Route path="/category/:categoryId" element={<QuestionsPage />} />
            <Route path="/category/:categoryId/question/:questionId" element={<QuestionPage />} />
            <Route path="/scoreboard" element={<ScoreBoardPage onScoreUpdate={handleScoreUpdate} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
