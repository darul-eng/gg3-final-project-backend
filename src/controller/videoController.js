import videoService from "../service/videoService.js";
import {errorHandler} from "../helper/errorHandler.js";

const findAll = async (req, res) => {
    try{
        const video = await videoService.findAll();
        res.json({
            message: "Success",
            code: 200,
            data: video
        })
    }catch (error){
        res.json(errorHandler(error))
    }
}

export default {findAll}