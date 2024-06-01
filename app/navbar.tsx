import LogoIcon from "@/components/icons/logo-icon";
import { GeistSans } from "geist/font/sans";

const Navbar = () => {
  return (
    <nav className="mx-auto flex max-w-[1708px] items-center justify-between px-4 py-5 md:px-16 md:py-6 2xl:px-[7.5rem]">
      <div
        className={`flex items-center gap-[10px] text-center text-xl font-semibold text-[#2A313F] ${GeistSans.className}`}
      >
        <LogoIcon />
        <p>TribHub</p>
      </div>
      <button className="rounded-xl border !border-[#E0E1E3] bg-btn-gradient px-4 py-[10px] font-medium text-[#2A313F]">
        Join waitlist
        <span className="sr-only">Join waitlist</span>
      </button>
    </nav>
  );
};

export default Navbar;
