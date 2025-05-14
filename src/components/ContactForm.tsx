
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    firmName: "",
    clientCount: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, clientCount: value }));
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
        description: "Thank you for your interest. Our team will be in touch with your accounting firm soon.",
      });
      
      // Reset form
      setFormData({ name: "", email: "", firmName: "", clientCount: "", message: "" });
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
              Be among the first accounting firms to access Simply CIPC. Leave your details below and we'll keep you updated on our launch.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Contact Person</Label>
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
                placeholder="Enter your professional email address"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="bg-white"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="firmName">Accounting Firm Name</Label>
              <Input
                id="firmName"
                name="firmName"
                placeholder="Enter your accounting firm name"
                value={formData.firmName}
                onChange={handleInputChange}
                required
                className="bg-white"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="clientCount">Number of Client Companies</Label>
              <Select onValueChange={handleSelectChange} value={formData.clientCount}>
                <SelectTrigger className="bg-white">
                  <SelectValue placeholder="Select number of clients" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-10">1-10 companies</SelectItem>
                  <SelectItem value="11-50">11-50 companies</SelectItem>
                  <SelectItem value="51-100">51-100 companies</SelectItem>
                  <SelectItem value="101-500">101-500 companies</SelectItem>
                  <SelectItem value="500+">500+ companies</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Additional Comments (Optional)</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell us about your current CIPC compliance process"
                value={formData.message}
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
              {isSubmitting ? "Submitting..." : "Register Interest"}
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
