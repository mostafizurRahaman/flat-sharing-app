import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  log: [
    {
      level: "query",
      emit: "event",
    },
    {
      level: "info",
      emit: "event",
    },
  ],
});

prisma.$on("info", (event) => {
  console.log(`🟢 ${event.message}`);
  console.log(event.timestamp)
});



export default prisma;
