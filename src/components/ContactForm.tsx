
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted with data:", formData);
      
      // Show success toast
      toast({
        title: "Interest Registered!",
        description: "Thank you for your interest. We'll be in touch soon.",
      });
      
      // Reset form
      setFormData({ name: "", email: "", company: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact-form" className="py-16 md:py-24 px-4 bg-white">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto bg-cipc-gray rounded-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-cipc-darkBlue mb-4">
              Register Your Interest
            </h2>
            <p className="text-lg text-gray-600">
              Be among the first to know when Simply CIPC launches. Leave your details below and we'll keep you updated.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="bg-white"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="bg-white"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="company">Company Name (Optional)</Label>
              <Input
                id="company"
                name="company"
                placeholder="Enter your company name"
                value={formData.company}
                onChange={handleInputChange}
                className="bg-white"
              />
            </div>

            <div className="flex items-center space-x-2">
              <input 
                type="checkbox" 
                id="consent" 
                className="h-4 w-4 rounded border-gray-300 text-cipc-blue focus:ring-cipc-blue"
                required
              />
              <label htmlFor="consent" className="text-sm text-gray-600">
                I agree to be contacted about Simply CIPC services
              </label>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-cipc-blue hover:bg-cipc-lightBlue text-white py-6"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Register My Interest"}
            </Button>
            
            <p className="text-xs text-center text-gray-500 mt-4">
              Your information will be handled in accordance with our Privacy Policy.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
