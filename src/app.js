import express from 'express';
import bodyParser from "body-parser";
import dotenv from 'dotenv'
dotenv.config();

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.listen(process.env.APP_PORT, () => {
    console.log(`App Listening on port ${process.env.APP_PORT}`)
})