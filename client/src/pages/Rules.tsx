import { Layout } from "@/components/layout/Layout";
import { useRules } from "@/hooks/use-rules";
import { motion } from "framer-motion";
import { AlertTriangle, BookOpen, ChevronRight, Loader2 } from "lucide-react";
import { useState } from "react";
import { cn } from "@/components/ui/gaming-button";

export default function Rules() {
  const { data: rules, isLoading, isError } = useRules();
  const [activeRuleId, setActiveRuleId] = useState<number | null>(null);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-20 max-w-4xl min-h-screen">
        
        <div className="flex flex-col items-center text-center mb-16">
          <div className="w-16 h-16 rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary mb-6 shadow-[0_0_20px_hsl(var(--secondary)/0.3)]">
            <BookOpen className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-black mb-6 uppercase">
            SERVER <span className="text-secondary">CODEX</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Ignorance of the rules is not an excuse. Read carefully to ensure you don't receive a ban from the game or Discord server.
          </p>
          
          <div className="mt-8 flex items-center gap-3 bg-destructive/10 border border-destructive/30 text-destructive px-6 py-4 rounded-xl max-w-xl text-left">
            <AlertTriangle className="w-6 h-6 shrink-0" />
            <p className="text-sm font-medium">
              Violating these rules will result in warnings, kicks, or permanent bans at the discretion of our moderation team.
            </p>
          </div>
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center py-20">
            <Loader2 className="w-10 h-10 text-secondary animate-spin mb-4" />
            <p className="font-display tracking-widest text-muted-foreground">DECRYPTING ARCHIVES...</p>
          </div>
        ) : isError ? (
          <div className="glass-panel p-8 rounded-xl text-center border-destructive/30">
            <p className="text-destructive font-bold">Failed to load server rules.</p>
          </div>
        ) : !rules || rules.length === 0 ? (
          <div className="glass-panel p-12 text-center rounded-xl">
            <p className="text-muted-foreground text-lg">No rules found. It's the wild west! (Just kidding, check back later).</p>
          </div>
        ) : (
          <div className="space-y-4">
            {rules.map((rule, index) => {
              const isActive = activeRuleId === rule.id;
              
              return (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  key={rule.id} 
                  className={cn(
                    "glass-panel rounded-xl overflow-hidden transition-all duration-300",
                    isActive ? "border-secondary/50 shadow-[0_0_15px_hsl(var(--secondary)/0.1)]" : "hover:border-white/20 hover:bg-white/[0.02]"
                  )}
                >
                  <button 
                    onClick={() => setActiveRuleId(isActive ? null : rule.id)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary/50"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-display font-black text-2xl text-secondary/40 w-8">
                        {(index + 1).toString().padStart(2, '0')}
                      </span>
                      <h3 className={cn(
                        "text-xl font-bold font-display transition-colors",
                        isActive ? "text-secondary" : "text-foreground"
                      )}>
                        {rule.title}
                      </h3>
                    </div>
                    <div className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300",
                      isActive ? "bg-secondary text-white rotate-90" : "bg-white/5 text-muted-foreground"
                    )}>
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </button>
                  
                  {/* Expandable Content */}
                  <motion.div 
                    initial={false}
                    animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0 ml-12 border-t border-white/5 mt-2">
                      <p className="text-muted-foreground leading-relaxed pt-4 whitespace-pre-wrap">
                        {rule.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </Layout>
  );
}
