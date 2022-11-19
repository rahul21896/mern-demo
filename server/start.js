const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

if(process.env.ENVIRONMENT !== 'production') {
    require('dotenv').config()
}

const app = express();
const port = process.env.PORT || 5252;

app.use(express.static(path.join(__dirname, './ui/build')));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log('Test');
});

app.listen(port, () => {
    console.log(`Server listening on the port  ${port}`);
})