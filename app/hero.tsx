"use client";

import UnionIcon from "@/components/icons/union-icon";
import desktopMockupLarge from "@/public/images/desktop-mockup-large.png";
import desktopMockupMid from "@/public/images/desktop-mockup-mid.png";
import desktopMockupSmall from "@/public/images/desktop-mockup-small.png";
import mobileMockupSmall from "@/public/images/mobile-mockup-small.png";
import mobileMockupLarge from "@/public/images/mobile-mockup-large.png";
import mobileMockupMid from "@/public/images/mobile-mockup-mid.png";
import { GeistSans } from "geist/font/sans";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useFormTriggerStore } from "@/store/form-trigger";
import Link from "next/link";

const Hero = () => {
  const { setOpen, setSuccess, setIndex } = useFormTriggerStore();

  const handleClick = () => {
    setOpen(true), setSuccess(false);
  };

  return (
    <section className="relative pt-12 md:pt-[7.5rem]">
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-4 max-w-[32.125rem] space-y-4 md:ml-16 md:mr-0 2xl:ml-12 min-[1700px]:ml-0">
          <div className="space-y-2">
            <span className="rounded-[1.875rem] border !border-[#ECECEE] bg-white px-4 py-2 text-sm font-medium -tracking-[0.02em] text-[#2A313F] md:text-base">
              V1 launches soon
            </span>
            <h1
              className={`text-[2.5rem] font-medium leading-[49.6px] -tracking-[0.02em] text-[#1C2332] md:text-[2.75rem] md:leading-[54.56px] ${GeistSans.className}`}
            >
              Manage and Grow your communities seamlessly
            </h1>
            <p className="text-sm leading-6 -tracking-[0.02em] text-[#616670] md:text-base md:leading-7">
              Seamlessly manage, monetize, and protect your communities on
              WhatsApp, Telegram, and Facebook.
            </p>
          </div>
          <Button
            onClick={() => {
              setOpen(true), setSuccess(false), setIndex(0);
            }}
            className="hidden font-medium -tracking-[0.02em] sm:block"
          >
            Join waitlist
          </Button>
          <Link
            href={"/join"}
            onClick={() => {
              setSuccess(false), setIndex(0);
            }}
            className="block w-max rounded-xl bg-[#0065FF] px-4 py-[14.5px] font-medium -tracking-[0.02em] text-white shadow-[0px_8px_8px_0px_#0065FF1A,_0px_8px_24px_0px_#0065FF1A] hover:bg-[#0065FF]/90 sm:hidden"
          >
            Join waitlist
          </Link>
        </div>
      </div>
      <div className="absolute -left-96 top-1 -z-50">
        <UnionIcon />
      </div>
      <div className="absolute right-0 top-[28rem] sm:-right-[12rem] sm:top-[22rem] md:-right-[7.5rem] md:top-[27rem] lg:-right-[35rem] lg:top-0 xl:-right-[24.2rem] 2xl:-right-[10rem]">
        <div className="hidden h-[43.75rem] w-[57.055rem] lg:block">
          <Image
            src={desktopMockupLarge}
            alt="Desktop Mockup Large"
            fill
            priority
            className="rounded-[3rem]"
          />
        </div>
        <div className="hidden h-[34.83rem] w-[45.4225rem] sm:block lg:hidden">
          <Image
            src={desktopMockupMid}
            alt="Desktop Mockup Mid"
            fill
            priority
            className="rounded-[2.5rem]"
          />
        </div>
        <div className="absolute -right-36 sm:hidden">
          <div className="h-[21.875rem] w-[28.5275rem]">
            <Image
              src={desktopMockupSmall}
              alt="Desktop Mockup Small"
              fill
              priority
              className="rounded-[1.5rem]"
            />
          </div>
          <div className="absolute -left-12 top-[5.9rem] h-[25rem] w-[12.23125rem] sm:hidden">
            <Image
              src={mobileMockupSmall}
              alt="Mobile Mockup Small"
              fill
              priority
              className="rounded-[2rem]"
            />
          </div>
        </div>
        <div className="absolute -left-[5.75rem] top-[11.8125rem] hidden h-[50rem] w-[24.463125rem] lg:block">
          <Image
            src={mobileMockupLarge}
            alt="Mobile Mockup Large"
            fill
            priority
            className="rounded-[4.3rem]"
          />
        </div>
        <div className="absolute -left-[5.75rem] top-[9.375rem] hidden h-[39.805625rem] w-[19.475rem] sm:block lg:hidden">
          <Image
            src={mobileMockupMid}
            alt="Mobile Mockup Mid"
            fill
            priority
            className="rounded-[2.8rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
