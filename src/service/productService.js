import productRepository from "../repository/productRepository.js";
import videoRepository from "../repository/videoRepository.js";
import {ErrorHandler} from "../helper/errorHandler.js";


const findByVideoId = async (videoID) => {
    const video = await videoRepository.findByID(videoID)
    if (video === null){
        throw new ErrorHandler(404, "video id is not found");
    }
    const query = {
        videoID: videoID
    }
    return await productRepository.find(query)
}

export default {findByVideoId}