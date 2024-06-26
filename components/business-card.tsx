import { GeistSans } from "geist/font/sans";
import Image, { StaticImageData } from "next/image";
import FileIcon from "./icons/file-icon";
import FileSmallIcon from "./icons/file-small-icon";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import FileMidIcon from "./icons/file-mid-icon";
const BusinessCard = ({
  name,
  revenue,
  src,
  percent,
  members,
  resources,
  className,
  icon,
  midIcon,
  smallIcon,
  smallCard,
}: {
  name: string;
  revenue: string;
  src: StaticImageData;
  percent: string;
  members: string;
  resources: string;
  className?: string;
  icon: ReactNode;
  smallIcon: ReactNode;
  midIcon?: ReactNode;
  smallCard?: boolean;
}) => {
  return (
    <div
      className={cn(
        "relative w-[14.17875rem] rounded-[10px] border border-[#E0E1E3] bg-white shadow-[0px_18.28px_39.7px_0px_#767B7F1A,_0px_72.47px_72.47px_0px_#767B7F17,_0px_163.22px_97.68px_0px_#767B7F0D,_0px_289.88px_115.95px_0px_#767B7F03,_0px_452.47px_126.67px_0px_#767B7F00] sm:w-[18rem] md:rounded-2xl lg:w-[22.5rem] lg:shadow-[0px_29px_63px_0px_#767B7F1A,_0px_115px_115px_0px_#767B7F17,_0px_259px_155px_0px_#767B7F0D,_0px_460px_184px_0px_#767B7F03,_0px_718px_201px_0px_#767B7F00]",
        className,
      )}
    >
      <div className="absolute -top-[2rem] left-3 h-max w-max sm:-top-[2.5rem] lg:-top-[3.2rem]">
        <div className="absolute -bottom-1 -right-2.5 z-[60]">
          <div className="hidden lg:block">{icon}</div>
          <div className="sm:hidden">{smallIcon}</div>
          <div className="hidden sm:max-lg:block">{midIcon}</div>
        </div>
        <div className="relative h-[2.520625rem] w-[2.520625rem] sm:h-[3.2rem] sm:w-[3.2rem] lg:h-16 lg:w-16">
          <Image src={src} alt={src.toString()} fill className="rounded-full" />
          <div className="absolute left-[50%] top-[50%] z-50 h-[2.4rem] w-[2.4rem] translate-x-[-50.2%] translate-y-[-49.5%] rounded-full border border-white sm:h-[3.1rem] sm:w-[3.1rem] lg:h-[3.9rem] lg:w-[3.9rem]"></div>
        </div>
      </div>
      <div className="flex items-center justify-between border-b border-dashed border-[#E0E1E3] px-[7.56px] pb-[7.56px] pt-3 md:px-3 md:pb-3 md:pt-5">
        <p
          className={`${GeistSans.className} text-[10px] font-semibold -tracking-[0.02em] text-[#2A313F] ${smallCard ? "md:text-xs" : "sm:text-xs lg:text-base"}`}
        >
          {name}
        </p>
        <p
          className={`text-[8.82px] text-[#70747D] ${smallCard ? "md:text-[11px]" : "sm:text-[11.2px] lg:text-sm"}`}
        >
          <span>{members}</span> members
        </p>
      </div>
      <div className="flex items-start justify-between px-[7.56px] py-[15.12px] md:px-3 md:py-6">
        <div className="flex flex-col gap-1">
          <p
            className={`${GeistSans.className} text-[15.12px] font-semibold -tracking-[0.02em] text-[#101727] ${smallCard ? "md:text-[1.1875rem]" : "sm:text-xl lg:text-2xl"}`}
          >
            {revenue}
          </p>
          <p
            className={`text-[8.82px] -tracking-[0.02em] text-[#9B9EA4] ${smallCard ? "md:text-[11.2px]" : "sm:text-[11.2px] lg:text-sm"}`}
          >
            <span className="text-[#18B531]">{percent}</span> conversion from
            sales page
          </p>
        </div>
        <div className="flex gap-[3.15px] rounded-[3rem] border-[0.5px] border-[#ECECEE] px-[5px] py-[3px] shadow-[inset_0px_1px_2px_0px_rgba(85,90,102,0.1)] md:gap-[5px] md:px-2 md:py-1">
          <p
            className={`text-[10px] font-medium -tracking-[0.02em] text-[#555A66] ${smallCard ? "md:text-xs" : "sm:text-sm lg:text-base"}`}
          >
            {resources}
          </p>
          <div>
            {smallCard ? (
              <div className="hidden md:block">
                <FileSmallIcon />
              </div>
            ) : (
              <div className="hidden lg:block">
                <FileIcon />
              </div>
            )}
            {!smallCard && (
              <div className="hidden sm:block lg:hidden">
                <FileMidIcon />
              </div>
            )}
            <div className="sm:hidden">
              <FileSmallIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
