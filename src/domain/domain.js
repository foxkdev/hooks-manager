const FieldEmptyError = require("./errors/field-empty-error")

class Domain {
    constructor({requireds = null}) {
        this.requireds = requireds
        this.createdAt = new Date()
        this.updatedAt = new Date()
        this.checkRequired()
    }
    checkRequired() {
        if(!this.requireds || this.requireds.length === 0) {
            this.requireds.forEach((prop) => {
                Object.defineProperty(this, prop, {
                    set: (newVal) => {
                        if(!newVal) {
                            throw new FieldEmptyError(`field ${prop} empty`)
                        }
                        this[`_${prop}`] = newVal
                    },
                    get: () => {
                        return this[`_${prop}`]
                    }
                })
            })
        }
    }
}


module.exports = Domain
