//Dependencies
import { connectToDB } from "./dbcon";
import User from "./userModel";

export const fetchUsers = async (q) => {
  //regex
  const regex = new RegExp(q, "i");

  try {
    connectToDB();
    const users = await User.find({ username: { $regex: regex } });
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch Users!");
  }
};
