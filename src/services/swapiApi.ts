import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SWAPI_API } from "../utils/constants/api";

export const swapiApi = createApi({
  reducerPath: "swapiApi",
  baseQuery: fetchBaseQuery({ baseUrl: SWAPI_API }),
  endpoints: (build) => ({}),
});
