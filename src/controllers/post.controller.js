const { Post, Author } = require('../models');

// CREATE POST
exports.createPost = async (req, res) => {
  try {
    const { title, content, author_id } = req.body;

    if (!title || !content || !author_id) {
      return res.status(400).json({ message: 'title, content and author_id are required' });
    }

    // check author exists
    const author = await Author.findByPk(author_id);
    if (!author) {
      return res.status(400).json({ message: 'Author does not exist' });
    }

    const post = await Post.create({ title, content, author_id });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// GET ALL POSTS (with author info)
exports.getAllPosts = async (req, res) => {
  try {
    const { author_id } = req.query;

    const whereCondition = author_id ? { author_id } : {};

    const posts = await Post.findAll({
      where: whereCondition,
      include: {
        model: Author,
        attributes: ['id', 'name', 'email']
      }
    });

    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// GET POST BY ID
exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id, {
      include: {
        model: Author,
        attributes: ['id', 'name', 'email']
      }
    });

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.json(post);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// UPDATE POST
exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    await post.update(req.body);
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// DELETE POST
exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id);

    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }

    await post.destroy();
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// GET POSTS BY AUTHOR (NESTED)
exports.getPostsByAuthor = async (req, res) => {
  try {
    const author = await Author.findByPk(req.params.id);

    if (!author) {
      return res.status(404).json({ message: 'Author not found' });
    }

    const posts = await Post.findAll({
      where: { author_id: req.params.id }
    });

    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
