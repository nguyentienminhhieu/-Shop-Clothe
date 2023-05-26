import axios from "axios";

export const state = () => ({
    shoe: [],
});

export const mutations = {
    setShoes(state, shoes) {
        state.shoes = shoes;
    }
}

export const actions = {
    async fetchShoes({commit}) {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/shoes')
            const shoes = response.data;
            commit('setShoes', shoes);
        } catch (error) {
            console.log(error);
        }
    }
}
export const getters = {
    getShoes(state) {
        return state.shoes;
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
  };