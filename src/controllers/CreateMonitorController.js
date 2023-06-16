const admService = require('../services/admService');

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

module.exports = cadastroMonitor;