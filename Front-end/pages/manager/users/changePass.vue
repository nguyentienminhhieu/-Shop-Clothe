<template lang="">
    <div>
      <DesktopNavAdmin/>
        <div class="container">
          <div class="content">
            <h2>Đổi mật khẩu</h2>
            <!-- <form @submit="changePassword()"> -->
                <div class="item-form">
                    <label for="currentPassword">Mật khẩu hiện tại:</label>
                    <input type="password" id="currentPassword" v-model="currentPassword">
                </div>
                <div class="item-form">
                    <label for="newPassword">Mật khẩu mới:</label>
                    <input type="password" id="newPassword" v-model="newPassword">
                </div>
                <div class="item-form">
                    <label for="confirmPassword">Xác nhận mật khẩu:</label>
                    <input type="password" id="confirmPassword" v-model="confirmPassword">
                </div>
                <div class="item-form">
                    <!-- <button type="submit" class="button-primary">Đổi mật khẩu</button> -->
                    <button @click="changePassword()" type="submit" class="button-primary">Đổi mật khẩu</button>
                    <button @click="homeAccount()" type="submit" class="button-primary">Quay lại</button>
                </div>
            <!-- </form> -->
            <!-- <button @click="changePassword()" type="submit" class="button-primary">Test</button> -->
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
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
        // users: []
      };
    },
    methods: {
        changePassword(){
            const data = {
                id: this.$route.params.id,
                currentPass: this.currentPassword, 
                newPass: this.newPassword,
            };
            this.$axios
            .put(`http://127.0.0.1:8000/api/users/changePassword`, data)
            .then((response) => {
                console.log(response)
                if(response.data.result == true){
                    alert(response.data.message);
                    this.$router.push('/manager/users/')
                }
                else{
                    alert(response.data.message);
                    return;
                }
            })
            .catch((error) => {
                console.error(error);
            });
        },
      homeAccount(){
        this.$router.push('./')
      },
    },
    mounted() {
        // this.$axios
        // .get(`http://127.0.0.1:8000/api/users/search/${this.$route.params.id}`)
        // .then((response) => {
        //     this.users = response.data;
        //     console.log(response)
        // })
        // .catch((error) => {
        //     console.log(error);
        // });
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
    .content{
        width: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    form{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .item-form{
        width: 50%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 20px 0;
    }
    .item-form:last-child{
        justify-content: center;
    }
    label{
        width: 200px;
    }
    input  {
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
    .button-primary + .button-primary{
        margin-left: 10px;
    }
  </style>