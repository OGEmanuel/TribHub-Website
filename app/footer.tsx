import IgIcon from "@/components/icons/ig-icon";
import LiIcon from "@/components/icons/li-icon";
import LogoFooterIcon from "@/components/icons/logo-footer-icon";
import XIcon from "@/components/icons/x-icon";
import { GeistSans } from "geist/font/sans";

const Footer = () => {
  return (
    <footer className="mx-auto max-w-[1708px]">
      <div className="flex flex-col-reverse justify-between gap-6 border-t !border-[#E0E1E3] py-8 md:mx-16 md:flex-row md:items-center 2xl:mx-[7.5rem]">
        <div className="flex flex-col gap-2 md:flex-row md:gap-0">
          <div className="flex items-center gap-2">
            <LogoFooterIcon />
            <p className={`font-medium text-[#2A313F] ${GeistSans.className}`}>
              TribHub
            </p>
          </div>
          <div className="mx-4 my-0.5 hidden border !border-[#E0E1E3] md:block"></div>
          <p className="text-[#555A66] -tracking-[0.02em]">All rights reserved @2024 Tribhub</p>
        </div>
        <div className="flex items-center gap-6">
          <XIcon />
          <IgIcon />
          <LiIcon />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
