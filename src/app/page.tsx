import { CleaningService } from "@/components/sites/vinhomecp/CleaningService";
import { ChatFab } from "@/components/sites/vinhomecp/ChatFab";
import { Contact } from "@/components/sites/vinhomecp/Contact";
import { Footer } from "@/components/sites/vinhomecp/Footer";
import { Header } from "@/components/sites/vinhomecp/Header";
import { Hero } from "@/components/sites/vinhomecp/Hero";
import { Marquee } from "@/components/sites/vinhomecp/Marquee";
import { Pricing } from "@/components/sites/vinhomecp/Pricing";
import { Process } from "@/components/sites/vinhomecp/Process";
import { Services } from "@/components/sites/vinhomecp/Services";
import { WhyChooseUs } from "@/components/sites/vinhomecp/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Process />
        <Pricing />
        <CleaningService />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
      <ChatFab />
    </>
  );
}
