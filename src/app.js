import express from 'express';
import {createServer} from "http";
import {Server} from "socket.io";
import database from "./config/database.js";
import bodyParser from "body-parser";
import {router} from "./routes/route.js";
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config();

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: process.env.ALLOWED_ORIGIN
    }
})
await database.Connection();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())
app.use('/api/v1', router);

io.on('connection', (socket) => {
    console.log("connection ready");
    socket.on('from-client', (data) => {
        socket.broadcast.emit('from-server', data);
    });
    socket.on('disconnect', (socket) => {
        console.log("user left")
    })
})
httpServer.listen(process.env.APP_PORT, () => {
    console.log(`App Listening on port ${process.env.APP_PORT}`)
})