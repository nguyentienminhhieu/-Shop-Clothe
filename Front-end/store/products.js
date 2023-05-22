import axios from "axios";

export const state = () => ({
    product: [],
});

export const mutations = {
    setProducts(state, products) {
        state.products = products;
    }
}

export const actions = {
    async fetchProduct({commit}) {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/products')
            const products = response.data;
            commit('setProducts', products);
        } catch (error) {
            console.log(error);
        }
    }
}
export const getters = {
    getProducts(state) {
        return state.products;
    }
}