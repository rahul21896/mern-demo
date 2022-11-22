const {User} = require('../models/user.model');
const mongoose = require('mongoose');

class UserService{
    constructor() {
        this.connect();
    }

    connect() {

        const url = process.env.MONGO_DB_CONNECTION;

        mongoose.connect(url, {
            useNewUrlParser: true,
            useFindAndModify: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })

        mongoose.connection.once("open", async () => {
            console.log('Connected To Database');
        });

        mongoose.connection.on("error", (err) => {
            console.log('Error to connect Database : '+ err);
        });
    }

    async createUser(user) {
        let data = {};
        try {
            data = await User.create(user);
        } catch(err) {
           console.log('Error' + err);
        }
        return data;
    }

}

module.exports = new UserService();