import { cartStore } from "./Store";
import { Order } from "./Order";

const cartOrderBtn = document.querySelector(".cart__order-btn");

const openOrder = () => {
    const cart = cartStore.getCart();

    const totalPriceValue = cart.reduce(
        (acc, product) => acc + product.price * product.quantity, 
        0,);

        const order = Order(totalPriceValue);
        document.body.append(order);
};

export const initOrder = () => {
    const checkCart = () => {
        const cart = cartStore.getCart();
        cartOrderBtn.disabled = !cart.length;
    };

    cartStore.subscribe(checkCart);

    cartOrderBtn.addEventListener("click", openOrder);
};