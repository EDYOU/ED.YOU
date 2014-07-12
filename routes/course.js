
/*
 * GET courses page.
 */

exports.courses = function (req, res) {
    res.render('course', { title: 'COURSE.YOU' });
};