import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productID: {
        type: String,
        required: true
    },
    videoID: {
        type: String,
        required: true
    },
    linkProduct: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

productSchema.index({videoID: 1, productID: 1});
const Product = mongoose.model('Product', productSchema)

export {Product}