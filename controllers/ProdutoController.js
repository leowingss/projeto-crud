const Sequelize = require('sequelize');
const config = require('../database/config')
const { Produto, Categoria } = require('../database/models')

const ProdutoController = {
    index: async(req, res) => {
        return res.render('produtos')
    }
}

module.exports = ProdutoController;