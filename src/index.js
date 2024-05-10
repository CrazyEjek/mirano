import "@/scss/index.scss";
import { initHeaderFixed } from "@/scripts/headerFixed";
import { initChoices } from "@/scripts/choices";
import { initCart } from "./scripts/cart";
import { debounce } from "./scripts/debounce";
import { renderProducts } from "./scripts/renderProducts";


// чтобы скрипты загружались после прогрузки всей страницы
const init = () => {
    initHeaderFixed();
    initChoices();
    initCart();
    renderProducts();
    debounce();

};

document.addEventListener('DOMContentLoaded', init);

