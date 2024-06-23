"use client";

import UnionIcon from "@/components/icons/union-icon";
import desktopMockupLarge from "@/public/icons/desktop-mockup-large.svg";
import desktopMockupMid from "@/public/icons/desktop-mockup-mid.svg";
import desktopMockupSmall from "@/public/icons/desktop-mockup-small.svg";
import mobileMockupSmall from "@/public/icons/mobile-mockup-small.svg";
import mobileMockupLarge from "@/public/icons/mobile-mockup-large.svg";
import mobileMockupMid from "@/public/icons/mobile-mockup-mid.svg";
import { GeistSans } from "geist/font/sans";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useFormTriggerStore } from "@/store/form-trigger";

const Hero = () => {
  const { setOpen } = useFormTriggerStore();

  return (
    <section className="relative mx-auto max-w-[1708px] pt-12 md:pt-[7.5rem]">
      <div className="mx-4 max-w-[32.125rem] space-y-4 md:ml-16 md:mr-0 2xl:ml-[7.5rem]">
        <div className="space-y-2">
          <span className="rounded-[1.875rem] border !border-[#ECECEE] bg-white px-4 py-2 text-sm font-medium -tracking-[0.02em] text-[#2A313F] md:text-base">
            V1 launches in August
          </span>
          <h1
            className={`text-[2.5rem] font-medium leading-[49.6px] -tracking-[0.02em] text-[#1C2332] md:text-[2.75rem] md:leading-[54.56px] ${GeistSans.className}`}
          >
            Manage and Grow your communities seamlessly
          </h1>
          <p className="text-sm leading-6 -tracking-[0.02em] text-[#616670] md:text-base md:leading-7">
            Join thousands of creators to seamlessly manage, monetize, and
            protect your communities on WhatsApp, Telegram, and Facebook.
          </p>
        </div>
        <Button
          onClick={() => setOpen(true)}
          className="font-medium -tracking-[0.02em]"
        >
          Join waitlist
        </Button>
      </div>
      <div className="absolute left-0 top-0 -z-50">
        <UnionIcon />
      </div>
      <div className="absolute -right-32 top-8 max-[1220px]:-right-0 max-[1220px]:top-[29rem] max-[280px]:-right-[6rem] md:-right-[24.1rem] 2xl:-right-60 min-[1700px]:right-10">
        <div className="h-[43.75rem] w-[57.055rem] max-[1220px]:hidden">
          <Image
            src={desktopMockupLarge}
            alt="Desktop Mockup Large"
            fill
            priority
          />
        </div>
        <div className="hidden h-[34.83rem] w-[45.4225rem] md:block min-[1221px]:hidden">
          <Image
            src={desktopMockupMid}
            alt="Desktop Mockup Mid"
            fill
            priority
            quality={100}
          />
        </div>
        <div className="absolute -right-36 md:hidden">
          <div className="h-[21.875rem] w-[28.5275rem]">
            <Image
              src={desktopMockupSmall}
              alt="Desktop Mockup Small"
              fill
              priority
              quality={100}
            />
          </div>
          <div className="absolute -left-12 top-[5.9rem] h-[25rem] w-[12.23125rem] md:hidden">
            <Image
              src={mobileMockupSmall}
              alt="Mobile Mockup Small"
              fill
              priority
              quality={100}
            />
          </div>
        </div>
        <div className="absolute -left-[5.75rem] top-[11.8125rem] h-[50rem] w-[24.463125rem] max-[1220px]:hidden">
          <Image
            src={mobileMockupLarge}
            alt="Mobile Mockup Large"
            fill
            priority
            quality={100}
          />
        </div>
        <div className="absolute -left-[5.75rem] top-[9.375rem] hidden h-[39.805625rem] w-[19.475rem] md:block min-[1221px]:hidden">
          <Image
            src={mobileMockupMid}
            alt="Mobile Mockup Mid"
            fill
            priority
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
