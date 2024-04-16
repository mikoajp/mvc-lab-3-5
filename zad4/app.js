const express = require('express');
const app = express();
const homeRouter = require('./routes/home');
const booksRouter = require('./routes/books');
const authorsRouter = require('./routes/authors');

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));

app.use('/', homeRouter);
app.use('/', booksRouter);
app.use('/', authorsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
