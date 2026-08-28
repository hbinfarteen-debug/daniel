import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

function createClient() {
  try {
    return new PrismaClient({ log: ['query'] })
  } catch {
    // Prisma client not generated yet (build time) — return a stub
    return null as unknown as PrismaClient
  }
}

export const db =
  globalForPrisma.prisma ?? createClient()

if (process.env.NODE_ENV !== 'production' && db) globalForPrisma.prisma = db
