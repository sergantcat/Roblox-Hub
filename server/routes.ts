import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get(api.teamMembers.list.path, async (req, res) => {
    const members = await storage.getTeamMembers();
    res.json(members);
  });

  app.get(api.rules.list.path, async (req, res) => {
    const allRules = await storage.getRules();
    res.json(allRules);
  });

  // Seed database
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingMembers = await storage.getTeamMembers();
  if (existingMembers.length === 0) {
    // Adding 9 Devs
    const devs = [
      { name: "DevOne", role: "Developer", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=DevOne" },
      { name: "DevTwo", role: "Developer", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=DevTwo" },
      { name: "DevThree", role: "Developer", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=DevThree" },
      { name: "DevFour", role: "Developer", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=DevFour" },
      { name: "DevFive", role: "Developer", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=DevFive" },
      { name: "DevSix", role: "Developer", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=DevSix" },
      { name: "DevSeven", role: "Developer", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=DevSeven" },
      { name: "DevEight", role: "Developer", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=DevEight" },
      { name: "DevNine", role: "Developer", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=DevNine" },
    ];
    for (const dev of devs) {
      await storage.createTeamMember(dev);
    }

    // Adding 6 Mods
    const mods = [
      { name: "ModOne", role: "Moderator", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=ModOne" },
      { name: "ModTwo", role: "Moderator", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=ModTwo" },
      { name: "ModThree", role: "Moderator", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=ModThree" },
      { name: "ModFour", role: "Moderator", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=ModFour" },
      { name: "ModFive", role: "Moderator", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=ModFive" },
      { name: "ModSix", role: "Moderator", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=ModSix" },
    ];
    for (const mod of mods) {
      await storage.createTeamMember(mod);
    }
  }

  const existingRules = await storage.getRules();
  if (existingRules.length === 0) {
    const rulesList = [
      { title: "Respect Everyone", description: "Treat all players, developers, and moderators with respect. Harassment, bullying, or hate speech will not be tolerated." },
      { title: "No Exploiting or Hacking", description: "Using third-party software, scripts, or exploits to gain an unfair advantage is strictly prohibited and will result in a permanent ban." },
      { title: "No Scamming or Spamming", description: "Do not attempt to scam other players out of items or currency. Spamming the chat is also not allowed." },
      { title: "Keep it Family Friendly", description: "Ensure all communication and actions are appropriate for all ages. No NSFW content or inappropriate behavior." },
      { title: "Listen to Moderators", description: "The moderation team is here to help keep the game safe and fun. Please follow their instructions." },
    ];
    for (const rule of rulesList) {
      await storage.createRule(rule);
    }
  }
}
