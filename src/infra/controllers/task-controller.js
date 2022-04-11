const express = require('express')
const { check, body } = require('express-validator')
const container = require('../../container')
const getTasks = container.resolve('getTasks')
const getTask = container.resolve('getTask')
const createTask = container.resolve('createTask')

const getTaskCommandBuilder = require('../../application/get_task/get-task-command-builder')
const createTaskCommandBuilder = require('../../application/create_task/create-task-command-builder')
const FieldEmptyError = require('../../domain/errors/field-empty-error')
const router = express.Router()
const {OK, BAD_REQUEST} = require('../http-status-code')
router.get('/:taskId',
    check('taskId').notEmpty(),
    async (req, res, next) => {
    const {taskId} = req.params
    const getTaskCommand = getTaskCommandBuilder({taskId})
    const getTaskResponse = await getTask.getTask(getTaskCommand)
    res.json(getTaskResponse)
})
router.post('/',
    body('title').notEmpty(),
    body('status').notEmpty(),
    async (req, res, next) => {
    console.log(req.body)
        const {title, description, status} = req.body
        const createTaskCommand = createTaskCommandBuilder({title, description, status})
        try {
            const createTaskResponse = await createTask.create(createTaskCommand)
            res.status(OK).json(createTaskResponse)
        } catch (error) {
            if(error instanceof FieldEmptyError) {
                res.status(BAD_REQUEST).json({message: error.message})
            }
            next()
        }
       
    })

router.get('/', async (req, res, next) => {
    const getTasksResponse = await getTasks.getTasks()
    res.json(getTasksResponse)
})




module.exports = router