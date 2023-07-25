import express from "express";
import videoController from "../controller/videoController.js";
import productController from "../controller/productController.js";
import commentController from "../controller/commentController.js";
const router = new express.Router();

router.get('/videos', videoController.findAll);
router.get('/videos/:id', productController.findByVideoID)
router.get('/videos/:id/comments', commentController.findByVideoID)
router.post('/videos/:id/comments', commentController.createComment)

export {router};