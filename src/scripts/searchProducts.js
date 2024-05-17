import { fetchProducts } from "./API";
import { callBackWithPreload } from "./preload";

export const initSearchProduсts = () => {
    const headerForm = document.querySelector('.header__form');
    const goodsSection = document.querySelector('.goods'); 
    const goodsTitle = document.querySelector('.goods__title');

    headerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(headerForm);

        const searchQuery = formData.get("search").trim();

        if (searchQuery) {
            goodsTitle.textContent = "Вы искали это";
            callBackWithPreload(goodsSection, fetchProducts, {search: searchQuery});
        };
    });
};