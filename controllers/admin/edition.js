const connection = require('../../database/db');

exports.add = (req, res) => {
    if(true){
        const name = req.body.editionName;
        const date = req.body.editionDate;

        const dateDB = `${date.split('-')[2]}-${date.split('-')[1]}-${date.split('-')[0]}`;

        connection.query('INSERT INTO edition SET ?', { name: name, date: dateDB }, (error, results) => {
            if(error) {
                console.log(error);
                res.redirect('/page_error');
            }
            else {
                res.redirect('/admin/home')
            }
        })
    }
    else {
        res.redirect('/admin/login');
    }
}