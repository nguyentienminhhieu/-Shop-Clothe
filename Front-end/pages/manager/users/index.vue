<template>
    <div>
      <DesktopNavAdmin/>
      <v-container>
        <h2>Danh sách tài khoản</h2>
        <table class="custom-table">
          <thead>
              <tr>
                  <th>Mã tài khoản</th>
                  <th>Email</th>
                  <th>Quyền truy cập</th>
                  <th>Trạng thái hoạt động</th>
                  <th>Thao tác</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="item in users" :key="item.id">
                  <td>{{ item.id }}</td>
                  <td>{{ item.email }}</td>
                  <td>{{ item.role }}</td>
                  <td>{{ item.status }}</td>
                  <td>
                      <button class='button-update' @click="update(item.id)">Cập nhật</button>
                      <button class='button-removeAccount' @click="removeAccount(item.id)">Xóa</button>
                  </td>                        
              </tr>
          </tbody>
        </table>
      </v-container>
      <Footer/>
      <ScrollTop />
    </div>
</template>


<script>
export default {
    data() {
    return {
      users: [],
    };
  },
  methods: {
    update(id){
      this.$router.push(`/manager/users/${id}`);
    },
    removeAccount(id){
      this.$axios
        .delete(`http://127.0.0.1:8000/api/users/delete/${id}`) 
        .then((response) => {
          console.log(response)
          if(response.data > 0){
            alert('Tài khoản đã được xóa.');
            location.reload();
          }
        })
        .catch(error => {
          console.error('Lỗi xóa tài khoản. Vui lòng thử lại:', error);
        });      
    }
  },
  mounted() {
    this.$axios
      .get('http://127.0.0.1:8000/api/users')
      .then((response) => {
        this.users = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
}
</script>
<style scoped>
h2{
  text-align: center;
}
.custom-table {
  /* Kiểu CSS cho table */
  width: 100%;
  border-collapse: collapse;
}

.custom-table th,
.custom-table td {
  border: 1px solid #ccc;
  padding: 8px;
  text-align: center;
}

.custom-table th {
  background-color: #f2f2f2;
}

.custom-table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

.custom-table tbody tr:hover {
  background-color: #eaeaea;
}
.button-update {
    padding: 0 5px;
    height: 30px;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
    background: #288eec;
    border: none;
    color: #fff;
    letter-spacing: 1px;
    border-radius: 5px;
}

.button-removeAccount{
    padding: 0 5px;
    height: 30px;
    text-align: center;
    font-size: 16px;
    cursor: pointer;
    background: #e30000;
    border: none;
    color: #fff;
    letter-spacing: 1px;
    border-radius: 5px;
}

</style>
