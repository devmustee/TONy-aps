import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, Menu, X } from "lucide-react";
import { useState } from "react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 cosmic-gradient rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
              TONYaps
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#leaderboard" className="hover:text-primary transition-colors">
              Leaderboard
            </a>
            <a href="#campaigns" className="hover:text-primary transition-colors">
              Campaigns
            </a>
            <a href="#partners" className="hover:text-primary transition-colors">
              Partners
            </a>
            <Badge variant="outline" className="border-primary/50">
              <Zap className="w-3 h-3 mr-1" />
              Live
            </Badge>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button variant="cosmic" size="sm">
              Connect Wallet
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/50 py-4 space-y-4">
            <div className="flex flex-col space-y-2">
              <a href="#leaderboard" className="block py-2 hover:text-primary transition-colors">
                Leaderboard
              </a>
              <a href="#campaigns" className="block py-2 hover:text-primary transition-colors">
                Campaigns
              </a>
              <a href="#partners" className="block py-2 hover:text-primary transition-colors">
                Partners
              </a>
            </div>
            <div className="flex flex-col space-y-2 pt-4 border-t border-border/50">
              <Button variant="ghost" size="sm" className="justify-start">
                Sign In
              </Button>
              <Button variant="cosmic" size="sm" className="justify-start">
                Connect Wallet
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};