const userService = require('../services/user.service');

class UserController{
    constructor() {}

    async createUser(user){
        return await userService.createUser(user);
    }
}

module.exports = new UserController();