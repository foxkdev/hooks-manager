const awilix = require('awilix')
const { createContainer, asClass, asFunction, asValue, InjectionMode } = awilix
const config = require('./config')
const getTasks = require('./application/get_tasks')
const getTask = require('./application/get_task')
const createTask = require('./application/create_task')
const db = require('./infra/persistence/pg')
const taskRepository = require('./infra/repositories/task-repository')

const container = createContainer({
    injectionMode: InjectionMode.PROXY,
})
//global
container.register({
    config: asValue(config)
})
// repositories
container.register({
    db: asFunction(db).singleton(),
    taskRepository: asClass(taskRepository)
})
//applications
container.register({
    getTasks: asClass(getTasks),
    getTask: asClass(getTask),
    createTask: asClass(createTask),
})
module.exports = container