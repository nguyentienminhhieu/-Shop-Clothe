<template lang="">
  <div>
    <DesktopNavAdmin/>
      <div class="container">
        <div class="content">
          <h2>Thông tin tài khoản</h2>
            <h3>Mã tài khoản: <span>{{ users.id }}</span></h3> 
            <h3>Email: <span>{{ users.email }}</span></h3>

            <h3>Quyền truy cập</h3>
            <input type="text" class="role" @change="handleChangeRole" min="1" max="2" v-model="role">

            <h3>Trạng thái hoạt động</h3>
            <input type="text" min="0" max="1" v-model="status">
            
            <br>
            <button @click="updateAccount(users.id)" type="submit" class="button-primary">Lưu thông tin</button>
            <button @click="homeAccount()" type="submit" class="button-primary">Quay lại</button>
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
      users: [],
      status: 0,
      role: 0,
    };
  },
  methods: {
    handleChangeRole() {
      
    },
    updateAccount(id){
      if(this.status > 1 || this.status < 0) {
        alert("Trạng thái hoạt động là: \n 1 - Đã xác thực - Đang hoạt động \n 2 - Chưa xác thực - Không hoạt được");
      }
      else if(this.role > 2 || this.role < 0) {
        alert("Quyền: \n 1 - Quyền quản trị \n 2 - Người dùng");
      }
      else {
      const data = {
        id: id,
        status: this.status, 
        role: this.role,
      };
      this.$axios
        .put(`http://127.0.0.1:8000/api/users/update`, data)
        .then((response) => {
          if(response.data > 0){
            alert("Cập nhật tài khoản thành công");
            this.$router.push('/manager/users/')
          }
          else{
            alert("Lỗi cập nhật, vui lòng thử lại!");
            return;
          }
        })
        .catch((error) => {
          console.log(error);
        });
      }
    },
    homeAccount(){
      this.$router.push('./')
    },
  },
  mounted() {
  this.$axios
    .get(`http://127.0.0.1:8000/api/users/edit/${this.$route.params.id}`)
    .then((response) => {
      this.users = response.data;
      this.status = response.data.status;
      this.role = response.data.role;
    })
    .catch((error) => {
      console.log(error);
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
  h3 {
    margin-top: 10px;
  }
  .content{
    text-align: center;
  }
  span{
    color: red;
  }
  input {
    background-color: #f2f2f2;
    color: #333;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 8px;
    font-size: 14px;
    width: 200px;
    cursor: pointer;
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
</style>
