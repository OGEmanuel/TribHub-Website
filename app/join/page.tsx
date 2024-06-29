"use client";

import { GeistSans } from "geist/font/sans";
import LogoIcon from "@/components/icons/logo-icon";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Lottie from "lottie-react";
import animationData from "@/mobile-animation.json";
import { useFormTriggerStore } from "@/store/form-trigger";

const FormSchema = z.object({
  firstname: z.string().min(2, {
    message: "Firstname must be at least 2 characters.",
  }),
  email: z
    .string({
      required_error: "Enter email",
    })
    .email({ message: "Enter valid email" }),
});

const Join = () => {
  const { success, setSuccess, index, setIndex } = useFormTriggerStore();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      firstname: "",
      email: "",
    },
  });

  const { formState } = form;

  function onSubmit(data: z.infer<typeof FormSchema>) {
    if (!success) {
      setSuccess(true);
    }
    // Clear any existing timeout before setting a new one
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setIndex(1);
    }, 3000);

    form.reset();
  }

  // Cleanup function to clear the timeout when the component unmounts
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <section className="relative h-screen w-screen">
      {success && (
        <div className="fixed left-0 top-0 flex h-screen w-screen items-center justify-center">
          <Lottie
            animationData={animationData}
            autoplay={true}
            loop={false}
            className="absolute h-[920px] w-[920px]"
          />
        </div>
      )}
      <div className="max-h-[calc(100vh-4.25rem)] w-full">
        <div className="mx-auto flex h-[calc(100vh-4.25rem)] max-w-[390px] flex-col items-center justify-center gap-6 px-4">
          <div className="flex flex-col items-center justify-center space-y-3">
            <LogoIcon width="28" height="28" fill="none" />
            <h1
              className={`text-[1.75rem] -tracking-[0.02em] text-[#2A313F] ${GeistSans.className}`}
            >
              {success ? "Thanks for joining!" : "Join and Stay Tuned!"}
            </h1>
            <p className="text-center text-sm leading-6 -tracking-[0.02em] text-[#555A66]">
              {success
                ? `We are happy to have you on board! Your journey to seamless community management begins here. Keep an eye on your inbox for an invitation to join our circle of community builders. We'll explore new features, share thoughts, and grow together. Welcome to the TribHub family!`
                : "On joining the waitlist, we will send you an invite to join our circle of talented community builders like you."}
            </p>
          </div>
          {!success ? (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full space-y-6"
              >
                <FormField
                  control={form.control}
                  name="firstname"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter first name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email address</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter email address"
                          {...field}
                          type="email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className={`w-full font-medium -tracking-[0.02em] ${formState.isValid ? "shadow-[0px_8px_8px_0px_#0065FF1A,_0px_8px_24px_0px_#0065FF1A]" : "shadow-none"}`}
                >
                  Join waitlist
                </Button>
              </form>
            </Form>
          ) : (
            <Link
              href={"/"}
              className={`mx-auto w-full rounded-xl bg-white px-4 py-[14.2px] text-center font-medium -tracking-[0.02em] text-[#555A66] shadow-none hover:bg-white ${index > 0 && "z-[400]"}`}
            >
              Close
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default Join;
