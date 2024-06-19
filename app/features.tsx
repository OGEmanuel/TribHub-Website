import { GeistSans } from "geist/font/sans";
import file from "@/public/icons/file-icon.svg";
import chart from "@/public/icons/chart-icon.svg";
import Image from "next/image";
import ArrowDownIcon from "@/components/icons/arrow-down-icon";
import businessCard1 from "@/public/icons/business-card-1.svg";
import businessCard3 from "@/public/icons/business-card-3.svg";
import BusinessCard from "@/components/business-card";

const Features = () => {
  return (
    <section className="border-b !border-[#E0E1E3] bg-[#FAFAFB] py-20">
      <div className="mx-auto max-w-[1708px]">
        <div className="mx-auto mb-12 max-w-[32.125rem] px-4 text-center md:px-0">
          <h3
            className={`text-[1.75rem] font-medium leading-[34.72px] -tracking-[0.02em] md:text-[2.5rem] md:leading-[49.6px] ${GeistSans.className}`}
          >
            Elevating your community management experience
          </h3>
          <p className="text-sm leading-6 -tracking-[0.02em] text-[#616670] md:text-base md:leading-7">
            We believe in growing together, which is why we&apos;re always
            updating our features to better serve your needs.
          </p>
        </div>
        <div className="flex flex-col gap-6 px-4 md:px-16 2xl:px-[7.5rem]">
          <div className="relative flex overflow-hidden rounded-3xl border border-[#E0E1E3] bg-white p-6 md:p-10">
            <div className="absolute right-0 top-0 h-full w-[50.125rem]">
              <div className="absolute h-full w-full">
                <div className="bg-card absolute z-40 h-full w-full"></div>
                <div className="absolute left-5 top-4 z-0">
                  <Image src={businessCard1} alt="business-card-1" />
                </div>
                <div className="absolute left-[50%] top-[50%] z-50 translate-x-[-40%] translate-y-[-47%]">
                  <BusinessCard />
                </div>
                <div className="absolute bottom-10 right-6">
                  <Image src={businessCard3} alt="business-card-3" />
                </div>
              </div>
            </div>
            <div className="z-50 mt-[15rem] max-w-[34.625rem]">
              <h4
                className={`text-2xl font-medium leading-[29.76px] -tracking-[0.02em] text-[#2A313F] md:text-[1.75rem] md:leading-[34.72px] ${GeistSans.className}`}
              >
                Effortless community management
              </h4>
              <p className="text-sm leading-6 -tracking-[0.02em] text-[#616670] md:text-base md:leading-7">
                Say goodbye to manual tasks. TribHub automates invites, payment
                processing, and member access, freeing up your time to focus on
                creating and engaging with your community.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 min-[1000px]:flex-row">
            <div className="flex flex-col justify-end rounded-3xl bg-[#2B7FFF]">
              <div className="relative w-full overflow-hidden pt-3 min-[280px]:h-[8.5rem] min-[340px]:h-[10rem] min-[440px]:h-[12rem] min-[520px]:h-[15rem] min-[640px]:h-[17rem] min-[710px]:h-[20rem] min-[920px]:h-[25rem] min-[1000px]:h-[13rem] min-[1240px]:h-[17rem] 2xl:h-[20rem]">
                <div className="bg-file absolute bottom-0 h-full w-full"></div>
                <Image src={file} alt="file-icon" className="w-full" />
              </div>
              <div className="z-40 max-[1000px]:max-w-[34.625rem]">
                <div className="px-6 pb-6 max-[280px]:px-4 md:px-12 md:pb-12">
                  <h4
                    className={`text-lg font-medium leading-[29.76px] -tracking-[0.02em] text-white md:text-[1.75rem] md:leading-[34.72px] ${GeistSans.className}`}
                  >
                    Protect your community resources{" "}
                  </h4>
                  <p className="text-sm leading-6 -tracking-[0.02em] text-[#E0E1E3] md:text-base md:leading-7">
                    Safeguard your community's valuable resources and ensure
                    that only members have access to shared content.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-[#E0E1E3] bg-white">
              <div className="absolute left-12 top-12">
                <p
                  className={`text-[2rem] font-bold -tracking-[0.02em] ${GeistSans.className}`}
                >
                  $151,234.40
                </p>
                <div className="flex items-center">
                  <ArrowDownIcon />
                  <span
                    className={`font-medium -tracking-[0.02em] ${GeistSans.className}`}
                  >
                    2.4%
                  </span>
                </div>
              </div>
              <div className="h-[17rem] w-full overflow-hidden">
                <Image src={chart} alt="chart-icon" className="w-full" />
              </div>
              <div className="px-12 pb-12 max-[1000px]:max-w-[34.625rem]">
                <h4
                  className={`text-2xl font-medium leading-[29.76px] -tracking-[0.02em] text-[#2A313F] md:text-[1.75rem] md:leading-[34.72px] ${GeistSans.className}`}
                >
                  Track sales and community growth{" "}
                </h4>
                <p className="text-sm leading-6 -tracking-[0.02em] text-[#616670] md:text-base md:leading-7">
                  Join thousands of creators and community builders to create,
                  maintain and secure your communities and resources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
