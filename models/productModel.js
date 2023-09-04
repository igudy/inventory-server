import mongoose from "mongoose";

// Schema design - Name, Description, Price, CreatedAt and UpdatedAt
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name for this product"],
    trim: true,
    unique: [true, "Name must be unique"],
    minLength: [3, "Name must be at least 3 characters"],
    maxLength: [30, "Name should not be more than 30 characters"],
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: [0, "Price cannot be negative"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Export the schema as well if needed
export const ProductSchema = productSchema;

// Create a model for the "product" collection
const Product = mongoose.model("product", productSchema);

export default Product;
