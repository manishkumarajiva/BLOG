const { Router } = require('express');
const router = Router();

const AuthRoutes = require('./auth.routes.js');
const UserRoutes = require('./user.routes.js');
const PostRoutes = require('./post.routes.js');
const CommentRoutes = require('./comment.routes.js');

// -------------- INDEX ROUTES ---------------- //

router.use('/auth', AuthRoutes);
router.use('/user', UserRoutes);
router.use('/post', PostRoutes);
router.use('/comment', CommentRoutes);

module.exports = router;