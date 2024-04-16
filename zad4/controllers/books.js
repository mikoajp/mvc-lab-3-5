let books = [
    { id: 1, title: "Przykładowa książka", authorId: 1, publishingYear: 2021 }
];
let nextId = 2;

exports.list = (req, res) => {
    res.render('books', { books: books });
};

exports.addBook = (req, res) => {
    const { title, authorId, publishingYear } = req.body;
    books.push({ id: nextId++, title, authorId: Number(authorId), publishingYear: Number(publishingYear) });
    res.redirect('/book/list');
};

exports.deleteBook = (req, res) => {
    const id = parseInt(req.params.id);
    books = books.filter(book => book.id !== id);
    res.redirect('/book/list');
};

exports.getBookDetails = (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (book) {
        res.render('book', { book });
    } else {
        res.status(404).send('Book not found');
    }
};
