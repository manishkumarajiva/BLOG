const CommentModel = require('../models/comment.model.js');


// ------------------ COMMENT's CONTROLLERS ---------------- //

exports.AddComment = async (req, res) => {
    try {
        const { user, post, comment } = req.body;
        const createResponse = await CommentModel.create({
            user, post, comment
        });

        if(!createResponse) return res.status(200).json({ status : 401, message : 'Failed to Create Comment' });
        
        res.status(200).json({ status : 201, success : true, message : 'Successfully Created Comment', response : createResponse });

    } catch (error) {
        res.status(500).json({ status : 500, message : error.message, error : error.stack });
    }    
}

exports.GetPostComments = async (req, res) => {
    const { postId } = req.query;
    try {
        const postComments = await CommentModel.find({ post: postId }).populate('user');
        if(!postComments || postComments.length === 0) {
            return res.status(200).json({ status : 401, success : false, message : 'No Comments Found for this Post' });
        }

        res.status(200).json({ status : 201, success : true, message : 'Successfully Fetched Comments', response : postComments });

    } catch (error) {
        res.status(500).json({ status : 500, message : error.message, error : error.stack });
    }        
}

exports.RemoveComment = async (req, res) => {
    const { id } = req.params; 

    try {
        const removed = await CommentModel.findByIdAndDelete(id);

        if(!removed) return res.status(200).json({ status : 401, success : false, message : 'Failed to Remove Comment' });

        const postComments = await CommentModel.find({ post: removed.post }).populate('user').populate('post');
        res.status(200).json({ status : 201, success : true, message : 'Successfully Removed Comment', response : postComments });

    } catch (error) {
        res.status(500).json({ status : 500, message : error.message, error : error.stack });
    }
}
