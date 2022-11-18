"use strict"
const connection = require('../database/db');

// See all orders
exports.orders = (req, res) => {
    if(true){
        req.session.loggedim = true;
        req.session.waitres = req.session.waitres;

        connection.query('SELECT * FROM orders WHERE name_waitres = ?', [req.session.waitres], (error, orders)=> {
            if(error){
                console.log(error);
                res.redirect('/page_error');
            }
            else {
                res.render('waitres/orders/all', { orders }); 
            }
        })
    }
    else {
        res.redirect('/admin/login');
    }
}
// View new order waitres
exports.home = (req, res)=> {
	
	if(true){
		connection.query('SELECT * FROM food', (error, food) => {
			if(error){
				console.log(error);
				res.redirect('/error_page');
			}
			else{
                connection.query('SELECT * FROM drink', (error,drink) => {
                    if(error){
                        console.log(error);
                        res.redirect('/error_page');
                    }
                    else {
                        connection.query('SELECT * FROM tables', (error, tables) => {
                            if(error) {
                                console.log(error);
                                res.redirect('/error_page');
                            }
                            else {
                                req.session.loggedim = true;
                                req.session.waitres = req.session.waitres;

                                res.render('waitres/orders/new', {
                                    food,
                                    drink,
                                    tables,
                                    waitres: req.session.waitres
                                });	
                            }
                        })
                    }
                })
			}
		})
	}
	else{
		res.redirect('/waitres/login');
	}
}
// Send one order
exports.send = (req, res) => {
    if(true){
        req.session.loggedim = true;
        req.session.waitres = req.session.waitres;

        const table = req.body.tableId;
        const nameWaitres = req.body.waitres;
        const arrDrinkId = req.body.drinkId;
        const arrDrinkName = req.body.drinkName;
        const arrDrinkPrice = req.body.drinkPrice;
        const arrDrinkQty = req.body.drinkQty;
        const arrFoodId = req.body.foodId;
        const arrFoodName = req.body.foodName;
        const arrFoodPrice = req.body.foodPrice;
        const arrFoodQty = req.body.foodQty;
        const details = req.body.orderDescription;

        // Fecha start
        const date = new Date();
	
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day  = date.getDate();
        let hour = date.getHours();
        let minute = date.getMinutes();
    
        month = (month < 10 ? "0" : "") + month;
        day = (day < 10 ? "0" : "") + day;
        hour = (hour < 10 ? "0" : "") + hour;
        minute = (minute < 10 ? "0" : "") + minute;
        const fecha = (`${day}/${month}/${year} ${hour}:${minute}`);
        // Fecha end

        if(1 < arrDrinkId.length) {
            for(let i = 1; i < arrDrinkId.length ; i++) {
                let cost = Number(arrDrinkQty[i]) * Number(arrDrinkPrice[i]);
                connection.query('INSERT INTO orders SET ?', {id_table: table, name_product: arrDrinkName[i], name_waitres: nameWaitres,
                qty: arrDrinkQty[i], cost: cost, details: details, time: fecha, status: 'creada' }, (error, results) => {
                    if(error) {
                        console.log(error);
                    }
                })
            }
        }

        if(1 < arrFoodId.length) {
            for(let i = 1; i < arrFoodId.length; i++) {
                let cost = Number(arrFoodQty[i]) * Number(arrFoodPrice[i]);
                connection.query('INSERT INTO orders SET ?', {id_table: table, name_product: arrFoodName[i], name_waitres: nameWaitres,
                qty: arrFoodQty[i], cost: cost, details: details, time: fecha, status: 'creada' }, (error, results) => {
                    if(error) {
                        console.log(error);
                    }
                })
            }
        }

        if(1 < arrDrinkId.length) {
            for(let i = 1; i < arrDrinkId.length; i++) {
                let cost = Number(arrDrinkQty[i]) * Number(arrDrinkPrice[i]);
                connection.query('INSERT INTO oldorders SET ?', {id_table: table, name_product: arrDrinkName[i], name_waitres: nameWaitres,
                qty: arrDrinkQty[i], cost: cost, details: details, time: fecha, status: 'creada' }, (error, results) => {
                    if(error) {
                        console.log(error);
                    }
                })
            }
        }

        if(1 < arrFoodId.length) {
            for(let i = 1; i < arrFoodId.length; i++) {
                let cost = Number(arrFoodQty[i]) * Number(arrFoodPrice[i]);
                connection.query('INSERT INTO oldorders SET ?', {id_table: table, name_product: arrFoodName[i], name_waitres: nameWaitres,
                qty: arrFoodQty[i], cost: cost, details: details, time: fecha, status: 'creada' }, (error, results) => {
                    if(error) {
                        console.log(error);
                    }
                })
            }
        }

        res.redirect('/waitres/order/new');
    }
    else {
        res.redirect('/waitres/login');
    }
}