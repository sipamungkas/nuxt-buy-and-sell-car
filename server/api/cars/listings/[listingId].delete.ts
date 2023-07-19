import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  try {
    const listingId = event.context.params?.listingId;

    const deletedCar = await prisma.car.delete({
      where: { id: listingId },
    });

    return deletedCar;
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: "Failed to Delete",
    });
  }
});
