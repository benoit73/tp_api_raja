const User = require('../models/user.model');

const userController = {
    async addUser(firstName, lastName) {
        const user = User.build({firstName: firstName, lastName: lastName});
        try{
            await user.save();
            return true;
        }
        catch(error){
            return error;
        }
        
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
