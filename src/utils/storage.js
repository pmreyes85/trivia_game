// LocalStorage utility functions for persistence

const STORAGE_KEYS = {
  TEAM1_NAME: 'trivia_team1_name',
  TEAM2_NAME: 'trivia_team2_name',
  TEAM1_SCORE: 'trivia_team1_score',
  TEAM2_SCORE: 'trivia_team2_score',
  ANSWERED_STATE: 'trivia_answered_state'
};

// Team names
export const getTeamName = (teamNumber) => {
  const key = teamNumber === 1 ? STORAGE_KEYS.TEAM1_NAME : STORAGE_KEYS.TEAM2_NAME;
  return localStorage.getItem(key) || `Team ${teamNumber === 1 ? 'Alpha' : 'Beta'}`;
};

export const setTeamName = (teamNumber, name) => {
  const key = teamNumber === 1 ? STORAGE_KEYS.TEAM1_NAME : STORAGE_KEYS.TEAM2_NAME;
  localStorage.setItem(key, name);
};

// Team scores
export const getTeamScore = (teamNumber) => {
  const key = teamNumber === 1 ? STORAGE_KEYS.TEAM1_SCORE : STORAGE_KEYS.TEAM2_SCORE;
  const score = localStorage.getItem(key);
  return score ? parseInt(score, 10) : 0;
};

export const setTeamScore = (teamNumber, score) => {
  const key = teamNumber === 1 ? STORAGE_KEYS.TEAM1_SCORE : STORAGE_KEYS.TEAM2_SCORE;
  localStorage.setItem(key, score.toString());
};

// Answered state
export const getAnsweredState = () => {
  const state = localStorage.getItem(STORAGE_KEYS.ANSWERED_STATE);
  return state ? JSON.parse(state) : {};
};

export const setAnsweredState = (state) => {
  localStorage.setItem(STORAGE_KEYS.ANSWERED_STATE, JSON.stringify(state));
};

export const isQuestionAnswered = (categoryId, questionId) => {
  const state = getAnsweredState();
  return state[categoryId]?.[questionId] || false;
};

export const markQuestionAnswered = (categoryId, questionId, answered) => {
  const state = getAnsweredState();
  if (!state[categoryId]) {
    state[categoryId] = {};
  }
  state[categoryId][questionId] = answered;
  setAnsweredState(state);
};

// Reset all data
export const resetAllData = () => {
  setTeamScore(1, 0);
  setTeamScore(2, 0);
  setAnsweredState({});
};
