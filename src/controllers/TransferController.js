const TransferService = require('../services/TransferService');
const ValidateBalanceService = require('../services/ValidateBalanceService');


module.exports = {
    transfer: async (req, res) => {
        try {
            const {cpf, value, destinatario} = req.body;
            // await TranferService.transfer(cpf, value);
            const balance = await ValidateBalanceService.totalValue(cpf);
            if(value > 2000){
               return res.send('Valor maior que o permitido')
            }
            if(balance - value >= 0){
                await TransferService.transfer(cpf, value * -1);
                await TransferService.transfer(destinatario, value);
              return res.send('Transferencia realizada com sucesso')
            }
          return res.send('Não foi possivel realizar a transferencia, valor insuficiente')
            
        } catch (error) {
            console.log(error)
            return res.send('Não foi possivel realizar a transferencia')
        }
        
    }
};