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
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          {/* landing page hero futuristic sci-fi city neon game environment */}
          <img 
            src="https://pixabay.com/get/g2e81adb3968a030d08ebc542d5e9cc67994e67aecb67e0c9fbf2feb49eb83711bfbbd5adb7ff50e13484bcb7b458cc4788818e8daddb94c4731a7cbc9e66e7e8_1280.jpg" 
            alt="Game Background" 
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+')] opacity-20 mix-blend-overlay"></div>
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
              ENTER THE <br />
              <span className="text-gradient">NEON REALM</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
              Experience the most immersive roleplay game on Roblox. Join thousands of players, build your legacy, and dominate the city streets.
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
                <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full"></div>
                {/* landing page feature grid of stylized avatars or characters */}
                <img 
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop" 
                  alt="Gameplay showcase" 
                  className="rounded-2xl border-2 border-white/10 shadow-2xl relative z-10 object-cover w-full h-full grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Decorative floating elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 glass-panel rounded-xl border-primary/30 z-20 flex items-center justify-center animate-[bounce_4s_infinite]">
                  <Gamepad2 className="w-10 h-10 text-primary" />
                </div>
                <div className="absolute -bottom-8 -left-8 w-32 h-24 glass-panel rounded-xl border-accent/30 z-20 p-4 animate-[bounce_5s_infinite_0.5s]">
                   <p className="text-xs font-display text-muted-foreground">CURRENT PLAYERS</p>
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
