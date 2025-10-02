import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Infinity } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/20 via-surface to-accent/20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="text-9xl text-accent/5 animate-ping">∞</div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        {/* Infinity Symbol Animation */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Infinity className="h-16 w-16 text-accent animate-pulse" />
            <div className="absolute inset-0 h-16 w-16 text-accent/30 animate-ping">
              <Infinity className="h-16 w-16" />
            </div>
          </div>
        </div>

        {/* Main CTA Content */}
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className="gradient-text">Ready to Automate</span>
            <br />
            <span className="text-foreground">Your Future?</span>
          </h2>

          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Join hundreds of forward-thinking companies who are already experiencing the power of 
            intelligent automation. Start your transformation journey today.
          </p>

          {/* Benefits List */}
          <div className="flex flex-wrap justify-center gap-6 my-12">
            {[
              "Custom AI solutions",
              "Expert consultation", 
              "Scalable automation",
              "Future-ready technology"
            ].map((benefit, index) => (
              <div 
                key={benefit}
                className="flex items-center gap-2 bg-surface/80 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 text-sm"
              >
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                {benefit}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button variant="hero" size="xl" className="group min-w-48" onClick={() => window.open('mailto:contact@synloop.com?subject=Demo Request', '_blank')}>
              <Sparkles className="mr-2 h-5 w-5" />
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button variant="hero-secondary" size="xl" className="min-w-48" onClick={() => window.open('mailto:contact@synloop.com?subject=Partnership Inquiry', '_blank')}>
              Learn More
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12 border-t border-accent/20">
            <p className="text-sm text-muted-foreground mb-6">
              Trusted by 500+ companies worldwide
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {/* Mock company logos */}
              {["TechFlow", "DataDrive", "InnovateLab", "NextGen"].map((company, index) => (
                <div 
                  key={company}
                  className="text-lg font-bold text-muted-foreground hover:text-accent transition-colors duration-300"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute -top-10 -right-10 text-accent/20 animate-bounce">
          <div className="text-6xl">∞</div>
        </div>
        <div className="absolute -bottom-10 -left-10 text-accent/20 animate-bounce delay-1000">
          <div className="text-4xl">∞</div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;