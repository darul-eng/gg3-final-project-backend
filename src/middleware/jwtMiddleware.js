import {ErrorHandler} from "../helper/errorHandler.js";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
dotenv.config();

const verifyToken = (req, res, next) => {
    const tokenWithBearer = req.header('Authorization')

    if(!tokenWithBearer){
        throw new ErrorHandler(401, "Unauthorized")
    }
    const arrayToken = tokenWithBearer.split(" ");

    try {
        const decoded = jwt.verify(arrayToken[1], process.env.JWT_SECRET);
        req.user = decoded
        next()
    }catch (error){
        throw new ErrorHandler(403, error.message)
    }
}

export default verifyToken;