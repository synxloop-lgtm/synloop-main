import { Building2, Heart, ShoppingCart, CreditCard } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const IndustriesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const industries = [
    {
      icon: CreditCard,
      title: "Finance",
      description: "Automated trading, risk assessment, and compliance monitoring for financial institutions.",
      benefits: ["Reduced processing time by 85%", "Real-time fraud detection", "Automated compliance reporting"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Heart,
      title: "Healthcare", 
      description: "AI-powered patient data analysis, treatment optimization, and administrative automation.",
      benefits: ["Improved patient outcomes", "Streamlined workflows", "Enhanced diagnostic accuracy"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Building2,
      title: "SaaS",
      description: "Intelligent customer support, automated onboarding, and predictive user analytics.",
      benefits: ["90% faster support resolution", "Automated user journeys", "Predictive churn prevention"],
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      description: "Dynamic pricing, inventory optimization, and personalized customer experiences.",
      benefits: ["35% increase in conversions", "Automated inventory management", "Personalized recommendations"],
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Industries We Transform</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            From finance to healthcare, we're revolutionizing industries with intelligent automation 
            that drives real results and measurable impact.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            const isHovered = hoveredCard === index;
            
            return (
              <Card 
                key={industry.title}
                className="group bg-surface-elevated border-accent/20 hover:border-accent/40 transition-all duration-500 hover:-translate-y-3 hover:shadow-xl hover:shadow-accent-glow/20 cursor-pointer overflow-hidden relative"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <CardHeader className="relative z-10 text-center">
                  <div className="flex justify-center mb-4">
                    <div className={`p-4 bg-gradient-to-r ${industry.color} rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl gradient-text mb-2">
                    {industry.title}
                  </CardTitle>
                  
                  <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                    {industry.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10">
                  {/* Benefits List - Shows on Hover */}
                  <div className={`transition-all duration-300 ${isHovered ? 'opacity-100 max-h-40' : 'opacity-0 max-h-0'} overflow-hidden`}>
                    <div className="space-y-2 pt-2">
                      {industry.benefits.map((benefit, benefitIndex) => (
                        <div 
                          key={benefit}
                          className="flex items-center gap-2 text-xs text-muted-foreground"
                          style={{ animationDelay: `${benefitIndex * 100}ms` }}
                        >
                          <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse"></div>
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Case Study Highlight */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 border border-accent/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 gradient-text">Success Story</h3>
          <p className="text-lg text-muted-foreground mb-4">
            "SynLoop's automation solutions helped us reduce processing time by 85% and increase accuracy to 99.7%. 
            The ROI was evident within the first quarter."
          </p>
          <div className="text-sm text-accent font-semibold">— Fortune 500 Financial Services Company</div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;