import { fetchProducts } from "./API";

export const initSearchProduсts = () => {
    const headerForm = document.querySelector('.header__form');
    const goodsTitle = document.querySelector('.goods__title');

    headerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(headerForm);

        const searchQuery = formData.get("search").trim();

        if (searchQuery) {
            goodsTitle.textContent = "Вы искали это"
            fetchProducts({search: searchQuery});
        };
    });
};