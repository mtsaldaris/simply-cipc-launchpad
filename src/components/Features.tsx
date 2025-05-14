
import { Check, Shield, Clock, Package, Database, Calculator } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      title: "Automated Compliance",
      description: "Automate beneficial ownership filings and annual return submissions to CIPC for all your clients.",
      icon: Check,
    },
    {
      title: "Client Dashboard",
      description: "Real-time dashboard showing BO and annual return status across all clients in one centralized place.",
      icon: Database,
    },
    {
      title: "Automated Data Collection",
      description: "Collect information from beneficial owners via WhatsApp and web interfaces with built-in reminders.",
      icon: Package,
    },
    {
      title: "Revenue Generation",
      description: "Earn commissions while reducing your workload - up to 20% per client annually.",
      icon: Calculator,
    },
    {
      title: "CIPC API Integration",
      description: "Automatic submission, payment, and confirmation through direct integration with CIPC.",
      icon: Shield,
    },
    {
      title: "Due Date Tracking",
      description: "Never miss a filing deadline with automatic tracking of individual due dates per company.",
      icon: Clock,
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cipc-darkBlue mb-4">
            Built for South African Accounting Firms
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Simply CIPC is a purpose-built compliance automation platform that reduces the admin burden for accountants by up to 99%.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="h-12 w-12 rounded-full bg-cipc-blue bg-opacity-10 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-cipc-blue" />
                </div>
                <CardTitle className="text-xl font-semibold text-cipc-darkBlue">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
