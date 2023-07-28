import { RootState } from "@/redux/store";

export const getCartSelector = (state: RootState) => state.cart;
