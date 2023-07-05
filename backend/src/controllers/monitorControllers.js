const monitorService = require('../services/monitorService');

const LoginMonitor = async (req, res) => {

    const { email } = req.body;

    let buscaMonitorLogin = await monitorService.buscaMonitor(email);

    try {
        if (buscaMonitorLogin === null) {
            return res.status(400).send('user not found');
        } else if (!email.includes("@alu.ufc.br")) {
            return res.status(400).send('email errado');
        } else {
            res.render('Monitor/Monitor_home');
        }

    }catch(error){
        res.send(error);
    }
}




module.exports = {
    LoginMonitor,
}