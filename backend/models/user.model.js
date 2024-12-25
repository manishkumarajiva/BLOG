const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, trim: true, required: true },
    email: { type: String, trim: true, required: true },
    password: { type: Buffer, required: true },
    salt: { type: Buffer, required: true },
    avatar: { type: String, trim: true, required: true },
},{timestamps : true })


const UserModel = new mongoose.model("User", userSchema);
module.exports = UserModel;