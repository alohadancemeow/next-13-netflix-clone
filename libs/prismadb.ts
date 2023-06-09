import { PrismaClient } from "@prisma/client";

declare global {
  namespace globalThis {
    var prismadb: PrismaClient | undefined;
  }
}

const client = globalThis.prismadb || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prismadb = client;

export default client;
