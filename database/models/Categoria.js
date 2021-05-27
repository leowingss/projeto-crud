module.exports = (sequelize, DataType) => {
    const Categoria = sequelize.define('Categoria', {
        id_categoria: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,


        },
        nome: DataType.STRING,
    }, {
        tableName: 'categoria',
        timestamps: false
    })

    return Categoria
}