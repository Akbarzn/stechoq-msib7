const prisma = require('../db')

const getAllItem = async ()=>{
    try{
        return prisma.item.findMany()
    }catch(error){
        throw new Error('product undifined')
    }
}

module.exports = {
    getAllItem
}