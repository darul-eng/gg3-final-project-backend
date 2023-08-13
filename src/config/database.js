import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();

const conn = mongoose.connection;
const Connection = async () => {
    // const DB_URI = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`
    const DB_URI = `mongodb+srv://darulikhsan:g9rKn4keH8VPYQPr@gigihlab.gbcg5ja.mongodb.net/tokopedia_play_clone`
    mongoose.connect(DB_URI, {autoIndex: false})
        .then(conn => console.log('Database Connected'))
        .catch(err => console.log(err))
}

export default {Connection, conn}