import { GeistSans } from "geist/font/sans";
import mobile from "@/public/images/mobile-mockup-banner.png";
import tab from "@/public/images/tab-mockup-banner.png";
import Image from "next/image";
import { UnionTwoIcon } from "@/components/icons/union-icon";
import desktopMockupBanner from "@/public/images/desktop-mockup-banner.png";

const ThirdSection = () => {
  return (
    <section className="relative px-4 pt-[6rem] md:px-16">
      <div className="mx-auto max-w-[32.125rem] text-center">
        <h3
          className={`text-2xl font-medium leading-[29.76px] -tracking-[0.02em] md:text-[2.5rem] md:leading-[49.6px] ${GeistSans.className}`}
        >
          Ease online community management hassle
        </h3>
        <p className="leading-6 -tracking-[0.02em] text-[#616670] md:leading-7">
          Join thousands of creators to seamlessly manage, monetize, and protect
          your communities on WhatsApp, Telegram, and Facebook.
        </p>
      </div>
      <div className="flex items-center justify-center 2xl:px-[3.25rem]">
        <div className="relative h-[25rem] w-full max-w-[1440px] translate-y-14 overflow-hidden rounded-[3rem] bg-[#1C2332] sm:h-[35.8125rem] md:translate-y-20">
          <div className="absolute left-[50%] -translate-x-[50%]">
            <UnionTwoIcon />
          </div>
          <div className="bg-banner absolute -bottom-[10rem] left-[50%] z-40 h-[47.925rem] w-[62.5rem] -translate-x-[50%] lg:block"></div>
          <div className="absolute bottom-0 left-[50%] w-full max-w-[17.5rem] -translate-x-[50%] sm:hidden">
            <Image
              src={mobile}
              alt="mobile-banner"
              className="rounded-t-[3rem]"
            />
          </div>
          <div className="absolute bottom-0 left-[50%] hidden w-full max-w-[37.6875rem] -translate-x-[48.5%] sm:max-lg:block">
            <Image src={tab} alt="tab-banner" className="rounded-t-[2.5rem]" />
          </div>
          <div className="absolute bottom-0 left-[50%] hidden w-full max-w-[62.5rem] -translate-x-[50%] lg:block">
            <Image
              src={desktopMockupBanner}
              alt="desktop-banner"
              className="rounded-t-[3rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
