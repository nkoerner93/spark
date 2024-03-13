"use server";

import { PrismaClient, Users } from "@prisma/client";
import bcrypt from "bcrypt";
import { toast } from "@/components/ui/shad-cn/use-toast";
import prisma from "@/app/prisma";

export const getUserFromDB = async (userData: {
  email: string;
  password: string;
}): Promise<Users> => {
  try {
    const user = await prisma.users.findUnique({
      where: {
        email: userData.email, // userEmail is the email you want to find
      },
    });

    if (user) {
      // Compare hashed password stored in the database with the provided password
      const passwordMatch = await bcrypt.compare(
        userData.password,
        user.password,
      );

      if (passwordMatch) {
        // Passwords match, user is authenticated
        console.log("User authenticated");
        return user;
      } else {
        // Passwords don't match
        toast({
          title: "Error!",
          description: "The entered credentials could not be found.",
        });
        throw Error("Incorrect password");
      }
    } else {
      toast({
        title: "Error!",
        description: "The entered credentials could not be found.",
      });
      // User not found
      throw Error("User not found");
    }
  } catch (error) {
    // Handle any unexpected errors
    console.error("An error occurred:", error);
    // You can also rethrow the error if you want to propagate it further
    throw error;
  }
};
