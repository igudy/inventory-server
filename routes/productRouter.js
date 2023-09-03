import express from "express";
import { addProduct } from "../controllers/productController.js";
const router = express.Router();

router.post("/", addProduct);

export default router;
