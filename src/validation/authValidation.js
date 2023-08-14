import Joi from "joi";
const authValidation = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
})

export {authValidation}