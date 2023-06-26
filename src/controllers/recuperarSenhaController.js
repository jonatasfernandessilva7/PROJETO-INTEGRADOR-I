const recuperarSenhaService = require("../services/recuperarsenhaService");
const sendEmail = require("../services/envioDeEmail");

const recuperandoSenha = async (req, res) => {

    const { email } = req.body;

    var searchUser = await recuperarSenhaService.buscaEmail(email);

    try {
        if (searchUser === null) {
            return res.status(400).send('user not found')
        } else {
            await sendEmail.mailerEnviaEmail(email, req.body.sugestao, req.body.nomeDoSugestor);
            res.json({message: "ok", data: searchUser}).render("/Aluno/recuperacao/inserirNovaSenha");
        }
    }catch(erro){
        res.json({erro});
    }
}

module.exports =  recuperandoSenha;