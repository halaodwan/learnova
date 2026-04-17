const express = require('express');

const app = express();

app.use(express.json());

// Import routes

const userRoutes = require('./Routes/userRoutes');

const studyMaterialRoutes = require('./Routes/studyMaterialRoutes');

const contentRoutes = require('./Routes/contentRoutes');

const flashcardRoutes = require('./Routes/flashcardRoutes');

const examRoutes = require('./Routes/examRoutes');

const questionRoutes = require('./Routes/questionRoutes');

const optionRoutes = require('./Routes/optionRoutes');

const answerRoutes = require('./Routes/answerRoutes');

const resultRoutes = require('./Routes/resultRoutes');

const taskRoutes = require('./Routes/taskRoutes');

const studySessionRoutes = require('./Routes/studySessionRoutes');

// Use routes

app.use('/users', userRoutes);

app.use('/study-materials', studyMaterialRoutes);

app.use('/contents', contentRoutes);

app.use('/flashcards', flashcardRoutes);

app.use('/exams', examRoutes);

app.use('/questions', questionRoutes);

app.use('/options', optionRoutes);

app.use('/answers', answerRoutes);

app.use('/results', resultRoutes);

app.use('/tasks', taskRoutes);

app.use('/study-sessions', studySessionRoutes);

// Test route

app.get('/', (req, res) => {

  res.send('Backend is running');

});

// Start server

const PORT = 3000;

app.listen(PORT, () => {

  console.log(`Server is running on port ${PORT}`);

});