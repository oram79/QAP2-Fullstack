// In-memory data storage
let streaks = [];
let currentStreak = 0;
let currentQuestion = {};

const express = require('express');
const { getQuestion, isCorrectAnswer } = require('./utils/mathUtilities');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Rendering main page //
app.get('/', (req, res) => {
    res.render('index', {
      currentStreak,
      lastStreak: streaks.length > 0 ? streaks[streaks.length - 1] : null,
    });
  });
  
// Rendering The Quiz Page //
app.get('/quiz', (req, res) => {
    currentQuestion = getQuestion();
    res.render('quiz', { currentQuestion, currentStreak });
  });

// Rendering the gme over screen //
  app.get('/quiz-complete', (req, res) => {
    res.render('completion', { currentStreak });
  });

// Rendering the leaderboard page //
  app.get('/leaderboard', (req, res) => {
    const topStreaks = streaks
      .sort((a, b) => b.correctAnswers - a.correctAnswers)
      .slice(0, 10);
  
    res.render('leaderboards', { topStreaks });
  });
// Sending data for correct anwsers then displaying
  app.post('/quiz', (req, res) => {
    const userAnswer = parseFloat(req.body.answer);
    const isCorrect = userAnswer === currentQuestion.answer;
  
    if (isCorrect) {
      currentStreak++;
    } else {
      streaks.push({ correctAnswers: currentStreak, date: new Date() });
      currentStreak = 0;
    }
  
    res.redirect(isCorrect ? '/quiz' : '/quiz-complete');
  });

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});