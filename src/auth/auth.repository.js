const prisma = require('../db')

const createUser = async (userData)=>{
    try{
        const newUser = await prisma.user.create({ data:userData })
        return newUser
    } catch(error){
        throw new Error('failed to create new user')
    }
}

const findUsernameByUser = async(username)=>{
    try{
        return await prisma.user.findUnique({where:{username}})
    }catch(error){
        throw new Error('failed to find user')
    }
}


module.exports = {
    createUser,
    findUsernameByUser
}


