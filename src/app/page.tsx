import IntroScreen from "@/components/IntroScreen";
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import Styles from "@/components/sections/Styles";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <IntroScreen />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Styles />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
