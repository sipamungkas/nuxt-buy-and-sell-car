import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const userId = event.context.params?.userId;

  return prisma.car.findMany({
    where: { listerId: userId },
    select: {
      name: true,
      price: true,
      image: true,
      id: true,
    },
  });
});
