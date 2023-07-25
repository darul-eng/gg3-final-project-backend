import {ErrorHandler} from "../helper/errorHandler.js";

const validate = (schema, req) => {
    const result = schema.validate(req, {abortEarly: false, allowUnknown: false});
    if (result.error){
        throw new ErrorHandler(400, result.error.message)
    }
}

export { validate }