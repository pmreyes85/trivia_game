// LocalStorage utility functions for persistence

const STORAGE_KEYS = {
  TEAM1_NAME: 'trivia_team1_name',
  TEAM2_NAME: 'trivia_team2_name',
  TEAM1_SCORE: 'trivia_team1_score',
  TEAM2_SCORE: 'trivia_team2_score',
  ANSWERED_STATE: 'trivia_answered_state',
  TIMER_SECONDS: 'trivia_timer_seconds',
  AWARDS: 'trivia_awards'
};

export const DEFAULT_TIMER_SECONDS = 30;
export const MIN_TIMER_SECONDS = 5;
export const MAX_TIMER_SECONDS = 600;

// Timer setting (seconds per question)
export const getTimerSeconds = () => {
  const value = parseInt(localStorage.getItem(STORAGE_KEYS.TIMER_SECONDS), 10);
  return Number.isFinite(value) && value > 0 ? value : DEFAULT_TIMER_SECONDS;
};

export const setTimerSeconds = (seconds) => {
  localStorage.setItem(STORAGE_KEYS.TIMER_SECONDS, String(seconds));
};

// Team names
export const getTeamName = (teamNumber) => {
  const key = teamNumber === 1 ? STORAGE_KEYS.TEAM1_NAME : STORAGE_KEYS.TEAM2_NAME;
  return localStorage.getItem(key) || `Team ${teamNumber === 1 ? 'Red' : 'Blue'}`;
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

// Awards: which team got each question right.
// Stored as { [categoryId]: { [questionId]: 1 | 2 | 0 } } where 0 = nobody.
const getAwards = () => {
  const raw = localStorage.getItem(STORAGE_KEYS.AWARDS);
  return raw ? JSON.parse(raw) : {};
};

export const getAward = (categoryId, questionId) => {
  const value = getAwards()[categoryId]?.[questionId];
  return value === undefined ? null : value;
};

// team: 1, 2, 0 (nobody) or null to clear. Also keeps the answered flag in sync.
export const setAward = (categoryId, questionId, team) => {
  const awards = getAwards();
  if (!awards[categoryId]) {
    awards[categoryId] = {};
  }
  if (team === null) {
    delete awards[categoryId][questionId];
  } else {
    awards[categoryId][questionId] = team;
  }
  localStorage.setItem(STORAGE_KEYS.AWARDS, JSON.stringify(awards));
  markQuestionAnswered(categoryId, questionId, team !== null);
};

// Reset game progress (scores, answered questions, awards). Settings are kept.
export const resetAllData = () => {
  setTeamScore(1, 0);
  setTeamScore(2, 0);
  setAnsweredState({});
  localStorage.removeItem(STORAGE_KEYS.AWARDS);
};
