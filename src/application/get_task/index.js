const getTaskResponseBuilder = require('./get-task-response-builder')
class GetTask {
    constructor({taskRepository}) {
        this.taskRepository = taskRepository
    }
    async getTask(commandBuilder) {
        const {taskId} = commandBuilder
        const task = await this.taskRepository.findById(taskId)
        return getTaskResponseBuilder({task})
    }
}
module.exports = GetTask