const env = process.env.NODE_ENV || 'run'

let dbURI = process.env.DB_URI
if(!dbURI) {
    dbURI = `${process.env.DB_DIALECT}://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_URL}/${process.env.DB_DATABASE}`
}

const run = {
    sequelize: {
        uri: dbURI
    }
}

const test = {

}
const config = {
    run,
    test
}
module.exports = config[env]