const monitor = require("../models/MonitorModel");

async function buscaMonitor(email) {
    let userFind = await monitor.findOne({
        where: {
            email
        }
    });

    return userFind;
}

module.exports = {
    buscaMonitor,
}