import Joi from "joi";

const createCommentValidation = Joi.object({
    videoID: Joi.string().required(),
    username: Joi.string().required(),
    comment: Joi.string().required()
})

export {createCommentValidation}