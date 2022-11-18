"use strict"
const connection = require('../database/db');
const bcryptjs = require('bcryptjs');

// Register new waitres
exports.registerSend = async (req, res)=> {
	
	const user = req.body.user.toLowerCase();
	const name = req.body.name;
	const password = req.body.password;
	const codigo = req.body.codigo;

	let passwordHaash = await bcryptjs.hash(password, 8);

	if (codigo == '22'){
		connection.query('INSERT INTO admin SET ?', { user: user, name: name, password: passwordHaash }, async(error, results)=>{
		 	if(error){
		 		console.log(error);
		 		res.redirect('/page_error');
		 	}
		 	else{
		 		res.redirect('/admin/login');
		 	}
		})
	}
	else {
		res.redirect('/admin/register');
	}
}
// Auth Send Data
exports.auth = async (req, res)=> {
	
	const user = req.body.user.toLowerCase();
    const code = req.body.code;
    const password = req.body.password;

	let passwordHaash = await bcryptjs.hash(password, 8);

    if(code == 22) {
        if (code && password){
            connection.query('SELECT * FROM admin WHERE user =?', [user], async (error, results) => {
                if (Object.keys(results).length == 0 || !(await bcryptjs.compare(password, results[0].password))){
                    res.redirect('/admin');
                }
                else {
                    req.session.loggedim = true;

                    res.redirect('/admin/orders/all');
                }
            })
        }
        else {
            res.redirect('/admin/login');
        }
    }
    else {
        res.redirect('/admin/login')
    }
}