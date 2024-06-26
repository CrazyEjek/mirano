import "@/scss/index.scss";
import { initHeaderFixed } from "@/scripts/headerFixed";
import { initChoices } from "./scripts/choices";
import { initCart } from "./scripts/cart";
import { renderProducts } from "./scripts/renderProducts";
import { initChoicesType } from "./scripts/choicesType";
import { filterProducts } from "./scripts/filterProducts";
import { initSearchProduсts } from "./scripts/searchProducts";
import { initOrder } from "./scripts/orderController";


// чтобы скрипты загружались после прогрузки всей страницы
const init = () => {
    initHeaderFixed();
    initChoices();
    initChoicesType();
    initCart();
    renderProducts();
    filterProducts();
    initSearchProduсts();
    initOrder();
};

document.addEventListener('DOMContentLoaded', init);

