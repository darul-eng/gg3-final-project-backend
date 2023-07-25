import productRepository from "../repository/productRepository.js";
import videoRepository from "../repository/videoRepository.js";


const findByVideoId = async (videoID) => {
    const video = await videoRepository.findByID(videoID)
    if (video === null){
        throw new Error("Not Found");
    }
    return await productRepository.findByVideoID(video.videoID)
}

export default {findByVideoId}