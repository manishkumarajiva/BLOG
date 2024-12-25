const jwt = require('jsonwebtoken');

const accessToken = async (user) => {
        const payload = {
            id : user.id,
            email : user.email
        }

        const options = {
            issuer : 'Manish',
            expiresIn : '1h'
        }

        const secret = process.env.SESSION_SECRET;

        const token = await jwt.sign(payload, secret, options);
        if(!token) console.error('Session Creation Failed');
        return (token)
}


module.exports = accessToken;