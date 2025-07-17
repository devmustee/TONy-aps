import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wallet, Zap, Trophy, Users } from "lucide-react";
import heroImage from "@/assets/tonyaps-hero.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen particle-bg flex items-center justify-center px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <Badge variant="secondary" className="cosmic-gradient text-primary-foreground px-4 py-2">
              <Zap className="w-4 h-4 mr-2" />
              AI-Powered Web3 Engagement
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
                  TONYaps
                </span>
              </h1>
              
              <h2 className="text-2xl lg:text-3xl font-semibold text-muted-foreground">
                Yap Smarter. Earn Louder. Dominate the Boards.
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Turn your crypto insights into rewards. Share on X and Telegram, 
                earn Yap Points through AI scoring, and climb the leaderboards 
                across partner project campaigns.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="cosmic" 
                size="lg" 
                className="text-lg px-8 py-6"
              >
                <Wallet className="w-5 h-5 mr-2" />
                Connect Wallet
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 border-border/50 hover:border-primary/50"
              >
                <Trophy className="w-5 h-5 mr-2" />
                View Leaderboard
              </Button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-neon-purple">42K+</div>
                <div className="text-sm text-muted-foreground">Total Yaps</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-neon-cyan">1.2M</div>
                <div className="text-sm text-muted-foreground">Points Earned</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24</div>
                <div className="text-sm text-muted-foreground">Partners</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="cosmic-card p-8 relative overflow-hidden">
              <img 
                src={heroImage} 
                alt="TONYaps Platform" 
                className="w-full h-auto rounded-lg"
              />
              
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 cosmic-card p-3">
                <div className="flex items-center gap-2 text-sm">
                  <Users className="w-4 h-4 text-neon-cyan" />
                  <span>2,847 Active Yappers</span>
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 cosmic-card p-3">
                <div className="flex items-center gap-2 text-sm">
                  <Zap className="w-4 h-4 text-neon-purple" />
                  <span>Live AI Scoring</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};