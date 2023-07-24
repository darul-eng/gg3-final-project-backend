import express from 'express';
import database from "./app/database.js";
import bodyParser from "body-parser";
import dotenv from 'dotenv'
dotenv.config();

const app = express();
await database.Connection(process.env.DB_URI);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

app.listen(process.env.APP_PORT, () => {
    console.log(`App Listening on port ${process.env.APP_PORT}`)
})