# Trivia Party Web App

A lightweight browser-based trivia game application for hosting in-person trivia games between two teams. Built with React and optimized for large display projection.

## Features

- **Persistent Scoreboard**: Team names and scores persist across page reloads using localStorage
- **Interactive Navbar**: Click team scores in the navbar to quickly increment points
- **Visual Progress Tracking**: Answered questions are visually marked with different colors
- **Multiple Categories**: 6 trivia categories with 10 questions each
- **Show/Hide Answers**: Toggle answer visibility for each question
- **Reset Functionality**: Reset all scores and answered states with one button
- **Projection-Friendly**: Large text and buttons optimized for display on projectors

## Tech Stack

- **React 18** - Modern React with functional components and hooks
- **React Router 6** - Client-side routing
- **CSS3** - Custom styling optimized for projection displays
- **localStorage** - Persistent data storage

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone or download this repository

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `build` folder, ready to deploy to any static hosting service.

## Usage

### Navigation Flow

1. **Categories Page** (Home) - Select a trivia category
2. **Questions Page** - Choose a question number (1-10)
3. **Question Page** - View question, reveal answer, mark as answered
4. **Score Board Page** - Manage team names and scores

### Scoring

- Click team scores in the navbar to increment by 1
- Use the Score Board page for full score management (increment/decrement)
- All changes persist automatically

### Marking Questions

- Toggle "Mark as Answered" on the Question Page
- Answered questions appear in a different color on the Questions Page
- Answered states persist across page reloads

### Resetting the Game

- Go to Score Board page
- Click "Reset Game" button
- Confirms before resetting all scores and answered states

## Customization

### Adding Questions

Edit `src/data/triviaData.js` to add or modify:
- Categories (with custom colors)
- Questions and answers
- Optional question images

### Styling

Modify the CSS files in `src/components/` and `src/pages/` to customize:
- Colors and themes
- Font sizes
- Button styles
- Layout spacing

## Project Structure

```
trivia_game/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   └── Navbar.css
│   ├── pages/
│   │   ├── CategoriesPage.js
│   │   ├── CategoriesPage.css
│   │   ├── QuestionsPage.js
│   │   ├── QuestionsPage.css
│   │   ├── QuestionPage.js
│   │   ├── QuestionPage.css
│   │   ├── ScoreBoardPage.js
│   │   └── ScoreBoardPage.css
│   ├── data/
│   │   └── triviaData.js
│   ├── utils/
│   │   └── storage.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── PRD.md
└── README.md
```

## Browser Support

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## License

This project is open source and available for personal and commercial use.

## Credits

Created by Pocholo Reyes
Version 1.0
