
import { ShieldCheck, Calculator, Clock, FileText } from "lucide-react";

const PainPoints = () => {
  const painPoints = [
    {
      icon: Clock,
      title: "Save Time",
      description: "Reduce the admin workload for beneficial ownership filings by up to 99%, freeing your team to focus on client service.",
    },
    {
      icon: ShieldCheck,
      title: "Ensure Compliance",
      description: "Never miss a CIPC filing deadline with automated tracking and submissions for all client companies.",
    },
    {
      icon: Calculator,
      title: "Generate Revenue",
      description: "Earn up to 20% commission on each client while reducing costs and improving service quality.",
    },
    {
      icon: FileText,
      title: "Simplify Documentation",
      description: "Automated collection and verification of ID documents, share certificates, and declarations.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-cipc-gray">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cipc-darkBlue mb-4">
            The Problems We Solve
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Simply CIPC addresses the key challenges accounting firms face with CIPC beneficial ownership filings and annual returns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {painPoints.map((point, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mx-auto w-16 h-16 bg-cipc-blue bg-opacity-10 rounded-full flex items-center justify-center mb-4">
                <point.icon className="h-8 w-8 text-cipc-blue" />
              </div>
              <h3 className="text-xl font-bold text-cipc-darkBlue mb-3">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
