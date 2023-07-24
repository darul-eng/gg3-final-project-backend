import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    videoID: {
        type: String,
        required: true
    },
    urlImgThumb: {
        type: String,
        required: true
    }
})

const Video = mongoose.model('Video', videoSchema)

export {Video}