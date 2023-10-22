const connection = require('./connection');

const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Adiciona zero à esquerda, se necessário
    const day = String(date.getDate()).padStart(2, '0'); // Adiciona zero à esquerda, se necessário
  
    return `${year}/${month}/${day}`;
  }
  
const dataAtual = new Date();
const dataFormatada = [formatDate(dataAtual)];
  
const sql = `SELECT vs_pdv, hr_vd, cd_cx FROM pdv_vd WHERE dt_vd = $1 AND cd_cx = 11 LIMIT 1;`;

const getAll = async () => {
    const consulta = await connection.query(sql, dataFormatada);
    return consulta;
};

module.exports = {
    getAll
};