import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "SynLoop transformed our entire workflow. What used to take our team days now happens automatically in hours. The AI learns our patterns and continuously improves our processes.",
      author: "Sarah Chen",
      title: "CTO, TechFlow Solutions",
      rating: 5,
      company: "Series B SaaS Startup"
    },
    {
      quote: "The predictive analytics capabilities are game-changing. We can now forecast market trends with 94% accuracy and adjust our strategies in real-time.",
      author: "Marcus Rodriguez",
      title: "VP of Operations, DataDrive Inc.",
      rating: 5,
      company: "Fortune 500 Company"
    },
    {
      quote: "Implementation was seamless and the support team is exceptional. Our automation efficiency increased by 300% in the first quarter alone.",
      author: "Dr. Emily Watson",
      title: "Head of Digital Innovation",
      rating: 5,
      company: "Healthcare Systems Corp"
    },
    {
      quote: "The custom AI integrations perfectly fit our unique needs. SynLoop doesn't just provide solutions, they become part of your innovation journey.",
      author: "James Park",
      title: "Founder & CEO, InnovateLab",
      rating: 5,
      company: "AI-First Startup"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-24 bg-background relative overflow-hidden particles">
      {/* Background Elements */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">What Our Clients Say</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from real companies. Discover how SynLoop is transforming businesses 
            across industries with intelligent automation.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="relative">
          <Card className="bg-surface border-accent/20 shadow-xl shadow-accent-glow/10 overflow-hidden">
            <CardContent className="p-8 md:p-12 relative">
              {/* Quote Icon */}
              <div className="absolute top-6 left-6 text-accent/30">
                <Quote className="h-12 w-12" />
              </div>

              {/* Testimonial Content */}
              <div className="text-center space-y-8">
                {/* Quote */}
                <blockquote className="text-lg md:text-xl lg:text-2xl text-foreground leading-relaxed font-medium">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>

                {/* Rating Stars */}
                <div className="flex justify-center gap-1">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>

                {/* Author Info */}
                <div className="space-y-2">
                  <div className="text-xl font-bold gradient-text">
                    {testimonials[currentTestimonial].author}
                  </div>
                  <div className="text-muted-foreground">
                    {testimonials[currentTestimonial].title}
                  </div>
                  <div className="text-sm text-accent">
                    {testimonials[currentTestimonial].company}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonial Navigation Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial 
                  ? 'bg-accent shadow-lg shadow-accent-glow/50' 
                  : 'bg-accent/30 hover:bg-accent/50'
              }`}
            />
          ))}
        </div>

        {/* Mini Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className={`bg-surface-elevated border transition-all duration-300 cursor-pointer hover:border-accent/40 hover:shadow-lg hover:shadow-accent-glow/20 ${
                index === currentTestimonial ? 'border-accent/40 shadow-lg shadow-accent-glow/20' : 'border-accent/20'
              }`}
              onClick={() => setCurrentTestimonial(index)}
            >
              <CardContent className="p-4 text-center">
                <div className="text-sm font-semibold text-foreground mb-1">
                  {testimonial.author}
                </div>
                <div className="text-xs text-muted-foreground">
                  {testimonial.title}
                </div>
                <div className="flex justify-center gap-1 mt-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-accent text-accent" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;