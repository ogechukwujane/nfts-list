import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { baseQuery } from "../headerSetup";

export const nftApi = createApi({
	reducerPath: "nftApi",
	baseQuery: baseQuery,
	endpoints: (builder) => ({
		getAllNfts: builder.query<
			any,
			{ blockChainAddress: string; getNextDataParam: string }
		>({
			query: ({ blockChainAddress, getNextDataParam }) => ({
				url: `/exchanges/collections?chain=${blockChainAddress}&exchange=opensea&cursor=${getNextDataParam}&page_size=25`,
				method: "GET",
			}),
		}),
		getSingleNft: builder.query<any, string>({
			query: (key) => ({
				url: `/exchanges/collections/key/${key}?chain=eth-main&exchange=opensea`,
				method: "GET",
			}),
		}),
	}),
});
export const { useGetAllNftsQuery, useGetSingleNftQuery } = nftApi;
