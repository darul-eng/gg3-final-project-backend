import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    urlProfileImage: {
        type: String,
        required: true
    }
})

userSchema.index({username: 1});
const User = mongoose.model('User', userSchema)

export {User}