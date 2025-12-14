const express = require('express');
const authorRoutes = require('./routes/author.routes');

const app = express();

app.use(express.json());

app.use('/authors', authorRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Blog API is running' });
});

module.exports = app;
