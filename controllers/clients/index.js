"use strict"
const connection = require('../../database/db');

exports.index = (req, res) => {
    connection.query('SELECT * FROM food', (error, foods) => {
        if(error){
            console.log(error);
            res.redirect('/page_error');
        }
        else {
            connection.query('SELECT * FROM drink', (error, drinks) => {
                if(error){
                    console.log(error);
                    res.redirect('/page_error');
                }
                else {
                    connection.query('SELECT * FROM images', (error, images) => {
                        if(error){
                            console.log(error);
                            res.redirect('/page_error');
                        }
                        else {
                            res.render('clients/index', {
                                foods,
                                drinks,
                                images
                            })
                        }
                    });
                }
            });
        }
    });
}
