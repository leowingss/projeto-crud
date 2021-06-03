const { response } = require('express');
const { Usuario } = require('../database/models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

const UserController = {
    index: async(req, res) => {

        const { page = 1 } = req.query
        const { count: total, rows: users } = await Usuario.findAndCountAll({

            limit: 4,
            offset: (page - 1) * 4

        })
        const totalPagina = Math.round(total / 3)
        return res.render('usuarios', { users, totalPagina })
    },

    create: (req, res) => {
        return res.render('cadastroUsuario')
    },

    store: async(req, res) => {
        const { nome, email, senha, lembrete_senha, status, sobrenome } = req.body

        const resultado = await Usuario.create({
            nome,
            email,
            senha,
            lembrete_senha,
            status,
            sobrenome
        })

        console.log(resultado)
        return res.redirect('/users')
    },

    edit: async(req, res) => {
        const { id } = req.params

        const usuario = await Usuario.findByPk(id)

        return res.render('editarUsuario', { usuario })
    },


    update: async(req, res) => {

        const { id } = req.params
        const { nome, email, senha, lembrete_senha, status, sobrenome } = req.body

        const resultado = await Usuario.update({
            nome,
            email,
            senha,
            lembrete_senha,
            status,
            sobrenome
        }, {
            where: {
                id
            }
        })

        console.log(resultado)

        return res.redirect('/users')
    },

    destroy: async(req, res) => {
        const { id } = req.params

        const resultado = await Usuario.destroy({
            where: {
                id: id
            }
        })

        console.log(resultado)

        res.redirect('/users')
    },
    findById: async(req, res) => {
        const { id } = req.params;

        const user = await Usuario.findOne({
            where: {
                ID: id
            }
        })
        return res.render('viewUsuarios', { user })
    },
    search: async(req, res) => {
        const { key } = req.query

        const { count: total, rows: users } = await Usuario.findAndCountAll({
            where: {
                nome: {
                    [Op.like]: `%${key}%`
                }
            }
        })
        const totalPagina = Math.round(total / 2)
        return res.render('usuarios', { users, totalPagina })
    },
    bulkCreate: async(req, res) => {
        const lista = [
            { nome: "Teste", email: "teste@gmail.com", senha: "senhateste" }
        ]

        const result = await Usuario.bulkCreate(lista);

        console.log(result)

        res.send('Criados')
    }
}

module.exports = UserController;