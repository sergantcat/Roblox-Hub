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
      { name: "Homejungle123", role: "Developer", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Homejungle123" },
      { name: "Erycd14", role: "Developer", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Erycd14" },
      { name: "CaptainUSC1", role: "Developer", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=CaptainUSC1" },
      { name: "James", role: "Developer", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=James" },
      { name: "Marioplayz", role: "Developer", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marioplayz" },
      { name: "Nichita", role: "Developer", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Nichita" },
      { name: "Kolofdit", role: "Developer", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kolofdit" },
      { name: "Airspeed60", role: "Developer", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Airspeed60" },
      { name: "AnNoobi5", role: "Developer", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=AnNoobi5dev" },
      { name: "KirillGl632", role: "Developer", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=KirillGl632" },
      { name: "Kacpersok", role: "Developer", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kacpersok" },
    ];
    for (const dev of devs) {
      await storage.createTeamMember(dev);
    }

    // Adding 6 Mods
    const mods = [
      { name: "AnNoobi5", role: "Moderator", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=AnNoobi5mod" },
      { name: "PCS802", role: "Moderator", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=PCS802" },
      { name: "Erycd14", role: "Moderator", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Erycd14mod" },
      { name: "ArmedF16", role: "Moderator", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=ArmedF16" },
      { name: "Homejungle123", role: "Moderator", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Homejungle123mod" },
      { name: "James", role: "Moderator", avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jamesmod" },
    ];
    for (const mod of mods) {
      await storage.createTeamMember(mod);
    }
  }

  const existingRules = await storage.getRules();
  if (existingRules.length === 0) {
    const rulesList = [
      { title: "Do not share any 18+ content.", description: "" },
      { title: "No drugs and criminal activity.", description: "" },
      { title: "Do not dox someone.", description: "" },
      { title: "Do not use programs that may or will destroy the server.", description: "CRITICAL" },
      { title: "Respect the Discord ToS.", description: "" },
      { title: "Do not spam in the chat.", description: "" },
      { title: "Please use English in all of the chats.", description: "CRITICAL" },
      { title: "Do Not Ping randomly. You are allowed to ping the owner.", description: "CRITICAL" },
      { title: "To receive owner's response you can ping him if he is not online.", description: "" },
      { title: "Do not harass anyone in any kind. (Outside the chat counts too.)", description: "" },
      { title: "Do not invite any bots without permission.", description: "" },
    ];
    for (const rule of rulesList) {
      await storage.createRule(rule);
    }
  }
}
