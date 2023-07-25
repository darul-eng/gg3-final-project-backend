import {Comment} from "../model/commentModel.js";
import database from "../app/database.js";
import {ErrorHandler} from "../helper/errorHandler.js";

const findByVideoID = async (videoID) => {
    const session = await database.conn.startSession();
    const transactionOptions = {
        readPreference: 'primary',
        readConcern: {level: 'snapshot'},
        writeConcern: {w: 'majority'}
    };

    session.startTransaction(transactionOptions)
    try {
        const comments = await Comment.find({videoID: videoID}, {_id: 0, __v: 0});
        await session.commitTransaction();
        return comments;
    }catch (error){
        await session.abortTransaction();
        throw new ErrorHandler(500, error.message);
    }finally {
        await session.endSession();
    }
}

const saveComment = async (comment) => {
    const session = await database.conn.startSession();
    const transactionOptions = {
        readPreference: 'primary',
        readConcern: {level: 'snapshot'},
        writeConcern: {w: 'majority'}
    };

    session.startTransaction(transactionOptions)
    try {
        const newComment = await Comment.create({
            'videoID': comment.videoID,
            'username': comment.username,
            'comment': comment.comment
        })
        await session.commitTransaction();
        return newComment;
    }catch (error){
        await session.abortTransaction();
        throw new ErrorHandler(500, error.message);
    }finally {
        await session.endSession();
    }
}

export default {findByVideoID, saveComment}