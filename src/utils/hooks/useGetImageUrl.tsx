import { IMAGE_API } from "../constants/api";

export const useGetImageUrl = (url: string) => {
  const regex = /\/(\w+)\/(\d+)\/?$/;
  const match = url.match(regex);

  const endpoint = match![1] === "people" ? "characters" : match![1];
  const id = match![2];
  return { id, imgUrl: `${IMAGE_API}/${endpoint}/${id}.jpg` };
};
