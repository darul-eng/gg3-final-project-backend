import {Product} from "../model/productModel.js";
import database from "../app/database.js";

const findByVideoID = async (videoID) => {
    const session = await database.conn.startSession();
    const transactionOptions = {
        readPreference: 'primary',
        readConcern: {level: 'snapshot'},
        writeConcern: {w: 'majority'}
    };

    session.startTransaction(transactionOptions)
    try {
        const product = await Product.find({videoID: videoID});
        await session.commitTransaction();
        return product;
    }catch (error){
        await session.abortTransaction();
        console.log('Error occurred during transaction. Aborting ', error.message);
    }finally {
        await session.endSession();
    }
}

export default {findByVideoID}