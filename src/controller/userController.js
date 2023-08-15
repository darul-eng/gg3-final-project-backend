import userService from "../service/userService.js";
import { validate } from "../validation/validation.js";
import { authValidation} from "../validation/authValidation.js";


const getCurrentUser = async (req, res) => {
    try{
        const user = await userService.getUserById(req.params.id);

        res.json({
            message: "Success",
            code: 200,
            data: user
        })
    }catch (error){
        res.json({message: error.message, status: error.status})
    }
}
const signIn = async (req, res) => {
    try{
        validate(authValidation, req.body);
        const user = await userService.loginUser(req.body);

        res.json({
            message: "Success",
            code: 200,
            data: user
        })
    }catch (error){
        res.json({message: error.message, status: error.status})
    }
}

const signUp = async (req, res) => {
    try {
        validate(authValidation, req.body);
        const user = await userService.createUser(req.body)

        res.json({
            message: "Success",
            code: 201,
            data: user
        })
    }catch (error){
        res.json({message: error.message, status: error.status})
    }
}

export default {signIn, signUp, getCurrentUser}