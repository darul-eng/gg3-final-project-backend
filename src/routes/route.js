import express from "express";
import videoController from "../controller/videoController.js";
import productController from "../controller/productController.js";
const router = new express.Router();

router.get('/video', videoController.findAll);
router.get('/video/:id', productController.findByVideoID)

export {router};