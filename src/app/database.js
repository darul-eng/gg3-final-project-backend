import mongoose from "mongoose";

const conn = mongoose.connection;
const Connection = async (uri, options) => {
    mongoose.connect(uri)
        .then(conn => console.log('Database Connected'))
        .catch(err => console.log(err))
}

export default {Connection, conn}