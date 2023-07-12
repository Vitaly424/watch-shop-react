import {calcTotalPrice} from "./calcTotalPrice";
import { CartItem } from "../redux/slices/cartSlice";

export const getCartFromLocalStorage = () => {
    const data = localStorage.getItem('cart');
    const items = data ? JSON.parse(data) as CartItem[] : [];
    const totalPrice = calcTotalPrice(items);

    return {
        items,
        totalPrice
    }
}
