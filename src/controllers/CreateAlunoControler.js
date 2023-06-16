const userServiceCreate = require("../services/alunoService");


const createAluno = async (req,res) => {

    const { nome, email, curso, senha } = req.body;

    busca = await userServiceCreate.buscaAluno(email);

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

module.exports = createAluno;