const multer = require('multer');

function uploadFile() {
	const storage = multer.diskStorage({
		destination: './uploads/images',
		filename: function (req, file, cb) {
			let extension = file.originalname.slice(file.originalname.lastIndexOf('.'));
			cb(null, Date.now() + extension);
		}
	})

	const upload = multer({storage: storage}).array('files');

	return upload;
}

module.exports = uploadFile;