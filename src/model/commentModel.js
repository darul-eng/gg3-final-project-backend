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

commentSchema.index({videoID: 1});
const CommentModel = mongoose.model('CommentModel', commentSchema)

export {CommentModel}