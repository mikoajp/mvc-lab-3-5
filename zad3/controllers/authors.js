const authors = [
    { id: 1, name: "Jan Kowalski" }
];

exports.list = (req, res) => {
    res.render('authors', { authors: authors });
};
