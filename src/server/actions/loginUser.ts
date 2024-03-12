"use server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const loginUser = async (email: string, password: string) => {
  try {
    const user = await prisma.users.findUnique({ where: { email } });
    // Does the User exist?
    if (!user) {
      throw new Error("User not found");
    }
    // Password Validation
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error("Invalid password");
    }

    // Session Management
    const expire = new Date(Date.now() + 10 * 1000);
    const session = await { user, expires };

    return true;
  } catch (error) {
    throw new Error("Error logging in: " + error);
  }
};
