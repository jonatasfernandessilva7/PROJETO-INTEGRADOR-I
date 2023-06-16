const userService = require("../services/alunoService");


const createAluno = async (req,res) => {

    const { nome, email, curso, senha } = req.body;

    busca = await userService.buscaAluno(email);

    if (req.body.senhaConfirm != senha) {
        res.send("senhas não batem, por favor volte e corrija");
    } else if (!email.includes("@alu.ufc.br")){
        res.send("por favor volte e insira um email da ufc")
    } 

    if (busca){
        res.send('ja existe um usuario com esse email');
    }else{
        try {
            novousuario = await userServiceCreate.createUser(nome,email,curso,senha);
            res.render('Aluno/login');
        }catch(error){
            res.send(error);
        }
    }
}

const LoginAluno = async (req, res) => {

    const { email } = req.body;

    let searchUser = await userService.buscaAluno(email);

    req.body.email1 = req.session.email;
    req.body.senha1 = req.session.senha;

    const verificando = (req, res, next) => {
        if (req.session.email && req.session.senha) {
            next();
        }else{
            res.redirect("/");
        }
    }

    if (searchUser === null) {
        return res.status(400).send('user not found')
    } else {
        res.redirect('/views/Aluno/home');
    }

}

const updateAlunoSenha = async (req, res) => {

    const { email, senha } = req.body

    busca = await userServiceCreate.buscaAluno(email).then(async () => {

        if (userFind === null) {
            return res.status(400).send('user not found')
        } else {
            try {
                update = await update.updateAluno(email, senha);
                res.redirect("/Aluno/login");
            }catch(error){
                res.send(error)
            }
        }
    });

}

const insertUser = require("../models/InsertUser");

const updateAluno = async (req, res) => {

    let {email} = req.session.email;
    let {nome, curso, senha} = req.body;

    let userFind = await insertUser.findOne({
        email
    })

    if (!userFind){
        res.send("user não encontrado")
    }else{

    await insertUser.update({nome, curso, senha},{email}).then(() => {
        res.redirect('/views/Aluno/perfil');
    }).catch(() => {
        console.log('não att');
    });

    }


}


module.exports = {
    createAluno,
    LoginAluno,
    updateAlunoSenha,
    updateAluno
}