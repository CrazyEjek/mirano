import { API_URL } from "./API";

class Store {
    constructor() {
        this.observers = [];
        // создаем новую коллекцию
    }
    // observers - это массив для хранения функция наблюдателей
    // метод для добавления новых наблюдателей при изменении состояний

    subscribe(observerFunction) {
        this.observers.push(observerFunction);
    }

    // метод уведомления всех наблюдателей об изменении в хранилище
    notifyObservers() {
    // здесь вызываем функции чтобы сообщить что произошли изменения
    // this - это обьект (в нашем случае this = store)
        this.observers.forEach((observer) => observer());
    }
}


// наследование от Стор
class ProductStore extends Store {
    constructor() {
        super();
        this.products = [];
        this.categories = new Set();
    }

    getProducts() {
        return this.products;
    }

    setProducts(newProducts) {
        this.products = newProducts;
        this.updateCategories(newProducts);
        this.notifyObservers();
    }
    getCategories() {
        return this.categories;
    }

    updateCategories(products) {
        this.categories.clear();

    products.forEach((product) => {
            if (product.categories) {
                product.categories.forEach((category) => {
                    this.categories.add(category);
                });
            }
        });
        this.notifyObservers();
    }
}

class CartStore extends Store {
    constructor() {
        super();
        this.cart = []; 
    }

    // сначала мы регестрируемся, потом получаем данные
    async init() {
        await this.registerCart();
        await this.fetchCart();
    }

    async registerCart() {
        try {
            const response = await fetch(`${API_URL}/api/cart/register`, {
                method: "POST",
                credentials: "include",
            });

            if(!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }
        } catch (err) {
            console.error(err);
        }
    }


    async fetchCart() {
        try {
            const response = await fetch(`${API_URL}/api/cart`, {
                method: "GET",
                // креденитал - передача куков
                credentials: "include",
            });
            if(!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }

            const data = await response.json();
            this.cart = data;
            this.notifyObservers();

        } catch (err) {
            console.error(err);
        }
    }

    getCart() {
        return this.cart;
    }
    // айди и количество товара с сервера
    async postCart({id, quantity}) {
        try {
            const response = await fetch(`${API_URL}/api/cart/items`, {
                method: "POST",
                // креденитал - передача куков
                credentials: "include",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({ProductId: id, quantity}),
            });

            if(!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }

            const data = await response.json();
            this.cart = data;
            this.notifyObservers();
        } catch (err) {
            console.error(err);
        }
    }

    async addProductCart(id) {
        await this.postCart({ id, quantity: 1});
    }

}
export const productStore = new ProductStore();
export const cartStore = new CartStore();