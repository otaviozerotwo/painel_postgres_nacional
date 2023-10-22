const getAll = (request, response) => {
    return response.status(200).json({ message: 'controller tá funfando!' });
};

module.exports = {
    getAll
};