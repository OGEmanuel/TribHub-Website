import LogoIcon from "@/components/icons/logo-icon";
import { GeistSans } from "geist/font/sans";

const Navbar = () => {
  return (
    <nav className="fixed z-[999] w-full bg-white px-4 py-5 md:px-16 md:py-6 2xl:px-[7.5rem]">
      <div className="mx-auto flex w-full max-w-[1708px] items-center justify-between">
        <div
          className={`flex items-center gap-[10px] text-center text-xl font-semibold text-[#2A313F] ${GeistSans.className}`}
        >
          <LogoIcon width="28" height="28" fill="none" />
          <p className="-tracking-[0.02em]">TribHub</p>
        </div>
        <button className="rounded-xl border !border-[#E0E1E3] bg-btn-gradient px-4 py-[10px] font-medium -tracking-[0.02em] text-[#2A313F]">
          Join waitlist
          <span className="sr-only">Join waitlist</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
