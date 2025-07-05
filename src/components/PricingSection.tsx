import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const PricingSection = () => {
  const packages = [
    {
      name: "Basic",
      price: "$999",
      period: "Starting from",
      description: "Perfect for small businesses and personal websites",
      features: [
        "Responsive Design",
        "Up to 5 Pages",
        "Contact Form",
        "SEO Optimization",
        "Mobile Friendly",
        "1 Month Support",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$2,499",
      period: "Starting from",
      description: "Ideal for growing businesses with advanced needs",
      features: [
        "Everything in Basic",
        "Up to 15 Pages",
        "Content Management System",
        "E-commerce Integration",
        "Analytics Setup",
        "3 Months Support",
        "Performance Optimization",
        "Social Media Integration",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$4,999",
      period: "Starting from",
      description: "For large businesses requiring custom solutions",
      features: [
        "Everything in Professional",
        "Unlimited Pages",
        "Custom Web Applications",
        "Database Integration",
        "API Development",
        "6 Months Support",
        "Advanced Security",
        "Custom Features",
        "Priority Support",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-card/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-hero-gradient bg-clip-text text-transparent">Pricing</span> Packages
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the perfect package for your project. All packages include modern design, 
            clean code, and ongoing support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card 
              key={pkg.name} 
              className={`relative bg-card-gradient border-border hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 ${
                pkg.popular ? 'ring-2 ring-primary/50 scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-hero-gradient px-4 py-1 rounded-full flex items-center space-x-1">
                    <Star className="h-4 w-4 text-white" />
                    <span className="text-white text-sm font-medium">Most Popular</span>
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-foreground">{pkg.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold bg-hero-gradient bg-clip-text text-transparent">
                    {pkg.price}
                  </span>
                  <span className="text-muted-foreground ml-2">{pkg.period}</span>
                </div>
                <p className="text-muted-foreground mt-2">{pkg.description}</p>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    pkg.popular 
                      ? 'bg-hero-gradient hover:opacity-90 shadow-elegant' 
                      : 'bg-secondary hover:bg-secondary/80'
                  }`}
                  size="lg"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need a custom solution? Let's discuss your specific requirements.
          </p>
          <Button variant="outline" size="lg" className="border-primary/50 hover:bg-primary/10">
            Contact for Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;