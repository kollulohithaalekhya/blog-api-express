const sequelize = require('../config/database');
const Author = require('./Author');
const Post = require('./Post');

// One Author → Many Posts
Author.hasMany(Post, {
  foreignKey: 'author_id',
  onDelete: 'CASCADE'
});

// Each Post belongs to one Author
Post.belongsTo(Author, {
  foreignKey: 'author_id'
});

module.exports = {
  sequelize,
  Author,
  Post
};
