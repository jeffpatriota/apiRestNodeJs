const db = require('../db');

module.exports = {
    totalValue: async (cpf) => {
        const total = new Promise((aceito, rejeitado) => {
            db.query(`SELECT SUM(monetary.valor) FROM account INNER JOIN monetary on account.id = monetary.idUser WHERE account.cpf = "${cpf}"`, (error, result) => {
                if(error) {rejeitado(error); return;}
                aceito(result);
            });
        });
        const valueTotal = await total;
        return valueTotal[0]['SUM(monetary.valor)'];
    }
};