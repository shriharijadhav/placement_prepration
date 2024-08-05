const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()
const todoRouter = require('./routes/todo.route') 

const dbConnect = require('./config/dbConnect')
dbConnect();

const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())
app.use(cors())

app.use(todoRouter)


app.listen(PORT,()=>{
    console.log('server listening on port'+PORT)
})
