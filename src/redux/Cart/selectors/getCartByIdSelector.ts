import { RootState } from "@/redux/store";

export const getCartByIdSelector = (id: string) => (state: RootState) => state.cart.items.find((obj) => obj.id === id);
