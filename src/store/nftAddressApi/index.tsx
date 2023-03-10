import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { baseQuery } from "../headerSetup";
import { INftAddress } from "./interface";

export const nftAddressApi = createApi({
	reducerPath: "nftAddressApi",
	baseQuery: baseQuery,
	endpoints: (builder) => ({
		getAllNftAddress: builder.query<INftAddress, void>({
			query: () => ({
				url: `/collections?chain=eth-main`,
				method: "GET",
			}),
		}),
	}),
});
export const { useGetAllNftAddressQuery } = nftAddressApi;
