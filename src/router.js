
const express = require('express')
const taskController = require('./infra/controllers/task-controller')

const router = express.Router()
router.use('/tasks', taskController)

router.get('*', (req, res) => {
    res.status(404).json({error: 'path does not exist'})
})
module.exports = router
