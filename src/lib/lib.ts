import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

const secretKey = process.env.AUTH_SECRET || "";
const key = new TextEncoder().encode(secretKey);

// ENCRYPT JSON WEB TOKEN
export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("1h") // Adjust the expiry time as per your requirement
    .sign(key);
}

// DECRYPT JSON WEB TOKEN
export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}

// GET SESSIONS
export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}

// UPDATE SESSIONS
export async function updateSession(req: NextRequest) {
  const session = req.cookies.get("sprk_session")?.value;
  if (!session) return;

  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session);
  parsed.expires = new Date(Date.now() + 3600000); // 1 hour from now
  const res = NextResponse.next();
  res.cookies.set({
    name: "sprk_session",
    value: await encrypt(parsed),
    httpOnly: true,
    expires: parsed.expires,
  });
  return res;
}
