<template lang="">
    <div>
        <DesktopNavAdmin/>
        <v-container>
            <h2>Danh sách thông tin sản phẩm</h2>
            <table class="custom-table">
                <thead>
                    <tr>
                        <th>Mã sản phẩm</th>
                        <th>Tên sản phẩm</th>
                        <th>Giá</th>
                        <th>Số lượng</th>
                        <th>Mô tả</th>
                        <th>Loại hàng</th>
                        <th>Giảm giá</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in products" :key="item.id">
                        <td>{{ item.id }}</td>
                        <td>{{ item.name }}</td>
                        <td>{{ item.price }}</td>
                        <td>{{ item.quantity }}</td>
                        <td>{{ item.description }}</td>
                        <td>{{ item.tag_name }}</td>
                        <td>{{ item.discount }}%</td>
                        
                        <td>
                            <button class='button-update' @click="update(item.id)">Cập nhật</button>
                            <button class='button-changePassword' @click="changePassword(item.id)">Bảo mật</button>
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
      products: [],
    };
  },
  methods: {

  },
  mounted() {
  this.$axios
    .get('http://127.0.0.1:8000/api/products')
    .then((response) => {
      this.products = response.data;
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

.button-changePassword{
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
