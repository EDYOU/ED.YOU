
/*
 * GET book page.
 */

exports.books = function (req, res) {
    res.render('book', { title: 'BOOK.YOU' });
};