import productService from "../service/productService.js";
import { errorHandler } from "../helper/errorHandler.js";

const findByVideoID = async (req, res) => {
    try{
        const video = await productService.findByVideoId(req.params.id);
        res.json({
            message: "Success",
            code: 200,
            data: video
        })
    }catch (error){
        res.json(errorHandler(error))
    }
}

export default {findByVideoID}