
import { Check, Shield, Clock, Package } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Features = () => {
  const features = [
    {
      title: "Simplified Registration",
      description: "Our streamlined process removes the complexity from company registration, making it accessible to everyone.",
      icon: Package,
    },
    {
      title: "Guided Experience",
      description: "Step-by-step assistance ensures you complete all requirements correctly the first time.",
      icon: Check,
    },
    {
      title: "Secure & Reliable",
      description: "Your information is handled with the utmost security and confidentiality throughout the process.",
      icon: Shield,
    },
    {
      title: "Fast Turnaround",
      description: "Get your company registered quickly so you can focus on building your business.",
      icon: Clock,
    },
  ];

  return (
    <section id="features" className="py-16 md:py-24 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-cipc-darkBlue mb-4">
            Everything You Need for Company Registration
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Simply CIPC streamlines the entire registration process, providing you with all the necessary tools and support to get your company registered quickly and efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
