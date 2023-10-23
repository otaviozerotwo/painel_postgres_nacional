const pdvModel = require('../models/pdvModel');
const { connection } = require('../models/connection');

const hosts = [
    process.env.POSTGRES_HOST_LJ01,
    process.env.POSTGRES_HOST_LJ02,
    process.env.POSTGRES_HOST_LJ03,
    process.env.POSTGRES_HOST_LJ04,
    process.env.POSTGRES_HOST_LJ05,
    process.env.POSTGRES_HOST_LJ06,
    process.env.POSTGRES_HOST_LJ07,
    process.env.POSTGRES_HOST_LJ08,
    process.env.POSTGRES_HOST_LJ09,
    process.env.POSTGRES_HOST_LJ10,
    process.env.POSTGRES_HOST_LJ11,
    process.env.POSTGRES_HOST_LJ12,
    process.env.POSTGRES_HOST_LJ13,
    process.env.POSTGRES_HOST_LJ14,
    process.env.POSTGRES_HOST_LJ15,
    process.env.POSTGRES_HOST_LJ16,
    process.env.POSTGRES_HOST_LJ17,
    process.env.POSTGRES_HOST_LJ18,
    process.env.POSTGRES_HOST_LJ19,
    process.env.POSTGRES_HOST_LJ20,
    process.env.POSTGRES_HOST_LJ21,
    process.env.POSTGRES_HOST_LJ22,
    process.env.POSTGRES_HOST_LJ23,
    process.env.POSTGRES_HOST_LJ24,
    process.env.POSTGRES_HOST_LJ25,
    process.env.POSTGRES_HOST_LJ26,
    process.env.POSTGRES_HOST_LJ27,
    process.env.POSTGRES_HOST_LJ28,
    process.env.POSTGRES_HOST_LJ29,
    process.env.POSTGRES_HOST_LJ30,
    process.env.POSTGRES_HOST_LJ31,
    process.env.POSTGRES_HOST_LJ32,
    process.env.POSTGRES_HOST_LJ33,
    process.env.POSTGRES_HOST_LJ34,
    process.env.POSTGRES_HOST_LJ35,
    process.env.POSTGRES_HOST_LJ36,
    process.env.POSTGRES_HOST_LJ37,
    process.env.POSTGRES_HOST_LJ38,
    process.env.POSTGRES_HOST_LJ39,
    process.env.POSTGRES_HOST_LJ40,
    process.env.POSTGRES_HOST_LJ41,
    process.env.POSTGRES_HOST_LJ42,
    process.env.POSTGRES_HOST_LJ43
];

const getAll = async (_request, response) => {
    const results = [];

    for(const host of hosts){
        const con = connection(host);
        
        const promise_1 = pdvModel.getDadosFilial(con);
        const promise_2 = pdvModel.getQtdCuponsFilial(con);

        const [result_1, result_2] = await Promise.all([promise_1, promise_2]);
        
        results.push({ rows: result_1.rows });
        results.push({ rows: result_2.rows });
    }

    return response.status(200).json(results);
};

module.exports = {
    getAll
};