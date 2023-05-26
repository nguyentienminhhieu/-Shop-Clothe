import axios from "axios";

export const state = () => ({
    bag: [],
});

export const mutations = {
    setBags(state, bags) {
        state.bags = bags;
    }
}

export const actions = {
    async fetchBags({commit}) {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/bags')
            const bags = response.data;
            commit('setBags', bags);
        } catch (error) {
            console.log(error);
        }
    }
}
export const getters = {
    getBags(state) {
        return state.bags;
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
  };