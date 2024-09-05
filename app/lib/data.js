//Dependencies

import { connectToDB } from "./dbcon";
import Product from "./productModel";
import User from "./userModel";
//for Users fetch
export const fetchUsers = async (q, page) => {
  //regex
  const regex = new RegExp(q, "i");
  //pagination  item for page
  const Item_Per_Page = 5;

  try {
    connectToDB();
    //db query for page number
    const count = await User.countDocuments({
      username: { $regex: regex },
    });
    const users = await User.find({ username: { $regex: regex } })
      .limit(Item_Per_Page)
      .skip(Item_Per_Page * (page - 1));
    return { count, users };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch Users!");
  }
};

//for fetch single user to update
export const fetchUpdateUsers = async (id) => {
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch Update Users!");
  }
};

//for fetch products
export const fetchProducts = async (q, page) => {
  //regex
  const regex = new RegExp(q, "i");
  //pagination  item for page
  const Item_Per_Page = 5;

  try {
    connectToDB();
    //db query for page number
    const count = await Product.countDocuments({
      title: { $regex: regex },
    });
    const products = await Product.find({ title: { $regex: regex } })
      .limit(Item_Per_Page)
      .skip(Item_Per_Page * (page - 1));
    return { count, products };
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch Users!");
  }
};

//for fetch single product to update
export const fetchUpdateProducts = async (id) => {
  try {
    connectToDB();
    const product = await Product.findById(id);
    return product;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch Update Products!");
  }
};


