const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config()

const DATABASE_URL = process.env.DATABASE_URL


const dbConnect = ()=>{
    mongoose.connect(DATABASE_URL)
    .then(()=>{
        console.log('DB connection succeeded')
    })
    .catch(()=>{
        console.log('DB connection failed')
    })
}

module.exports = dbConnect