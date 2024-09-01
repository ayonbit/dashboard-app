//Dependencies
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { connectToDB } from "./dbcon";
import User from "./userModel";
const AddUser = async (formData) => {
  //use server
  "use server";
  //destructure form data
  const { username, email, phone, password, isAdmin, isActive, address } =
    Object.fromEntries(formData);

  //new user to db
  try {
    //Db connection
    await connectToDB();
    //create new user
    const user = await User.create({
      username,
      email,
      phone,
      password,
      isAdmin,
      isActive,
      address,
    });
    console.log(user);
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

export default AddUser;
