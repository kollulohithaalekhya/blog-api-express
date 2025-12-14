const { Author } = require('../models');

// Create Author
exports.createAuthor = async (req, res) => {
  try {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ message: 'Name and email are required' });
    }

    const author = await Author.create({ name, email });
    res.status(201).json(author);
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(400).json({ message: 'Email already exists' });
    }
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get all authors
exports.getAllAuthors = async (req, res) => {
  try {
    const authors = await Author.findAll();
    res.json(authors);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get author by ID
exports.getAuthorById = async (req, res) => {
  try {
    const author = await Author.findByPk(req.params.id);

    if (!author) {
      return res.status(404).json({ message: 'Author not found' });
    }

    res.json(author);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Update author
exports.updateAuthor = async (req, res) => {
  try {
    const author = await Author.findByPk(req.params.id);

    if (!author) {
      return res.status(404).json({ message: 'Author not found' });
    }

    await author.update(req.body);
    res.json(author);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Delete author
exports.deleteAuthor = async (req, res) => {
  try {
    const author = await Author.findByPk(req.params.id);

    if (!author) {
      return res.status(404).json({ message: 'Author not found' });
    }

    await author.destroy();
    res.json({ message: 'Author deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
