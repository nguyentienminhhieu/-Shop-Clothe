<template lang="">
    <div>
      <DesktopNavAdmin/>
        <div class="container">
          <div class="content">
            <h2>Thêm Loại hàng</h2>
            <!-- <form > -->
                <div class="item-form">
                    <label for="nameTag">Tên loại hàng:</label>
                    <input type="text" id="nameTag" v-model="nameTag">
                </div>
                <div class="item-form">
                    <label for="descriptionTag">Mô tả:</label>
                    <input type="text" id="descriptionTag" v-model="descriptionTag">
                </div>
                <div class="item-form">
                    <button @click="addTag()" type="submit" class="button-primary">Thêm</button>
                    <button @click="homeTag()" type="submit" class="button-primary">Quay lại</button>
                </div>
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
                nameTag: '',
                descriptionTag: '',
            };
        },
        methods: {
            addTag(){
                const data ={
                    nameTag: this.nameTag,
                    descriptionTag: this.descriptionTag,
                }
                this.$axios
                .post(`http://127.0.0.1:8000/api/tags/add`, data)
                .then((response) => {
                    // console.log(response.data)
                    if(response.data > 0){
                        alert("Thêm loại hàng thành công");
                        this.$router.push('/manager/tags/')
                    }
                })
                .catch((error) => {
                    // console.log(error);
                    alert("Lỗi thêm loại hàng, vui lòng thử lại");
                    return;
                });
            },
            // },
            homeTag(){
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