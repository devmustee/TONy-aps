import { Button } from "@/components/ui/button";
import { Zap, Github, Twitter, MessageCircle, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-secondary/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 cosmic-gradient rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
                TONYaps
              </span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              AI-powered Web3 engagement platform rewarding quality crypto insights across X and Telegram.
            </p>
            <div className="flex space-x-2">
              <Button variant="ghost" size="sm">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <MessageCircle className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Github className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Platform */}
          <div className="space-y-4">
            <h4 className="font-semibold">Platform</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Leaderboard
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Campaigns
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Smart Influence
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                API Documentation
              </a>
            </div>
          </div>

          {/* Partners */}
          <div className="space-y-4">
            <h4 className="font-semibold">Partners</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Become a Partner
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Partner Portal
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Campaign Analytics
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Pricing
              </a>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="font-semibold">Support</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Help Center
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Community
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Bug Reports
              </a>
              <a href="#" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 TONYaps. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};