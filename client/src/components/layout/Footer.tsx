import { Gamepad2, Disc } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  // EXTERNAL LINKS
  const discordLink = "#";
  const robloxGroupLink = "https://www.roblox.com/share/g/327048760";
  const gameLink = "#";

  return (
    <footer className="bg-background border-t border-white/5 pt-16 pb-8 mt-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 inline-flex">
              <Gamepad2 className="w-8 h-8 text-primary" />
              <span className="font-display font-bold text-2xl tracking-widest text-foreground">
                NDRI
              </span>
            </Link>
            <p className="text-muted-foreground max-w-md mb-6 leading-relaxed">
              Welcome to the Nuclear Detrium Research Institute. Join the peak gameplay as a scientist that is researching or as a raider that attempts to blow up the facility and more.
            </p>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold mb-6 text-foreground">Navigation</h3>
            <ul className="space-y-4">
              <li><Link href="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/team" className="text-muted-foreground hover:text-primary transition-colors">The Team</Link></li>
              <li><Link href="/rules" className="text-muted-foreground hover:text-primary transition-colors">Server Rules</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-bold mb-6 text-foreground">Community</h3>
            <ul className="space-y-4">
              <li>
                <a href={discordLink} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <Disc className="w-4 h-4" /> Official Discord
                </a>
              </li>
              <li>
                <a href={robloxGroupLink} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <UsersIcon className="w-4 h-4" /> Roblox Group
                </a>
              </li>
              <li>
                <a href={gameLink} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2">
                  <Gamepad2 className="w-4 h-4" /> Play Game
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-px w-full bg-white/5 mb-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {currentYear} Nuclear Detrium Research Institute. All rights reserved.</p>
          <p>Not affiliated with Roblox Corporation.</p>
        </div>
      </div>
    </footer>
  );
}

// Temporary icon since Lucide doesn't have a direct Roblox icon
function UsersIcon(props: any) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round" {...props}>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
