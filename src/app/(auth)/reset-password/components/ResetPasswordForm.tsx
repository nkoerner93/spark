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
import { useToast } from "@/components/ui/shad-cn/use-toast";
import { useRouter } from "next/navigation";
import { loginUser } from "@/app/actions/actions";

const ResetPasswordForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const signIn = async (values: z.infer<typeof loginSchema>) => {
    try {
      setIsLoading(true);
      const loggedIn = await loginUser(values.email, values.password);

      if (loggedIn) {
        toast({
          title: "Success!",
          description: "Logging in...",
        });
        setTimeout(() => {
          setIsLoading(false);
          router.push("/dashboard");
        }, 1000);
      } else {
        toast({
          title: "Error!",
          description: "The entered credentials are invalid. Please try again!",
        });
        setIsLoading(false);
      }
    } catch (error) {
      return error;
    }
  };

  return (
    <div className="flex w-full max-w-[700px] flex-col items-center justify-center px-20">
      <div className="w-full rounded-xl border bg-primary-form px-16 py-12">
        <h2 className="mb-8 flex flex-row items-center justify-center gap-2 text-4xl font-bold antialiased">
          <Link href={"/"}>
            <Zap className="text-orange-600" />
            Spark
          </Link>
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(signIn)} className="space-y-8">
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
                      autoComplete="email"
                      data-login="input-username"
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
                      autoComplete="current-password"
                      data-login="input-password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>
              )}
            />
            <Button type="submit" data-login="button-submit">
              {isLoading ? (
                <Loader2 className="animate-spin" />
              ) : (
                <span>Submit</span>
              )}
            </Button>
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

export default ResetPasswordForm;
