const express = require('express');
const authorRoutes = require('./routes/author.routes');
const postRoutes = require('./routes/post.routes');

const app = express();

app.use(express.json());

app.use('/authors', authorRoutes);
app.use('/posts', postRoutes);

// nested route
const postController = require('./controllers/post.controller');
app.get('/authors/:id/posts', postController.getPostsByAuthor);

app.get('/', (req, res) => {
  res.json({ message: 'Blog API is running' });
});

module.exports = app;
