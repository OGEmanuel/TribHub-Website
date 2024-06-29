import { GeistSans } from "geist/font/sans";
import file from "@/public/images/file.png";
import chart from "@/public/images/chart.png";
import chartSmall from "@/public/images/chart-small.png";
import Image from "next/image";
import gamer from "@/public/images/gamer.png";
import suit from "@/public/images/suit.jpeg";
import ArrowDownIcon from "@/components/icons/arrow-down-icon";
import BusinessCard from "@/components/business-card";
import WhatsappIcon from "@/components/icons/whatsapp-icon";
import WhatsappSmallIcon from "@/components/icons/whatsapp-small-icon";
import TelegramIcon from "@/components/icons/telegram-icon";
import WhatsappMidIcon from "@/components/icons/whatsapp-mid-icon";
import TelegramMidIcon from "@/components/icons/telegram-mid-icon";
import TelegramSmallIcon from "@/components/icons/telegram-small-icon";

const Features = () => {
  return (
    <section className="border-b !border-[#E0E1E3] bg-[#FAFAFB] py-20">
      <div className="mx-auto max-w-[1440px]">
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
        <div className="flex flex-col gap-6 px-4 md:px-16 2xl:px-[3.25rem] min-[1700px]:px-0">
          <div className="relative flex overflow-hidden rounded-3xl border border-[#E0E1E3] bg-white p-6 md:p-10">
            <div className="absolute right-0 top-0 h-[16.8175rem] w-[31.5875rem] md:h-[23rem] md:w-[50.125rem] lg:h-full">
              <div className="absolute h-full w-full">
                <div className="lg:bg-card bg-small-card absolute z-40 h-full w-full"></div>
                <div className="absolute h-full w-full sm:max-lg:right-0 sm:max-lg:top-[2.5%]">
                  <div className="absolute left-24 top-12 z-0 sm:left-[9.5rem] sm:top-[3rem] lg:left-5 lg:top-[4.3rem]">
                    <BusinessCard
                      className="shadow-none md:shadow-none"
                      src={suit}
                      name={"Business-Crib Masterminds"}
                      revenue={"$151,234.40"}
                      resources={"4"}
                      percent={"+40%"}
                      members={"400"}
                      icon={<TelegramIcon />}
                      midIcon={<TelegramMidIcon />}
                      smallIcon={<TelegramSmallIcon />}
                    />
                  </div>
                  <div className="absolute left-[50%] top-[50%] z-[80] translate-x-[-5%] translate-y-[-38%] sm:translate-x-[-20%] sm:translate-y-[-60%] lg:translate-x-[-40%] lg:translate-y-[-47%]">
                    <BusinessCard
                      src={gamer}
                      name={"Apex Gamers Club"}
                      revenue={"$5,446.70"}
                      resources={"4"}
                      percent={"+20%"}
                      members={"82"}
                      icon={<WhatsappIcon />}
                      midIcon={<WhatsappMidIcon />}
                      smallIcon={<WhatsappSmallIcon />}
                    />
                  </div>
                  <div className="absolute -right-16 bottom-0 sm:bottom-10 md:right-6 lg:bottom-5">
                    <BusinessCard
                      className="shadow-none md:w-[18rem] md:shadow-none"
                      src={gamer}
                      name={"Apex Gamers Club"}
                      revenue={"$24,131.53"}
                      resources={"6"}
                      percent={"+12.3%"}
                      members={"243"}
                      icon={<WhatsappIcon />}
                      smallIcon={<WhatsappSmallIcon />}
                      smallCard
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="z-[85] mt-[15rem] max-w-[34.625rem]">
              <h4
                className={`text-xl font-medium leading-[29.76px] -tracking-[0.02em] text-[#2A313F] md:text-2xl md:text-[1.75rem] md:leading-[34.72px] ${GeistSans.className}`}
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
          <div className="flex flex-col gap-6 lg:flex-row">
            <div className="flex flex-col justify-end rounded-3xl bg-[#2B7FFF]">
              <div className="relative left-[50%] w-full max-w-[32rem] -translate-x-[50%] overflow-hidden 2xl:max-w-[40rem]">
                <Image src={file} alt="file-icon" className="w-full" />
              </div>
              <div className="relative z-40 overflow-hidden max-[1000px]:max-w-[34.625rem]">
                <div className="px-6 pb-6 max-[280px]:px-4 md:px-12 md:pb-12">
                  <h4
                    className={`text-lg font-medium leading-[29.76px] -tracking-[0.02em] text-white md:text-[1.75rem] md:leading-[34.72px] ${GeistSans.className}`}
                  >
                    Protect your community resources{" "}
                  </h4>
                  <p className="text-sm leading-6 -tracking-[0.02em] text-[#E0E1E3] md:text-base md:leading-7">
                    Safeguard your community&apos;s valuable resources and
                    ensure that only members have access to shared content.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl border border-[#E0E1E3] bg-white">
              <div className="absolute left-6 top-6 md:left-12 md:top-12">
                <p
                  className={`text-2xl font-bold -tracking-[0.02em] md:text-[2rem] ${GeistSans.className}`}
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
              <div className="w-full">
                <div className="flex h-[18.5rem] w-full items-end justify-end overflow-hidden sm:h-[19.875rem]">
                  <Image
                    src={chart}
                    alt="chart-icon"
                    fill
                    className="hidden sm:block"
                  />
                  <Image
                    src={chartSmall}
                    alt="chart-icon"
                    fill
                    className="!h-[25rem] sm:hidden"
                  />
                </div>
              </div>
              <div className="flex flex-col px-6 pb-6 max-[1000px]:max-w-[34.625rem] md:px-12 md:pb-12">
                <h4
                  className={`z-20 text-lg font-medium leading-[29.76px] -tracking-[0.02em] text-[#2A313F] md:text-2xl md:text-[1.75rem] md:leading-[34.72px] ${GeistSans.className}`}
                >
                  Track sales and community growth{" "}
                </h4>
                <p className="z-20 text-sm leading-6 -tracking-[0.02em] text-[#616670] md:text-base md:leading-7">
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
