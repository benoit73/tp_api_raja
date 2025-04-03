const jwt = require('jsonwebtoken');
const secretKey = 'bienlebonjour';

function getJwt(userId)
{
    const payload = {
        userId: userId,
        };
        
    const options = {
        expiresIn: '1h' 
        };
        
    const token = jwt.sign(payload, secretKey, options);
    return token;
}

function verifyJwt(token)
{
    try {
        const decoded = jwt.verify(token);
        return decoded;
    }
    catch(error) {
        return false;
    }
}
module.exports = { getJwt, verifyJwt };
