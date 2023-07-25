import Joi from "joi";

const createCommentValidation = Joi.object({
    username: Joi.string().required(),
    comment: Joi.string().required()
})

export {createCommentValidation}