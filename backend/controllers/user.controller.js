const UserModel = require('../models/user.model.js');



exports.GetUserProfile = async (req, res) => {
    try {
        const userId = req.query.userId;
        const getUser = await UserModel.findById(userId);

        if (!getUser) {
            return res.status(400).json({ success: false, message: "User not found" });
        }

        res.status(200).json({ success: true, message: "Successfully fetchecd 👍", response : getUser });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message, error: error.stack });
    }
}

exports.UpdateProfile = async (req, res) => {
    try {
        const userId = req.user.id;
        const name = req.body;
        const avatar = req?.file?.filename;

        const updatedUser = await UserModel.findByIdAndUpdate(userId, { name, avatar }, { new: true });

        if (!updatedUser) {
            return res.status(400).json({ success: false, message: "User not found" });
        }

        res.status(200).json({ success: true, message: "Profile successfully updated", response: updatedUser });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message, error: error.stack });
    }
}

exports.DeleteAccount = async (req, res) => {
    try {
        const userId = req.user.id;

        const deletedUser = await UserModel.findByIdAndDelete(userId);

        if (!deletedUser) {
            return res.status(400).json({ success: false, message: "User not found" });
        }

        res.status(200).json({ success: true, message: "Account successfully deleted" });

    } catch (error) {
        res.status(500).json({ success: false, message: error.message, error: error.stack });
    }
}