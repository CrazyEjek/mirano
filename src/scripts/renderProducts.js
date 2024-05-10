import { fetchProducts } from "./API"

export const renderProducts = async () => {
    const goodsList = document.querySelector('.goods__list'); 
    const products = await fetchProducts();
        // сюда чтото надо дописать или с сервера данные будут
    goodsList.innerHTML = "";
    
};