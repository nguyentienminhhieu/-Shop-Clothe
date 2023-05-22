import axios from "axios";

export const state = () => ({
    users: []
})

export const mutations = {
    setUsers(state, users) {
        state.users = users;
    }
}

export const actions = {
    async fetchUsers({commit}) {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/users')
            const users = response.data;
            commit('setUsers', users)
        } catch(error) {
            console.log(error);
        }
    }
}

export const getters = {
    getUsers(state) {
        return state.users;
    }
}