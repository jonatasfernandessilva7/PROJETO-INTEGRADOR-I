const { getEventListeners } = require('events');
var express = require('express');
var router = express.Router();

//rotas get
router.get('/', (req, res) => {
    res.render('index.html');
});

router.get('/login.html', (req, res) => {
    res.render('login.html');
});

router.get('/cadastro.html', (req, res) => {
    res.render('cadastro.html');
});

router.get('/Lab1.html', (req, res) => {
    res.render('Lab1.html');
});

router.get('/Lab2.html', (req, res) => {
    res.render('Lab2.html');
});

router.get('/Lab3.html', (req, res) => {
    res.render('Lab3.html');
});

router.get('/Lab4.html', (req, res) => {
    res.render('Lab4.html');
});

router.get('/Biblioteca.html', (req, res) => {
    res.render('Biblioteca.html');
});

//rotas post
router.post('/home.html', (req, res) => {
    res.render('home.html');
});

module.exports = router;