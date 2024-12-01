import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      basket: [],
    };
  },

  mutations: {
    /**
     * Put data in basket from localStorage if available
     */
    initializeBasket(state) {
      if (process.client) {
        const savedBasket = localStorage.getItem("basket");
        state.basket = savedBasket ? JSON.parse(savedBasket) : [];
      }
    },

    /**
     *  Add product to basket or update count if it already exists.
     * @param {*} state 
     * @param {*} product 
     */
    set_basket(state, product) {
      const selectedProduct = state.basket.find((item) => item.id === product.id);

      if (selectedProduct) {
        selectedProduct.count += selectedProduct.count; // count +1
      } else {
        state.basket.push(product); // push product to basket
      }

      localStorage.setItem("basket", JSON.stringify(state.basket));
    },

    /**
     * Increase product count in the basket.
     * @param {*} state 
     * @param {*} id 
     */
    increase_count(state, id) {
      const product = state.basket.find((item) => item.id === id);

      if (product) {
        product.count++; // Increase coint
        localStorage.setItem("basket", JSON.stringify(state.basket));
      }
    },

    /**
     * Decrease product count in the basket.
     * @param {*} state 
     * @param {*} id 
     */
    decrease_count(state, id) {
      const product = state.basket.find((item) => item.id === id);
      if (product) {
        product.count--; // Decrease count
        if (product.count === 0) {
          state.basket = state.basket.filter((item) => item.id !== id); // Remove iTem from basket
        }

        localStorage.setItem("basket", JSON.stringify(state.basket));
      }
    },
  },

  getters: {
    get_basket(state) {
      return state.basket;
    },
  },
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
  store.commit("initializeBasket");
});
