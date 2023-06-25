const userService = require("../services/alunoService");
const validations = require("../validations/alunoValidations");


const createAluno = async (req,res) => {

    const { nome, email, curso, senha, senhaConfirm } = req.body;

    busca = await userService.buscaAluno(email);

    await validations.validarCadastro(senhaConfirm, senha, email);

    if (busca){
        res.send('ja existe um usuario com esse email');
    }else{
        try {
            user = await userService.createUser(nome,email,curso,senha);
            res.render('Aluno/login');
        }catch(error){
            res.send(error);
        }
    }
}

const LoginAluno = async (req, res) => {

    const { email ,senha } = req.body;

    let searchUser = await userService.buscaAluno(email);

    var emailDeSessao = req.session.email = email;
    var senhaDeSessao = req.session.senha = senha;

    const verificando = (req, res, next) => {
        if (emailDeSessao && senhaDeSessao) {
            next();
        }else{
            res.redirect("/");
        }
    }

    if (searchUser === null) {
        return res.status(400).send('user not found')
    } else {
        res.json({
            message:"ok",
            user: searchUser,
    }).render('Aluno/home');
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


const updateAluno = async (req, res) => {

    let {nome,email,senha,curso} = req.body; 

    let userFind = await userService.buscaAluno(email);

    if (!userFind){
        res.send("user não encontrado");
    }else{
        try{

            updateDeTudo = await userService.updateDataAluno(nome, email, curso, senha)
            res.redirect('/views/Aluno/perfil');
        }catch(erro){
            console.log(erro);
        }

    }


}

const PerfilAluno = async (req, res) => {

    const { nome, email, curso, senha } = req.session;

    let User = await userService.buscaTodosOsDados(nome, email, curso, senha);

    if (User) {
        res.render("Aluno/perfil", {nomeUser: nome, emailUser: email, cursoUser:curso, senhaUser: senha});
    } else {
        res.send("erro inesperado, desculpe");
    }

}


module.exports = {
    createAluno,
    LoginAluno,
    updateAlunoSenha,
    updateAluno,
    PerfilAluno
}