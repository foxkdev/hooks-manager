const statusTypes = require('./webhook-status-types')
class Webhook {
    constructor({id, status, actions, response, createdAt, updatedAt}) {
        this.id = id
        this.status = status
        this.actions = actions
        this.response = response
        this.createdAt = createdAt
        this.updatedAt = updatedAt
    }

    set status(status) {
        if (false === Object.values(statusTypes).includes(status)) {
            throw new Error('Invalid Status')
        }
        this._status = status
    }

    get status() {
        return this._status
    }
}

module.exports = Webhook