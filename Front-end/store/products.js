import axios from "axios";
export const GET_PRODUCTS = 'products';
export const GET_PRODUCTS_ID = 'products/searchByID'


const state = () => ({
    products: [],
    product_detail: {},
    sale_item: []
});

const mutations = {
    setProducts(state, products) {
        state.products = products;
    },
    setProductID(state, product_detail) {
        state.product_detail = product_detail;
    }
}

const actions = {
    // async fetchProducts({commit}) {
    //     try {
    //         const response = await axios.get('http://127.0.0.1:8000/api/products')
    //         const products = response.data;
    //         commit('setProducts', products);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    async [GET_PRODUCTS]({ commit }, payload) {
        return new Promise((resolve, reject) => {
          this.$query(GET_PRODUCTS).then(
            (response) => {
                let data = response.data
              commit('setProducts', data)
              resolve(data);
            }).catch(error => {
            reject(error);
          })
        });
      },
      async [GET_PRODUCTS_ID]({ commit }, payload) {
        return new Promise((resolve, reject) => {
          this.$get(GET_PRODUCTS_ID, payload).then(
            (response) => {
                let data = response.data
              commit('setProductID', data)
              resolve(data);
            }).catch(error => {
            reject(error);
          })
        });
      },
}
const getters = {
    getProducts(state) {
        return state.products;
    },
    getProductID(state) {
        return state.product_detail;
    },
    productHandbags(state) {
      return state.products.filter(product => product.id_tag == 3)
    },
    productShoes(state) {
      return state.products.filter(product => product.id_tag == 4)
    },
    productClothes(state) {
      return state.products.filter(product => product.id_tag == 6)
    },
    productPerfume(state) {
      return state.products.filter(product => product.id_tag == 1)
    },
    productWatch(state) {
      return state.products.filter(product => product.id_tag == 7)
    },
}


export default {
    state,
    getters,
    actions,
    mutations,
  };