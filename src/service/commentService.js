import commentRepository from "../repository/commentRepository.js";
import videoRepository from "../repository/videoRepository.js";
import { ErrorHandler } from "../helper/errorHandler.js";


const findByVideoID = async (videoID) => {
    const video = await videoRepository.findByID(videoID)
    if (video === null){
        throw new ErrorHandler(404,"video id is not found");
    }
    return await commentRepository.findByVideoID(video.videoID)
}

const createComment = async (body, videoID) => {
    const video = await videoRepository.findByID(videoID);
    if (video === null){
        throw new ErrorHandler(404,"video id is not found");
    }
    const newComment = {
        videoID: videoID,
        username: body.username,
        comment: body.comment
    }
    return await commentRepository.saveComment(newComment)
}

export default {findByVideoID, createComment}