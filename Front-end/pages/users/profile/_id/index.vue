<template lang="">
  <div>
    <DesktopNav/>
    <div class="container">
      <div class="content">
        <h2>Đổi thông tin</h2>
        <div class="item-form">
          <label for="currentName">Tên tài khoản hiện tại:</label>
          <input type="text" id="currentName" v-model="currentName">
        </div>
        <div class="item-form">
          <label for="newName">Tên tài khoản mới:</label>
          <input type="text" id="newName" v-model="newName">
        </div>
        <div class="item-form">
          <label for="email">Email:</label>
          <input type="text" id="email" v-model="email">
        </div>
        <div class="item-form">
          <label for="phoneNumber">Số Điện Thoại:</label>
          <input type="text" id="phoneNumber" v-model="phoneNumber">
        </div>
        <div class="item-form">
          <label for="address">Địa chỉ:</label>
          <input type="text" id="address" v-model="address">
        </div>
        <div class="item-form">
          <button @click="changeInfo" type="submit" class="button-primary">Đổi Thông Tin</button>
          <button @click="homeAccount" type="submit" class="button-primary">Quay lại</button>
        </div>
      </div>
    </div>
    <Footer/>
    <ScrollTop />
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentName: '',
      newName: '',
      email: '',
      phoneNumber: '',
      address: '',
    };
  },
  methods: {
    changeInfo() {
      const data = {
        id: this.$route.params.id,
        currentName: this.currentName,
        newName: this.newName,
        email: this.email,
        phoneNumber: this.phoneNumber,
        address: this.address,
      };
      this.$axios
        .put(`http://127.0.0.1:8000/api/info/update`, data)
        .then((response) => {
            if (response.data.result === true) {
            alert(response.data.message);
            this.$router.push('../');
            } else {
            alert(response.data.message);
            return;
            }
        })
        .catch((error) => {
            console.error(error);
        });
    },
    homeAccount() {
      this.$router.push('../');
    },
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
