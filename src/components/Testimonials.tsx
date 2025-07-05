import { Card, CardContent } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Amit Sharma",
    role: "Founder, TechVerse",
    quote:
      "Working with Enteriya was an amazing experience. The project was delivered ahead of schedule with great attention to detail.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Sneha Patel",
    role: "Product Manager, Zelo App",
    quote:
      "Professional, responsive, and extremely talented. Highly recommend for full-stack development projects.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "David Lee",
    role: "CEO, CleanGrid",
    quote:
      "The animations and UI were top-notch. Enteriya delivered exactly what we envisioned, even better!",
    image: "https://randomuser.me/api/portraits/men/64.jpg",
  },
];

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          What <span className="bg-hero-gradient bg-clip-text text-transparent">Clients Say</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
          Feedback from some amazing people I’ve worked with.
        </p>

        <div className="relative overflow-hidden min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[index].id}
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -300 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="max-w-xl mx-auto"
            >
              <Card className="bg-card-gradient border-border shadow-lg p-6">
                <CardContent className="flex flex-col items-center text-center">
                  <img
                    src={testimonials[index].image}
                    alt={testimonials[index].name}
                    className="w-16 h-16 rounded-full mb-4 object-cover"
                  />
                  <p className="text-muted-foreground mb-4 italic">
                    “{testimonials[index].quote}”
                  </p>
                  <h4 className="text-foreground font-semibold">{testimonials[index].name}</h4>
                  <span className="text-sm text-muted-foreground">{testimonials[index].role}</span>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index ? "bg-primary scale-110" : "bg-muted-foreground/30"
              }`}
              aria-label={`Show testimonial from ${testimonials[i].name}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
