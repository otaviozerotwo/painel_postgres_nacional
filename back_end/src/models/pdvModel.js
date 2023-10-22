const connection = require('./connection');

const getAll = async () => {
    const consulta = await connection.execute('SELECT * FROM cliente');
    return consulta;
};

module.exports = {
    getAll
};