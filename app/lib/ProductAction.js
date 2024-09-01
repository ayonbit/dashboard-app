"use server";
//Dependencies

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { connectToDB } from "./dbcon";
import Product from "./productModel";

//Add Product Function
const AddProduct = async (formData) => {
  //destructure form data
  const { title, desc, price, inventory, color, size, cat } =
    Object.fromEntries(formData);

  //new user to db
  try {
    //Db connection
    await connectToDB();

    //create new product
    const product = await Product.create({
      title,
      desc,
      price,
      inventory,
      color,
      size,
      cat,
    });
    console.log(product);
    await product.save();
  } catch (error) {
    console.log(error);
    throw new Error("Product not created");
  }

  //pathrevalidation
  revalidatePath("/dashboard/products");
  //redirect
  redirect("/dashboard/products");
};

//module export
export default AddProduct;
