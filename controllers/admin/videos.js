const connection = require('../../database/db');

exports.add = (req, res) => {
    if(true){
        const idEdition = req.body.editionEdition;
        const files = req.files;

        for(let i=0; i < files.length; i++) {
            let path = files[i].filename;
            connection.query('INSERT INTO videos SET ?', { id_edition: idEdition, path: path }, (error, results) => {
                if(error) {
                    console.log(error);
                    res.redirect('/page_error');
                }
                else {
                    res.redirect('/admin/home')
                }
            })
        }
    }
    else {
        res.redirect('/admin/login');
    }
}