const { Router } = require('express');
const router = Router();


const { AddComment, GetPostComments, UpdateComment, RemoveComment } = require('../controllers/comment.controller.js');

// ------------------ COMMENT ROUTES ------------------ //

router.post('/', AddComment).get("/",  GetPostComments).delete('/',RemoveComment);


module.exports = router;