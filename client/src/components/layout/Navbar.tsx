import { Link, useLocation } from "wouter";
import { Gamepad2, Menu, X, Users, ScrollText, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";
import { GamingButton } from "@/components/ui/gaming-button";
import { cn } from "@/components/ui/gaming-button";

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", icon: Gamepad2 },
    { name: "The Team", href: "/team", icon: Users },
    { name: "Rules", href: "/rules", icon: ScrollText },
  ];

  // GAME LINKS - Replace these with actual URLs
  const playLink = "#";
  const discordLink = "#";

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "bg-background/80 backdrop-blur-lg border-white/5 shadow-lg" : "bg-transparent py-2"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent">
              <Gamepad2 className="w-6 h-6 text-white" />
              <div className="absolute inset-0 rounded-lg bg-primary blur-md opacity-50 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <span className="font-display font-bold text-lg md:text-xl tracking-widest text-foreground group-hover:neon-text-primary transition-all">
              NDRI
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={cn(
                  "font-display text-sm tracking-widest uppercase flex items-center gap-2 transition-all duration-200 hover:text-primary",
                  location === link.href ? "text-primary neon-text-primary" : "text-muted-foreground"
                )}
              >
                <link.icon className="w-4 h-4" />
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a href={discordLink} target="_blank" rel="noopener noreferrer">
              <GamingButton variant="ghost" size="sm" className="gap-2">
                <MessageSquare className="w-4 h-4" />
                Discord
              </GamingButton>
            </a>
            <a href={playLink} target="_blank" rel="noopener noreferrer">
              <GamingButton variant="primary" size="sm">
                Play Now
              </GamingButton>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-panel border-x-0 border-b-0 absolute top-full left-0 right-0 py-6 px-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={cn(
                "font-display text-lg tracking-wider uppercase p-3 rounded-lg flex items-center gap-3",
                location === link.href ? "bg-primary/10 text-primary border border-primary/20" : "text-muted-foreground hover:bg-white/5"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <link.icon className="w-5 h-5" />
              {link.name}
            </Link>
          ))}
          <div className="h-px bg-white/10 my-2" />
          <a href={discordLink} target="_blank" rel="noopener noreferrer" className="w-full">
            <GamingButton variant="outline" className="w-full justify-center">Join Discord</GamingButton>
          </a>
          <a href={playLink} target="_blank" rel="noopener noreferrer" className="w-full">
            <GamingButton variant="primary" className="w-full justify-center">Play Game</GamingButton>
          </a>
        </div>
      )}
    </header>
  );
}
