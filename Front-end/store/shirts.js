import axios from "axios";

export const state = () => ({
    shirt: [],
});

export const mutations = {
    setShirts(state, shirts) {
        state.shirts = shirts;
    }
}

export const actions = {
    async fetchShirts({commit}) {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/shirts')
            const shirts = response.data;
            commit('setShirts', shirts);
        } catch (error) {
            console.log(error);
        }
    }
}
export const getters = {
    getShirts(state) {
        return state.shirts;
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
  };