import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    videoID: {
        type: String,
        required: true,
        unique: true
    },
    urlImgThumb: {
        type: String,
        required: true
    }
})

videoSchema.index({videoID: 1});
const Video = mongoose.model('Video', videoSchema)

export {Video}