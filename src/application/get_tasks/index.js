const getTaskResponseBuilder = require('./get-tasks-response-builder')
class GetTasks {
    constructor({taskRepository}) {
        this.taskRepository = taskRepository
    }
    async getTasks(){
        const tasks = await this.taskRepository.findAll()
        return getTaskResponseBuilder({tasks})
    }
}
module.exports = GetTasks