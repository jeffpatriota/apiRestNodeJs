const AccountService = require('../services/AccountService');

module.exports = {
    search: async (req, res) => {
        let json = {error: '', result:[]};

        let account = await AccountService.search();

        for(let i in account){
            json.result.push({
                id: account[i].id,
                name: account[i].nomeCompleto,
                cpf: account[i].cpf 
            });
        }
        res.json(json);
    }
}