import productService from "../service/productService.js";

const findByVideoID = async (req, res) => {
    try{
        const video = await productService.findByVideoId(req.params.id);
        res.json({
            message: "Success",
            code: 200,
            data: video
        })
    }catch (error){
        res.json({message: error.message, status: error.status})
    }
}

export default {findByVideoID}