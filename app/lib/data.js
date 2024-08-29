//Dependencies
import { connectToDB } from "./dbcon";
import User from "./userModel";

export const fetchUsers = async () => {
  try {
    connectToDB();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch Users!");
  }
};
