const db = require('../db');

module.exports = {
    search: () => {
        return new Promise((aceito, rejeitado) => {
            db.query('SELECT * FROM account', (error, result) => {
                if(error) {rejeitado(error); return;}
                aceito(result);
            });
        });
    }
};