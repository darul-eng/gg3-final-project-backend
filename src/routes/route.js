import express from "express";
import videoController from "../controller/videoController.js";
const router = new express.Router();

router.get('/video', videoController.findAll);

export {router};