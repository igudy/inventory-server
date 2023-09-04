import Product from "../models/productModel.js";

// get all products
const getAllProducts = async (req, res, next) => {
  try {
    const product = await Product.find({});
    res.status(200).json({
      status: "Success",
      message: "Product found",
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Data is not inserted",
      error: error.message,
    });
  }
};

const addProduct = async (req, res, next) => {
  try {
    const result = await Product.create(req.body);
    res.status(201).json({
      status: "success",
      message: "Data created",
      data: result,
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      // Handle validation errors
      const errors = {};
      for (let field in error.errors) {
        errors[field] = error.errors[field].message;
      }
      res.status(400).json({
        status: "Fail",
        message: "Validation errors",
        errors,
      });
    } else {
      // Handle other errors
      res.status(500).json({
        status: "Error",
        message: "Internal server error",
        error: error.message,
      });
    }
  }
};

// get Product
const getProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({
      status: "success",
      message: "Data found",
      data: product,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "can't get the data",
      error: error.message,
    });
  }
};

// updateProduct
const updateProduct = async (req, res, next) => {
  try {
    const result = await Product.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });

    res.status(200).json({
      status: "Success",
      message: "Product update successful",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Data update Failed",
      error: error.message,
    });
  }
};

const bulkProductUpdate = async (req, res, next) => {
  try {
    const products = [];
    for (const product of req.body.ids) {
      const result = await Product.updateOne({ _id: product.id }, product.data);
      products.push(result);
    }

    res.status(200).json({
      status: "Success",
      message: "Multiple product update successful",
      data: products,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Multiple product data update failed",
      error: error.message,
    });
  }
};

// delete product
const deleteProduct = async (req, res, next) => {
  try {
    const result = await Product.deleteOne({ _id: req.params.id });
    if (!result.deletedCount) {
      res.status(400).json({
        status: "Fail",
        error: "Can't delete the product",
      });
    }
    res.status(200).json({
      status: "Success",
      message: "Product deleted successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Product data delete Failed",
      error: error.message,
    });
  }
};

// bulk-delete product
const bulkProductDelete = async (req, res, next) => {
  try {
    const result = await Product.deleteMany({ _id: req.body.ids });
    if (!result.deletedCount) {
      res.status(400).json({
        status: "Fail",
        error: "Can't delete the product",
      });
    }
    res.status(200).json({
      status: "Success",
      message: "Multiple product delete successful",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Product data delete failed",
      error: error.message,
    });
  }
};

export {
  getAllProducts,
  addProduct,
  getProduct,
  updateProduct,
  deleteProduct,
  bulkProductUpdate,
  bulkProductDelete,
};
