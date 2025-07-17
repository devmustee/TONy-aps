import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  TrendingUp, 
  Zap, 
  Heart,
  MessageCircle,
  Repeat2,
  Eye,
  Star,
  Network
} from "lucide-react";

const influenceData = [
  {
    follower: "BlockchainBabe",
    avatar: "💎",
    action: "retweeted",
    yakContent: "TON's sharding tech is revolutionary...",
    bonus: "+45",
    timeAgo: "2h ago",
    followerRank: "#2"
  },
  {
    follower: "DeFiDegen", 
    avatar: "⚡",
    action: "liked",
    yakContent: "Soarfun's new AMM design...",
    bonus: "+32",
    timeAgo: "4h ago",
    followerRank: "#3"
  },
  {
    follower: "WebThreeWiz",
    avatar: "🌙", 
    action: "replied",
    yakContent: "RAVEN Protocol's AI computing...",
    bonus: "+67",
    timeAgo: "6h ago",
    followerRank: "#4"
  }
];

const topInfluencers = [
  {
    name: "CryptoGuru2024",
    avatar: "🚀",
    influence: 94,
    smartFollowers: 156,
    totalBoost: "+2,847"
  },
  {
    name: "BlockchainBabe",
    avatar: "💎", 
    influence: 89,
    smartFollowers: 142,
    totalBoost: "+2,234"
  },
  {
    name: "DeFiDegen",
    avatar: "⚡",
    influence: 87,
    smartFollowers: 134,
    totalBoost: "+1,987"
  }
];

const getActionIcon = (action: string) => {
  switch (action) {
    case "retweeted":
      return <Repeat2 className="w-4 h-4 text-neon-cyan" />;
    case "liked":
      return <Heart className="w-4 h-4 text-red-400" />;
    case "replied":
      return <MessageCircle className="w-4 h-4 text-neon-purple" />;
    default:
      return <Eye className="w-4 h-4 text-muted-foreground" />;
  }
};

export const SmartInfluence = () => {
  return (
    <section className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold">
            <span className="bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
              Smart Influence Network
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Earn bonus points when your fellow TONYaps users engage with your content. 
            The higher their rank, the bigger your bonus.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Live Influence Feed */}
          <div className="lg:col-span-2">
            <Card className="cosmic-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Network className="w-5 h-5 text-neon-cyan" />
                  Live Influence Feed
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Recent smart follower interactions boosting Yap scores
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {influenceData.map((interaction, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{interaction.avatar}</span>
                      <Badge variant="outline" className="text-xs border-primary/50">
                        {interaction.followerRank}
                      </Badge>
                    </div>
                    
                    <div className="flex-1 min-w-0 space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="font-semibold">{interaction.follower}</span>
                        {getActionIcon(interaction.action)}
                        <span className="text-muted-foreground">{interaction.action} your Yap</span>
                        <span className="text-xs text-muted-foreground">{interaction.timeAgo}</span>
                      </div>
                      
                      <p className="text-sm text-muted-foreground truncate">
                        "{interaction.yakContent}"
                      </p>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-lg font-bold text-neon-cyan">
                        {interaction.bonus}
                      </div>
                      <div className="text-xs text-muted-foreground">bonus pts</div>
                    </div>
                  </div>
                ))}

                <div className="text-center pt-4">
                  <Button variant="outline" size="sm">
                    View All Interactions
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* How It Works */}
            <Card className="cosmic-card mt-6">
              <CardHeader>
                <CardTitle className="text-lg">How Smart Influence Works</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 cosmic-gradient rounded-full flex items-center justify-center mx-auto">
                      <Zap className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold">Post Quality Yaps</h4>
                    <p className="text-sm text-muted-foreground">
                      Share insights on X or Telegram with relevant tickers
                    </p>
                  </div>
                  
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 cosmic-gradient rounded-full flex items-center justify-center mx-auto">
                      <Users className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold">Smart Followers Engage</h4>
                    <p className="text-sm text-muted-foreground">
                      TONYaps users in your network interact with your content
                    </p>
                  </div>
                  
                  <div className="text-center space-y-2">
                    <div className="w-12 h-12 cosmic-gradient rounded-full flex items-center justify-center mx-auto">
                      <TrendingUp className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h4 className="font-semibold">Earn Bonus Points</h4>
                    <p className="text-sm text-muted-foreground">
                      Higher-ranked followers give bigger point multipliers
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Top Influencers */}
          <div className="space-y-6">
            <Card className="cosmic-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Star className="w-5 h-5 text-neon-purple" />
                  Top Influencers
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Users with highest smart follower networks
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {topInfluencers.map((influencer, index) => (
                  <div key={influencer.name} className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{influencer.avatar}</span>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold">{influencer.name}</div>
                        <div className="text-sm text-muted-foreground">
                          Influence Score: {influencer.influence}
                        </div>
                      </div>
                      <Badge variant="outline" className="border-primary/50">
                        #{index + 1}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="text-center p-2 rounded bg-secondary/30">
                        <div className="font-semibold text-neon-cyan">{influencer.smartFollowers}</div>
                        <div className="text-muted-foreground">Smart Followers</div>
                      </div>
                      <div className="text-center p-2 rounded bg-secondary/30">
                        <div className="font-semibold text-neon-purple">{influencer.totalBoost}</div>
                        <div className="text-muted-foreground">Total Boost</div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Your Influence Stats */}
            <Card className="cosmic-card">
              <CardHeader>
                <CardTitle className="text-lg">Your Influence</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center space-y-2">
                  <div className="text-3xl">🚀</div>
                  <div className="text-2xl font-bold text-neon-purple">73</div>
                  <div className="text-sm text-muted-foreground">Influence Score</div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Smart Followers</span>
                    <span className="font-semibold">89</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Bonus Points (24h)</span>
                    <span className="font-semibold text-neon-cyan">+234</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Network Rank</span>
                    <span className="font-semibold text-primary">#12</span>
                  </div>
                </div>
                
                <Button variant="cosmic" size="sm" className="w-full">
                  <Users className="w-4 h-4 mr-2" />
                  Grow Network
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};