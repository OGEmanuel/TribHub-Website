import { GeistSans } from "geist/font/sans";

const Flag = () => {
  return (
    <section className="mt-[22.875rem] bg-[#1C2332] pb-16 pt-60 md:mt-[29.25rem] md:pb-[10rem] md:pt-[26rem] min-[1221px]:mt-[17rem] min-[1221px]:py-[10rem]">
      <div className="mx-auto max-w-[1708px]">
        <div className="mx-4 max-w-[47.3125rem] space-y-6 md:ml-16 md:space-y-10 2xl:ml-[7.5rem]">
          <div className="space-y-2">
            <p className="text-[#9CA4B6]">WHY TRIBHUB?</p>
            <h2
              className={`max-w-[34.6875rem] text-[2rem] leading-[54.56px] -tracking-[0.02em] text-white md:text-[2.75rem] ${GeistSans.className}`}
            >
              We solve your community management challenges with ease
            </h2>
          </div>
          <p
            className={`text-sm leading-[3rem] -tracking-[0.02em] text-[#B6BDCE] md:text-base`}
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
