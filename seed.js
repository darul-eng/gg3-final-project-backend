
// Replace 'your_mongodb_uri' with your actual MongoDB connection URI
// mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}
import mongoose from "mongoose";
import {Video} from "./src/model/videoModel.js";
import {Product} from "./src/model/productModel.js";
import {Comment} from "./src/model/commentModel.js";
import dotenv from "dotenv";
dotenv.config()

const DB_URI = process.env.MONGO_CONNECTION_STRING

await mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});


const videos = [
    {
        _id: "a",
        videoId: "7aaMy19tHVE",
        imgThumUrl: "https://i.ytimg.com/vi/7aaMy19tHVE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA3OliGrkEpXUYEPtMZIzeVC-7Nvw",
        products: [
            {
                videoId: "",
                linkProduct: "https://www.tokopedia.com/stanleytools/stanley-hand-tool-multi-set-alat-perkakas-set-110pcs-stmt81243-840",
                title: "Stanley Hand Tool Multi Set / Alat Perkakas Set 110pcs STMT81243-840",
                price: 1998000
            },
            {
                videoId: "",
                linkProduct: "https://www.tokopedia.com/rumix/perkakas-tangan-alat-pembuka-jam-tangan-perbaikan-servis-arloji-set-16pcs-plastik?extParam=ivf%3Dfalse&src=topads",
                title: "Perkakas Tangan Alat Pembuka Jam Tangan Perbaikan Servis Arloji Set - 16PCS - Plastik",
                price: 1998000
            },
            {
                videoId: "",
                linkProduct: "https://www.tokopedia.com/kingofaccessoriess/tool-kit-187-pcs-perkakas-bengkel-dan-rumah-koper-koper-set-perkakas-53pcs-24gigi?extParam=ivf%3Dtrue&src=topads",
                title: "Tool Kit 187 PCS Perkakas Bengkel Dan Rumah Koper/Koper Set Perkakas",
                price: 1998000
            }
        ]
    },
    {
        _id: "b",
        videoId: "6gNAzCo265I",
        imgThumUrl: "https://i.ytimg.com/vi/6gNAzCo265I/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBabnKxo6NEwEAenroDQeh6HZBjhQ",
        products: [
            {
                videoId: "",
                linkProduct: "https://www.tokopedia.com/ingatjayaselalu/warer-pas-magnet-9inci-23cm-waterpas-mini-timbangan-air-magnet-tukang?extParam=ivf%3Dfalse%26src%3Dsearch",
                title: "waterpas mini timbangan air ",
                price: 15000
            },
            {
                videoId: "",
                linkProduct: "https://www.tokopedia.com/stanleytools/stanley-hand-tool-multi-set-alat-perkakas-set-110pcs-stmt81243-840",
                title: "Stanley Hand Tool Multi Set / Alat Perkakas Set 110pcs STMT81243-840",
                price: 1998000
            },
            {
                videoId: "",
                linkProduct: "https://www.tokopedia.com/rumix/perkakas-tangan-alat-pembuka-jam-tangan-perbaikan-servis-arloji-set-16pcs-plastik?extParam=ivf%3Dfalse&src=topads",
                title: "Perkakas Tangan Alat Pembuka Jam Tangan Perbaikan Servis Arloji Set - 16PCS - Plastik",
                price: 1998000
            },
            {
                videoId: "",
                linkProduct: "https://www.tokopedia.com/kingofaccessoriess/tool-kit-187-pcs-perkakas-bengkel-dan-rumah-koper-koper-set-perkakas-53pcs-24gigi?extParam=ivf%3Dtrue&src=topads",
                title: "Tool Kit 187 PCS Perkakas Bengkel Dan Rumah Koper/Koper Set Perkakas",
                price: 1998000
            }
        ]
    },
    {
        _id: "c",
        videoId: "up8sF99Ggmg",
        imgThumUrl: "https://i.ytimg.com/vi/up8sF99Ggmg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCi9OyXFHYzJwGO2elQqj8Xbamgpg",
        products: [
            {
                videoId: "",
                linkProduct: " https://www.tokopedia.com/evanzorastore/blouse-baju-atasan-wanita-kemeja-pakaian-wanita-warna-putih-casual-kemeja-putih-all-size?extParam=ivf%3Dfalse",
                title: "Blouse/baju atasan wanita",
                price: 78000
            },
            {
                videoId: "",
                linkProduct: "https://www.tokopedia.com/soulmatefashion/aruna-blouse-atasan-oversize-blouse-unik-baju-wanita-kekinian-hitam?extParam=ivf%3Dfalse&src=topads",
                title: "Blouse/baju atasan wanita",
                price: 84000
            },
        ]
    },
    {
        _id: "d",
        videoId: "r0MXRvIhQOk",
        imgThumUrl: "https://i.ytimg.com/vi/r0MXRvIhQOk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAvnY7UlKvnGrp9iGgivv7sLwVwiA",
        products: [
            {
                videoId: "",
                linkProduct: " https://www.tokopedia.com/evanzorastore/blouse-baju-atasan-wanita-kemeja-pakaian-wanita-warna-putih-casual-kemeja-putih-all-size?extParam=ivf%3Dfalse",
                title: "Blouse/baju atasan wanita",
                price: 78000
            },
        ]
    },
    {
        _id: "e",
        videoId: "XP_WG4Dh5wM",
        imgThumUrl: "https://i.ytimg.com/vi/XP_WG4Dh5wM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDEV7rTaW63p3QPBxgMGw2BDUj6xw",
        products: [
            {
                videoId: "",
                linkProduct: "https://www.tokopedia.com/elsyzid/sepatu-compass-gazelle-low-black-white-blue-42?extParam=ivf%3Dfalse%26src%3Dsearch",
                title: "sepatu Compass Gazelle Low Black White - blue",
                price: 10000
            },
        ]
    },{
        _id: "f",
        videoId: "ynJOC06fWoM",
        imgThumUrl: "https://i.ytimg.com/vi/ynJOC06fWoM/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDVxhetxuMLDvLhrNYD3CUutTOgqw",
        products: [
            {
                videoId: "",
                linkProduct: "https://www.tokopedia.com/sepatulokalid/sepatu-ventela-original-pria-vantela-public-ethnic-basic-ethnic-low-42?extParam=ivf%3Dtrue%26src%3Dsearch",
                title: "Sepatu Ventela Original Pria Vantela PUBLIC / ETHNIC ",
                price: 230000
            },
        ]
    },
    {
        _id: "g",
        videoId: "inrsN3S8g6A",
        imgThumUrl: "https://i.ytimg.com/vi/inrsN3S8g6A/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBZ4o31APbMcuB3b-0jaPc0IfPfyQ",
        products: [
            {
                videoId: "",
                linkProduct: "https://www.tokopedia.com/sepatukanky/kanky-story-hikaru-sepatu-sneakers-casual-sport-wanita-dewasa-black-grey-38-d4819?extParam=ivf%3Dfalse&src=topads",
                title: "Kanky Story Hikaru - Sepatu Sneakers Casual Sport Wanita Dewasa",
                price: 78000
            },
        ]
    },{
        _id: "h",
        videoId: "Vvh2Cgz2hnk",
        imgThumUrl: "https://i.ytimg.com/vi/Vvh2Cgz2hnk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB8IuaGjTHn8T1EYAPULUuVzgu1NA",
        products: [
            {
                videoId: "",
                linkProduct: "https://www.tokopedia.com/okechuku/okechuku-jay-celana-chino-panjang-pria-celana-chino-pria-celana-pria-hitam-28?extParam=ivf%3Dfalse%26src%3Dsearch",
                title: "Okechuku JAY Celana Chino Panjang Pria Celana Chino Pria Celana Pria",
                price: 78000
            },
        ]
    },{
        _id: "i",
        videoId: "8l7zLlhFHpc",
        imgThumUrl: "https://i.ytimg.com/vi/8l7zLlhFHpc/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB4D9NK0p7FU54FvxYynXcfhrR5lA",
        products: [
            {
                videoId: "",
                linkProduct: "https://www.tokopedia.com/virendgallery/sepatu-pesta-flat-shoes-anak-perempuan-pita-pink-putih-hitam-krem?extParam=ivf%3Dfalse%26src%3Dsearch",
                title: "sepatu pesta flat shoes anak perempuan pita pink putih hitam krem",
                price: 78.000
            },
        ]
    },{
        _id: "j",
        videoId: "geoYkFNOQk8",
        imgThumUrl: "https://i.ytimg.com/vi/geoYkFNOQk8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCt0loXSIikyyaPktwIq9WyM631rA",
        products: [
            {
                videoId: "",
                linkProduct: " https://www.tokopedia.com/evanzorastore/blouse-baju-atasan-wanita-kemeja-pakaian-wanita-warna-putih-casual-kemeja-putih-all-size?extParam=ivf%3Dfalse",
                title: "Blouse/baju atasan wanita",
                price: 90000
            },
        ]
    },{
        _id: "k",
        videoId: "6e2kW-PeuPk",
        imgThumUrl: "https://i.ytimg.com/vi/6e2kW-PeuPk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC-ROMe_LEJrIcymQp3fEudqo4MAw",
        products: [
            {
                videoId: "",
                linkProduct: " https://www.tokopedia.com/evanzorastore/blouse-baju-atasan-wanita-kemeja-pakaian-wanita-warna-putih-casual-kemeja-putih-all-size?extParam=ivf%3Dfalse",
                title: "Blouse/baju atasan wanita",
                price: 78.000
            },
        ]
    },{
        _id: "l",
        videoId: "O6kdcn2F40c",
        imgThumUrl: "https://i.ytimg.com/vi/O6kdcn2F40c/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA_vWmyNs104KyfdJ5qCtX5Af5k9A",
        products: [
            {
                videoId: "",
                linkProduct: " https://www.tokopedia.com/evanzorastore/blouse-baju-atasan-wanita-kemeja-pakaian-wanita-warna-putih-casual-kemeja-putih-all-size?extParam=ivf%3Dfalse",
                title: "Blouse/baju atasan wanita",
                price: 78.000
            },
        ]
    },
    {
        _id: "m",
        videoId: "FL6qUikpec4",
        imgThumUrl: "https://i.ytimg.com/vi/FL6qUikpec4/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAvdvPK4KvxN3hNoiVS4tYLUxyb3A",
        products: [
            {
                videoId: "",
                linkProduct: "https://www.tokopedia.com/blazemusic/gitar-akustik-elektrik-cort-ad810e-ad-810-e-op-paket-lengkap?extParam=ivf%3Dfalse&src=topads",
                title: "Gitar Cort Akustik",
                price: 690000
            },
            {
                videoId: "",
                linkProduct: "https://www.tokopedia.com/jakartamusicstore/gitar-akustik-elektrik-listrik-cort-murah-equalizer-7545r-high-quality-pick-tas?extParam=ivf%3Dfalse&src=topads",
                title: "Gitar Akustik Elektrik Listrik Cort",
                price: 859000
            },
            {
                videoId: "",
                linkProduct: "https://www.tokopedia.com/netmusik/cort-ad810-op-ad-810-810op-gitar-akustik-murah-berkualitas-pnn?extParam=ivf%3Dfalse%26src%3Dsearch",
                title: "Cort AD810 OP",
                price: 690000
            },
            {
                videoId: "",
                linkProduct: "https://www.tokopedia.com/bandarmusikjakarta/cort-ad810-op-acoustic-guitar-bmj?extParam=ivf%3Dfalse%26src%3Dsearch",
                title: "Cort AD810-OP Acoustic Guitar",
                price: 1112000
            }
        ]
    }
]
async function seedDatabase() {
    try {
        const videoData = [];
        const productData = [];
        const commentData = [];

        for (const video of videos) {
            videoData.push({
                videoID: video.videoId,
                urlImgThumb: video.imgThumUrl,
            });

            for (const product of video.products) {
                productData.push({
                    productID: `product_${video.videoId}`,
                    videoID: video.videoId,
                    linkProduct: product.linkProduct,
                    title: product.title,
                    price: product.price,
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
    } finally {
        // Close the database connection after the seeding is complete
        mongoose.connection.close();
    }
}

// Call the seeding function to populate the database
seedDatabase().then(() => {
    console.log('Seeding complete!');
});