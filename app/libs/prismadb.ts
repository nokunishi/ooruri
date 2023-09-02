import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const client = globalThis.prisma || new PrismaClient();
/* 
if (globalThis.prisma != null) {
  globalThis.prisma.user.deleteMany();
} */

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = client;
}

export default client;
