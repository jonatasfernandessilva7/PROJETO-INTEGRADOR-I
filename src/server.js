//define consts
const express = require('express');
const app = express();

const path = require('path');
const bodyParser = require('body-parser');
const session = require("express-session");
const flash = require("connect-flash");

require("dotenv").config();
const port = 3000;

const ejs = require("ejs");


//configurando a sessão
app.use(session({
    secret : "oioioi",
    resave : true,
    saveUninitialized : true,
    cookie: {secure:false}
}));

//configurando flash
app.use(flash());

//configurando middleware
app.use((req, res, next) => {
    res.locals.successMessage = req.flash('succesMessage');
    res.locals.errorMessage = req.flash('errorMessage');
    next();
});

app.use(express.json());

//configurando engine de views e leitura de json
app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


//configuring view

app.set('views', '../views');
app.set('view engine', 'ejs');

//callback routes
const rotasAluno = require('./api/alunoRotas');
app.use('/', rotasAluno);

const rotasAdm = require('./api/admRotas');
app.use('/', rotasAdm);

const rotasMonitor = require('./api/monitorRotas');
app.use('/', rotasMonitor);


//open server
app.listen(port, () => {
    console.log('rodando na porta: ',port);
});