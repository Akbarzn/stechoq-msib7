const express = require('express')
const router = express.Router()
const { createItem,getItem,findItems,updateItems,deletItem } = require('./item.service')

router.post('/',async(req,res,next)=>{
    try{
        const newItemData = req.body
        const newItem = await createItem(newItemData)
        res.status(201).json(newItem)
    }catch(error){
        res.status(400).send(error.message)
    }
})

router.get('/',async(req,res,next)=>{
    try{
        const itemData = req.body
        const getItems = await getItem(itemData)
        res.status(200).json(getItems)
    }catch(error){
        res.status(400).send(error.message)
    }
})

router.get('/:id',async(req,res,next)=>{
    try{
        const itemId = parseInt(req.params.id)
        const getItemId = await findItems(itemId)
        res.status(200).json(getItemId)
    }catch(error){
        res.status(400).send(error.message)
    }
})

router.put('/:id',async(req,res,next)=>{
    try{
        const itemId = req.params.id
        const updateItemData = req.body
        const updateItem = await updateItems(itemId,updateItemData)
        res.status(200).json(updateItem)
    }catch(error){
        console.log(error)
        res.status(400).send(error.message)
    }
})

router.delete('/:id',async(req,res,next)=>{
    try{
        const idItem = req.params.id
        const deletedItem = await deletItem(idItem)
        res.status(200).json(deletedItem)
    }catch(e){
        console.log(e.message)
        res.status(400).send(e.message)
    }
})

module.exports = router