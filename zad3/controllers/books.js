let books = [
    { id: 1, title: "Przykładowa książka", authorId: 1, publishingYear: 2021 }
];
let nextId = 2;

exports.list = (req, res) => {
    res.render('books', { books: books });
};

exports.addBook = (req, res) => {
    const { title, authorId, publishingYear } = req.body;
    books.push({ id: nextId++, title, authorId, publishingYear });
    res.redirect('/book/list');
};

exports.deleteBook = (req, res) => {
    const { id } = req.params;
    books = books.filter(book => book.id !== parseInt(id));
    res.redirect('/book/list');
};
