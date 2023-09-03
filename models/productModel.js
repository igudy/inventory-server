import mongoose from "mongoose";

const schema = mongoose.schema;

// Schema design - Name, Description, Price, CreatedAt and UpdatedAt
const productSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please provide a name for this product"],
    trime: true,
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

export default productSchema;
