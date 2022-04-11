require('dotenv').config()
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const router = require('./router')
class Server {
    constructor() {
        this.app = express()
        this.app.use(cors())
        this.app.use(express.json()) // for parsing application/json
        this.app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
        this.app.use(morgan(':method :url :status :response-time ms'))

        this.app.use(router)
    }
    start() {
        return new Promise((resolve, reject) => {
            const server = this.app.listen(process.env.NODE_PORT || 3000, (error) => {
                const { port } = server.address()
                if(error) reject(error)
                console.log(`🤘 API - Port ${port}`)
                resolve(server)
            })
        })
    }
}

const server = new Server()
server.start().catch((error) => {
    console.error(error.stack)
    process.exit()
})