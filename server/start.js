const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

if(process.env.ENVIRONMENT !== 'production') {
    require('dotenv').config()
}

const userController = require('./controllers/user.controller');

const app = express();
const port = process.env.PORT || 5252;

app.use(express.static(path.join(__dirname, './ui/build')));
app.use(bodyParser.json());


app.post('/api/users/create', (req, res) => {
    userController.createUser(req.body.user).then(data => res.json(data));
});

app.get('/', (req, res) => {
    console.log('Test');
});

app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
})