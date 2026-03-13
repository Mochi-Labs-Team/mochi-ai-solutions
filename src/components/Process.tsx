import { Search, Cog, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Free Automation Audit",
    description:
      "We analyze your current workflows, tools, and bottlenecks to identify the highest-ROI automation opportunities.",
  },
  {
    icon: Cog,
    number: "02",
    title: "Build & Integrate",
    description:
      "We build AI-powered systems that layer on top of your existing tools — no rip-and-replace, no disruption.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Launch & Optimize",
    description:
      "Go live in weeks, not months. We monitor performance and continuously optimize for better results.",
  },
];

const Process = () => {
  return (
    <section id="how-it-works" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Three simple steps to transform your business operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="mx-auto mb-4 flex items-center justify-center h-14 w-14 rounded-2xl bg-primary/10">
                <step.icon className="h-6 w-6 text-primary" />
              </div>
              <span className="font-display text-xs font-bold text-primary tracking-widest uppercase">
                Step {step.number}
              </span>
              <h3 className="font-display text-xl font-bold text-foreground mt-1 mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
