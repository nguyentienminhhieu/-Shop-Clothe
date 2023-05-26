import axios from "axios";

export const state = () => ({
    trouser: [],
});

export const mutations = {
    setTrousers(state, trousers) {
        state.trousers = trousers;
    }
}

export const actions = {
    async fetchTrousers({commit}) {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/trousers')
            const trousers = response.data;
            commit('setTrouser', trousers);
        } catch (error) {
            console.log(error);
        }
    }
}
export const getters = {
    getTrouser(state) {
        return state.trousers;
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
  };