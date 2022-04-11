class Repository {
  constructor({db}) {
    this.db = db
  }
  async findById(id) {
    const item = await this.model.findByPk(id)
    return this.toDomain(item)
  }
  async create(domain) {
    const item = await this.model.create(domain)
    return this.toDomain(item)
  }
}

module.exports = Repository