const connection = require('./connection');

const getAll = async () => {
    const consulta = await connection.query('SELECT * FROM prc_filial');
    return consulta;
};

module.exports = {
    getAll
};