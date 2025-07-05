<<<<<<< HEAD
import { useState } from "react";
=======
"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
>>>>>>> bb6b6d9 (main)
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
<<<<<<< HEAD
=======
import { number } from "framer-motion";
>>>>>>> bb6b6d9 (main)

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
<<<<<<< HEAD
    project: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. I'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", project: "", message: "" });
  };

=======
    number: "",
    project: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

>>>>>>> bb6b6d9 (main)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

<<<<<<< HEAD
=======
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email,number, project, message } = formData;

    if (!name || !email || !message) {
      toast({ title: "Please fill out all required fields." });
      return;
    }

    setLoading(true);

    const templateParams = {
      from_name: name,
      email,
      number,
      project,
      message,
    };

    try {
      await emailjs.send(
        "service_q0ha99f",       // ✅ your service ID
        "template_a0p3qg9",      // ✅ your template ID
        templateParams,
        "UYZwRWWhKgDx-eMI_"      // ✅ your public key
      );

      toast({
        title: "✅ Message Sent!",
        description: "Thank you for your inquiry. I'll get back to you within 24 hours.",
      });

      setFormData({ name: "", email: "", number: "", project: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "❌ Failed to send message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

>>>>>>> bb6b6d9 (main)
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "rm9193421@gmail.com",
      action: "mailto:rm9193421@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+91 95993 67759",
    },
    {
      icon: MapPin,
      title: "Location",
<<<<<<< HEAD
      details: "Noida , India",
      action: "#",
=======
      details: "Noida, India",
>>>>>>> bb6b6d9 (main)
    },
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Work <span className="bg-hero-gradient bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your project to life? Get in touch and let's discuss how I can help 
            you achieve your goals with a stunning website or web application.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card-gradient border-border shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
<<<<<<< HEAD
=======
                      Mobile Number
                    </label>
                    <Input
                      id="number"
                      name="number"
                      type="number"
                      value={formData.number}
                      onChange={handleChange}
                      placeholder="+91 12345 67890"
                      required
                      className="bg-background border-border"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
>>>>>>> bb6b6d9 (main)
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="bg-background border-border"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-foreground mb-2">
                    Project Type
                  </label>
                  <Input
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    placeholder="e.g., E-commerce Website, Portfolio, Web App"
                    className="bg-background border-border"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                    className="bg-background border-border"
                  />
                </div>

<<<<<<< HEAD
                <Button type="submit" size="lg" className="w-full bg-hero-gradient hover:opacity-90 shadow-elegant group">
                  <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  Send Message
=======
                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="w-full bg-hero-gradient hover:opacity-90 shadow-elegant group"
                >
                  <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  {loading ? "Sending..." : "Send Message"}
>>>>>>> bb6b6d9 (main)
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8">
                I'm always excited to work on new projects and collaborate with amazing people. 
                Whether you have a clear vision or just an idea, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-card-gradient border-border hover:shadow-card transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-hero-gradient rounded-lg flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{info.title}</h4>
                        <a
                          href={info.action}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.details}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-card-gradient border-border">
              <CardContent className="p-6">
                <h4 className="font-semibold text-foreground mb-2">Response Time</h4>
                <p className="text-muted-foreground">
                  I typically respond to all inquiries within 24 hours. For urgent projects, 
                  please mention it in your message.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

<<<<<<< HEAD
export default ContactSection;
=======
export default ContactSection;
>>>>>>> bb6b6d9 (main)
