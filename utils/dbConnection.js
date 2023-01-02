const mongoose = require("mongoose")
require('dotenv').config()

const URI = process.env.DB_URI || 'mongodb://localhost:27017/SleepHolic'
module.exports = () => {
    mongoose.set('strictQuery', true);
    return mongoose.connect(URI,{useNewUrlParser: true})
}