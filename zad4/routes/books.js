const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books');

router.get('/book/list', booksController.list);
router.get('/book/add', (req, res) => res.render('add-book'));
router.post('/book/add', booksController.addBook);
router.post('/book/delete/:id', booksController.deleteBook);
router.get('/book/:id', booksController.getBookDetails);  // Nowa trasa

module.exports = router;
