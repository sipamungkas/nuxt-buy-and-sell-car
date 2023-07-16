export default async (city: string, filters: Object) => {
  const { data, error, refresh } = await useFetch(`/api/cars/${city}`, {
    params: {
      ...filters,
    },
  });

  if (error.value) {
    throw createError({
      ...error.value,
      statusMessage: "Unable to fetch cars",
    });
  }

  return { data, refresh };
};
