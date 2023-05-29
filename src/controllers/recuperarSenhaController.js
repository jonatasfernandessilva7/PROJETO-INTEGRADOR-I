const { getEventListeners } = require('events');
var express = require('express');
const Sequelize = require("sequelize");
const insertUser = require("../models/InsertUser");
require("dotenv").config();



const recuperandoSenha = async (req, res) => {

    var searchUser = await insertUser.findOne({
        attributes: ['email'],
        where: {
            email: req.body.emailRecuperacao,
        }
    }).then(async () => {

        if (searchUser === null) {
            return res.status(400).send('user not found')
        } else {
            await mailerEnviaEmail(req.body.emailRecuperacao);
            res.redirect("/Aluno/recuperacao/inserirNovaSenha");
        }
    });
}

function mailerEnviaEmail(email) {
    "use strict";
    const nodemailer = require("nodemailer");

    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
        // Generate test SMTP service account from ethereal.email

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // verdadeiro para portas 465, 587 = false
            logger:true,
            debug: true,
            secureconnection: false,
            auth:{
                user:process.env.EMAIL_USER,
                pass: process.env.SENHA_EMAIL_USER
            },
            tls:{
                rejectUnAuthorized: true
            }
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: process.env.EMAIL_ENVIAR, // sender address
            to: email, // list of receivers
            subject: "Recurepação de Senha ✔", // Subject line
            text: "olá ${email} para recuperar sua conta insira o código a seguir: ", // plain text body
            html: cod, // html body
        });

        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }

    main().catch(console.error);

}

module.exports =  recuperandoSenha;