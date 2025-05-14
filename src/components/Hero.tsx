
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-white to-cipc-gray">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-cipc-darkBlue mb-4 leading-tight">
            Compliance Automation for South African Accounting Firms
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Simply CIPC streamlines beneficial ownership filings and annual returns to CIPC, reducing admin burden for accountants by up to 99%.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              className="bg-cipc-blue hover:bg-cipc-lightBlue text-white text-lg py-6 px-8"
              onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join Our Early Access
            </Button>
            <Button 
              variant="outline" 
              className="border-cipc-blue text-cipc-blue hover:bg-cipc-blue hover:text-white text-lg py-6 px-8"
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center animate-fade-in">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-cipc-blue rounded-full opacity-10 absolute -top-6 -left-6"></div>
            <div className="bg-white p-8 rounded-md shadow-lg relative z-10 max-w-md">
              <h3 className="text-xl font-semibold text-cipc-darkBlue mb-4">Designed for Accounting Firms</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-cipc-blue rounded-full w-5 h-5 mt-1 mr-3"></div>
                  <span>Automate CIPC beneficial ownership filings</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-cipc-blue rounded-full w-5 h-5 mt-1 mr-3"></div>
                  <span>Streamlined annual return submissions</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-cipc-blue rounded-full w-5 h-5 mt-1 mr-3"></div>
                  <span>Centralized dashboard for all clients</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-cipc-blue rounded-full w-5 h-5 mt-1 mr-3"></div>
                  <span>Generate commission while reducing workload</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
