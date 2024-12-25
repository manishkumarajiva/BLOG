const { Router } = require('express');
const router = Router();


const { GetUserProfile } = require('../controllers/user.controller.js');

// ------------------ USER's ROUTES ------------------ //

router.get("/", GetUserProfile);

module.exports = router;