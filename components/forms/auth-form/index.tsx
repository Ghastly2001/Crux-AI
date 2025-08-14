"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import Image from "next/image";
import { AUTH_FORM_TYPE } from "@/constants";
import Link from "next/link";
import CustomFormField from "../form-field";
import { toast } from "sonner";

const formSchema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  userName: z.string().optional(),
});

const AuthForm = ({ type }: { type: FormType }) => {
  const isSignIn = type === AUTH_FORM_TYPE.SIGN_IN;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (type === AUTH_FORM_TYPE.SIGN_IN) {
        console.log("Sign In Values:", values);
      } else {
        console.log("Sign Up Values:", values);
      }
    } catch (error) {
      console.log("Error during form submission:", error);
      toast.error(
        `An error occurred while ${
          isSignIn ? "signing in" : "signing up"
        }. Please try again.`
      );
    }
  }

  return (
    <div className="card-border lg:min-w-[566px]">
      <div className="flex flex-col gap-6 card py-14 px-10">
        <div className="flex flex-row gap-2 justify-center">
          <Image src="/logo.svg" alt="logo" width={32} height={38} />
          <h2>Crux AI</h2>
        </div>
        <h3>Job Interview With AI</h3>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6 mt-4 form"
          >
            {!isSignIn && (
              <CustomFormField
                control={form.control}
                name="userName"
                label="Name"
                placeholder="Your Name"
                type="text"
              />
            )}

            <CustomFormField
              control={form.control}
              name="email"
              label="Email"
              placeholder="Your email address"
              type="email"
            />

            <CustomFormField
              control={form.control}
              name="password"
              label="Password"
              placeholder="Enter your password"
              type="password"
            />

            <Button className="btn" type="submit">
              {isSignIn ? "Sign In" : "Create an Account"}
            </Button>
          </form>
        </Form>
        <p className="text-center">
          {isSignIn ? "Don't have an account?" : "Already have an account?"}
          <Link
            href={!isSignIn ? "/sign-in" : "/sign-up"}
            className="underline"
          >
            {" "}
            {!isSignIn ? "Sign In" : "Sign Up"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
