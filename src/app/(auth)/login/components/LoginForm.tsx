import React, { useState } from "react";
import { Button } from "@/components/ui/shad-cn/button";
import { Zap, Loader2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/shad-cn/form";
import { Input } from "@/components/ui/shad-cn/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { loginSchema } from "src/schemas/form";
import Link from "next/link";
import { signIn as signInNextAuth } from "next-auth/react"; // Import signIn from NextAuth
import { getUserFromDB } from "src/server/actions/getUser";

// Define signIn function outside of the component
const signIn = async ({
  email,
  password,
  redirect,
  callbackUrl,
}: {
  email: string;
  password: string;
  redirect: boolean;
  callbackUrl: string;
}) => {
  // Call the signIn function provided by NextAuth
  return signInNextAuth("credentials", {
    email,
    password,
    redirect,
    callbackUrl,
  });
};

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function handleSignin(values: z.infer<typeof loginSchema>) {
    try {
      const user = await getUserFromDB(values);
      if (user) {
        signInNextAuth("credentials", {
          email: values.email,
          password: values.password,
          redirect: false, // Prevent automatic redirection after sign-in
          callbackUrl: "/", // Redirect URL after sign-in
        });
      } else {
        console.log("no user found");
      }
    } catch (error) {
      console.error("Error signing in:", error);
    }
  }

  return (
    <div className="flex w-full max-w-[700px] flex-col items-center justify-center px-20">
      <div className="w-full rounded-xl border bg-slate-50 px-16 py-12">
        <h2 className="mb-8 flex flex-row items-center justify-center gap-2 text-4xl font-bold antialiased">
          <Zap color="#d2e826" /> Spark
        </h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSignin)}
            className="space-y-8"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your Email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
        <div className="mt-5 flex justify-center text-sm">
          <Link href="/register">
            <span>Don&apos;t have an account yet? </span>
            <span className="font-bold">Register</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
