module.exports = ({tasks}) => {
    const items = []
    tasks.forEach((task) => {
        const {id, title, description, status, createdAt, updatedAt} = task
        items.push({
            id,
            title,
            description,
            status,
            createdAt,
            updatedAt
        })
    })
    return items
}