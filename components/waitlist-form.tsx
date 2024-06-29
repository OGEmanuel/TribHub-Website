"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import LogoIcon from "./icons/logo-icon";
import { GeistSans } from "geist/font/sans";
import { useEffect, useRef, useState } from "react";
import { useFormTriggerStore } from "@/store/form-trigger";
import Lottie from "lottie-react";
import animationData from "@/animation.json";

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

export function WaitlistDialog() {
  const { open, setOpen, success, setSuccess, setIndex, index } =
    useFormTriggerStore();
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
    }, 2000);

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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        onClick={() => {
          setSuccess(false), setIndex(0);
        }}
        className="rounded-xl border !border-[#E0E1E3] bg-btn-gradient px-4 py-[10px] font-medium -tracking-[0.02em] text-[#2A313F]"
      >
        Join waitlist
        <span className="sr-only">Join waitlist</span>
      </DialogTrigger>
      <DialogContent className="flex h-full flex-col items-center justify-center gap-6 sm:max-w-[425px]">
        {success && (
          <div className="absolute left-[50%] top-[50%] h-screen w-screen -translate-x-[50%] -translate-y-[80%]">
            <Lottie
              animationData={animationData}
              loop={false}
              autoplay={true}
            />{" "}
          </div>
        )}
        <DialogHeader className="items-center justify-center space-y-3">
          <LogoIcon width="28" height="28" fill="none" />
          <DialogTitle
            className={`text-[1.75rem] -tracking-[0.02em] text-[#2A313F] ${GeistSans.className}`}
          >
            {success ? "Thanks for joining!" : "Join and Stay Tuned!"}
          </DialogTitle>
          <DialogDescription className="text-center text-sm leading-6 -tracking-[0.02em] text-[#555A66]">
            {success
              ? `We are happy to have you on board! Your journey to seamless community management begins here. Keep an eye on your inbox for an invitation to join our circle of community builders. We'll explore new features, share thoughts, and grow together. Welcome to the TribHub family!`
              : "On joining the waitlist, we will send you an invite to join our circle of talented community builders like you."}
          </DialogDescription>
        </DialogHeader>
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
          <DialogClose asChild>
            <Button
              type="button"
              onClick={() => setIndex(0)}
              className={`mx-auto w-full bg-white font-medium -tracking-[0.02em] text-[#555A66] shadow-none hover:bg-white ${index > 0 && "z-[400]"}`}
            >
              Close
            </Button>
          </DialogClose>
        )}
      </DialogContent>
    </Dialog>
  );
}
