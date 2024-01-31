export const useConvertedData = (
  data: Record<string, any>
): Record<string, any> => {
  const filteredFilmData = Object.entries(data).reduce(
    (acc: Record<string, any>, [key, value]) => {
      if (
        !Array.isArray(value) &&
        key !== "created" &&
        key !== "url" &&
        key !== "edited" &&
        key !== "opening_crawl" &&
        key !== "homeworld"
      ) {
        acc[key] = value;
      }
      return acc;
    },
    {}
  );
  return filteredFilmData;
};
