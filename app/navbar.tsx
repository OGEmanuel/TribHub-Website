import LogoIcon from "@/components/icons/logo-icon";
import { WaitlistDialog } from "@/components/waitlist-form";
import { GeistSans } from "geist/font/sans";

const Navbar = () => {
  return (
    <nav className="fixed z-[100] w-full bg-white px-4 py-5 md:px-16 md:py-6 2xl:px-[7.5rem]">
      <div className="mx-auto flex w-full max-w-[1708px] items-center justify-between">
        <div
          className={`flex items-center gap-[10px] text-center text-xl font-semibold text-[#2A313F] ${GeistSans.className}`}
        >
          <LogoIcon width="28" height="28" fill="none" />
          <p className="-tracking-[0.02em]">TribHub</p>
        </div>
        <WaitlistDialog />
      </div>
    </nav>
  );
};

export default Navbar;
