import { SessionOptions } from "iron-session";

export interface SessionData {
  userId?: number;
  username?: string;
  email?: string;
  img?: string;
  isLoggedIn: boolean;
}

export const defaultSession: SessionData = {
  isLoggedIn: false,
};

export const sessionOptions: SessionOptions = {
  password: process.env.AUTH_SECRET!,
  cookieName: "spark_session",
  cookieOptions: {
    httpOnly: true,
    secure: true,
  },
};

// Extract Session Data

function extractSessionData(session: SessionData) {
  return {
    isLoggedIn: session.isLoggedIn,
    email: session.email,
    userId: session.userId,
    username: session.username,
  };
}
