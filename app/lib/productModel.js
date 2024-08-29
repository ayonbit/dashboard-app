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
    image: {
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

//export Products schema
export const Product =
  mongoose.model.Products || mongoose.model("Products", productSchema);
