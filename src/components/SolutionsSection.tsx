import { Bot, Database, TrendingUp, Puzzle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SolutionsSection = () => {
  const solutions = [
    {
      icon: Bot,
      title: "AI Workflow Automation",
      description: "Intelligent automation that learns and adapts to your business processes, eliminating repetitive tasks and human error.",
      features: ["Smart Process Mining", "Adaptive Learning", "Real-time Optimization"]
    },
    {
      icon: Database,
      title: "Intelligent Data Processing", 
      description: "Transform raw data into actionable insights with our advanced AI-powered data processing and analysis systems.",
      features: ["Real-time Analytics", "Pattern Recognition", "Anomaly Detection"]
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecast trends, predict outcomes, and make data-driven decisions with our machine learning-powered analytics.",
      features: ["Trend Forecasting", "Risk Assessment", "Performance Prediction"]
    },
    {
      icon: Puzzle,
      title: "Custom AI Integrations",
      description: "Seamlessly integrate AI capabilities into your existing systems with our flexible, scalable integration solutions.",
      features: ["API Integrations", "Custom Models", "Scalable Architecture"]
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden particles">
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Our Solutions</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive AI automation solutions designed to transform your business operations 
            and unlock unprecedented levels of efficiency.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <Card 
                key={solution.title}
                className="group bg-surface border-accent/20 hover:border-accent/40 hover:shadow-xl hover:shadow-accent-glow/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden relative data-flow"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Card Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <CardHeader className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-primary to-accent rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl md:text-2xl gradient-text">
                      {solution.title}
                    </CardTitle>
                  </div>
                  
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {solution.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10">
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li 
                        key={feature}
                        className="flex items-center gap-3 text-sm text-muted-foreground"
                      >
                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-surface border border-accent/30 rounded-full text-sm text-muted-foreground">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
            Custom solutions available for enterprise needs
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;