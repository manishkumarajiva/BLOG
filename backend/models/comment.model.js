const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    user: { type: mongoose.Types.ObjectId, ref : "User", required: true },
    post: { type: mongoose.Types.ObjectId, ref : "Post", required: true },
    comment: {type : String, trim : true, required : true}
}, {timestamps : true})


const CommentModel = new mongoose.model("Comment", commentSchema);
module.exports = CommentModel;