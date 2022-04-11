const ApplicationError = require('../application-error')

class FieldEmptyError extends ApplicationError {
  constructor(message) {
    super(message)
    this.name = 'FieldEmptyError'
  }
}

module.exports = FieldEmptyError
