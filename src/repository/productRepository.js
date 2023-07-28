import {Product} from "../model/productModel.js";
import database from "../config/database.js";
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
        const product = await Product.find({videoID: videoID}, {_id: 0, __v: 0});
        await session.commitTransaction();
        return product;
    }catch (error){
        await session.abortTransaction();
        throw new ErrorHandler(500, error.message);
    }finally {
        await session.endSession();
    }
}

export default {findByVideoID}