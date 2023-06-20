<template lang="">
  <div>
    <DesktopNavAdmin />
    <div class="container">
      <div class="content">
        <h2>Thêm Sản phẩm</h2>
        <div class="item-form">
          <label for="name">Tên sản phẩm:</label>
          <input type="text" id="name" v-model="product.name" />
        </div>
        <div class="item-form">
          <label for="image">Ảnh sản phẩm:</label>
          <input type="text" id="image" v-model="product.image" />
        </div>
        <div class="item-form">
          <label for="quantity">Số lượng:</label>
          <input type="number" id="quantity" v-model="product.quantity" />
        </div>
        <div class="item-form">
          <label for="price">Giá:</label>
          <input type="number" id="price" v-model="product.price" />
        </div>
        <div class="item-form">
          <label for="description">Mô tả:</label>
          <input type="text" id="description" v-model="product.description" />
        </div>
        <div class="item-form">
          <label for="tag">Loại hàng:</label>
          <select name="tag_product" id="tag" v-model="product.tag_id">
            <option v-for="tag in tags" :key="tag.id" :value="tag.id">
              {{ tag.name }}
            </option>
          </select>
        </div>
        <div class="item-form">
          <label for="onSale">Đang giảm giá:</label>
          <input type="radio" id="onSale" value="1" v-model="product.onSale" />
          Có
          <input type="radio" id="onSale" value="0" v-model="product.onSale" />
          Không
        </div>
        <div class="item-form">
          <label for="news">Sản phẩm mới:</label>
          <input type="radio" id="news" value="1" v-model="product.news" /> Có
          <input type="radio" id="news" value="0" v-model="product.news" />
          Không
        </div>
        <div class="item-form">
          <button @click="addProduct" type="submit" class="button-primary">
            Thêm
          </button>
          <button @click="goBack" type="submit" class="button-primary">
            Quay lại
          </button>
        </div>
      </div>
    </div>
    <Footer />
    <ScrollTop />
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: null,
      product: {
        name: '',
        image: null,
        quantity: 0,
        price: 0,
        description: '',
        tag_id: 1,
        onSale: 0,
        news: 0,
      },
    }
  },
  methods: {
    onImageChange(event) {
      const file = event.target.files[0].name
      this.product.image = file
    },
    addProduct() {
      const data = {
        product: this.product,
      }
      this.$axios
        .post(`http://127.0.0.1:8000/api/products/add`, data)
        .then((response) => {
          if (response.data > 0) {
            alert('Thêm loại hàng thành công')
            this.$router.push('/manager/products/')
          }
        })
        .catch((error) => {
          alert('Lỗi thêm loại hàng, vui lòng thử lại')
          return
        })
    },
    // },
    goBack() {
      this.$router.push('./')
    },
  },
  mounted() {
    this.$axios
      .get('http://127.0.0.1:8000/api/tags')
      .then((response) => {
        this.tags = response.data
      })
      .catch((error) => {
        console.log(error)
      })
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
}
.item-form {
  margin-bottom: 10px;
}

.item-form label {
  display: inline-block;
  width: 120px;
}

.item-form select {
  width: 300px;
}

.item-form input[type='radio'] {
  margin-right: 10px;
}

.item-form input[type='text'],
.item-form select {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px;
}

.item-form input[type='radio'] {
  border: none;
  margin-right: 2px;
}

.item-form input[type='radio']:checked {
  border: 1px solid #ccc;
  background-color: #f0f0f0;
}
.item-form {
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px auto;
}
.item-form:last-child {
  justify-content: center;
}
label {
  width: 150px;
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
