import { Layout } from "@/components/layout/Layout";
import { GamingButton } from "@/components/ui/gaming-button";
import { motion } from "framer-motion";
import { ShieldAlert, Users2, Zap, ArrowRight, MessageSquare, Gamepad2 } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  const gameLink = "#"; // Replace with actual game link
  const groupLink = "#"; // Replace with actual group link
  const discordLink = "#"; // Replace with actual discord link

  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-24">
        {/* Gaming-styled Background without real-life images */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-secondary/5"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse" style={{animationDelay: "1s"}}></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSI+PHBhdGggZD0iTTAgMGg0MHY0MEgweiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjAuNSIgc3Ryb2tlLW9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-display font-bold tracking-widest mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              NEW UPDATE IS LIVE
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-none">
              NUCLEAR DETRIUM <br />
              <span className="text-gradient">RESEARCH INSTITUTE</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Experience an immersive scientific adventure on Roblox. Join thousands of players, uncover mysteries, and become a legendary researcher.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href={gameLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <GamingButton size="xl" variant="primary" className="w-full group">
                  Play Game <Gamepad2 className="ml-2 w-6 h-6 group-hover:scale-110 transition-transform" />
                </GamingButton>
              </a>
              <a href={discordLink} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <GamingButton size="xl" variant="outline" className="w-full bg-background/50 backdrop-blur-sm">
                  Join Community
                </GamingButton>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground flex flex-col items-center gap-2"
        >
          <span className="text-xs font-display tracking-[0.2em] uppercase">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent"></div>
        </motion.div>
      </section>

      {/* QUICK LINKS SECTION */}
      <section className="py-20 relative border-t border-white/5">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-panel p-8 rounded-2xl group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-6 text-primary neon-box-primary">
                <Users2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display mb-3">Roblox Group</h3>
              <p className="text-muted-foreground mb-6">Join our official Roblox group for exclusive in-game perks, tags, and announcements.</p>
              <a href={groupLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary font-bold hover:underline">
                Join Group <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-panel p-8 rounded-2xl group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent pointer-events-none"></div>
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6 text-accent" style={{ boxShadow: '0 0 10px hsl(var(--accent) / 0.3)' }}>
                <MessageSquare className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display mb-3">Discord Server</h3>
              <p className="text-muted-foreground mb-6">Connect with the community, report bugs, suggest features, and chat with the devs.</p>
              <a href={discordLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-accent font-bold hover:underline">
                Join Discord <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-panel p-8 rounded-2xl group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/20 flex items-center justify-center mb-6 text-secondary" style={{ boxShadow: '0 0 10px hsl(var(--secondary) / 0.3)' }}>
                <ShieldAlert className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-display mb-3">Server Rules</h3>
              <p className="text-muted-foreground mb-6">Read our comprehensive rules to ensure a fun and fair environment for all players.</p>
              <Link href="/rules" className="inline-flex items-center text-secondary font-bold hover:underline">
                Read Rules <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FEATURE SECTION */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1"
            >
              <h2 className="font-display text-4xl md:text-5xl mb-6">BUILT BY A DEDICATED <span className="text-primary">TEAM</span></h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our game is constantly evolving thanks to our incredible team of 9 Developers and 6 Moderators. We push daily updates, listen to community feedback, and strive for the highest quality gameplay on the platform.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary"><Zap className="w-3 h-3" /></div>
                  <span className="text-foreground font-medium">Frequent Content Updates</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary"><Zap className="w-3 h-3" /></div>
                  <span className="text-foreground font-medium">Active Moderation 24/7</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary"><Zap className="w-3 h-3" /></div>
                  <span className="text-foreground font-medium">Community-Driven Development</span>
                </li>
              </ul>
              <Link href="/team">
                <GamingButton variant="outline">Meet the Team</GamingButton>
              </Link>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex-1 relative"
            >
              <div className="aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 bg-primary/30 blur-[100px] rounded-full"></div>
                
                {/* Gaming-style showcase with gradient instead of real image */}
                <div className="rounded-2xl border-2 border-primary/30 shadow-2xl relative z-10 w-full h-full bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgZmlsbD0ibm9uZSI+PGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iMzAiIHN0cm9rZT0iIzAwZjBmZiIgc3Ryb2tlLXdpZHRoPSIxIiBvcGFjaXR5PSIwLjEiLz48L3N2Zz4=')] opacity-50"></div>
                  <div className="flex flex-col items-center justify-center gap-4 z-10">
                    <Gamepad2 className="w-20 h-20 text-primary animate-pulse" />
                    <p className="font-display text-xl text-center text-muted-foreground">IMMERSIVE GAMEPLAY</p>
                  </div>
                </div>
                
                {/* Decorative floating elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 glass-panel rounded-xl border-primary/30 z-20 flex items-center justify-center animate-[bounce_4s_infinite]">
                  <Gamepad2 className="w-10 h-10 text-primary" />
                </div>
                <div className="absolute -bottom-8 -left-8 w-32 h-24 glass-panel rounded-xl border-accent/30 z-20 p-4 animate-[bounce_5s_infinite_0.5s]">
                   <p className="text-xs font-display text-muted-foreground">ACTIVE PLAYERS</p>
                   <p className="text-2xl font-bold text-accent">24,592</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
