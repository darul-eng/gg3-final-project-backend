import userRepository from "../repository/userRepository.js";
import {ErrorHandler} from "../helper/errorHandler.js";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'
dotenv.config();

const getUserById = async (id) => {
    const user = await userRepository.findById(id)
    if (user === null){
        throw new ErrorHandler(404,"video id is not found");
    }
    return user
}
const loginUser = async (body) => {
    const {username, password} = body
    const user = await userRepository.findUser(username)


    if (user.length === []){
        throw new ErrorHandler(404,"user doesn't exists");
    }

    if(!bcrypt.compare(password, user[0].password)){
       throw new ErrorHandler(403, "username and password invalid")
    }

    const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: '1h'})

    const userLogin = {
        username: user[0].username,
        urlProfileImage: user[0].urlProfileImage,
        token: token
    }

    return userLogin

}

const createUser = async (body) => {
    const {username, password} = body
    const existingUser = await userRepository.findUser(username);

    if (existingUser.length > 0){
        throw new ErrorHandler(409,"user already exists");
    }

    const hashPassword = bcrypt.hashSync(password, 10)

    const newUser = {
        username: username,
        password: hashPassword,
        urlProfileImage: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    }

    return await userRepository.SaveUser(newUser)
}

export default {loginUser, createUser, getUserById}