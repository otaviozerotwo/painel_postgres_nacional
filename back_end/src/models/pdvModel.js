const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Adiciona zero à esquerda, se necessário
    const day = String(date.getDate()).padStart(2, '0'); // Adiciona zero à esquerda, se necessário
  
    return `${year}/${month}/${day}`;
  }
  
const dataAtual = new Date();
const dataFormatada = [formatDate(dataAtual)];

const getQtdCuponsFilial = async (connection) => {
    const sql = `SELECT COUNT(*) FROM pdv_vd WHERE dt_vd = $1;`;
    const consulta = await connection.query(sql, dataFormatada);
    return consulta;
};

const getDadosFilial = async (connection) => {
    const sql = `SELECT cd_filial FROM prc_filial`;
    const consulta = await connection.query(sql);
    return consulta;
}

module.exports = {
    getQtdCuponsFilial,
    getDadosFilial
};