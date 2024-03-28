import React, { useState } from "react";
import { Button } from "@/components/ui/shad-cn/button";
import { Zap, Loader2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/shad-cn/form";
import { Input } from "@/components/ui/shad-cn/input";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { registerSchema } from "src/schemas/form";
import Link from "next/link";
import { useToast } from "@/components/ui/shad-cn/use-toast";
import { createUserToDB } from "@/app/actions/actions";

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirm: "",
    },
  });

  const signUp = async (values: z.infer<typeof registerSchema>) => {
    try {
      setIsLoading(true);

      // Call the server action to create the user
      const user = await createUserToDB(values);

      // Handle success, redirect, show message, etc.
      console.log("User created:", user);
      toast({
        title: "Success!",
        description: "Account has been created. You can now login.",
      });
    } catch (error) {
      console.error("Error creating user:", error);
      toast({
        title: "Error!",
        description: "An error occured. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex w-full max-w-[700px] flex-col items-center justify-center px-20">
      <div className="bg-primary-form w-full rounded-xl border px-16 py-12">
        <h2 className="mb-8 flex flex-row items-center justify-center gap-2 text-4xl font-bold antialiased">
          <Zap className="text-orange-600" /> Spark
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(signUp)} className="space-y-4">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm text-primary">
                    Username
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter a username"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm text-primary">Email</FormLabel>
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
                  <FormLabel className="text-sm text-primary">
                    Password
                  </FormLabel>
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
            <FormField
              control={form.control}
              name="confirm"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Confirm your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <Button
              className="w-full"
              disabled={isLoading ? true : false}
              type="submit"
            >
              {!isLoading ? <span>Register</span> : <Loader2 />}
            </Button>
          </form>
        </Form>
        <div className="mt-5 flex justify-center text-sm">
          <Link href="/login">
            <span>Already have an account? </span>
            <span className="font-bold">Login</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
