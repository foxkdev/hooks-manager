require('dotenv').config()
const Server = require('./server')
const server = new Server()
server.start().catch((error) => {
    console.error(error.stack)
    process.exit()
})
