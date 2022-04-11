const Task = require('../../domain/task/task')
const Repository = require('./repository')
class TaskRepository extends Repository {
    constructor({db}){
        super({db})
        this.model= this.db.Task
    }
    async findAll() {
        const tasks = await this.model.findAll()
        return tasks.map((val) => {
            return this.toDomain(val)
        })
    }
    toDomain(document) {
        const { id, title, description, status, createdAt, updatedAt } = document
        const task = Task.build({id, title, description, status, createdAt, updatedAt})
        return task
    }
}
module.exports = TaskRepository