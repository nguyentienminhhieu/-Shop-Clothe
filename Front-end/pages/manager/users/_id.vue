<template lang="">
  <div>
    <DesktopNavAdmin/>
      <div class="container">
        <div class="content">
          <h2>Thông tin tài khoản</h2>
          <!-- <form > -->
              <h3>Mã tài khoản: <span>{{ users.id }}</span></h3> 
              <h3>Email: <span>{{ users.email }}</span></h3>

              <p><h3>Quyền truy cập</h3></p>
              <select name="" id=""  @change="handleDepartmentChange($event.target.value)">
                <option v-for="itemDep in department" :key="itemDep.id" :value="itemDep.id" :selected="itemDep.id == users.department_id">{{itemDep.name}}</option>
              </select>

              <p><h3>Trạng thái hoạt động</h3></p>
              <select  name="" id=""  @change="handleStatusChange($event.target.value)">
                <option v-for="itemStatus in status" :key="itemStatus.id" :value="itemStatus.id" :selected="itemStatus.id == users.status_id">{{itemStatus.name}}</option>
              </select>
              
              <br>
              <button @click="updateAccount(users.id)" type="submit" class="button-primary">Lưu thông tin</button>
              <button @click="homeAccount()" type="submit" class="button-primary">Quay lại</button>
            <!-- </form> -->
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
      status: [],
      department: [],
    };
  },
  methods: {
    updateAccount(id){
      this.$axios
        .put(`http://127.0.0.1:8000/api/users/update`,this.users)
        .then((response) => {
          // console.log(response)
          if(response.data == true){
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
      },
    // },
    handleDepartmentChange(value) {
      this.users.department_id = value; 
    },
    handleStatusChange(value) {
      this.users.status_id = value; 
    },
    homeAccount(){
      this.$router.push('./')
    },
  },
  mounted() {
  this.$axios
    .get(`http://127.0.0.1:8000/api/users/edit/${this.$route.params.id}`)
    .then((response) => {
      this.users = response.data[0];
      this.department = response.data[1];
      this.status = response.data[2];
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
  .content{
    text-align: center;
  }
  span{
    color: red;
  }
  select {
    background-color: #f2f2f2;
    color: #333;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 8px;
    font-size: 14px;
    width: 200px;
    cursor: pointer;
  }

  select option {
    font-weight: normal;
  }

  select:focus {
    outline: none;
    border-color: #66afe9;
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