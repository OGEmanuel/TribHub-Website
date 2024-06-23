import { GeistSans } from "geist/font/sans";
import mobile from "@/public/icons/mobile-mockup-banner.svg";
import tab from "@/public/icons/tab-mockup-banner.svg";
import Image from "next/image";
import { UnionTwoIcon } from "@/components/icons/union-icon";
import desktopMockupBanner from "@/public/icons/desktop-mockup-banner.svg";

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
      <div className="relative mx-auto h-[25rem] max-w-[75rem] translate-y-14 overflow-hidden rounded-[3rem] bg-[#1C2332] min-[674px]:h-[35.8125rem] md:translate-y-20">
        <div className="absolute">
          <UnionTwoIcon />
        </div>
        <div className="bg-banner absolute -bottom-[7.5rem] left-[50%] z-40 h-[35.76875rem] w-[17.5rem] -translate-x-[50%] min-[673px]:hidden"></div>
        <div className="bg-banner absolute -bottom-[7.5rem] left-[50%] h-[35.76875rem] w-[17.5rem] -translate-x-[50%] min-[673px]:hidden">
          <Image src={mobile} alt="mobile-banner" fill priority quality={100} />
        </div>
        <div className="bg-banner absolute -bottom-[10rem] left-[50%] z-40 hidden h-[49.875rem] w-[37.6875rem] -translate-x-[50%] min-[674px]:block min-[1171px]:hidden"></div>
        <div className="absolute -bottom-[10rem] left-[50%] hidden h-[49.875rem] w-[37.6875rem] -translate-x-[50%] min-[674px]:block min-[1171px]:hidden">
          <Image src={tab} alt="tab-banner" fill priority quality={100} />
        </div>
        <div className="bg-banner absolute -bottom-[10rem] left-[50%] z-40 h-[47.925rem] w-[62.5rem] -translate-x-[50%] max-[1170px]:hidden"></div>
        <div className="absolute -bottom-[10rem] left-[50%] h-[47.925rem] w-[62.5rem] -translate-x-[50%] max-[1170px]:hidden">
          <Image
            src={desktopMockupBanner}
            alt="desktop-banner"
            fill
            priority
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
