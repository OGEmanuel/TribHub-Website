import { GeistSans } from "geist/font/sans";

const Flag = () => {
  return (
    <section className="mt-[22.875rem] bg-[#1C2332] pb-16 pt-[15rem] sm:pt-[32rem] md:mt-[29.25rem] md:pb-[10rem] md:pt-[26rem] lg:mt-[17rem] xl:py-[10rem]">
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-4 max-w-[47.3125rem] space-y-6 md:ml-16 md:space-y-10 2xl:ml-12 min-[1700px]:ml-0">
          <div className="space-y-2">
            <p className="text-[#9CA4B6]">WHY TRIBHUB?</p>
            <h2
              className={`max-w-[34.6875rem] text-[2rem] leading-8 -tracking-[0.02em] text-white md:text-[2.75rem] md:leading-[54.56px] ${GeistSans.className}`}
            >
              We solve your community management challenges with ease
            </h2>
          </div>
          <p
            className={`text-sm leading-6 -tracking-[0.02em] text-[#B6BDCE] sm:max-w-[44.125rem] md:text-base md:leading-7 lg:max-w-[47.3125rem]`}
          >
            TribHub makes managing your online communities on WhatsApp,
            Telegram, and Facebook easy by automating invites and payments,
            protecting your shared resources, and providing valuable insights
            through analytics. Our platform ensures efficient operations, robust
            security, and active engagement, allowing you to focus on creating
            and expanding your community with confidence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Flag;
