const sugestaoService = require("../services/sugestaoService");
const sendEmail = require("../services/envioDeEmail");


const enviandoSugestao = async (req, res) => {

    const { email, sugestao, nome } = req.body;

    var searchUser = await sugestaoService.buscaEmail(email);

    try {
        if (searchUser === null) {
            return res.status(400).send('user not found')
        } else {
            await sendEmail.mailerEnviaEmail(email, sugestao, nome);
            res.send("sugestão enviada");
        }
    }catch(erro){
        res.json({erro});
    }


}

module.exports = enviandoSugestao;