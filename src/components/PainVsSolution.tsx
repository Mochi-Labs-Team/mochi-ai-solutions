import { X, Check } from "lucide-react";

const painPoints = [
  "20+ hours/week on manual data entry",
  "Missed calls and lost leads",
  "Spreadsheets for scheduling & invoicing",
  "Copy-pasting between disconnected tools",
  "Hiring more people for repetitive tasks",
];

const solutions = [
  "Automated workflows running 24/7",
  "AI answering & qualifying every lead",
  "Integrated scheduling & billing systems",
  "Tools connected with intelligent automations",
  "Scale operations without scaling headcount",
];

const PainVsSolution = () => {
  return (
    <section id="solutions" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
            The Manual Way vs. The Mochi Way
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            See how AI automation transforms your daily operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Pain */}
          <div className="bg-surface rounded-2xl border border-border shadow-card p-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 text-destructive text-sm font-medium mb-6">
              Without Automation
            </div>
            <ul className="space-y-4">
              {painPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0 h-5 w-5 rounded-full bg-destructive/10 flex items-center justify-center">
                    <X className="h-3 w-3 text-destructive" />
                  </div>
                  <span className="text-sm text-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution */}
          <div className="bg-surface rounded-2xl border border-primary/20 shadow-elevated p-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              With Project Mochi
            </div>
            <ul className="space-y-4">
              {solutions.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <div className="mt-0.5 flex-shrink-0 h-5 w-5 rounded-full bg-accent/10 flex items-center justify-center">
                    <Check className="h-3 w-3 text-accent" />
                  </div>
                  <span className="text-sm text-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainVsSolution;
