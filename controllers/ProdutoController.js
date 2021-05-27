const Sequelize = require('sequelize');
// const config = require('../database/config')
const { Produto, Categoria } = require('../database/models')

const ProdutoController = {
    index: async(req, res) => {
        const produtos = await Produto.findAll({
                include: {
                    model: Categoria,
                    as: 'categoria',
                    required: true
                }
            })
            // console.log(produtos)
        return res.render('produtos', { produtos })
    }
}

module.exports = ProdutoController;