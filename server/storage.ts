import { db } from "./db";
import { teamMembers, rules, type TeamMember, type Rule, type InsertTeamMember, type InsertRule } from "@shared/schema";
import { eq } from "drizzle-orm";

export interface IStorage {
  getTeamMembers(): Promise<TeamMember[]>;
  getRules(): Promise<Rule[]>;
  createTeamMember(member: InsertTeamMember): Promise<TeamMember>;
  createRule(rule: InsertRule): Promise<Rule>;
}

export class DatabaseStorage implements IStorage {
  async getTeamMembers(): Promise<TeamMember[]> {
    return await db.select().from(teamMembers);
  }

  async getRules(): Promise<Rule[]> {
    return await db.select().from(rules);
  }

  async createTeamMember(member: InsertTeamMember): Promise<TeamMember> {
    const [newMember] = await db.insert(teamMembers).values(member).returning();
    return newMember;
  }

  async createRule(rule: InsertRule): Promise<Rule> {
    const [newRule] = await db.insert(rules).values(rule).returning();
    return newRule;
  }
}

export const storage = new DatabaseStorage();
