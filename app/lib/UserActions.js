"use server";
// Dependencies
import bcrypt from "bcrypt";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { connectToDB } from "./dbcon";
import User from "./userModel";

// ADD User Function
export const AddUser = async (formData) => {
  const { username, email, phone, password, isAdmin, isActive, address } =
    Object.fromEntries(formData);

  try {
    await connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

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

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

// Delete User Function
export const DeleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    await connectToDB();
    await User.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
    throw new Error("User not deleted");
  }

  revalidatePath("/dashboard/products");
};

// Update User Function
export const UpdateUser = async (formData) => {
  const { id, username, email, phone, password, isAdmin, isActive, address } =
    Object.fromEntries(formData);

  try {
    await connectToDB();

    const updateFields = { username, email, phone, isAdmin, isActive, address };
    Object.keys(updateFields).forEach((key) => {
      if (updateFields[key] === "" || updateFields[key] === undefined) {
        delete updateFields[key];
      }
    });

    await User.findByIdAndUpdate(id, updateFields);
  } catch (error) {
    console.log(error);
    throw new Error("User not Updated");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};
