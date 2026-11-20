import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import CategoriesPage from './pages/CategoriesPage';
import QuestionPage from './pages/QuestionPage';
import SettingsPage from './pages/SettingsPage';
import { getTeamName, getTeamScore, setTeamScore } from './utils/storage';
import './App.css';

// The app is served under the "homepage" path (e.g. /trivia_game) locally and on
// GitHub Pages. Use it as the router base so the base URL opens Categories.
// Fall back to "/" when the page was opened without that prefix.
const PUBLIC_PATH = process.env.PUBLIC_URL || '';
const ROUTER_BASENAME =
  PUBLIC_PATH && window.location.pathname.startsWith(PUBLIC_PATH) ? PUBLIC_PATH : '/';

function AnimatedRoutes({ onDataChange, onScoreChange, teamNames }) {
  const location = useLocation();
  return (
    // Settings opens without the fade-in
    <div
      className={`page-transition ${location.pathname === '/settings' ? 'no-anim' : ''}`}
      key={location.pathname}
    >
      <Routes location={location}>
        <Route path="/" element={<CategoriesPage />} />
        <Route path="/category/:categoryId" element={<Navigate to="/" replace />} />
        <Route
          path="/category/:categoryId/question/:questionId"
          element={<QuestionPage teamNames={teamNames} onScoreChange={onScoreChange} />}
        />
        <Route path="/settings" element={<SettingsPage onDataChange={onDataChange} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
}

function App() {
  // Read saved names and scores up front, so the scoreboard doesn't
  // "change" (and flash) right after the page loads
  const [team1Name, setTeam1Name] = useState(() => getTeamName(1));
  const [team2Name, setTeam2Name] = useState(() => getTeamName(2));
  const [team1Score, setTeam1Score] = useState(() => getTeamScore(1));
  const [team2Score, setTeam2Score] = useState(() => getTeamScore(2));

  const loadScores = () => {
    setTeam1Name(getTeamName(1));
    setTeam2Name(getTeamName(2));
    setTeam1Score(getTeamScore(1));
    setTeam2Score(getTeamScore(2));
  };

  // delta is +1 or -1; scores never go below 0
  const handleScoreChange = (teamNumber, delta) => {
    const setter = teamNumber === 1 ? setTeam1Score : setTeam2Score;
    setter((prev) => {
      const next = Math.max(0, prev + delta);
      setTeamScore(teamNumber, next);
      return next;
    });
  };

  const handleDataChange = () => {
    // Reload names and scores from localStorage when Settings change them
    loadScores();
  };

  return (
    <Router basename={ROUTER_BASENAME}>
      <div className="app">
        <Navbar
          team1Name={team1Name}
          team2Name={team2Name}
          team1Score={team1Score}
          team2Score={team2Score}
          onScoreChange={handleScoreChange}
        />
        <main className="main-content">
          <AnimatedRoutes
            onDataChange={handleDataChange}
            onScoreChange={handleScoreChange}
            teamNames={{ 1: team1Name, 2: team2Name }}
          />
        </main>
      </div>
    </Router>
  );
}

export default App;
