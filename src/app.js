import express from 'express';
import database from "./app/database.js";
import bodyParser from "body-parser";
import {router} from "./routes/route.js";
import dotenv from 'dotenv'
dotenv.config();

const app = express();
await database.Connection(process.env.DB_URI);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/api', router);

app.listen(process.env.APP_PORT, () => {
    console.log(`App Listening on port ${process.env.APP_PORT}`)
})