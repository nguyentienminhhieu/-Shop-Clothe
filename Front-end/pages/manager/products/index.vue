<template>
  <div>
    <DesktopNavAdmin />
    <v-container>

       <div class="header-container">
            <h2>Danh sách thông tin sản phẩm</h2>
            <button @click="formAdd()" class="button-primary">Thêm mới</button>
        </div>
      <v-row>
        <v-col v-for="(item, index) in products" :key="index" cols="12" md="4">
          <v-card class="product-card" outlined>
            <v-img :src="item.image" height="200"></v-img>
            <v-card-title>{{ item.name }}</v-card-title>
            <v-card-text>
              <p>Mã sản phẩm: {{ item.id }}</p>
              <p>Giá: {{ item.price }}</p>
              <p>Số lượng: {{ item.quantity }}</p>
              <p>Mô tả: {{ item.description }}</p>
              <p>Loại hàng: {{ item.tag_name }}</p>
              <p>Giảm giá: {{ item.discount }}%</p>
            </v-card-text>
            <v-card-actions>
              <v-btn @click="updateProduct(item.id)" text color="primary">
                Cập nhật
              </v-btn>
              <v-btn @click="removeProduct(item.id)" text color="error">
                Xóa
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <Footer />
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
    updateProduct(productId) {
      this.$router.push(`/manager/products/edit`);
      console.log('Cập nhật sản phẩm với ID:', productId);
    },
    removeProduct(productId) {
      console.log('Thay đổi mật khẩu sản phẩm với ID:', productId);
    },
     formAdd(){
        this.$router.push('/manager/products/add');
    }
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
};
</script>

<style scoped>
h2 {
  text-align: center;
}
 .header-container{
        width: 80%;
        margin: 0 auto;
        display: flex;
        align-items: right;
        justify-content: space-between;
    }
    .button-primary {
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
        margin-bottom: 20px;
    }

.product-card {
  margin-bottom: 20px;
}

.product-card img {
  object-fit: cover;
  width: 100%;
}

.product-card p {
  margin: 0;
}
</style>
