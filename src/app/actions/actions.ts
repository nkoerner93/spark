"use server";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { sessionOptions, SessionData, defaultSession } from "@/lib/lib";
import { getIronSession } from "iron-session";
import prisma from "../prisma";
import { redirect } from "next/navigation";
import { Users } from "@prisma/client";

// ===============================
// LOGIN
// ===============================
export async function loginUser(email: string, password: string) {
  const session = await getSession();
  try {
    const user = await prisma.users.findUnique({ where: { email } });
    // Does the User exist?
    if (!user) {
      return false;
    }
    // Password Validation
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return false;
    }
    session.email = user.email;
    session.userId = user.id;
    session.username = user.username;
    session.isLoggedIn = true;

    await session.save();

    return true;
  } catch (error) {
    return { success: false, error: error }; // Return error response
  }
}

// ===============================
// LOGOUT
// ===============================
export async function logout() {
  // false => no db call for logout
  const session = await getSession();
  session.destroy();
  redirect("/");
}

// ===============================
// GET SESSION
// ===============================
export async function getSession() {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);
  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }
  return session;
}

// ===============================
// CREATE USER
// ===============================

export const createUserToDB = async (userData: {
  username: string;
  email: string;
  password: string;
}): Promise<Users> => {
  try {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    console.log(`Hashed Password: ${hashedPassword}`);
    const user = await prisma.users.create({
      data: {
        username: userData.username,
        email: userData.email,
        password: hashedPassword, // Make sure to hash the password before saving
      },
    });
    return user;
  } catch (error) {
    throw new Error("Error creating user: " + error);
  }
};
