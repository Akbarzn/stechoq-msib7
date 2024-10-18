const express = require('express')
const router = express.Router()
const itemService = require('./auth.service')

router.get('/items',async(req,res,next)=>{
    try{
        const items = await itemService.itemAll()
        res.status(200).json({data:{
            items
        },
        message:'Success Items'
    })
    return items
    }catch(error){
        res.status(500).json({error:error.message})
    }
})

module.exports = router