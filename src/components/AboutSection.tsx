import { Zap, Target, Shield, Infinity } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Zap,
      title: "Innovation",
      description: "Cutting-edge AI technology that pushes the boundaries of what's possible in automation."
    },
    {
      icon: Target,
      title: "Efficiency", 
      description: "Streamlined workflows that maximize productivity while minimizing manual intervention."
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Enterprise-grade security and 99.9% uptime guarantee for mission-critical operations."
    }
  ];

  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-accent/5 to-primary/5"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <Infinity className="h-8 w-8 text-accent animate-pulse" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              <span className="gradient-text">About SynLoop</span>
            </h2>
            <Infinity className="h-8 w-8 text-accent animate-pulse" />
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're building the future where intelligent automation seamlessly integrates with human creativity, 
            creating an infinite loop of innovation and growth.
          </p>
        </div>

        {/* Vision Statement */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-accent/20 rounded-2xl p-8 md:p-12 mb-16 glow-effect">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">
              Our Vision
            </h3>
            <p className="text-lg md:text-xl text-foreground leading-relaxed">
              "Creating a seamless synergy between humans and AI, where automation amplifies human potential 
              rather than replacing it. Every loop we create brings us closer to a future where technology 
              serves humanity's greatest ambitions."
            </p>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div 
                key={value.title}
                className="group bg-surface-elevated border border-accent/20 rounded-xl p-8 hover:border-accent/40 hover:shadow-lg hover:shadow-accent-glow/20 transition-all duration-500 hover:-translate-y-2 data-flow"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-primary-foreground" />
                  </div>
                  
                  <h4 className="text-xl font-bold mb-4 gradient-text">
                    {value.title}
                  </h4>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Infinity Loop Illustration */}
        <div className="flex justify-center mt-16">
          <div className="relative">
            <div className="text-6xl text-accent/30 animate-pulse">∞</div>
            <div className="absolute inset-0 text-6xl text-accent animate-ping">∞</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;