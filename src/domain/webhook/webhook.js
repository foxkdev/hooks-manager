const statusType = require('./webhook-status-types');
class Webhook {
  constructor({id, status, actions, response, createdAt, updatedAt}) {
    
    this.id = id;
    this.status = status;
    this.actions = actions;
    this.response = response;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  set status(status) {
    
    if (!Object.values(statusType).includes(status)) {
      throw new Error('Status type is not correct');
    }
    
    this._status = status;
    
  };

  get status() {
    return this._status;
  }

}

module.exports = Webhook
