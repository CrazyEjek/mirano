import { CartElem } from "./CartElem";
import { cartStore } from "./Store";

export const renderCart = () => {
    const cartList = document.querySelector(".cart__list");
    console.log(cartList);
    const cartPriceTotal = document.querySelector(".cart__price_total");

    const updateList = () => {
        const cart = cartStore.getCart();

        cartList.textContent = "";

        if (!cart.length) {
            const messageItem = document.createElement("li");
            messageItem.textContent = "Корзина пуста";
            messageItem.classList.add("cart__no-product");
            cartList.append(messageItem);
            return;
        }

        const productCards = cart.map(CartElem);
        cartList.append(...productCards);
        // метод подсчета суммы товаров в корзине (аккум)
        const totalPriceValue = cart.reduce(
            (acc, product) => acc + product.price * product.quantity, 
            0,);
        cartPriceTotal.innerHTML = `${totalPriceValue}&nbsp;₽`;
    };

    cartStore.subscribe(updateList);
    updateList();
};