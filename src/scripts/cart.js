import { cartStore } from "./Store";
import { renderCart } from "./renderCart";

    const headerCartButton = document.querySelector(".header__cart-button");
    const cartClose = document.querySelector(".cart__close");
    const cart = document.querySelector(".cart");


    // на большом разрешении плавный скролл до корзины
    const toggleCart = () => {
        cart.classList.toggle("cart_open");

        if(cart.classList.contains("cart_open") && window.innerWidth > 1360) {
            cart.scrollIntoView({behavior: "smooth"});
        }
    };

export const initCart = async () => {
    await cartStore.init();

headerCartButton.textContent = cartStore.getCart().length;
renderCart();

cartStore.subscribe(() => {
    headerCartButton.textContent = cartStore.getCart().length; 
});

headerCartButton.addEventListener("click", toggleCart);
cartClose.addEventListener("click", () => {
cart.classList.remove("cart_open");
  });
};