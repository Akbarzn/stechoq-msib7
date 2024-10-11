const prisma = require('../db')

const insertUser = async (userData)=>{
    const user = await prisma.user.create({
        data:{
            username:userData.username,
            email:userData.email,
            password:userData.password,
            role:userData.role
        }
    })
    return user
}

const getAllUser = async ()=>{
    const users = await prisma.user.findMany({
        // yg akan ditampilkan
        select:{
            id:true,
            username:true,
            email:true,
            role:true,
            createdAt:true
        }
    })
    return users
}

const getUserById = async(id)=>{
    const user = await prisma.user.findUnique({where:{
        id:parseInt(id)
    },
    select:{
        id:true,
        username:true,
        email:true,
        role:true,
        createdAt:true
    }
})
    return user
}

const updateUser = async(id,userData)=>{
    const users = await prisma.user.update({
        where:{
            id:parseInt(id)
        },
        data:{
            username:userData.username,
            email:userData.email,
            password:userData.password,
            role:userData.role
        }
    })
    return users
}

const deleteUser = async(id)=>{
    const user = await prisma.user.delete({
        where:{
            id:parseInt(id)
        }
    })
    return user
}

module.exports = {
    insertUser,
    getAllUser,
    getUserById,
    updateUser,
    deleteUser
}