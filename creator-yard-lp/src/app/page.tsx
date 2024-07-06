import { FAQs } from "@/components/FAQs";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Pricing } from "@/components/Pricing";


export default async function Home() {
  return (
    <main className=" w-screen  flex flex-col items-center">
      <HeroSection />
      <Features />
      <Pricing />
      <FAQs />
      <Footer />
    </main>
  );
}
