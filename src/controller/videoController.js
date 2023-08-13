import videoService from "../service/videoService.js";

const findAll = async (req, res) => {
    try{
        let title;
        req.query.title ? title = req.query.title : "";
        const video = await videoService.findAll(title);
        res.json({
            message: "Success",
            code: 200,
            data: video
        })
    }catch (error){
        res.json({message: error.message, status: error.status})
    }
}

export default {findAll}