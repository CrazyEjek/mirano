class Store {
    constructor() {
        this.observers = [];
        this.products = [];
        // создаем новую коллекцию
        this.categories = new Set();
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


    getProducts() {
        return this.products;
    }

    getCategories() {
        return this.categories;
    }

    setProducts(newProducts) {
        this.products = newProducts;
        this.updateCategories(newProducts);
        this.notifyObservers();
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

export const store = new Store();