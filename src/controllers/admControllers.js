const admService = require('../services/admService');

const AdmLogin = async (req, res) => {

    let buscaAdm = await admService.buscaUsuario(email);

    let verificando = (req, res, next) => {
        if (req.session.emailAdm && req.session.senhaAdm) {
            next();
        }else{
            res.redirect("/");
        }
    }

    if (buscaAdm === null) {
        return res.status(400).send('user not found')
    } else {
        res.render('admgeral/Adm');
    }

}


const cadastroMonitor = async (req, res) => {

    try {

        const { nome, email, curso, senha } = req.body;

        buscaMonitor = await admService.buscaUsuario(email);

        if (buscaMonitor) {
            res.send('ja existe um usuario com esse email');
        } else {
            try {
                novomonitor = await admService.createMonitor(nome, email, curso, senha);
                res.redirect('/views/admgeral/AdicionarMonitor');
            } catch (error) {
                res.send(error);
            }
        }

    } catch (erro) {
        console.log(erro);
    }



}

const delMonitor = async (req, res) => {

    const { email } =  req.body

    let buscaADeletar = await admService.buscaUsuario(email);
    

    if (buscaADeletar){
        try {
            delMonitor = await admService.deleteMonitor(email);
            res.redirect('/views/admgeral/DeletarMonitor')
        }catch(erro) {
            res.send("error" + erro)
        };
    }

}


module.exports = {
    AdmLogin,
    cadastroMonitor,
    delMonitor
}