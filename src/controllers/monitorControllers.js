const monitorService = require('../services/monitorService');

const LoginMonitor = async (req, res) => {

    const { email } = req.body;

    buscaMonitor = await monitorService.buscaMonitor(email);

    let verificando = (req, res, next) => {
        if (req.session.emailMonitor && req.session.senhaMonitor) {
            next();
        }else{
            res.redirect("/");
        }
    }

    let searchUser = await monitorService.buscaMonitor(req.body.emailMonitor).then(async () => {

        if (searchUser === null) {
            return res.status(400).send('user not found')
        } else if(!req.body.emailMonitor.includes("@alu.ufc.br")){
            return res.status(400).send('email errado')
        }else {
            res.render('Monitor/Monitor_home')
        }

    });


}

module.exports = {
    LoginMonitor,
}