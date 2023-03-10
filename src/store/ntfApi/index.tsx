import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { baseQuery } from "../headerSetup";

export const nftApi = createApi({
	reducerPath: "nftApi",
	baseQuery: baseQuery,
	endpoints: (builder) => ({
		getAllNfts: builder.query({
			query: ({ contract_address }) => ({
				url: `/nfts/contract/${contract_address}?chain=eth-main&include_current_owners=true&include_recent_price=true&page_size=25`,
				method: "GET",
			}),
		}),
		getSingleNft: builder.query({
			query: ({ contract_address, token_id }) => ({
				url: `/nfts/contract/${contract_address}/token/${token_id}?chain=eth-main`,
				method: "GET",
			}),
		}),
	}),
});
export const { useGetAllNftsQuery, useGetSingleNftQuery } = nftApi;
