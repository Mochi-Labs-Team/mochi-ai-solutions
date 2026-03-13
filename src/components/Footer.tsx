import mochiLogo from "@/assets/mochi-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10 px-4">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <img src={mochiLogo} alt="Project Mochi" className="h-7 w-7" />
          <span className="font-display text-lg font-bold text-foreground">Project Mochi</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Project Mochi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
