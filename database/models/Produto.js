module.exports = (sequelize, DataType) => {
    const Usuario = sequelize.define('Produto', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,


        },
        nome: DataType.STRING,
        descricao: DataType.STRING,
        imagem: DataType.STRING,
        preco: DataType.DECIMAL,
        fk_categoria: {
            type: DataType.INTEGER,
        }

    }, {
        tableName: 'produto',
        timestamps: false
    })

    return Produto
}