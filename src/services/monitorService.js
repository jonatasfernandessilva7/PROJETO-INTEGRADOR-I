const monitor = require("../models/MonitorModel");

async function buscaMonitor(email) {
    let userFind = await monitor.findOne({
        where: {
            email
        }
    });

    return email;
}

module.exports = buscaMonitor;