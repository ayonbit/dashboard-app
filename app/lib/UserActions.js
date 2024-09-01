"use server";
//Dependencies
import bcrypt from "bcrypt";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { connectToDB } from "./dbcon";
import User from "./userModel";

//ADD User Function
export const AddUser = async (formData) => {
  //destructure form data
  const { username, email, phone, password, isAdmin, isActive, address } =
    Object.fromEntries(formData);

  //new user to db
  try {
    //Db connection
    await connectToDB();

    //hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //create new user
    const user = await User.create({
      username,
      email,
      phone,
      password: hashedPassword,
      isAdmin,
      isActive,
      address,
    });

    await user.save();
  } catch (error) {
    console.log(error);
    throw new Error("User not created");
  }

  //pathrevalidation
  revalidatePath("/dashboard/users");
  //redirect
  redirect("/dashboard/users");
};

export const DeleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    //Db connection
    await connectToDB();
    //delete product
    await User.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("User not deleted");
  }

  revalidatePath("/dashboard/products");
};
