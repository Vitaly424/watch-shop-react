import { calcTotalPrice } from "./calcTotalPrice";
import { ICart } from "@/redux/Cart";

export const getCartFromLocalStorage = () => {
    const data = localStorage.getItem('cart');
    const items = data ? JSON.parse(data) as ICart[] : [];
    const totalPrice = calcTotalPrice(items);

    return {
        items,
        totalPrice
    }
}
