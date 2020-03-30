const mongoose = require('mongoose');

const MONGO_URL = "mongodb://localhost:27017/db-mania-de-arte";

//Connection with BD
const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });
        console.log("Mongodb connect"); 
    }
    catch (error) {
        console.log(error)
        //Exit process with failure
        process.exit(1)
    }
}

module.exports = connectDB;