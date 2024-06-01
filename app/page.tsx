import Hero from "./hero";
import Flag from "./flag";
import Features from "./features";
import ThirdSection from "./third-section";
import Banner from "./banner";

export const metadata = {
  title: "Welcome to TribHub!",
  description: "Manage and Grow your communities seamlessly",
  site_name: process.env.SITE_NAME,
  url: process.env.TWITTER_SITE,
  openGraph: {
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="overflow-x-hidden pt-[5.333125rem] md:pt-[5.833125rem]">
      <Hero />
      <Flag />
      <Features />
      <ThirdSection />
      <Banner />
    </main>
  );
}
