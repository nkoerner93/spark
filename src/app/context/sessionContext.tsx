"use client";
import { SessionData } from "@/lib/lib";
import { useState, createContext, useEffect } from "react";
import { getSession } from "../actions/actions";

export const SessionContext = createContext<{
  session: SessionData | null;
  sessionData: SessionData | null;
}>({ session: null, sessionData: null });

interface SessionProviderProps {
  children: React.ReactNode;
}

export default function SessionProvider({ children }: SessionProviderProps) {
  const [session, setSession] = useState<SessionData | null>(null);
  const [sessionData, setSessionData] = useState<SessionData | null>(null);

  useEffect(() => {
    const currentSession = async () => {
      const session = await getSession();
      const sessionData = {
        isLoggedIn: session.isLoggedIn,
        email: session.email,
        userId: session.userId,
        username: session.username,
      };
      setSession(session);
      setSessionData(sessionData);
    };
    currentSession();
  }, []);

  return (
    <SessionContext.Provider value={{ session, sessionData }}>
      {children}
    </SessionContext.Provider>
  );
}
