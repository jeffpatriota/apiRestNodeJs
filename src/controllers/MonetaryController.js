const MonetaryService = require('../services/MonetaryService');

module.exports = {
    deposit: async (req, res) => {
        try {
            const {cpf, value} = req.body;
            await MonetaryService.deposit(cpf, value);
            res.send('Deposito realizado com sucesso')
            
        } catch (error) {
            res.send('Não foi possivel realizar o deposito')
        }
        
    }
};