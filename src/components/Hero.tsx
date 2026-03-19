import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, DollarSign, TrendingUp } from "lucide-react";

const stats = [
  { icon: Clock, value: "20+ hrs", label: "Saved weekly per client" },
  { icon: DollarSign, value: "40%", label: "Average cost reduction" },
  { icon: TrendingUp, value: "3x", label: "Faster lead response" },
];

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          AI-Powered Business Automation
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight tracking-tight mb-5">
          Stop Hiring for Tasks
          <br />
          <span className="text-primary">AI Can Handle Today</span>
        </h1>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Project Mochi connects small and mid-sized businesses with AI-driven systems that automate scheduling, lead follow-up, invoicing, and more — layered on top of the tools you already use.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-16">
          <Button size="lg" className="font-display font-semibold text-base px-8 gap-2" asChild>
            <a href="https://cal.com/mochi-labs" target="_blank" rel="noopener noreferrer">
              Book a Free Strategy Assessment <ArrowRight className="h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="font-display font-semibold text-base px-8" asChild>
            <a href="#how-it-works">See How It Works</a>
          </Button>
        </div>

        {/* Trusted by */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-3">Trusted by</p>
          <p className="text-sm font-medium text-foreground">Sharkey's Cuts for Kids · AnQ Auto Repair · Great Lakes Builders</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center p-5 rounded-xl bg-surface shadow-card border border-border"
            >
              <stat.icon className="h-5 w-5 text-accent mb-2" />
              <span className="font-display text-2xl font-bold text-foreground">{stat.value}</span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
