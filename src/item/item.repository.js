const prisma = require('../db')

const insertItem = async(itemData)=>{
    const newItem = await prisma.item.create({
        data:{
            name:itemData.name,
            description:itemData.description,
            quantity:itemData.quantity
        }
    })
    return newItem
}

const readItem = async ()=>{
    const items = await prisma.item.findMany()
    return items
}

const findItemById = async (id)=>{
    const items = await prisma.item.findUnique({where:
        {id:parseInt(id)}})
    return items
}

const editItem = async (id,itemData)=>{
    const updateItem = await prisma.item.update({
        where:{
            id:parseInt(id)
        },
        data:{
            name:itemData.name,
            description:itemData.description,
            quantity:itemData.quantity
        }  
    })
    return updateItem
}

const deleteItem = async (id)=>{
    const deleteItem = await prisma.item.delete({
        where:{
            id:parseInt(id)
        }
    })
    return deleteItem
}

// sistem stock
const updateItemQuantity = async(itemId,newQuantity)=>{
    await prisma.item.update({
        where:{
            id:parseInt(itemId)
        },
        data:{
            quantity:newQuantity
        }
    })
}
module.exports = {
    insertItem,
    readItem,
    findItemById,
    editItem,
    deleteItem,
    updateItemQuantity
}