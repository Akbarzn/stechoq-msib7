const express = require('express')
const router = express.Router()
const userService = require('./user.service')

router.post('/',async (req,res,next)=>{
   try{
       const userData = req.body
       const user = await userService.createUser(userData)
       res.status(201).json(user)
   }catch(error){
    res.status(400).send(error.message)
   }
})

router.get('/',async(req,res,next)=>{
    try{
        const user = req.body
        const getUser = await userService.getUsers(user)
        res.status(200).json(getUser)
    }catch(error){
        res.status(500).send(error.message)
    }
})

router.get('/:id',async(req,res,next)=>{
    try{
        const user = req.params.id
        const getUser = await userService.getUser(user)
        res.status(200).json(getUser)
    }catch(error){
        res.status(400).send(error.message)
    }
})

// untuk user sebaiknya menggunakan patch
router.patch('/:id',async (req,res,next)=>{
    try{
        const userId = req.params.id
        const dataUser = req.body
        const user = await userService.editUser(userId,dataUser)
        // agar passwordnya tidak tampil
        delete user.password
        res.status(200).json({data:user,message:"User update sukses"})
    }catch(e){
        res.status(400).send(e.message)
    }
})

router.delete('/:id',async (req,res,next)=>{
    try{
        const userId = req.params.id
        const user = await userService.userDelete(userId)
        res.status(204).json(user)
    }catch(e){
        res.status(400).send(e.message)
    }
})

module.exports = router