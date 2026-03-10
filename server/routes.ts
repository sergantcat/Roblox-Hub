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
      { title: "No Nuclear Leaks", description: "Do not attempt to leak radioactive materials outside designated containment zones. This will result in immediate quarantine or ban." },
      { title: "Respect Lab Hierarchy", description: "Follow instructions from Senior Researchers and Administrators. Insubordination in critical experiments will not be tolerated." },
      { title: "No Unauthorized Experiments", description: "Conducting experiments without proper authorization or safety gear is forbidden. Always use the lab safety protocols." },
      { title: "Keep the Lab Clean", description: "Do not spam the chat, spam items, or leave hazardous materials in common areas. Maintain workplace safety at all times." },
      { title: "Teamwork Makes the Dream Work", description: "Cooperate with other researchers. Griefing, sabotaging others' work, or trolling will result in a permanent ban from the institute." },
      { title: "No Real-World Threats", description: "Keep all communication professional and respectful. No threats, harassment, or inappropriate language. We're here to have fun, not drama." },
    ];
    for (const rule of rulesList) {
      await storage.createRule(rule);
    }
  }
}
