const connection = require('../../database/db');

exports.home = (req, res) => {
    if(true){
        connection.query('SELECT * FROM edition', (error, editions) => {
            if(error) {
                console.log(error);
                res.redirect('/page_error');
            }
            else {
                res.render('admin/home', {
                    editions
                });
            }
        })
    }
    else {
        res.redirect('/admin/login');
    }
}