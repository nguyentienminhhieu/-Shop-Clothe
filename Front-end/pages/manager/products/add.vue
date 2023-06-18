<template lang="">
    <div>
      <DesktopNavAdmin/>
   <div class="container">
      <div class="content">
        <h2>Thêm Sản phẩm</h2>
        <div class="item-form">
          <label for="name">Tên sản phẩm:</label>
          <input type="text" id="name" v-model="product.name">
        </div>
        <div class="item-form">
          <label for="image">Ảnh sản phẩm:</label>
          <input  @change="onImageChange" id="image" type="file">
        </div>
        <div class="item-form">
          <label for="quantity">Số lượng:</label>
          <input type="number" id="quantity" v-model="product.quantity">
        </div>
        <div class="item-form">
          <label for="price">Giá:</label>
          <input type="number" id="price" v-model="product.price">
        </div>
        <div class="item-form">
          <label for="description">Mô tả:</label>
          <input type="text" id="description" v-model="product.description">
        </div>
        <div class="item-form">
          <label for="rate">Đánh giá:</label>
          <input type="number" id="rate" v-model="product.rate">
        </div>
        <div class="item-form">
          <label for="tag_id">Tag ID:</label>
          <input type="number" id="tag_id" v-model="product.tag_id">
        </div>
        <div class="item-form">
          <label for="onSale">Đang giảm giá:</label>
          <input type="number" id="onSale" v-model="product.onSale">
        </div>
        <div class="item-form">
          <label for="news">Sản phẩm mới:</label>
          <input type="number" id="news" v-model="product.news">
        </div>
        <div class="item-form">
          <button @click="addProduct" type="submit" class="button-primary">Thêm</button>
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
            product: {
                id: null,
                name: "",
                image: null, 
                quantity: 0,
                price: 0,
                description: "",
                rate: 0,
                tag_id: 0,
                onSale: 0,
                news: 0,
                created_at: null,
                updated_at: null,
            },
        };
    },
        methods: {
            onImageChange(event) {
                const file = event.target.files[0];
                this.product.image = file;
            },
            addProduct(){
                const data = {
                    product: this.product,
                }
                this.$axios
                .post(`http://127.0.0.1:8000/api/products/addProducts`, data)
                .then((response) => {
                    console.log(response.data)
                    if(response.data > 0){
                        alert("Thêm loại hàng thành công");
                        this.$router.push('/manager/products/')
                    }
                })
                .catch((error) => {
                    // console.log(error);
                    alert("Lỗi thêm loại hàng, vui lòng thử lại");
                    return;
                });
            },
            // },
            goBack(){
                this.$router.push('./')
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
