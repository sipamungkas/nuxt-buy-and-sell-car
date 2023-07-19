export default async (id: string) => {
  const { data, error } = await useFetch(`/api/cars/detail/${id}`);
  if (error.value) {
    throw createError({
      statusCode: error.value.statusCode,
      statusMessage: error.value.statusMessage,
    });
  }
  return { data, error };
};
