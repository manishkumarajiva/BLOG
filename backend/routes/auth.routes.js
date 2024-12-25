const { Router } = require('express');
const router = Router();
const passport = require('passport');

const { SignUp, SignIn} = require('../controllers/auth.controller.js');

// ------------------ AUTH ROUTES ------------------ //

router.post('/signup', SignUp).post("/signin", passport.authenticate('local'), SignIn);


module.exports = router;