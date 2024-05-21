import { productStore } from "./Store";
export const API_URL = "https://veil-dirt-anchovy.glitch.me";

const formatQueryString = params => {
    if (Object.keys(params).length === 0 ) {
        return '';
    }

    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
        searchParams.append(key, value);
    });

    return `?${searchParams.toString()}`;
};

export const fetchProducts = async (params = {}) => {
    try {
        const response = await fetch(
            `${API_URL}/api/products${formatQueryString(params)}`);

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const products = await response.json();
    
    productStore.setProducts(products);
    } catch (error) {
        console.error(`Ошибка при получении данных с сервера: ${error}`);
        return [];
    }
}; 