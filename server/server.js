const express = require('express');
var cors = require('cors')
const app = express();
const router = require('./router')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')

mongoose.connect('mongodb://localhost:27017/db',async () => {
    console.log(await mongoose.model('type').find())
    console.log('connectd database')
})
// Handle React routing, return all requests to React app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use('/api', router)
app.use(express.static(path.join(__dirname, '../exportA4/build')));
app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../exportA4/build', 'index.html'));
});
app.listen(8888, () => console.log('server is running on port 8888'))