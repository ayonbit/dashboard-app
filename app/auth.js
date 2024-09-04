//Dependencies
import { authConfig } from "@/authconfig";
import bcrypt from "bcrypt";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDB } from "./lib/dbcon";
import User from "./lib/userModel";
//Login Function for fetch user
const login = async (credentials) => {
  //fetch user
  try {
    //conncet to the database
    connectToDB();
    //fetch user
    const user = await User.findOne({ username: credentials.username });

    if (!user) throw new Error("Worng Credentials !");

    //check password
    const isPasswordProtected = await bcrypt.compare(
      credentials.password,
      user.password
    );
    if (!isPasswordProtected) throw new Error("Worng Credentials !");

    //return user
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to Login!");
  }
};
//Next Auth Configuration
export const { singnIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
});
