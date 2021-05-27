const Sequelize = require('sequelize');
const config = require('../database/config')
const { Produto, Categoria } = require('../database/models')

const CategoriaController = {
    index: async (req,res) =>{
        const categorias = await Categoria.findAll()
        return res.render('categorias', {categorias})
    },
    showProducts: async (req,res) => {
        const {id} = req.params

        return res.render ('produtosCategorias')
    }
}


module.exports = CategoriaController;