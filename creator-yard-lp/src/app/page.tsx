import Image from "next/image";
import { FAQs } from "@/components/FAQs";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Pricing } from "@/components/Pricing";
import { TrustedBy } from "@/components/TrustedBy";


export default async function Home() {
  return (
    <main className=" w-screen  flex flex-col items-center">
      <HeroSection />
      <div className=' flex flex-col items-center '>
        <Image src={"/images/ss.svg"} alt='hero image' width={100} height={100} className='w-full ' />
      </div>
      <Features />
      <Pricing />
      <TrustedBy />
      <FAQs />
      <Footer />
    </main>
  );
}
