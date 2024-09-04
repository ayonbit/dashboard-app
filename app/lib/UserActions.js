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

//Delete User Function
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

//Update User Function
export const UpdateUser = async (formData) => {
  //destructure form data
  const { id, username, email, phone, password, isAdmin, isActive, address } =
    Object.fromEntries(formData);

  //new user to db
  try {
    //Db connection
    await connectToDB();
    //update fileds
    const updateFields = {
      username,
      email,
      phone,
      isAdmin,
      isActive,
      address,
    };

    //update
    Object.keys(updateFields).forEach(
      (key) => (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    //save to db
    await User.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.log(error);
    throw new Error("User not Updated");
  }

  //pathrevalidation
  revalidatePath("/dashboard/users");
  //redirect
  redirect("/dashboard/users");
};

export const authenticateUser = async (formData) => {
  const { username, password } = Object.fromEntries(formData);

  // Input validation
  if (!username || !password) {
    throw new Error("Username and password are required");
  }

  try {
    // Attempt to sign in the user
    const result = await signIn("credentials", { username, password });

    if (!result.ok) {
      throw new Error("Authentication failed");
    }

    // Log successful authentication
    console.log(`User ${username} authenticated successfully`);
  } catch (error) {
    // Log the error securely
    console.error(`Authentication error for user ${username}:`, error.message);
    throw new Error("Authentication error");
  }
};
