const {Sequelize, DataTypes} = require('sequelize')
const fs = require('fs')

module.exports = ({config: { sequelize: {uri: sequelizeUri}}}) => {
    const sequelize = new Sequelize(sequelizeUri)

    let models = {}
    fs.readdirSync(__dirname + '/models').forEach((file) => {
        if(file === 'index.js') return
        const factory = require(`./models/${file}`)
        const model = factory({sequelize, DataTypes})
        models[model.name] = model
    })
    Object.keys(models).forEach((key) => {
        if('associate' in models[key]) {
            models[key].associate(models)
        }
    })

    sequelize.sync().then(() => {
        console.log(`😇 - Database & tables created!`);
    })

    return {
        ...models,
        sequelize,
        Sequelize
    }
}