const itemRepository = require('./auth.repository')

const itemAll = async()=>{
    try{
        const items = await itemRepository.getAllItem()
        return items
    }catch(error){
        throw new Error('items not found')
    }
}

module.exports = {
    itemAll
}