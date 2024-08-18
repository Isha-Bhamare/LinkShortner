const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = async () => {
    try {
        // await mongoose.connect(process.env.MONGO_URL, {
        await mongoose.connect('mongodb://127.0.0.1:27017/linkshortner', {
        // await mongoose.connect('mongodb://localhost:27017/linkshortner', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MONGODB ...")
    } catch (err) {
        console.error('Error connecting to database : ', err);
    }
}

module.exports = connectDB;