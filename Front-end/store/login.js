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


// // Trong action "refreshToken" của Vuex store
// async refreshToken({ commit }) {
//   const token = Cookies.getToken();
//   const refreshToken = Cookies.getRefreshToken();

//   if (token && refreshToken && isTokenExpired(token) && isTokenExpired(refreshToken)) {
//     try {
//       // Gửi yêu cầu đến máy chủ để làm mới token và refresh token
//       const response = await axios.post('/refresh-token', { refreshToken });

//       // Xử lý response từ máy chủ
//       const { newToken, newRefreshToken } = response.data;

//       // Lưu token mới và refresh token mới vào lưu trữ (ví dụ: Cookies)
//       Cookies.saveToken(newToken);
//       Cookies.saveRefreshToken(newRefreshToken);

//       // Tiếp tục thực hiện yêu cầu gốc hoặc các hành động khác
//       // (ví dụ: gửi lại yêu cầu API, đổi trang, ...)
//       return true;
//     } catch (error) {
//       // Xử lý lỗi khi làm mới token (ví dụ: đăng xuất người dùng, hiển thị thông báo lỗi, ...)
//       commit('setAuthentication', false);
//       Cookies.saveData('authentication', false);
//       commit('setLoggedIn', false);
//       commit('setUser', null);
//       Cookies.destroyUser(); // Xóa thông tin người dùng khỏi lưu trữ
//       Cookies.destroyToken(); // Xóa token khỏi lưu trữ
//       Cookies.destroyRefreshToken(); // Xóa refresh token khỏi lưu trữ
//       alert('Lỗi khi làm mới token');
//       return false;
//     }
//   } else {
//     // Token hoặc refresh token chưa hết hạn, không cần làm mới
//     return true;
//   }
// },
  logout({ commit }) {
    commit('setLoggedIn', false);
    commit('setUser', null);
    Cookies.destroyUser(); // Xóa thông tin người dùng khỏi lưu trữ
    Cookies.destroyToken(); // Xóa token khỏi lưu trữ
    Cookies.destroyRefreshToken(); // Xóa refresh token khỏi lưu trữ
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