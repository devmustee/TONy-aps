import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Coins, 
  TrendingUp, 
  Users, 
  Calendar, 
  Trophy,
  ExternalLink,
  Zap,
  Target
} from "lucide-react";

const partnerProjects = [
  {
    name: "TON Blockchain",
    ticker: "#TON",
    logo: "💎",
    description: "The Open Network - High-speed, scalable blockchain",
    multiplier: "2.5x",
    totalYaps: 8429,
    topYapper: "CryptoGuru2024",
    reward: "50,000 TON",
    status: "active",
    endDate: "Dec 31, 2024",
    participants: 1247
  },
  {
    name: "Soarfun",
    ticker: "#SFC",
    logo: "🚀",
    description: "Revolutionary DeFi platform for the next generation",
    multiplier: "1.5x",
    totalYaps: 6234,
    topYapper: "DeFiDegen",
    reward: "NFT Collection",
    status: "active",
    endDate: "Jan 15, 2025",
    participants: 934
  },
  {
    name: "Raven Protocol",
    ticker: "#RAVEN",
    logo: "🔥",
    description: "AI-powered distributed computing network",
    multiplier: "3.0x",
    totalYaps: 5847,
    topYapper: "BlockchainBabe",
    reward: "25 ETH",
    status: "ending_soon",
    endDate: "Dec 25, 2024",
    participants: 756
  },
  {
    name: "MetaChain",
    ticker: "#META",
    logo: "⚡",
    description: "Cross-chain bridge and interoperability solution",
    multiplier: "2.0x",
    totalYaps: 4521,
    topYapper: "WebThreeWiz",
    reward: "100,000 META",
    status: "active",
    endDate: "Feb 28, 2025",
    participants: 623
  }
];

const getStatusBadge = (status: string) => {
  switch (status) {
    case "active":
      return <Badge className="bg-green-500/20 text-green-400 border-green-500/30">Active</Badge>;
    case "ending_soon":
      return <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">Ending Soon</Badge>;
    default:
      return <Badge variant="secondary">Unknown</Badge>;
  }
};

export const PartnerShowcase = () => {
  return (
    <section id="campaigns" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold">
            <span className="bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
              Partner Campaigns
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Earn bonus points by contributing to specific project campaigns. Each ticker has unique multipliers and rewards.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {partnerProjects.map((project) => (
            <Card key={project.ticker} className="cosmic-card hover:scale-[1.02] transition-transform">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{project.logo}</span>
                    <div>
                      <CardTitle className="text-lg">{project.name}</CardTitle>
                      <Badge variant="outline" className="mt-1 border-primary/50">
                        {project.ticker}
                      </Badge>
                    </div>
                  </div>
                  {getStatusBadge(project.status)}
                </div>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Zap className="w-3 h-3" />
                      Multiplier
                    </div>
                    <div className="text-lg font-bold text-neon-purple">{project.multiplier}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Users className="w-3 h-3" />
                      Participants
                    </div>
                    <div className="text-lg font-bold text-neon-cyan">{project.participants}</div>
                  </div>
                </div>

                {/* Campaign Stats */}
                <div className="space-y-2 p-3 rounded-lg bg-secondary/20 border border-border/30">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Total Yaps</span>
                    <span className="font-semibold">{project.totalYaps.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Top Yapper</span>
                    <span className="font-semibold text-primary">{project.topYapper}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-muted-foreground">Prize Pool</span>
                    <span className="font-semibold text-accent">{project.reward}</span>
                  </div>
                </div>

                {/* End Date */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span>Ends {project.endDate}</span>
                </div>

                {/* Actions */}
                <div className="flex gap-2 pt-2">
                  <Button variant="cosmic" size="sm" className="flex-1">
                    <Target className="w-4 h-4 mr-2" />
                    Join Campaign
                  </Button>
                  <Button variant="outline" size="sm">
                    <Trophy className="w-4 h-4 mr-2" />
                    Leaderboard
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partner CTA Section */}
        <Card className="cosmic-card text-center">
          <CardContent className="py-12">
            <div className="space-y-6 max-w-2xl mx-auto">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Want to Launch Your Campaign?</h3>
                <p className="text-muted-foreground">
                  Join our partner program and engage with thousands of crypto enthusiasts 
                  sharing insights about your project.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6 py-6">
                <div className="space-y-2">
                  <Coins className="w-8 h-8 text-neon-purple mx-auto" />
                  <h4 className="font-semibold">Custom Multipliers</h4>
                  <p className="text-sm text-muted-foreground">
                    Set point multipliers for mentions of your ticker
                  </p>
                </div>
                <div className="space-y-2">
                  <TrendingUp className="w-8 h-8 text-neon-cyan mx-auto" />
                  <h4 className="font-semibold">Dedicated Analytics</h4>
                  <p className="text-sm text-muted-foreground">
                    Track engagement and top contributors
                  </p>
                </div>
                <div className="space-y-2">
                  <Trophy className="w-8 h-8 text-accent mx-auto" />
                  <h4 className="font-semibold">Reward Distribution</h4>
                  <p className="text-sm text-muted-foreground">
                    Automated or manual reward distribution
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="cosmic" size="lg">
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Become a Partner
                </Button>
                <Button variant="outline" size="lg">
                  View Documentation
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};