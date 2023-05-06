//define consts
const express = require('express');
const app = express();
const path = require('path');
const porta = 3000;
var bodyParser = require('body-parser')

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


//configuring view
var engines = require('consolidate');

app.set('views', __dirname + '/views');
app.engine('html', engines.mustache);
app.set('view engine', 'html');

//callback routes
var userRoute = require('./src/routes/userRoutes');
app.use('/', userRoute);

//open server
app.listen(porta, () => {
    console.log('this is ok!');
});