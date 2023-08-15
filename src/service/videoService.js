import videoRepository from "../repository/videoRepository.js";
import productRepository from "../repository/productRepository.js";

const findAll = async (title) => {
    let videos = []
    if (!title){
        videos = await videoRepository.findAll()
    }else{
        const query = {
            title: {$regex: new RegExp(title, "i")}
        }
        const products = await productRepository.find(query);

        const processedVideoIDs = new Set();
        for (const product of products){
            const videoID = product.videoID

            if (!processedVideoIDs.has(videoID)){
                processedVideoIDs.add(videoID)
                const video = await videoRepository.findByID(product.videoID)
                videos.push(video)
            }

        }
    }

    return videos
}

export default {findAll}