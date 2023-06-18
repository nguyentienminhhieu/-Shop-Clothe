<template lang="">
    <div>
      <DesktopNavAdmin/>
      <div class="container">
        <div class="content">
          <h2>Cập nhật Sản phẩm</h2>
          <div class="item-form">
            <label for="name">Tên sản phẩm:</label>
            <input type="text" id="name" v-model="product.name">
          </div>
          <div class="item-form">
            <label for="image">Ảnh sản phẩm:</label>
            <input type="text" id="image" v-model="image">
          </div>
          <div class="item-form">
            <label for="quantity">Số lượng:</label>
            <input type="number" id="quantity" v-model="quantity">
          </div>
          <div class="item-form">
            <label for="price">Giá:</label>
            <input type="number" id="price" v-model="price">
          </div>
          <div class="item-form">
            <label for="description">Mô tả:</label>
            <input type="text" id="description" v-model="description">
          </div>
          <div class="item-form">
            <label for="tag">Loại hàng:</label>
            <select name="tag_product" id="tag" v-model="tag_id">
              <option v-for="tag in tags" :key="tag.id" :value="tag.id">{{ tag.name }}</option>
            </select>
          </div>
          <div class="item-form">
            <label for="onSale">Đang giảm giá:</label>
            <input type="radio" id="onSale" value="1" v-model="onSale"> Có
            <input type="radio" id="onSale" value="0" v-model="onSale"> Không
          </div>
          <div class="item-form">
            <label for="news">Sản phẩm mới:</label>
            <input type="radio" id="news" value="1" v-model="news"> Có
            <input type="radio" id="news" value="0" v-model="news"> Không
          </div>
          <div class="item-form">
            <button @click="updateProduct(product.id)" type="submit" class="button-primary">Cập nhật</button>
            <button @click="goBack" type="submit" class="button-primary">Quay lại</button>
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
            tags: [],
            product: [],
            name: '',
            image: '',
            quantity: 1,
            price: 1,
            description: '',
            tag_id: 0,
            onSale: 1,
            news: 1,
        };
        },
        methods: {
            updateProduct(id){
                const data = {
                    id: id,
                    name: this.name,
                    image: this.image,
                    quantity: this.quantity,
                    price: this.price,
                    description: this.description,
                    tag_id: this.tag_id,
                    onSale: this.onSale,
                    news: this.news,
                };
                this.$axios
                .put(`http://127.0.0.1:8000/api/products/update`, data)
                .then((response) => {
                    console.log(response.data)
                    if(response.data > 0){
                        alert("Cập nhật sản phẩm thành công");
                        this.$router.push('/manager/products/')
                    }
                    else{
                        alert("Lỗi cập nhật, vui lòng thử lại");
                        return;
                    }
                })
                .catch((error) => {
                    alert("Lỗi cập nhật, vui lòng thử lại");
                    return;
                });
            },
            goBack(){
                this.$router.push('./')
            },
        },
        mounted() {
            this.$axios
            .get(`http://127.0.0.1:8000/api/products/searchByID/${this.$route.params.id}`)
            .then((response) => {
                this.product = response.data;
                this.name = response.data.name;
                this.image = response.data.image;
                this.quantity = response.data.quantity;
                this.price = response.data.price;
                this.description = response.data.description;
                this.tag_id = response.data.tag_id;
                this.onSale = response.data.onSale;
                this.news = response.data.news;
            })
            .catch((error) => {
                console.log(error);
            });
            this.$axios
            .get('http://127.0.0.1:8000/api/tags')
            .then((response) => {
                this.tags = response.data;
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
        width: 100%;
        text-align: center;
    }
    .item-form{
        width: 40%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 20px auto;
    }
    .item-form:last-child{
        justify-content: center;
    }
    label{
        width: 150px;
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
