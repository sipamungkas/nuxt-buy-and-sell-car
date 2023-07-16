import cars from "@/data/cars.json";

export default defineEventHandler((event) => {
  const city = event.context.params?.city;
  const { make, minPrice, maxPrice } = getQuery(event);

  let filteredCars = cars;
  if (city) {
    filteredCars = filteredCars.filter((car) => {
      return car?.city?.toLowerCase() === city?.toLowerCase();
    });
  }

  if (make) {
    filteredCars = filteredCars.filter(
      (car) => car?.make?.toLowerCase() === make.toLowerCase()
    );
  }

  if (minPrice) {
    filteredCars = filteredCars.filter(
      (car) => car?.price >= parseInt(minPrice)
    );
  }

  if (maxPrice) {
    filteredCars = filteredCars.filter(
      (car) => car?.price <= parseInt(maxPrice)
    );
  }

  return filteredCars;
});
