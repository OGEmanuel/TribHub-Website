import { GeistSans } from "geist/font/sans";
import gamer from "@/public/images/gamer.png";
import Image from "next/image";
import WhatsappIcon from "./icons/whatsapp-icon";
import FileIcon from "./icons/file-icon";
import WhatsappSmallIcon from "./icons/whatsapp-small-icon";
import FileSmallIcon from "./icons/file-small-icon";
const BusinessCard = () => {
  return (
    <div className="relative w-[14.17875rem] rounded-[10px] border border-[#E0E1E3] bg-white shadow-[0px_18.28px_39.7px_0px_#767B7F1A,_0px_72.47px_72.47px_0px_#767B7F17,_0px_163.22px_97.68px_0px_#767B7F0D,_0px_289.88px_115.95px_0px_#767B7F03,_0px_452.47px_126.67px_0px_#767B7F00] md:w-[22.5rem] md:rounded-2xl md:shadow-[0px_29px_63px_0px_#767B7F1A,_0px_115px_115px_0px_#767B7F17,_0px_259px_155px_0px_#767B7F0D,_0px_460px_184px_0px_#767B7F03,_0px_718px_201px_0px_#767B7F00]">
      <div className="absolute -top-[2rem] left-3 h-max w-max md:-top-[3.2rem]">
        <div className="absolute -bottom-1 -right-2.5 z-[60]">
          <div className="hidden md:block">
            <WhatsappIcon />
          </div>
          <div className="md:hidden">
            <WhatsappSmallIcon />
          </div>
        </div>
        <div className="relative h-[2.520625rem] w-[2.520625rem] md:h-16 md:w-16">
          <Image src={gamer} alt="gamer" fill className="rounded-full" />
          <div className="absolute left-[50%] top-[50%] z-50 h-[2.4rem] w-[2.4rem] translate-x-[-50.2%] translate-y-[-49.5%] rounded-full border border-white md:h-[3.9rem] md:w-[3.9rem]"></div>
        </div>
      </div>
      <div className="flex items-center justify-between border-b border-dashed border-[#E0E1E3] px-[7.56px] pb-[7.56px] pt-3 md:px-3 md:pb-3 md:pt-5">
        <p
          className={`${GeistSans.className} text-[10px] font-semibold -tracking-[0.02em] text-[#2A313F] md:text-base`}
        >
          Apex Gamers Club
        </p>
        <p className="text-[8.82px] text-[#70747D] md:text-sm">82 members</p>
      </div>
      <div className="flex items-start justify-between px-[7.56px] py-[15.12px] md:px-3 md:py-6">
        <div className="flex flex-col gap-1">
          <p
            className={`${GeistSans.className} text-[15.12px] font-semibold -tracking-[0.02em] text-[#101727] md:text-2xl`}
          >
            $5,446.70
          </p>
          <p className="text-[8.82px] -tracking-[0.02em] text-[#9B9EA4] md:text-sm">
            <span className="text-[#18B531]">+20%</span> conversion from sales
            page
          </p>
        </div>
        <div className="flex gap-[3.15px] rounded-[3rem] border-[0.5px] border-[#ECECEE] px-[5px] py-[3px] shadow-[inset_0px_1px_2px_0px_rgba(85,90,102,0.1)] md:gap-[5px] md:px-2 md:py-1">
          <p className="text-[10px] font-medium -tracking-[0.02em] text-[#555A66] md:text-base">
            4
          </p>
          <div>
            <div className="hidden md:block">
              <FileIcon />
            </div>
            <div className="md:hidden">
              <FileSmallIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
