
import { Check } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Onboard Your Firm",
      description: "Sign up and create your accounting firm profile with Simply CIPC - a one-time process.",
    },
    {
      number: "02",
      title: "Add Your Client Companies",
      description: "Easily import your client portfolio through our bulk upload system or individually.",
    },
    {
      number: "03",
      title: "Automated Data Collection",
      description: "Our system collects information from beneficial owners through WhatsApp and web interfaces.",
    },
    {
      number: "04",
      title: "Seamless CIPC Submissions",
      description: "We handle all CIPC filings, payments, and confirmations through our direct API integration.",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 md:py-24 px-4 bg-cipc-gray">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cipc-darkBlue mb-4">
            How Simply CIPC Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform streamlines CIPC compliance for accounting firms, reducing admin work by up to 99%.
          </p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-cipc-blue bg-opacity-30 transform -translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row md:items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                <div className={`md:w-1/2 flex ${index % 2 === 0 ? 'md:justify-end md:pr-16' : 'md:justify-start md:pl-16'} mb-6 md:mb-0`}>
                  <div className="max-w-md">
                    <div className="flex items-center mb-4">
                      <div className="bg-cipc-blue text-white text-xl font-bold rounded-full h-12 w-12 flex items-center justify-center mr-4">
                        <span>{step.number}</span>
                      </div>
                      <h3 className="text-2xl font-semibold text-cipc-darkBlue">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                <div className="hidden md:block md:w-1/2">
                  <div className={`h-8 w-8 rounded-full bg-cipc-blue relative left-1/2 transform -translate-x-1/2 z-10 flex items-center justify-center`}>
                    <Check className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
