import {Video} from "../model/videoModel.js";
import database from "../app/database.js";

const findAll = async () => {
    const session = await database.conn.startSession();
    const transactionOptions = {
        readPreference: 'primary',
        readConcern: {level: 'snapshot'},
        writeConcern: {w: 'majority'}
    };

    session.startTransaction(transactionOptions)
    try {
        const video = await Video.find();
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
        const video = await Video.findOne({videoID: videoID});
        await session.commitTransaction();
        return video;
    }catch (error){
        await session.abortTransaction();
        console.log('Error occurred during transaction. Aborting ', error.message);
    }finally {
        await session.endSession();
    }
}

export default {findAll, findByID}