import express from "express";
import videoController from "../controller/videoController.js";
import productController from "../controller/productController.js";
import commentController from "../controller/commentController.js";
const router = new express.Router();

router.get('/video', videoController.findAll);
router.get('/video/:id', productController.findByVideoID)
router.get('/video/:id/comment', commentController.findByVideoID)
router.post('/video/:id/comment', commentController.createComment)

export {router};