import UnionIcon from "@/components/icons/union-icon";
import DesktopMockupLarge from "@/components/mockups/desktop-mockup-large";
import DesktopMockupMid from "@/components/mockups/desktop-mockup-mid";
import DesktopMockupSmall from "@/components/mockups/desktop-mockup-small";
import MobileMockupLarge from "@/components/mockups/mobile-mockup-large";
import MobileMockupMid from "@/components/mockups/mobile-mockup-mid";
import MobileMockupSmall from "@/components/mockups/mobile-mockup-small";
import { GeistSans } from "geist/font/sans";

const Hero = () => {
  return (
    <section className="relative mx-auto max-w-[1708px] pt-12 md:pt-[7.5rem]">
      <div className="mx-4 max-w-[32.125rem] space-y-4 md:ml-16 md:mr-0 2xl:ml-[7.5rem]">
        <div className="space-y-2">
          <span className="rounded-[1.875rem] border !border-[#ECECEE] px-4 py-2 text-sm font-medium text-[#2A313F] md:text-base">
            V1 launches in August
          </span>
          <h1
            className={`text-[2.5rem] font-medium text-[#1C2332] md:text-[2.75rem] ${GeistSans.className}`}
          >
            Manage and Grow your communities seamlessly
          </h1>
          <p className="text-sm text-[#616670] md:text-base">
            Join thousands of creators to seamlessly manage, monetize, and
            protect your communities on WhatsApp, Telegram, and Facebook.
          </p>
        </div>
        <button className="rounded-xl bg-[#0065FF] px-4 py-[14px] font-medium text-white shadow-[0px_8px_8px_0px_rgba(0,101,255,0.102),_0px_8px_24px_0px_rgba(0,101,255,0.102)]">
          Join waitlist
        </button>
      </div>
      <div className="absolute left-0 top-0 -z-50">
        <UnionIcon />
      </div>
      <div className="absolute -right-32 top-8 max-[1220px]:-right-0 max-[1220px]:top-[29rem] md:-right-[24.1rem] 2xl:-right-60 min-[1700px]:right-10">
        <div className="max-[1220px]:hidden">
          <DesktopMockupLarge />
        </div>
        <div className="hidden md:block min-[1221px]:hidden">
          <DesktopMockupMid />
        </div>
        <div className="absolute -right-36 md:hidden">
          <DesktopMockupSmall />
          <div className="absolute -left-12 top-[5.9rem] md:hidden">
            <MobileMockupSmall />
          </div>
        </div>
        <div className="absolute -left-[5.75rem] top-[11.8125rem] max-[1220px]:hidden">
          <MobileMockupLarge />
        </div>
        <div className="absolute -left-[5.75rem] top-[9.375rem] hidden md:block min-[1221px]:hidden">
          <MobileMockupMid />
        </div>
      </div>
    </section>
  );
};

export default Hero;
