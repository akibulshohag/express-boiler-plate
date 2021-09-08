const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const userRoute = require('./routes/userRoutes')

const app = express()

//environment variable or you can say constants
dotenv.config();

app.use(express.json())

app.use('/test', userRoute)




//MongoDB connection
mongoose.connect('mongodb://localhost/test', {
    useNewUrlParser: true
    // useUnifiedTopology: true,
    // useCreateIndex: true
}, () => {
    app.listen(3000, () => {
        console.log('server is running on port 4000')
        console.log('Database connected!')
    })
});