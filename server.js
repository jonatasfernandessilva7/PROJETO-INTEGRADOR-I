//define consts
const express = require('express');
const app = express();
const path = require('path');
const porta = 3000;

app.use(express.static(path.join(__dirname, 'public')));


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