import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import synloopLogo from "@/assets/logo.jpg";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden particles">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-background"></div>
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-primary-variant/20 rounded-full blur-2xl animate-ping"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Logo */}
        <div className="mb-8 animate-slide-up">
          <img 
            src={synloopLogo} 
            alt="SynLoop" 
            className="h-20 md:h-24 mx-auto glow-effect float-animation"
          />
        </div>

        {/* Headlines */}
        <div className="space-y-6 mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold animate-slide-up delay-200">
            <span className="gradient-text">Automating the Future,</span>
            <br />
            <span className="text-foreground">One Loop at a Time</span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto animate-slide-up delay-300">
            AI-driven automation solutions to streamline workflows, boost efficiency, and unlock growth.
            <br />
            <span className="text-accent font-semibold">Creating seamless synergy between humans and AI.</span>
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-500">
          <Button variant="hero" size="xl" className="group" onClick={() => window.open('mailto:contact@synloop.com?subject=General Inquiry', '_blank')}>
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button variant="hero-secondary" size="xl" className="group" onClick={() => window.open('mailto:synxloop@gmail.com?subject=Partnership Inquiry', '_blank')}>
            <Sparkles className="mr-2 h-5 w-5" />
            Learn More
          </Button>
        </div>

        {/* Floating Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 animate-fade-in delay-700">
          <div className="bg-surface/60 backdrop-blur-sm border border-accent/20 rounded-xl p-6 hover:border-accent/40 transition-all duration-300 data-flow">
            <div className="text-3xl font-bold gradient-text">99.9%</div>
            <div className="text-muted-foreground">Uptime Guaranteed</div>
          </div>
          
          <div className="bg-surface/60 backdrop-blur-sm border border-accent/20 rounded-xl p-6 hover:border-accent/40 transition-all duration-300 data-flow">
            <div className="text-3xl font-bold gradient-text">500+</div>
            <div className="text-muted-foreground">Automated Workflows</div>
          </div>
          
          <div className="bg-surface/60 backdrop-blur-sm border border-accent/20 rounded-xl p-6 hover:border-accent/40 transition-all duration-300 data-flow">
            <div className="text-3xl font-bold gradient-text">85%</div>
            <div className="text-muted-foreground">Time Savings</div>
          </div>
        </div>
      </div>

      {/* Enhanced Infinity Loop Animation */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="infinity-loop text-primary/80 hover:text-primary transition-colors duration-300"></div>
      </div>
    </section>
  );
};

export default HeroSection;