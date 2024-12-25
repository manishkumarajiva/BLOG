const { Router } = require('express');
const router = Router();


const { AddPost, GetUserPosts, UpdatePost, RemovePost } = require('../controllers/post.controller.js');

// ------------------ POST ROUTES ------------------ //

router.post('/', AddPost).get("/", GetUserPosts).patch('/', UpdatePost).delete('/', RemovePost);


module.exports = router;