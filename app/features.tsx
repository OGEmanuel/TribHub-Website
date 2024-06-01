import { GeistSans } from "geist/font/sans";

const Features = () => {
  return (
    <section className="border-b !border-[#E0E1E3] bg-[#FAFAFB] py-20">
      <div className="mx-auto max-w-[1708px]">
        <div className="mx-auto mb-12 max-w-[32.125rem] px-4 text-center md:px-0">
          <h3
            className={`text-[1.75rem] font-medium md:text-[2.5rem] ${GeistSans.className}`}
          >
            Elevating your community management experience
          </h3>
          <p className="text-sm text-[#616670] md:text-base">
            We believe in growing together, which is why we're always updating
            our features to better serve your needs.
          </p>
        </div>
        <div className="flex flex-col gap-6 px-4 md:px-16 2xl:px-[7.5rem]">
          <div className="rounded-3xl bg-white p-6 md:p-10">
            <div className="mt-[16.25rem] max-w-[34.625rem]">
              <h4
                className={`text-2xl font-medium text-[#2A313F] md:text-[1.75rem] ${GeistSans.className}`}
              >
                Effortless community management
              </h4>
              <p className="text-sm -tracking-[0.02em] text-[#616670] md:text-base">
                Say goodbye to manual tasks. TribHub automates invites, payment
                processing, and member access, freeing up your time to focus on
                creating and engaging with your community.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 min-[1000px]:flex-row">
            <div className="rounded-3xl bg-white px-10 py-12">
              <div className="max-[1000px]:max-w-[34.625rem]">
                <h4
                  className={`pt-[17.5rem] text-2xl font-medium text-[#2A313F] md:text-[1.75rem] ${GeistSans.className}`}
                >
                  Protect your community resources{" "}
                </h4>
                <p className="text-sm -tracking-[0.02em] text-[#616670] md:text-base">
                  Join thousands of creators and community builders to create,
                  maintain and secure your communities and resources.{" "}
                </p>
              </div>
            </div>
            <div className="rounded-3xl bg-white px-6 py-12 md:px-10">
              <div className="max-[1000px]:max-w-[34.625rem]">
                <h4
                  className={`pt-[17.5rem] text-2xl font-medium text-[#2A313F] md:text-[1.75rem] ${GeistSans.className}`}
                >
                  Protect your community resources{" "}
                </h4>
                <p className="text-sm -tracking-[0.02em] text-[#616670] md:text-base">
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
