import axios from "axios";

 const state = () => ({
    products: [],
});

 const mutations = {
    setProducts(state, products) {
        state.products = products;
    }
}

 const actions = {
    async fetchProducts({commit}) {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/products')
            const products = response.data;
            commit('setProducts', products);
        } catch (error) {
            console.log(error);
        }
    }
}
 const getters = {
    getProducts(state) {
        return state.products;
    },
    saleItems(state) {
        return state.products.filter(product => product.onSale === true)
    }
}


export default {
    state,
    getters,
    actions,
    mutations,
  };