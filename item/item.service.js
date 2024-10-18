const { insertItem,readItem,findItemById,editItem,deleteItem } = require("./item.repository");

const createItem = async(item)=>{
    const newItem = await insertItem(item)
    return newItem
}

const getItem = async(item)=>{
    const getItem = await readItem(item)
    return getItem
}

const findItems = async(id)=>{
    const getItemById = await findItemById(id)
    if(!getItemById){
        throw new Error('item not found')
    }
    return getItemById
}

const updateItems = async(id,itemData)=>{
    findItems(id)
    const update = await editItem(id,itemData)
    return update
}

const deletItem = async(id)=>{
    await findItems(id)
    const userDelete = await deleteItem(id)
    return userDelete
}

module.exports = {
    createItem,
    getItem,
    findItems,
    updateItems,
    deletItem
}