const db = require('../db');

module.exports = {
    transfer: (cpf, value) => {
        return new Promise((aceito, rejeitado) => {
            db.query(`INSERT INTO monetary (idUser, valor) VALUES ((SELECT account.id from account WHERE account.cpf = ${cpf}), ${value})`,(error, result) => {
                if(error) {rejeitado(error); return;}
                aceito(result);
            });
        });
    }
};