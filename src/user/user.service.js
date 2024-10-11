const userRepository = require('./user.repository')
const bcrypt = require('bcrypt')

const createUser = async (newUserData)=>{
    // hash password yg dikirimkan dari user dari controller
    const hashedPassword = await bcrypt.hash(newUserData.password, 10)

    // value password yg dikirimkan akan di hash
    newUserData.password = hashedPassword
    const newUser = await userRepository.insertUser(newUserData)
    return newUser
}

const getUsers = async ()=>{
    const users = await userRepository.getAllUser()
    return users
}

const getUser = async(id)=>{
    const user = await userRepository.getUserById(id)
    if(!user){
        throw new Error('User not found')
    }
    return user
}

const editUser = async(id,userData)=>{
    if(userData.password){
        const hashedPassword = await bcrypt.hash(userData.password , 10)
        userData.password = hashedPassword
    }
    await getUser(id)
    const update = await userRepository.updateUser(id,userData)
    return update
}

const userDelete = async(id)=>{
    const user = await userRepository.deleteUser(id)
    return user
}

module.exports = {
    createUser,
    getUsers,
    getUser,
    editUser,
    userDelete
}