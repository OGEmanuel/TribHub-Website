import { GeistSans } from "geist/font/sans";
import gamer from "@/public/images/gamer.png";
import Image from "next/image";
import WhatsappIcon from "./icons/whatsapp-icon";
import FileIcon from "./icons/file-icon";
const BusinessCard = () => {
  return (
    <div className="relative w-[22.5rem] rounded-2xl border border-[#E0E1E3] bg-white shadow-[0px_29px_63px_0px_#767B7F1A,_0px_115px_115px_0px_#767B7F17,_0px_259px_155px_0px_#767B7F0D,_0px_460px_184px_0px_#767B7F03,_0px_718px_201px_0px_#767B7F00]">
      <div className="absolute -top-[3.2rem] left-3 h-max w-max">
        <div className="absolute -bottom-1 -right-2.5 z-[60]">
          <WhatsappIcon />
        </div>
        <div className="relative h-16 w-16">
          <Image src={gamer} alt="gamer" fill className="rounded-full" />
          <div className="absolute left-[50%] top-[50%] z-50 h-[3.9rem] w-[3.9rem] translate-x-[-50.2%] translate-y-[-49.5%] rounded-full border border-white"></div>
        </div>
      </div>
      <div className="flex items-center justify-between border-b border-dashed border-[#E0E1E3] px-3 pb-3 pt-5">
        <p
          className={`${GeistSans.className} font-semibold -tracking-[0.02em] text-[#2A313F]`}
        >
          Apex Gamers Club
        </p>
        <p className="text-sm text-[#70747D]">82 members</p>
      </div>
      <div className="flex items-start justify-between px-3 py-6">
        <div className="flex flex-col gap-1">
          <p
            className={`${GeistSans.className} text-2xl font-semibold -tracking-[0.02em] text-[#101727]`}
          >
            $5,446.70
          </p>
          <p className="text-sm -tracking-[0.02em] text-[#9B9EA4]">
            <span className="text-[#18B531]">+20%</span> conversion from sales
            page
          </p>
        </div>
        <div className="flex gap-[5px] rounded-[3rem] border-[0.5px] border-[#ECECEE] px-2 py-1 shadow-[inset_0px_1px_2px_0px_rgba(85,90,102,0.1)]">
          <p className="font-medium -tracking-[0.02em] text-[#555A66]">4</p>
          <FileIcon />
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
