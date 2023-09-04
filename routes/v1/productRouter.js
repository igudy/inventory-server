import express from "express";
import {
  addProduct,
  getAllProducts,
  getProduct,
  updateProduct,
  deleteProduct,
  bulkProductDelete,
  bulkProductUpdate,
} from "../../controllers/productController.js";

const router = express.Router();

router.route("/").post(addProduct).get(getAllProducts);

router.route("/:id").get(getProduct).patch(updateProduct).delete(deleteProduct);

router.route("/bulk-action").patch(bulkProductUpdate).delete(bulkProductDelete);

export default router;
