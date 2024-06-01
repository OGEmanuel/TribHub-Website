import Hero from "./hero";
import Flag from "./flag";
import Features from "./features";
import ThirdSection from "./third-section";
import Banner from "./banner";

export const metadata = {
  description: "Manage and Grow your communities seamlessly",
  openGraph: {
    type: "website",
  },
};

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Flag />
      <Features />
      <ThirdSection />
      <Banner />
    </main>
  );
}
