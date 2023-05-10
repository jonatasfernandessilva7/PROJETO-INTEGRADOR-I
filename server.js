//define consts
const express = require('express');
const app = express();
const path = require('path');
const porta = 3000;
const bodyParser = require('body-parser');
const session = require("express-session");
const flash = require("connect-flash");

//configurando a sessão
app.use(session({
    secret : 'testedesession',
    resave : true,
    saveUninitialized : true
}));

//configurando flash
app.use(flash());

//configurando middleware
app.use((req, res, next) => {
    res.locals.successMessage = req.flash('succesMessage')
    res.locals.errorMessage = req.flash('errorMessage')
    next()
})

//configurando engine de views e leitura de json
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