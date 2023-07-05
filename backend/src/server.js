//define consts
const express = require('express');
const app = express();

const path = require('path');
const bodyParser = require('body-parser');
const session = require("express-session");
const flash = require("connect-flash");

require("dotenv").config();
const port = 9999;

const ejs = require("ejs");

const server = require('http').createServer(app);
const io = require('socket.io')(server);

import cors from 'cors';
import morgan from 'morgan';

app.use(cors({
    origin: 'http://localhost:8080'
}))

app.use(morgan('tiny'))


//configurando a sessão
app.use(session({
    secret : 'oi',
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

//socket

const users = [];
io.on('connection', (socket) => {
    console.log('nova conexão', socket.id);
    users.push(socket);

    socket.on('disconnect', function(){
        users.slice(users.indexOf(socket), 1);
        console.log('desconectou');
    });
});


//open server
server.listen(port, () => {
    console.log('rodando na porta: ',port);
});