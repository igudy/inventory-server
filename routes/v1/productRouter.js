import express from "express";
import {
  addProduct,
  getAllProducts,
} from "../../controllers/productController.js";
const router = express.Router();

router.post("/", addProduct).get("/", getAllProducts);

export default router;
