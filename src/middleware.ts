import { getSession, updateSession } from "@/lib/lib";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const session = await getSession();

  // No session found, user is not authenticated
  if (!session) {
    return NextResponse.next();
  }

  return await updateSession(request);
}
