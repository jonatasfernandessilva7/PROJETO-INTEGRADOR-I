const { getEventListeners } = require('events');
var express = require('express');
const Sequelize = require("sequelize");
const insertUser = require("../models/InsertUser");

const LoginMonitor = async (req, res) => {

    var searchUser = await insertUser.findOne({
        attributes: ['email', 'senha'],
        where: {
            email: req.body.email1,
            senha: req.body.senha1
        }
    })

    if (searchUser === null) {
        return res.status(400).send('user not found')
    } else {
        res.render('Monitor/Monitor_home.html')
    }

}

module.exports = LoginMonitor;