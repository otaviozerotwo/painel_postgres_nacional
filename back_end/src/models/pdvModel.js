const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Adiciona zero à esquerda, se necessário
    const day = String(date.getDate()).padStart(2, '0'); // Adiciona zero à esquerda, se necessário
  
    return `${year}/${month}/${day}`;
  };
  
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
};

const getProcedureDescontos = async (connection, codigoFilial) => {
    const sql = `SELECT cd_tbl_desc, ds_desconto, * FROM p_est_prod_descontos($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13);`;
    const parametros = [
        codigoEmpresa = 1,
        codigoFilial,
        codigoProduto = 80036,
        codigoConvenio = 0,
        cartaoFidelidade = '0',
        ean = 0,
        codigoCliente = 0,
        qtdProduto = 1,
        aplicacao = 0,
        idPromo = 0,
        seReceita = 0,
        codigoFormaPagto = 0,
        validaStatusCred = 0
    ]
    const consulta = await connection.query(sql, parametros);
    return consulta;
};

module.exports = {
    getQtdCuponsFilial,
    getDadosFilial,
    getProcedureDescontos
};