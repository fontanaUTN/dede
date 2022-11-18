const express = require ('express');
const uploadFile = require('./controllers/admin/multer');

const router = express.Router();

router.get('/', (req, res) => { res.render('clients/index'); });
router.get('/gallery', (req, res) => { res.render('clients/gallery'); });
router.get('/ticket', (req, res) => { res.render('clients/ticket'); });

router.get('/admin/login', (req, res) => { res.render('admin/login'); });
router.get('/admin/register', (req, res) => { res.render('admin/register'); });

const admin = require('./controllers/admin/login');
router.post('/admin/register/send', admin.registerSend );
router.post('/admin/login/auth', admin.auth );
// Admin Home
const adminHome = require('./controllers/admin/home');
router.get('/admin/home', adminHome.home );
// Admin Edition
const adminEdition = require('./controllers/admin/edition');
router.post('/admin/edition/add', adminEdition.add );
// Admin Photos
const adminImagen = require('./controllers/admin/images');
router.post('/admin/photos/add', uploadFile(), (req, res) => { adminImagen.add(req, res) } );
// Admin Video
const adminVideo = require('./controllers/admin/videos');
router.post('/admin/video/add', uploadFile(), (req, res) => { adminVideo.add(req, res) } );

module.exports = router;