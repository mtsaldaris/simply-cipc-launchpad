
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PainPoints from "@/components/PainPoints";
import HowItWorks from "@/components/HowItWorks";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <Features />
        <PainPoints />
        <HowItWorks />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
