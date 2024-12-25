const PostModel = require('../models/post.model.js');
const formidable = require('formidable');
const path = require('path');


// ------------------ POST's CONTROLLERS ---------------- //

exports.AddPost = async (req, res) => {

    try {
        const uploadDir = path.join(__dirname).split("controllers")[0] + 'uploads/post/';
        
        const form = new formidable.IncomingForm();
        form.uploadDir = uploadDir;
        form.keepExtensions = true;

        form.on('fileBegin', (name, file) => {
            const filename = name + Date.now() + file.newFilename + '.jpg';
            file.filepath = path.join(uploadDir, filename);
        });

        form.parse(req, async function (err, fields, files) {
            if (err) {
                return res.status(500).json({ message: 'File upload error', error: err });
            }

            const image = files.image[0].filepath.split("uploads/")[1];

            const cretePayload = {
               user : fields.user.join(""),
               title : fields.title.join(""),
               content : fields.content.join(""),
               image : image
            }

            const userPost = await PostModel.create(cretePayload);

            if (!userPost) return res.status(200).json({ status: 401, message: 'Failed to Create Post' });
            res.status(200).json({ status: 201, success: true, message: 'Successfully Created Post', response: userPost });
        })
    } catch (error) {
        res.status(500).json({ status: 500, message: error.message, error: error.stack });
    }
}

exports.GetUserPosts = async (req, res) => {
    // const { id } = req.user.response;

    try {
        const userPosts = await PostModel.find({}).populate('user');
        if (!userPosts || userPosts.length === 0) {
            return res.status(200).json({ status: 401, success: false, message: 'No Posts Found' });
        }

        res.status(200).json({ status: 201, success: true, message: 'Successfully Fetched Posts', posts: userPosts });

    } catch (error) {
        res.status(500).json({ status: 500, message: error.message, error: error.stack });
    }
}

exports.UpdatePost = async (req, res) => {
    const { id } = req.user.response;  
    const { title, content, image } = req.body;

    try {
        const updateResponse = await PostModel.findByIdAndUpdate(id, { title, content, image }, { new: true });

        if (!updateResponse) return res.status(200).json({ status: 401, success: false, message: 'Failed to Update Post' });

        const updatedPost = await PostModel.findById(id).populate('user');
        res.status(200).json({ status: 201, success: true, message: 'Successfully Updated Post', response: updatedPost });

    } catch (error) {
        res.status(500).json({ status: 500, message: error.message, error: error.stack });
    }
}

exports.RemovePost = async (req, res) => {
    const { id } = req.user;

    try {
        const removed = await PostModel.findByIdAndDelete(id);

        if (!removed) return res.status(200).json({ status: 401, success: false, message: 'Failed to Remove Post' });

        const userPosts = await PostModel.find({ user: removed.user }).populate('user');
        res.status(200).json({ status: 201, success: true, message: 'Successfully Removed Post', response: userPosts });

    } catch (error) {
        res.status(500).json({ status: 500, message: error.message, error: error.stack });
    }
}
