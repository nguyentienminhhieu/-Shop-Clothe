<template lang="">
  <div>
    <DesktopNav/>
    <div class="container">
      <div class="content">
        <h2>Cập nhật thông tin</h2>
        <div class="item-form">
          <label for="phoneNumber">Số Điện Thoại:</label>
          <input type="text" id="phoneNumber" v-model="phoneNumber">
        </div>
        <div class="item-form">
          <label for="address">Địa chỉ:</label>
          <input type="text" id="address" v-model="address">
        </div>
        <div class="item-form">
          <button @click="updateInfo" type="submit" class="button-primary">Cập nhật</button>
          <button @click="homeAccount" type="submit" class="button-primary">Quay lại</button>
        </div>
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
      phoneNumber: '',
      address: '',
      message: '',
    };
  },
  methods: {
    updateInfo() {
      const data = {
        id: Cookies.getUser(),
        phoneNumber: this.phoneNumber,
        address: this.address,
      };
      this.$axios
        .put(`http://127.0.0.1:8000/api/users/info/update`, data)
        .then((response) => {
            if (response.data > 0) {
              alert("Cập nhật thành công"); 
              this.$router.push('./');
            } else {
            alert("Lỗi cập nhật. Vui lòng thử lại");
              return;
            }
        })
        .catch((error) => {
            console.error(error);
        });
    },
    homeAccount() {
      this.$router.push('./');
    },
  },
  mounted() {
    let id = Cookies.getUser();
    this.$axios
      .get(`http://127.0.0.1:8000/api/users/info/search/${id}`)
      .then((response) => {
        this.address = response.data.address;
        this.phoneNumber = response.data.telephone;
      })
      .catch((error) => {
          console.error(error);
      });
  },
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.content {
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.item-form {
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
}
.item-form:last-child {
  justify-content: center;
}
label {
  width: 200px;
}
input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #888;
  border-radius: 12px;
}
.button-primary {
  margin-top: 20px;
  padding: 8px 12px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  background: #288eec;
  border: none;
  color: #fff;
  letter-spacing: 1px;
  border-radius: 5px;
}
.button-primary + .button-primary {
  margin-left: 10px;
}
</style>
