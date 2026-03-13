import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IndustrySolutions from "@/components/IndustrySolutions";
import PainVsSolution from "@/components/PainVsSolution";
import Process from "@/components/Process";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <IndustrySolutions />
      <Process />
      <PainVsSolution />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
