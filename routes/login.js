
/*
 * GET login page.
 */

exports.home = function (req, res) {
    res.render('login', { title: 'ED.YOU' });
};