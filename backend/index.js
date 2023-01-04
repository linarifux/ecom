const express = require('express')
const app = express()
const port = process.env.PORT | 5000
require('dotenv').config()
const mongoose = require('mongoose')
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')


const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('DB Connected..');
    }catch(e){
        console.log('Failed to connect to Database');
    }
}

connect()

app.use(express.json())
app.use('/api/auth', authRoute)
app.use('/api/user', userRoute)

app.listen(port, () => {
    console.log('server running at port: ', port);
})