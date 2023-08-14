import express from "express";
import videoController from "../controller/videoController.js";
import productController from "../controller/productController.js";
import commentController from "../controller/commentController.js";
import userController from "../controller/userController.js";
import verifyToken from "../middleware/jwtMiddleware.js";
const router = new express.Router();

router.get('/videos', verifyToken, videoController.findAll);
router.get('/videos/:id/products', verifyToken, productController.findByVideoID)
router.get('/videos/:id/comments', verifyToken, commentController.findByVideoID)
router.post('/videos/:id/comments', verifyToken, commentController.createComment)
router.post('/users/signup', userController.signUp)
router.post('/users/signin', userController.signIn)

export {router};