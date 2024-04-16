const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books');

// Lista książek
router.get('/book/list', booksController.list);

// Formularz dodawania książek
router.get('/book/add', (req, res) => {
    res.render('add-book');
});


router.post('/book/add', booksController.addBook);

router.post('/book/delete/:id', booksController.deleteBook);

module.exports = router;
