import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    inventory: {
      type: Number,
      required: true,
      min: 0,
    },
    color: {
      type: String,
    },
    size: {
      type: String,
    },
    img: {
      type: String,
    },
    cat: {
      type: String,
      required: true,
      enum: ["phone", "kitchen", "computer", "pen", "cloth"],
    },
  },
  {
    timestamps: true,
  }
);

//export Users schema
const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

//user model export
export default Product;
