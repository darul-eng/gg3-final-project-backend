import database from "../config/database.js";
import {User} from "../model/userModel.js"
import {ErrorHandler} from "../helper/errorHandler.js";

const findById = async (id) => {
    const session = await database.conn.startSession();
    const transactionOptions = {
        readPreference: 'primary',
        readConcern: {level: 'snapshot'},
        writeConcern: {w: 'majority'}
    };

    session.startTransaction(transactionOptions)
    try {
        const user = await User.find({_id: id});
        await session.commitTransaction();
        return user;
    }catch (error){
        await session.abortTransaction();
        throw new ErrorHandler(500, error.message);
    }finally {
        await session.endSession();
    }
}
const findUser = async (username) => {
    const session = await database.conn.startSession();
    const transactionOptions = {
        readPreference: 'primary',
        readConcern: {level: 'snapshot'},
        writeConcern: {w: 'majority'}
    };

    session.startTransaction(transactionOptions)
    try {
        const user = await User.find({username: username});
        await session.commitTransaction();
        return user;
    }catch (error){
        await session.abortTransaction();
        throw new ErrorHandler(500, error.message);
    }finally {
        await session.endSession();
    }
}

const SaveUser = async (user) => {
    const session = await database.conn.startSession();
    const transactionOptions = {
        readPreference: 'primary',
        readConcern: {level: 'snapshot'},
        writeConcern: {w: 'majority'}
    };

    session.startTransaction(transactionOptions)
    try {
        const newUser = await User.create({
            'username': user.username,
            'password': user.password,
            'urlProfileImage': user.urlProfileImage
        })
        await session.commitTransaction();
        return newUser;
    }catch (error){
        await session.abortTransaction();
        throw new ErrorHandler(500, error.message);
    }finally {
        await session.endSession();
    }
}

export default {findUser, SaveUser, findById}