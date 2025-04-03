const User = require('../models/user.model');
const { hash } = require('../service/hash');
const jwtService = require('../service/jwt');

const userController = {
    async addUser(firstName, lastName, email, password) {
        const hashedPassword = hash(password);
        const user = User.build({firstName: firstName, lastName: lastName, email: email, password: hashedPassword});
        try{
            await user.save();
            return true;
        }
        catch(error){
            return error;
        }
        
    },

    async connectUser(email, password) {
        const hashedPassword = hash(password);
        const user = User.findOne({ where: {email: email, password: hashedPassword}});
        if (user)
        {
            const jwt = jwtService.getJwt(user.id);
            return {jwt: jwt, email: email};
        }
        return false;
    },

    async getUserById(id) {
        const user = await User.findByPk(id);
        if (user)
        {
            return user;
        }
        return false;
    },

    async removeUser(id) {
        const user = await User.findByPk(id);
        if (user)
        {
            await user.destroy();
            return true;
        }
        return false;
    },
    
    async getAllUsers(){
        const users = await User.findAll();
        return users;
    },
}

module.exports = userController;
