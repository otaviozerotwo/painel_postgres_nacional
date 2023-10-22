const pdvModel = require('../models/pdvModel');

const getAll = async (request, response) => {
    const consulta = await pdvModel.getAll();
    const rows = consulta.rows;
    return response.status(200).json(rows);
};

module.exports = {
    getAll
};