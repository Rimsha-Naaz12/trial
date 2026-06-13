const express = require('express');
const dotenv = require('dotenv').config()
const app = express();
const connectDb = require('./config/db')
const productRoutes = require('./routes/productRoutes')
const cors = require('cors')

connectDb()

app.use(express.json())
app.use(cors({origin:"https://trial-mu-one.vercel.app"}))
app.use('/api/products',productRoutes)

app.listen(process.env.PORT,()=>{
    console.log("Server is running at port 3000")
})