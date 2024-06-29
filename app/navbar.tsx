"use client";

import LogoIcon from "@/components/icons/logo-icon";
import { WaitlistDialog } from "@/components/waitlist-form";
import { useFormTriggerStore } from "@/store/form-trigger";
import { GeistSans } from "geist/font/sans";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const { setSuccess } = useFormTriggerStore();
  const pathname = usePathname();

  return (
    <nav className="fixed z-[100] w-full bg-white px-4 py-5 md:px-16 md:py-6 2xl:px-[7.5rem]">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between">
        <Link
          href={"/"}
          className={`flex items-center gap-[10px] text-center text-xl font-semibold text-[#2A313F] ${GeistSans.className}`}
        >
          <LogoIcon width="28" height="28" fill="none" />
          <p className="-tracking-[0.02em]">TribHub</p>
        </Link>
        <div className="hidden sm:block">
          <WaitlistDialog />
        </div>
        {pathname !== "/join" && (
          <Link
            href={"/join"}
            onClick={() => setSuccess(false)}
            className="rounded-xl border !border-[#E0E1E3] bg-btn-gradient px-4 py-[10px] font-medium -tracking-[0.02em] text-[#2A313F] sm:hidden"
          >
            Join waitlist
            <span className="sr-only">Join waitlist</span>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
