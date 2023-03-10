import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { API_KEY } from "../api/apiKey";
import { BASE_URL } from "../api/baseUrl";

export const baseQuery = fetchBaseQuery({
	baseUrl: BASE_URL,

	prepareHeaders: (headers) => {
		headers.set("x-api-key", API_KEY);
		return headers;
	},
});
