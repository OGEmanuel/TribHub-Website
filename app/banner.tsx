import { GeistSans } from "geist/font/sans";
import Footer from "./footer";
import LogoFadeIcon from "@/components/icons/logo-fade-icon";

const Banner = () => {
  return (
    <section className="mx-auto border-t !border-[#E0E1E3] bg-[#FAFAFB] px-4 pt-[5rem] md:px-0 md:pt-[7.75rem]">
      <div className="mx-auto max-w-[33.375rem] pb-16">
        <div className="mx-auto mb-4 flex max-w-[16.375rem] items-center gap-4">
          <hr className="flex-grow border !border-[#E0E1E3]" />
          <LogoFadeIcon />
          <hr className="flex-grow border !border-[#E0E1E3]" />
        </div>
        <div className="mx-auto flex max-w-[32.125rem] flex-col gap-4 text-center">
          <h3
            className={`text-[1.75rem] font-medium leading-[34.72px] -tracking-[0.02em] md:text-[2.5rem] md:leading-[49.6px] ${GeistSans.className}`}
          >
            Take your community to the next Level with Tribhub
          </h3>
          <p className="text-sm leading-6 -tracking-[0.02em] text-[#616670] md:text-base md:leading-7">
            Join thousands of creators to seamlessly manage, monetize, and
            protect your communities on WhatsApp, Telegram, and Facebook.
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Banner;
