import { NextRequest, NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { SessionData } from "./lib/lib";

export async function middleware(req: NextRequest, res: NextResponse) {
  const session = await getIronSession<SessionData>(req, res, {
    password: "783d093ca125570681b4b612c892c4f1",
    cookieName: "spark_session",
  });

  if (session.username === undefined) {
    console.log("No session");
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/dashboard/:path*",
};
