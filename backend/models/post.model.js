const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    user: { type: mongoose.Types.ObjectId, ref : "User", required: true },
    title : { type : String, trim : true, required: true},
    content : { type : String, trim : true, required: true},
    image : { type : String, trim : true, required: true}
},{ timestamps : true })


const PostModel = new mongoose.model("Post", postSchema);
module.exports = PostModel;