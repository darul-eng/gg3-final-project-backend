import mongoose from "mongoose";
import dotenv from 'dotenv'
import {Video} from "./src/model/videoModel.js";
import {Product} from "./src/model/productModel.js";
import {Comment} from "./src/model/commentModel.js";

dotenv.config();

// Replace 'your_mongodb_uri' with your actual MongoDB connection URI
const DB_URI = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`

await mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

async function seedDatabase() {
    try {
        // Sample video data
        const videoData = [];
        for (let i = 1; i <= 5; i++) {
            videoData.push({
                videoID: `video${i}`,
                urlImgThumb: `http://example.com/thumb${i}.jpg`,
            });
        }

        // Sample product and comment data
        const productData = [];
        const commentData = [];
        for (const video of videoData) {
            for (let i = 1; i <= 2; i++) {
                const productID = `product${video.videoID}_${i}`;
                productData.push({
                    productID,
                    videoID: video.videoID,
                    linkProduct: `http://example.com/${productID}`,
                    title: `Product ${productID}`,
                    price: parseFloat((Math.random() * 100).toFixed(2)), // Random price between 0 and 100
                });

                commentData.push({
                    videoID: video.videoID,
                    username: `user${i}`,
                    comment: `Comment ${i} for ${video.videoID}`,
                });
            }
        }

        // Save videos to the database
        await Video.insertMany(videoData);

        // Save products to the database
        await Product.insertMany(productData);

        // Save comments to the database
        await Comment.insertMany(commentData);

        console.log('Seeding complete!');
    } catch (err) {
        console.error('Error seeding the database:', err);
    }
}

// Call the seeding function to populate the database
seedDatabase().then(() => {
    // Close the database connection after the seeding is complete
    mongoose.connection.close();
});
