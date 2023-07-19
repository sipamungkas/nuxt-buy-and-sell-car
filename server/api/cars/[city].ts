import cars from "@/data/cars.json";
import { PrismaClient } from "@prisma/client";

interface IQuery {
  make: string;
  minPrice: string;
  maxPrice: string;
}

interface IFilters {
  city: string;
  make?: string;
  price?: Partial<IFilterPrice>;
}

interface IFilterPrice {
  lte?: number;
  gte?: number;
}

const prisma = new PrismaClient();

export default defineEventHandler((event) => {
  const city = event.context.params?.city;
  const { make, minPrice, maxPrice }: any = getQuery(event);

  let filters: Partial<IFilters> = {
    city: city?.toLowerCase(),
    price: {},
  };

  if (make) {
    filters.make = make.toLowerCase();
  }

  if (minPrice) {
    filters.price!.gte = parseInt(minPrice);
  }

  if (maxPrice) {
    filters.price!.lte = parseInt(maxPrice);
  }

  return prisma.car.findMany({
    where: filters,
  });
});
