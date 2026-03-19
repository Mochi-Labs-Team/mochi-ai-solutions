import mochiLogo from "@/assets/mochi-logo.png";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <div className="flex items-center gap-2.5">
          <img src={mochiLogo} alt="Project Mochi" className="h-9 w-9" />
          <span className="font-display text-xl font-bold text-foreground tracking-tight">
            Project Mochi
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#industries" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Industries
          </a>
          <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            How It Works
          </a>
          <a href="#solutions" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Solutions
          </a>
        </div>
        <Button size="sm" className="font-display font-semibold" asChild>
          <a href="https://cal.com/mochi-labs" target="_blank" rel="noopener noreferrer">
            Book a Free Strategy Assessment
          </a>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
