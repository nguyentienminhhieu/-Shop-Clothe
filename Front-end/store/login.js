import axios from "axios";
import  Cookies  from "@/services/cookies.service.js";

export const LOGIN = '/users/login';

export const state = () => ({
  isLoggedIn: false,
  authentication: false,
  user: null,
  error: null,
});

export const mutations = {
  setLoggedIn(state, isLoggedIn) {
    state.isLoggedIn = isLoggedIn;
  },
  setAuthentication(state, data) {
    state.authentication = data;
  },
  setUser(state, user) {
    state.user = user;
  },
  setError(state, error) {
    state.error = error;
  },
 
};

export const actions = {
  async [LOGIN]({ commit }, payload) {
    return new Promise((resolve, reject) => {
      this.$post(LOGIN, payload).then(
        (response) => {
            let data = response.data
            if(data && data.status) {
              console.log(data.data.access_token);
              commit('setAuthentication', true);
              Cookies.saveToken(data.data.access_token)
              Cookies.saveData('authentication', true)
            }
          resolve(data);
        }).catch(error => {
        reject(error);
      })
    });
  },


  logout({ commit }) {
    commit('setLoggedIn', false);
    commit('setUser', null);
    Cookies.destroyUser(); // Xóa thông tin người dùng khỏi lưu trữ
    Cookies.destroyToken(); // Xóa token khỏi lưu trữ
    // Cookies.destroyRefreshToken(); // Xóa refresh token khỏi lưu trữ
    commit('setAuthentication', false); // Đặt lại giá trị authentication
    Cookies.saveData('authentication', false); // Lưu giá trị authentication
  }

};

export const getters = {
  currentUser(state) {
    return state.user;
  },
  loginError(state) {
    return state.error;
  },
  isAuthentication(state) {
    return state.authentication;
  },
  isLoggedIn(state) {
    return state.isLoggedIn || Cookies.getAuthentication(); // Kiểm tra cả state và lưu trữ để xác định trạng thái đăng nhập
  },




};

export default {
  state,
  getters,
  actions,
  mutations,
};
