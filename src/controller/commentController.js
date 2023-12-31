import commentService from "../service/commentService.js";
import { validate } from "../validation/validation.js";
import { createCommentValidation } from "../validation/commentValidation.js";

const findByVideoID = async (req, res) => {
    try{
        const comment = await commentService.findByVideoID(req.params.id);
        res.json({
            message: "Success",
            code: 200,
            data: comment
        })
    }catch (error){
        res.json({message: error.message, status: error.status})
    }
}

const createComment = async (req, res) => {
    try {
        validate(createCommentValidation, req.body);
        const comment = await commentService.createComment(req.body, req.params.id)

        res.json({
            message: "Success",
            code: 201,
            data: comment
        })
    }catch (error){
        res.json({message: error.message, status: error.status})
    }
}

export default {findByVideoID, createComment}