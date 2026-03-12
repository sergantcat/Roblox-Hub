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

  // Manual endpoint to re-fetch all Roblox avatars
  app.post("/api/refresh-avatars", async (req, res) => {
    try {
      await updateAllRobloxAvatars();
      res.json({ success: true, message: "Avatars refreshed from Roblox." });
    } catch (err) {
      res.status(500).json({ success: false, message: "Failed to refresh avatars." });
    }
  });

  // Seed database then auto-fetch Roblox avatars
  await seedDatabase();
  updateAllRobloxAvatars().catch(console.error); // run in background, don't block startup

  return httpServer;
}

// ─── Roblox API helpers ───────────────────────────────────────────────────────

async function fetchRobloxUserId(username: string): Promise<number | null> {
  try {
    const res = await fetch("https://users.roblox.com/v1/usernames/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ usernames: [username], excludeBannedUsers: false }),
    });
    if (!res.ok) return null;
    const data = await res.json() as { data: { id: number; name: string }[] };
    return data.data?.[0]?.id ?? null;
  } catch {
    return null;
  }
}

async function fetchRobloxAvatarUrl(userId: number): Promise<string | null> {
  try {
    const res = await fetch(
      `https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${userId}&size=420x420&format=Png&isCircular=false`
    );
    if (!res.ok) return null;
    const data = await res.json() as { data: { imageUrl: string }[] };
    return data.data?.[0]?.imageUrl ?? null;
  } catch {
    return null;
  }
}

async function getRobloxAvatarForUsername(username: string): Promise<string | null> {
  const userId = await fetchRobloxUserId(username);
  if (!userId) return null;
  return await fetchRobloxAvatarUrl(userId);
}

// Fetch avatars for all team members from Roblox and save to DB
async function updateAllRobloxAvatars() {
  const members = await storage.getTeamMembers();
  // Deduplicate usernames so we don't double-call for people in both dev+mod
  const seen = new Set<string>();

  for (const member of members) {
    if (seen.has(member.name)) continue;
    seen.add(member.name);

    const avatarUrl = await getRobloxAvatarForUsername(member.name);
    if (avatarUrl) {
      // Update all rows with this name (covers duplicate names in dev+mod)
      const sameNameMembers = members.filter(m => m.name === member.name);
      for (const m of sameNameMembers) {
        await storage.updateTeamMemberAvatar(m.id, avatarUrl);
      }
      console.log(`[Roblox] Updated avatar for ${member.name}`);
    } else {
      console.log(`[Roblox] Could not fetch avatar for ${member.name} — keeping placeholder`);
    }
  }
}

// ─── Seed ─────────────────────────────────────────────────────────────────────

async function seedDatabase() {
  const existingMembers = await storage.getTeamMembers();
  if (existingMembers.length === 0) {
    const devs = [
      { name: "Homejungle123", role: "Developer", avatarUrl: "" },
      { name: "Erycd14",       role: "Developer", avatarUrl: "" },
      { name: "CaptainUSC1",   role: "Developer", avatarUrl: "" },
      { name: "James",         role: "Developer", avatarUrl: "" },
      { name: "Marioplayz",    role: "Developer", avatarUrl: "" },
      { name: "Nichita",       role: "Developer", avatarUrl: "" },
      { name: "Kolofdit",      role: "Developer", avatarUrl: "" },
      { name: "Airspeed60",    role: "Developer", avatarUrl: "" },
      { name: "AnNoobi5",      role: "Developer", avatarUrl: "" },
      { name: "KirillGl632",   role: "Developer", avatarUrl: "" },
      { name: "Kacpersok",     role: "Developer", avatarUrl: "" },
    ];
    for (const dev of devs) await storage.createTeamMember(dev);

    const mods = [
      { name: "AnNoobi5",      role: "Moderator", avatarUrl: "" },
      { name: "PCS802",        role: "Moderator", avatarUrl: "" },
      { name: "Erycd14",       role: "Moderator", avatarUrl: "" },
      { name: "ArmedF16",      role: "Moderator", avatarUrl: "" },
      { name: "Homejungle123", role: "Moderator", avatarUrl: "" },
      { name: "James",         role: "Moderator", avatarUrl: "" },
    ];
    for (const mod of mods) await storage.createTeamMember(mod);
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
    for (const rule of rulesList) await storage.createRule(rule);
  }
}
