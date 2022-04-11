const Domain = require('../domain')
class Task extends Domain{
    constructor({id, title, description, status, createdAt, updatedAt}) {
        super({requireds: ['id', 'title', 'status']})
        this.id = id
        this.title = title
        this.description = description
        this.status = status
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }
    static build({id, title, description, status, createdAt, updatedAt}) {
        const task = new Task({id,title, description, status, createdAt, updatedAt})
        return task
    }

}
module.exports = Task