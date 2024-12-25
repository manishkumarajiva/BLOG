const UserModel = require('../models/user.model.js');
const crypto = require('crypto');
const formidable = require('formidable');
const path = require('path');
const accessToken = require('../middleware/auth.js');

// ------------------ USER's CONTROLLERS ---------------- //

exports.SignUp = async (req, res) => {
    try {

        const uploadDir = path.join(__dirname).split("controllers")[0] + 'uploads';

        const form = new formidable.IncomingForm();

        form.uploadDir = uploadDir;
        form.keepExtensions = true;

        form.on('fileBegin', (name, file) => {
            const filename = name + Date.now() + file.newFilename + '.jpg';
            file.filepath = path.join(uploadDir, filename);
        });

        form.parse(req, function (err, fields, files) {
            if (err) {
                return res.status(500).json({ message: 'File upload error', error: err });
            }

            const avatar = files?.avatar[0]?.filepath.split("uploads/")[1];
            
            var salt = crypto.randomBytes(16);
            crypto.pbkdf2(fields.password.join(''), salt, 310000, 32, 'sha256', async function (err, hashedPassword) {

                if (err) return next(err);

                const cretePayload = {
                    name: fields.name.join(''),
                    email: fields.email.join(''),
                    password: hashedPassword,
                    salt: salt,
                    avatar: avatar || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSie-0GxrHebqQjWVXiovZul4TVGDYJHIA9EQ&s'
                }

                const create = await UserModel.create(cretePayload);
                if (!create) return res.status(200).json({status : 401, success : false, message : "Registeration Failed 👎"}) ;

                const user = {
                    id: create._id,
                    email: create.email
                };

                req.login(user, async function (err) {
                    if (err) return next(err);
                    const token = await accessToken(user)
                    res.status(200).json({status : 201, success : true, message : "Successfully Register 👍", data : user, token})
                });
            });
        })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message, error: error.stack });
    }
}


exports.SignIn = async (req, res) => {
    try {
        const token = await accessToken(req.user)
        res.status(200).json({status : 201, success : true, message : "Successfully login 👍", user : req.user, token})   
    } catch (error) {
        res.status(500).json({ success: false, message: error.message, error: error.stack });
    }
}



