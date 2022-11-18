const express = require ('express');
const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

const dotenv = require('dotenv');
dotenv.config({path: './env/.env'});

app.use('/resources', express.static('public'));
app.use('/resources', express.static(__dirname + '/public'));
app.use('/fileUpload', express.static('uploads'));
app.use('/fileUpload', express.static(__dirname + '/uploads'));

app.set('view engine', 'ejs');

const session = require('express-session');
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));

app.use('/', require('./router'));

app.set('port', process.env.PORT || 3000)
	
const robots = require('express-robots-txt');
app.use(robots(__dirname + '/robots.txt'));

// app.use((req, res, next) => {
// 	res.status(404).render('404');
// })

// app.use((error, req, res, next) => {
// 	if (error) {
// 		res.render('error');
// 	}
// })

app.listen (app.get('port'), (req, res)=>{
	console.log('server iniciado');
});