import {Video} from "../model/videoModel.js";
import database from "../app/database.js";

const findAll = async () => {
    const session = await database.conn.startSession();
    console.log("session start")
    const transactionOptions = {
        readPreference: 'primary',
        readConcern: {level: 'snapshot'},
        writeConcern: {w: 'majority'}
    };

    session.startTransaction(transactionOptions)
    console.log("transaction start")
    try {
        const video = await Video.find();
        console.log(video);
        await session.commitTransaction();
        console.log("transaction commit")
        return video;
    }catch (error){
        await session.abortTransaction();
        console.log("Transaction abort")
        console.log('Error occurred during transaction. Aborting ', error.message);
    }finally {
        await session.endSession();
        console.log("session end")
    }
}

export default {findAll}