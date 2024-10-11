const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config()
const PORT = process.env.PORT


app.use(express.json())
app.get('/',(res,req)=>{
    console.log(tes)
    res.send('hello world')
})
const itemController = require('./item/item.controller')
const authController = require('./auth/auth.controller')
const userController = require('./user/user.controller')
const materialController = require('./material/auth.controller')
const transactionController = require('./transaction/transaction.controller')

app.use('/api/users',userController)
app.use('/api/items',itemController)
app.use('/api/transactions',transactionController)
app.use('/api/auth',authController)
app.use('/material',materialController)

app.listen(PORT,()=>{
    console.log('server berjalan'+PORT)
})