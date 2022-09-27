const express=require('express')
const connectDB=require('./config/db')
connectDB()
const colors=require('colors')
require('dotenv/config')
const {errorHandler}=require('./middleware/error-middleware')
const app=express();
const port=process.env.PORT || 5000

app.listen(port,()=> console.log(`listening on port ${port}`))

app.use(express.json())
app.use(errorHandler)

app.use(express.urlencoded({extended:false}))

app.use('/api/goals', require('./routes/goalRoutes.js'))

