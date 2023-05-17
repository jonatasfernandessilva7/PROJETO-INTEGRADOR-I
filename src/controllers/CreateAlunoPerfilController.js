const { getEventListeners } = require('events');
var express = require('express');

const PerfilAluno = async (req, res) => {

    res.render('Aluno/perfil.html')

}

module.exports = PerfilAluno;