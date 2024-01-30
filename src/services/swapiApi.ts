//deps
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SWAPI_API } from "../utils/constants/api";

type T_FetchDataByEndpointArgs = {
  endpoint: string;
  page: number;
};

export const swapiApi = createApi({
  reducerPath: "swapiApi",
  baseQuery: fetchBaseQuery({ baseUrl: SWAPI_API }),
  keepUnusedDataFor: 600,
  endpoints: (build) => ({
    fetchDataByEndpoint: build.query({
      query: ({ endpoint, page = 1 }: T_FetchDataByEndpointArgs) => ({
        url: endpoint === "/characters" ? "/people" : endpoint,
        params: { page },
      }),
    }),
    fetchSingleDataById: build.query({
      query: ({ endpoint, id }) => ({
        url: `${endpoint === "characters" ? "people" : endpoint}/${id}`,
      }),
    }),
  }),
});

export const { useFetchDataByEndpointQuery, useFetchSingleDataByIdQuery } =
  swapiApi;
