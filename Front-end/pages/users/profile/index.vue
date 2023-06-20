<template>

<div>
    <DesktopNav/>
    <div class="profile">
      <h1 class="profile-title">Thông tin cá nhân</h1>
    </div>
    <div class="profile-info" v-if="user !== null">
      <div class="info-item">
        <label class="info-label">Mã tài khoản:</label>
        <div class="info-value">{{ user.user_id }}</div>
      </div>
      <div class="info-item">
        <label class="info-label">Tên tài khoản:</label>
        <div class="info-value">{{ user.username }}</div>
      </div>
      <div class="info-item">
        <label class="info-label">Email:</label>
        <div class="info-value">{{ user.email }}</div>
      </div>
      <div class="info-item">
        <label class="info-label">Số điện thoại:</label>
        <div class="info-value">{{ user.telephone }}</div>
      </div>
      <div class="info-item">
        <label class="info-label">Địa chỉ:</label>
        <div class="info-value">{{ user.address }}</div>
      </div>
      <div class="info-item">
        <label class="info-label">Điểm tích lũy:</label>
        <div class="info-value">{{ user.point }}</div>
      </div>
      <div class="info-item">
        <button class='button-update' @click="update(cookieID)">Cập nhật</button>
      </div>
    </div>
    <Footer/>
    <ScrollTop />
  </div>
</template>

<script>
import  Cookies  from "@/services/cookies.service.js";
export default {
  data() {
      return {
        user: null,
        cookieID: 0,
        cookieExists: false,
      } 
  },
  mounted() {
      if (Cookies.getToken() != null) {
        this.cookieExists = true;
        this.cookieID = Cookies.getUser();
      }
      
    let id = Cookies.getUser();
    // this.$axios
    //   .get(`http://127.0.0.1:8000/api/users/search/${id}`)
    //   .then((response) => {
    //       this.user = response.data;
    //   })
    //   .catch((error) => {
    //       console.log(error);
    //   });
    this.$axios
      .get(`http://127.0.0.1:8000/api/users/info/search/${id}`)
      .then((response) => {
          this.user = response.data;
      })
      .catch((error) => {
          console.log(error);
      });
  },
  methods: {
     update(id) {
        this.$router.push(`/profile/${id}`);
      },
  }
}
</script>
<style scoped>
  .profile {
    width: 100%;
    margin: 0 auto;
    text-align: center;
    padding: 20px;
  }
  .profile-title {
    font-size: 24px;
    margin-bottom: 20px;
  }
  .profile-info {
    width: 90%;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .info-item {
    display: flex;
    margin-bottom: 10px;
  }
  .info-label {
    font-weight: bold;
    margin-right: 5px;
  }
  .info-value {
    font-style: italic;
  }
  button {
    padding: 4px 8px;
    height: 40px;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
    border: none;
    color: #fff;
    letter-spacing: 1px;
    border-radius: 5px;
    background: #288eec;
  }
</style>
