import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export const loginUser = async (email: string, password: string) => {
  try {
    const user = await prisma.users.findUnique({ where: { email } });

    if (!user) {
      throw new Error("User not found");
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error("Invalid password");
    }

    return user;
  } catch (error) {
    throw new Error("Error logging in: " + error);
  }
};
