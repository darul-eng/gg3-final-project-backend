import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();

const conn = mongoose.connection;
const Connection = async () => {
    const DB_URI = process.env.MONGO_CONNECTION_STRING
    mongoose.connect(DB_URI, {autoIndex: false})
        .then(conn => console.log('Database Connected'))
        .catch(err => console.log(err))
}

export default {Connection, conn}