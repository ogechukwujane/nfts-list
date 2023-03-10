import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { nftAddressApi } from "./nftAddressApi";
import { nftApi } from "./ntfApi";

export const store = configureStore({
	reducer: {
		[nftApi.reducerPath]: nftApi.reducer,
		[nftAddressApi.reducerPath]: nftAddressApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(nftApi.middleware, nftAddressApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
