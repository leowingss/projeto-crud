module.exports = (sequelize, DataType) => {
    const Usuario = sequelize.define('Usuario', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,


        },
        nome: DataType.STRING,
        email: DataType.STRING,
        senha: DataType.STRING,
        lembrete_senha: {
            type: DataType.STRING,

        },
        status: DataType.TINYINT,
        sobrenome: {
            type: DataType.STRING,
            allowNull: true
        }
    }, {
        tableName: 'usuarios',
        timestamps: false
    })

    return Usuario
}