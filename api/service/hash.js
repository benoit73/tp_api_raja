const crypto = require('crypto');

function hash(string) {
    return crypto.createHash('md5').update(string).digest('hex');
}

module.exports = {hash};