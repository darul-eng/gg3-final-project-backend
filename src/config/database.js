import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();

const conn = mongoose.connection;
const Connection = async () => {
    const DB_URI = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
    mongoose.connect(DB_URI, {autoIndex: false})
        .then(conn => console.log('Database Connected'))
        .catch(err => console.log(err))
}

export default {Connection, conn}