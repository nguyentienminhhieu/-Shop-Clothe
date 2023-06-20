import axios from 'axios'
export const GET_PRODUCTS = 'products'
export const GET_PRODUCTS_ID = 'products/searchByID/'

const state = () => ({
  products: [],
  product_detail: {},
  sale_item: [],
})

const mutations = {
  setProducts(state, products) {
    state.products = products
  },
  setProductID(state, product_detail) {
    state.product_detail = product_detail
  },
}

const actions = {
  async [GET_PRODUCTS]({ commit }, payload) {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/products')
      const products = response.data
      commit('setProducts', products)
      return products
    } catch (error) {
      console.log(error)
      throw error
    }
  },
  async [GET_PRODUCTS_ID]({ commit }, payload) {
    return new Promise((resolve, reject) => {
      this.$get(GET_PRODUCTS_ID, payload)
        .then((response) => {
          let data = response.data
          commit('setProductID', data)
          resolve(data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
}
const getters = {
  getProducts(state) {
    return state.products
  },
  getProductID(state) {
    return state.product_detail
  },
  productHandbags(state) {
    return state.products.filter((product) => product.tag_id == 3)
  },
  productShoes(state) {
    return state.products.filter((product) => product.tag_id == 2)
  },
  productClothes(state) {
    return state.products.filter((product) => product.tag_id == 1)
  },
  productPerfume(state) {
    return state.products.filter((product) => product.tag_id == 4)
  },
  productWatch(state) {
    return state.products.filter((product) => product.tag_id == 5)
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
