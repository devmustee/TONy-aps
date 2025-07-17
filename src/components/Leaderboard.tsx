import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Medal, Award, TrendingUp, Users, Hash } from "lucide-react";

const topYappers = [
  {
    rank: 1,
    name: "CryptoGuru2024",
    points: 24589,
    avatar: "🚀",
    change: "+1,247",
    tickers: ["#TON", "#BTC", "#ETH"],
    followers: 3420
  },
  {
    rank: 2,
    name: "BlockchainBabe",
    points: 22156,
    avatar: "💎",
    change: "+892",
    tickers: ["#SOL", "#RAVEN", "#DOGE"],
    followers: 2847
  },
  {
    rank: 3,
    name: "DeFiDegen",
    points: 19834,
    avatar: "⚡",
    change: "+756",
    tickers: ["#SFC", "#MATIC", "#AVAX"],
    followers: 2134
  },
  {
    rank: 4,
    name: "WebThreeWiz",
    points: 18429,
    avatar: "🌙",
    change: "+623",
    tickers: ["#TON", "#SFC", "#BNB"],
    followers: 1923
  },
  {
    rank: 5,
    name: "TokenTitan",
    points: 17102,
    avatar: "🔥",
    change: "+534",
    tickers: ["#ADA", "#DOT", "#LINK"],
    followers: 1784
  }
];

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return <Trophy className="w-5 h-5 text-yellow-400" />;
    case 2:
      return <Medal className="w-5 h-5 text-gray-400" />;
    case 3:
      return <Award className="w-5 h-5 text-amber-600" />;
    default:
      return <span className="text-lg font-bold text-muted-foreground">#{rank}</span>;
  }
};

export const Leaderboard = () => {
  return (
    <section id="leaderboard" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold">
            <span className="bg-gradient-to-r from-neon-purple to-neon-cyan bg-clip-text text-transparent">
              Global Leaderboard
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Top Yappers earning points through quality crypto insights across all campaigns
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Leaderboard */}
          <div className="lg:col-span-2">
            <Card className="cosmic-card">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-neon-purple" />
                    Top Yappers
                  </CardTitle>
                  <Badge variant="outline" className="border-neon-cyan/50">
                    Live Rankings
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {topYappers.map((yapper) => (
                  <div
                    key={yapper.rank}
                    className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
                  >
                    <div className="flex items-center justify-center w-12 h-12">
                      {getRankIcon(yapper.rank)}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-2xl">{yapper.avatar}</span>
                        <span className="font-semibold">{yapper.name}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {yapper.followers.toLocaleString()}
                        </div>
                        <div className="flex gap-1">
                          {yapper.tickers.map((ticker) => (
                            <Badge key={ticker} variant="outline" className="text-xs px-1 py-0">
                              {ticker}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-xl font-bold text-neon-purple">
                        {yapper.points.toLocaleString()}
                      </div>
                      <div className="text-sm text-neon-cyan flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        {yapper.change}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Side Stats */}
          <div className="space-y-6">
            {/* Live Stats */}
            <Card className="cosmic-card">
              <CardHeader>
                <CardTitle className="text-lg">Live Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Active Yappers</span>
                  <span className="font-bold text-neon-cyan">2,847</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Yaps Today</span>
                  <span className="font-bold text-neon-purple">15,429</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Points Distributed</span>
                  <span className="font-bold text-primary">892K</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Active Campaigns</span>
                  <span className="font-bold text-accent">12</span>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="cosmic-card">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="cosmic" size="sm" className="w-full">
                  <Hash className="w-4 h-4 mr-2" />
                  Submit Yap
                </Button>
                <Button variant="outline" size="sm" className="w-full">
                  View My Stats
                </Button>
                <Button variant="ghost" size="sm" className="w-full">
                  Project Campaigns
                </Button>
              </CardContent>
            </Card>

            {/* Trending Tickers */}
            <Card className="cosmic-card">
              <CardHeader>
                <CardTitle className="text-lg">Trending Tickers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {["#TON", "#SFC", "#RAVEN", "#BTC", "#ETH"].map((ticker) => (
                    <div key={ticker} className="flex justify-between items-center">
                      <Badge variant="outline" className="border-primary/50">
                        {ticker}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {Math.floor(Math.random() * 500 + 100)} Yaps
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};