import axios from "axios";
export const GET_USER = '/user';
export const POST_USER = '/users';

export const state = () => ({
    user: {},
    isRegistered: false,
})

export const mutations = {
    setUsers(state, user) {
        state.user = user;
    },
    setRegistered(state, isRegistered) {
      state.isRegistered = isRegistered;
    },
}
export const actions = {
    // async [GET_USERS]({ commit }, payload) {
    //     try {
    //       const response = await axios.get('http://127.0.0.1:8000/api/users');
    //       const users = response.data;
    //       commit('setUsers', users)
    //       return users;
    //     } catch (error) {
    //       console.log(error);
    //       throw error;
    //     }
    //   },
      async [GET_USER]({ commit }, payload) {
        return new Promise((resolve, reject) => {
          this.$get(GET_USER, payload).then(
            (response) => {
                console.log(response);
                let data = response.data
              commit('setUsers', data)
              resolve(data);
            }).catch(error => {
            reject(error);
          })
        });
        
      },



      // Đăng ký
  async register({ commit }, formData) {
    try {
      const response = await axios.post(POST_USER, formData);
      const { status, data } = response;
      if (status === 200) {
        // Xử lý response thành công
        // Lưu thông tin người dùng vào store hoặc nơi khác
        commit('setRegistered', true); // Đặt trạng thái đã đăng ký thành true
        // ...
        alert("Đăng ký thành công")

      } else {
      } 
    } catch (error) {
      console.error(error);
      alert("Đăng ký thất bại")
      // Xử lý lỗi khi gửi yêu cầu đăng ký (ví dụ: hiển thị thông báo lỗi)
    }
  },
}

export const getters = {
    getUser(state) {
        return state.user;
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
  };