import { Layout } from "@/components/layout/Layout";
import { useRules } from "@/hooks/use-rules";
import { motion } from "framer-motion";
import { AlertTriangle, BookOpen, Loader2, Shield, Zap } from "lucide-react";

export default function Rules() {
  const { data: rules, isLoading, isError } = useRules();

  return (
    <Layout>
      <div className="container mx-auto px-4 py-20 max-w-3xl min-h-screen">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center text-secondary mb-5 shadow-[0_0_20px_hsl(var(--secondary)/0.3)]">
            <BookOpen className="w-7 h-7" />
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-black mb-4 uppercase">
            SERVER <span className="text-secondary">RULES</span>
          </h1>
          <p className="text-base text-muted-foreground max-w-xl">
            Ignorance of the rules is not an excuse. Read carefully to avoid a ban from the game or Discord server.
          </p>

          {/* Small warning */}
          <div className="mt-6 inline-flex items-center gap-2 bg-destructive/10 border border-destructive/30 text-destructive px-4 py-2 rounded-lg text-xs font-medium">
            <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
            Violations result in warnings, kicks, or permanent bans.
          </div>
        </div>

        {/* Rules List */}
        {isLoading ? (
          <div className="flex flex-col items-center py-20">
            <Loader2 className="w-10 h-10 text-secondary animate-spin mb-4" />
            <p className="font-display tracking-widest text-muted-foreground text-sm">LOADING RULES...</p>
          </div>
        ) : isError ? (
          <div className="glass-panel p-8 rounded-xl text-center">
            <p className="text-destructive font-bold">Failed to load rules.</p>
          </div>
        ) : !rules || rules.length === 0 ? (
          <div className="glass-panel p-12 text-center rounded-xl">
            <p className="text-muted-foreground text-lg">No rules found yet.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {rules.map((rule, index) => {
              const isCritical = rule.description === "CRITICAL";

              return (
                <motion.div
                  key={rule.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.06, ease: "easeOut" }}
                  className={`relative flex items-start gap-4 px-5 py-4 rounded-xl border transition-all duration-300 group
                    ${isCritical
                      ? "bg-secondary/5 border-secondary/30 shadow-[0_0_12px_hsl(var(--secondary)/0.08)]"
                      : "bg-card/50 border-white/5 hover:border-white/15 hover:bg-card/80"
                    }`}
                >
                  {/* Number badge */}
                  <div className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-display font-black
                    ${isCritical ? "bg-secondary/20 text-secondary" : "bg-muted text-muted-foreground"}`}>
                    {(index + 1).toString().padStart(2, "0")}
                  </div>

                  {/* Rule text */}
                  <p className={`text-base leading-relaxed pt-0.5 flex-1
                    ${isCritical ? "text-foreground font-semibold" : "text-muted-foreground"}`}>
                    {rule.title}
                  </p>

                  {/* Critical badge */}
                  {isCritical && (
                    <div className="shrink-0 flex items-center gap-1 px-2 py-1 rounded-md bg-secondary/20 border border-secondary/30 text-secondary text-xs font-display font-bold tracking-wider">
                      <Zap className="w-3 h-3" />
                      STRICT
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-10 flex items-start gap-3 bg-primary/5 border border-primary/20 px-5 py-4 rounded-xl"
        >
          <Shield className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <p className="text-xs text-muted-foreground leading-relaxed">
            <span className="text-primary font-semibold">Note:</span> We also moderate outside the chat — rules such as 18+ content, insults, and doxxing apply everywhere.
          </p>
        </motion.div>

      </div>
    </Layout>
  );
}
