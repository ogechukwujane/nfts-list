export interface INftAddress {
	chain: string;
	cursor: string;
	per_page: number;
	results: {
		contract_address: string;
		created_at: string;
		functions: [];
		name: string;
		symbol: string;
		token_type: string;
		total_tokens: string;
		total_transfers: string;
	}[];
}
