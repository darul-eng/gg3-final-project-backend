import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    videoID: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Comment = mongoose.model('Comment', commentSchema)

export {Comment}