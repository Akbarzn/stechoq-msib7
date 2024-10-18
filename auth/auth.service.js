const bcrypt = require('bcrypt')
const userRepository = require('./auth.repository')
const jwt = require('jsonwebtoken')

const generateToken = async(user)=>{
    try{
        return jwt.sign({
            userId:user.id,
            username:user.username,
            email:user.email,
            role:user.role
        },process.env.JWT_SECRET,{expiresIn:'1h'})
    }catch(error){
        console.log(error)
        throw new Error('token error')
    }
}

const register = async (username,email,password)=>{
    try{
        const hashedPassword = await bcrypt.hash(password,10)
        console.log(hashedPassword)
        // field tabel
        const user = {
            username,
            email,
            password:hashedPassword,
            role:"USER"
        }
        const newUser = await userRepository.createUser(user)
        return newUser
    }catch(error){
        console.log('error in register',error)
        throw new Error('error register')
    }
}

const login = async(username,password)=>{
    try{
        const user = await userRepository.findUsernameByUser(username)
        if(!user){
            throw new Error('username tidak ada')
        }

        const validPassword = await bcrypt.compare(password,user.password)
        if(!validPassword){
            throw new Error('password salah')
        }
        const token = await generateToken(user)
        return { user,token }
    }catch(error){
        throw new Error('token error')
    }
}
module.exports = { register,login }
// compare password yg diketik oleh user dan yg ada di database