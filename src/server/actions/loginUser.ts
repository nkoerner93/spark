"use server";

import bcrypt from "bcrypt";
import { encrypt, decrypt } from "@/lib/lib";
import { cookies } from "next/headers";
import prisma from "@/app/prisma";

export async function loginUser(email: string, password: string) {
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

    // Create the session
    const expires = new Date(Date.now() + 10000 * 36000); // 1 hour from now
    const session = await encrypt({ userId: user.id, pw: user.id, expires });

    // Save the session in a cookie
    cookies().set("sprk_session", session, { expires, httpOnly: true });

    return true;
  } catch (error) {
    throw new Error("Error logging in: " + error);
  }
}

export async function logout() {
  // Destroy the session
  cookies().set("sprk_session", "", { expires: new Date(0) });
}
