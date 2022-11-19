const mongoose = require('mongoose');

const connect = () => {

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

const disconnect = () => {

    if (!mongoose.connection) {
        return;
    }

    mongoose.disconnect();

    mongoose.connection.once("close", async () => {
        console.log("Diconnected  to database");
    });

};

module.exports = {
    connect,
    disconnect
}