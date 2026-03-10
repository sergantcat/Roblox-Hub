import { Layout } from "@/components/layout/Layout";
import { useTeamMembers } from "@/hooks/use-team";
import { motion } from "framer-motion";
import { Code2, Shield, Loader2 } from "lucide-react";
import { cn } from "@/components/ui/gaming-button";

export default function Team() {
  const { data: teamMembers, isLoading, isError } = useTeamMembers();

  // Safely filter if data exists
  const developers = teamMembers?.filter(m => m.role.toLowerCase().includes('dev')) || [];
  const moderators = teamMembers?.filter(m => m.role.toLowerCase().includes('mod')) || [];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-20 min-h-screen">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-display font-black mb-6 uppercase"
          >
            THE <span className="text-primary text-shadow-glow">MASTERS</span> BEHIND THE GAME
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground"
          >
            Meet the dedicated individuals who build, balance, and protect our universe.
          </motion.p>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-32">
            <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
            <p className="text-muted-foreground font-display tracking-widest">LOADING DATABASE...</p>
          </div>
        ) : isError ? (
          <div className="glass-panel border-destructive/50 p-8 rounded-2xl text-center max-w-lg mx-auto">
            <h3 className="text-2xl font-bold text-destructive mb-2">Connection Failed</h3>
            <p className="text-muted-foreground">Could not retrieve team data from the server. Please try again later.</p>
          </div>
        ) : (
          <div className="space-y-32">
            
            {/* DEVELOPERS SECTION */}
            <section>
              <div className="flex items-center gap-4 mb-12 border-b border-white/10 pb-6">
                <div className="p-3 rounded-lg bg-primary/20 text-primary neon-box-primary">
                  <Code2 className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-display font-bold text-foreground">Development Team</h2>
                  <p className="text-muted-foreground">The architects of the code and creators of content.</p>
                </div>
                <div className="ml-auto bg-primary/10 text-primary px-4 py-1 rounded-full font-display font-bold text-lg border border-primary/30">
                  {developers.length} DEVS
                </div>
              </div>

              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {developers.map((member) => (
                  <TeamCard key={member.id} member={member} type="dev" variants={itemVariants} />
                ))}
                {developers.length === 0 && (
                  <p className="text-muted-foreground col-span-full py-8 text-center">No developers found in database.</p>
                )}
              </motion.div>
            </section>

            {/* MODERATORS SECTION */}
            <section>
              <div className="flex items-center gap-4 mb-12 border-b border-white/10 pb-6">
                <div className="p-3 rounded-lg bg-accent/20 text-accent" style={{ boxShadow: '0 0 10px hsl(var(--accent)/0.3)' }}>
                  <Shield className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-display font-bold text-foreground">Moderation Team</h2>
                  <p className="text-muted-foreground">The guardians maintaining peace and order.</p>
                </div>
                <div className="ml-auto bg-accent/10 text-accent px-4 py-1 rounded-full font-display font-bold text-lg border border-accent/30">
                  {moderators.length} MODS
                </div>
              </div>

              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {moderators.map((member) => (
                  <TeamCard key={member.id} member={member} type="mod" variants={itemVariants} />
                ))}
                {moderators.length === 0 && (
                  <p className="text-muted-foreground col-span-full py-8 text-center">No moderators found in database.</p>
                )}
              </motion.div>
            </section>

          </div>
        )}
      </div>
    </Layout>
  );
}

// Subcomponent for Team Cards
function TeamCard({ member, type, variants }: { member: any, type: 'dev'|'mod', variants: any }) {
  const isDev = type === 'dev';
  const colorClass = isDev ? 'text-primary' : 'text-accent';
  const bgClass = isDev ? 'bg-primary/10 border-primary/30' : 'bg-accent/10 border-accent/30';
  
  return (
    <motion.div 
      variants={variants}
      className="glass-panel p-6 rounded-xl flex flex-col items-center text-center group hover:bg-white/[0.03] transition-colors relative overflow-hidden"
    >
      {/* Decorative top border line */}
      <div className={cn("absolute top-0 left-0 right-0 h-1", isDev ? "bg-primary" : "bg-accent")} />
      
      <div className="relative mb-6 mt-4">
        <div className={cn(
          "absolute -inset-2 rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500",
          isDev ? "bg-primary" : "bg-accent"
        )} />
        <img 
          src={member.avatarUrl || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random`} 
          alt={member.name}
          className="w-24 h-24 rounded-full object-cover border-2 border-white/10 relative z-10 group-hover:border-white/30 transition-colors bg-muted"
        />
      </div>
      
      <h3 className="text-xl font-bold font-display mb-2">{member.name}</h3>
      <span className={cn("px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider border", colorClass, bgClass)}>
        {member.role}
      </span>
    </motion.div>
  );
}
