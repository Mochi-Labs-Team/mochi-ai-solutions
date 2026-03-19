import mochiLogo from "@/assets/mochi-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10 px-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img src={mochiLogo} alt="Mochi Labs" className="h-7 w-7" />
          <span className="font-display text-lg font-bold text-foreground">Mochi Labs</span>
        </div>
        <a href="mailto:team@mochiops.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          team@mochiops.com
        </a>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Mochi Labs. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
