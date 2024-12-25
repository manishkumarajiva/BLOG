const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const UserModel = require('../models/user.model.js');
const crypto = require('crypto');
const sanitizeUser = require('./sanitizeUser.js');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
},
    async function (username, password, done) {
        const user = await UserModel.findOne({ email: username });
        if (user === null) return done(null, false, { message: 'User Not Registered' });

        crypto.pbkdf2(password, user.salt, 310000, 32, 'sha256', function (err, hashedPassword) {
            if (err) return done(err);

            if (!crypto.timingSafeEqual(user.password, hashedPassword)) {
                return done(null, false, { message: 'Incorrect username or password' });
            }

            return done(null, user);
        });
    }
));


passport.serializeUser(function (user, done) {
    console.log(sanitizeUser(user),'searlize')
    done(null, sanitizeUser(user));
});

passport.deserializeUser(async function (id, done) {
    const user = await UserModel.findById(id);
    if (!user) return done(null, 401);
    done(null, sanitizeUser(user));
});


module.exports = passport;
