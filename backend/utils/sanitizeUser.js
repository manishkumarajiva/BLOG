const sanitizeUser = (user) => {
    return { id : user._id, email : user.email }
}

module.exports = sanitizeUser;