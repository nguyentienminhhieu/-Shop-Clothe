<template lang="">
    <div>
      <DesktopNavAdmin/>
        <div class="container">
          <div class="content">
            <h2>Thông tin Loại hàng</h2>
            <!-- <form > -->
                <div class="item-form">
                    <label for="nameTag">Tên loại hàng:</label>
                    <!-- <p>{{tags.name}}</p> -->
                    <input type="text" id="nameTag" v-model="nameTag">
                </div>
                <div class="item-form">
                    <label for="descriptionTag">Mô tả:</label>
                    <input type="text" id="descriptionTag" v-model="descriptionTag">
                </div>
                <div class="item-form">
                    <button @click="updateTag(tags.id)" type="submit" class="button-primary">Lưu thông tin</button>
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
            tags: [],
            nameTag: '',
            descriptionTag: '',
        };
        },
        methods: {
            updateTag(id){
                // console.log(id)
                const data = {
                    id: id,
                    nameTag_new: this.nameTag, 
                    descriptionTag_new: this.descriptionTag,
                };
                this.$axios
                .put(`http://127.0.0.1:8000/api/tags/update`, data)
                .then((response) => {
                    console.log(response.data)
                    if(response.data > 0){
                        alert("Cập nhật loại hàng thành công");
                        this.$router.push('/manager/tags/')
                    }
                    else{
                        alert("Lỗi cập nhật, vui lòng thử lại");
                        return;
                    }
                })
                .catch((error) => {
                    // console.log(error);
                    alert("Lỗi cập nhật, vui lòng thử lại");
                    return;
                });
            },
            // },
            homeTag(){
                this.$router.push('./')
            },
        },
        mounted() {
        this.$axios
        .get(`http://127.0.0.1:8000/api/tags/search/${this.$route.params.id}`)
        .then((response) => {
            this.tags = response.data;
            this.nameTag = response.data.name;
            this.descriptionTag = response.data.description;
            // console.log(response);
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