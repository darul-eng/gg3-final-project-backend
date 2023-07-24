import videoService from "../service/videoService.js";

const findAll = async (req, res) => {
    try{
        const video = await videoService.findAll();
        res.json({
            message: "Success",
            code: 200,
            data: video
        })
    }catch (error){
        res.status(500).json({error: error.message})
    }
}

export default {findAll}