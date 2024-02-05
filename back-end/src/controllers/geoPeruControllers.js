const {pool} = require('../db');

const getDepartment = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM departamentos');
        const listaDepartamentos = result.rows;

        res.json(listaDepartamentos);
    } catch(err) {
        console.error('Error al obtener los departamentos', err.message);
    }
}

const getProvince = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM provincias');
        const listaProvincias = result.rows;

        res.json(listaProvincias);
    } catch(err) {
        console.error('', err.message);
    }
}

const getDistrict = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM distritos');
        const listaDistritos = result.rows;

        res.json(listaDistritos);
    } catch(err) {
        console.error('', err.message);
    }
}

module.exports = {
    getDepartment,
    getProvince,
    getDistrict
}