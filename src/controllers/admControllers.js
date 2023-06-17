const admService = require('../services/admService');

const AdmLogin = async (req, res) => {

    const { email } = req.body;

    let buscaAdm = await admService.buscaAluno(email);

    try {
        if (buscaAdm === null) {
            return res.status(400).send('user not found');
        } else {
            res.render('admgeral/Adm');
        }
    }catch(error){
        res.send(error);
    }

}


const cadastroMonitor = async (req, res) => {

    try {

        const { nome, email, curso, senha } = req.body;

        buscaMonitor = await admService.buscaMonitor(email);

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

    const { email } = req.body;
    console.log(email);

    let buscaADeletar = await admService.buscaMonitor(email);

    try {
        if (buscaADeletar) {
            try {
                delMonitor = await admService.deleteMonitor(email);
                res.redirect('/views/admgeral/DeletarMonitor')
            } catch (erro) {
                res.send("error" + erro);
            };
        } 
    }catch(error){
        res.send(error);
    }

}


module.exports = {
    AdmLogin,
    cadastroMonitor,
    delMonitor
}