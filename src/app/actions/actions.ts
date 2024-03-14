"use server";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { sessionOptions, SessionData, defaultSession } from "@/lib/lib";
import { getIronSession } from "iron-session";
import prisma from "../prisma";

// ===============================
// LOGIN
// ===============================
export async function loginUser(email: string, password: string) {
  const session = await getSession();
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
    session.email = user.email;
    session.userId = user.id;
    session.username = user.username;
    session.isLoggedIn = true;

    const savedSession = await session.save();

    return true;
  } catch (error) {
    throw new Error("Error logging in: " + error);
  }
}

// ===============================
// LOGOUT
// ===============================
export async function logout() {
  // Destroy the session
  cookies().set("spark_session", "", { expires: new Date(0) });
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
