import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="relative rounded-2xl bg-primary p-10 sm:p-14 text-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(243_75%_70%/0.4),transparent_60%)]" />
          <div className="relative">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Automate Your Operations?
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-lg mx-auto">
              Get a free, no-obligation audit of your workflows. We'll show you exactly where AI can save you time and money.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="font-display font-semibold text-base px-8 gap-2"
              asChild
            >
              <a href="https://cal.com/mochi-labs" target="_blank" rel="noopener noreferrer">
                Book Your Free Audit <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
