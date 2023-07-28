import {Video} from "../model/videoModel.js";
import database from "../config/database.js";
import {ErrorHandler} from "../helper/errorHandler.js";

const findAll = async () => {
    const session = await database.conn.startSession();
    const transactionOptions = {
        readPreference: 'primary',
        readConcern: {level: 'snapshot'},
        writeConcern: {w: 'majority'}
    };

    session.startTransaction(transactionOptions)
    try {
        const video = await Video.find({}, {_id: 0, __v: 0});
        await session.commitTransaction();
        return video;
    }catch (error){
        await session.abortTransaction();
        console.log('Error occurred during transaction. Aborting ', error.message);
    }finally {
        await session.endSession();
    }
}

const findByID = async (videoID) => {
    const session = await database.conn.startSession();
    const transactionOptions = {
        readPreference: 'primary',
        readConcern: {level: 'snapshot'},
        writeConcern: {w: 'majority'}
    };

    session.startTransaction(transactionOptions)
    try {
        const video = await Video.findOne({videoID: videoID}, {_id: 0, __v: 0});
        await session.commitTransaction();
        return video;
    }catch (error){
        await session.abortTransaction();
        throw new ErrorHandler(500, error.message);
    }finally {
        await session.endSession();
    }
}

export default {findAll, findByID}