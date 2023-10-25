const pdvModel = require('../models/pdvModel');
const { connection } = require('../models/connection');

const getAll = async (_request, response) => {
    const results = [];
    const hosts = []
    
    for(let codigoFilial = 1; codigoFilial <=11; codigoFilial++){
        host = `192.168.${codigoFilial}.250`;
        hosts.push(host);
    }
    
    let codigoFilial = 1;

    for(const host of hosts){
        const con = connection(host);
        // console.log(host);    
        // console.log(codigoFilial);
        
        const promise_1 = pdvModel.getDadosFilial(con);
        const promise_2 = pdvModel.getQtdCuponsFilial(con);
        const promise_3 = pdvModel.getProcedureDescontos(con, codigoFilial);

        const [result_1, result_2, result_3] = await Promise.all([promise_1, promise_2, promise_3]);
        
        results.push({ codigoFilial, rows: result_1.rows });
        results.push({ codigoFilial, rows: result_2.rows });
        results.push({ codigoFilial, rows: result_3.rows });
        codigoFilial++;
    }

    return response.status(200).json(results);
};

module.exports = {
    getAll
};