//Dependencies
import { connectToDB } from "./dbcon";
import User from "./userModel";

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
