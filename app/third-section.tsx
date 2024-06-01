import { GeistSans } from "geist/font/sans";
import mobile from "@/public/images/mobile-banner.png";
import tab from "@/public/images/tab-banner.png";
import Image from "next/image";
import { UnionTwoIcon } from "@/components/icons/union-icon";
import { DesktopMockupBanner } from "@/components/mockups/desktop-mockup-large";

const ThirdSection = () => {
  return (
    <section className="relative px-4 pt-[6rem] md:px-16">
      <div className="mx-auto max-w-[32.125rem] text-center">
        <h3
          className={`text-2xl font-medium md:text-[2.5rem] ${GeistSans.className}`}
        >
          Ease online community management hassle
        </h3>
        <p className="text-[#616670]">
          Join thousands of creators to seamlessly manage, monetize, and protect
          your communities on WhatsApp, Telegram, and Facebook.
        </p>
      </div>
      <div className="relative mx-auto h-[25rem] max-w-[75rem] translate-y-14 overflow-hidden rounded-[3rem] bg-[#1C2332] min-[674px]:h-[35.8125rem] md:translate-y-20">
        <div className="absolute">
          <UnionTwoIcon />
        </div>
        <div className="bg-banner absolute -bottom-60 left-[50%] h-[572.3px] w-[280px] -translate-x-[50%] min-[673px]:hidden">
          <Image src={mobile} alt="mobile-banner" placeholder="blur" fill />
        </div>
        <div className="bg-banner absolute -bottom-[18.5rem] left-[50%] hidden h-[798px] w-[603px] -translate-x-[50%] min-[674px]:block min-[1171px]:hidden">
          <Image src={tab} alt="tab-banner" placeholder="blur" fill />
        </div>
        <div className="bg-banner absolute bottom-0 left-[50%] -translate-x-[50%] max-[1170px]:hidden">
          <DesktopMockupBanner />
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
