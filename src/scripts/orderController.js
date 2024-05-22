import { cartStore } from "./Store";

const cartOrderBtn = document.querySelector(".cart__order-btn");

export const initOrder = () => {
    const checkCart = () => {
        const cart = cartStore.getCart();
        cartOrderBtn.disabled = !cart.length;
    };

    cartStore.subscribe(checkCart);
};