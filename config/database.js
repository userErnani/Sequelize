const sequelize = {

    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    database: 'novobanco',
    password: '332000',
    define: {
    timestamps: true,
    underscored: true,
    }
}


module.exports = sequelize;