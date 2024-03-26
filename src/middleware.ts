import { NextRequest, NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { SessionData } from "@/lib/lib";

export async function middleware(req: NextRequest, res: NextResponse) {
  const session = await getIronSession<SessionData>(req, res, {
    password: process.env.AUTH_SECRET as string,
    cookieName: "spark_session",
  });

  if (!session.username && !session.isLoggedIn) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: "/dashboard/:path*",
};
