const insertUser = require("../models/InsertUser");


const PerfilAluno = async (req, res) => {

    let User = await insertUser.findOne({
        email: req.session.email,
        senha: req.session.senha,
        curso: req.session.curso,
        nome: req.session.nome,
    });

    if (User) {
        res.render("Aluno/perfil", {nomeUser: User.nome, emailUser: User.email, cursoUser:User.curso, senhaUser: User.senha});
    } else {
        res.send("erro inesperado, desculpe");
    }

}

module.exports = PerfilAluno;