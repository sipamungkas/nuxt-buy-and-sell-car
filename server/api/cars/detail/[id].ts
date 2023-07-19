import cars from "@/data/cars.json";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const id = event.context.params?.id;

  const car = await prisma.car.findUnique({ where: { id } });
  if (!car) {
    // server side error
    throw createError({
      statusCode: 404,
      statusMessage: "Car not found",
    });
  }
  return car;
});
