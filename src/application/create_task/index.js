const createTaskResponseBuilder = require('./create-task-response-builder.js')
const Task = require('../../domain/task/task')
const FieldEmptyError = require('../../domain/errors/field-empty-error.js')
class CreateTask {
    constructor({taskRepository}) {
        this.taskRepository = taskRepository
    }
    async create(commandBuilder) {
        try {
            const {title, description ,status} = commandBuilder
            const createdAt = new Date()
            const updatedAt = createdAt
            const task = new Task({title, description, status, createdAt, updatedAt})
            const taskResponse = await this.taskRepository.create(task)
            return createTaskResponseBuilder({task: taskResponse})
        } catch (error) {
            throw new FieldEmptyError(error)
        }
        

    }
}

module.exports = CreateTask