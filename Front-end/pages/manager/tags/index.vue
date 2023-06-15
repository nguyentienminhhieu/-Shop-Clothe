<template lang="">
    <div>
        <DesktopNavAdmin/>
        <v-container>
            <div class="header-container">
                <h2>Danh sách loại hàng</h2>
                <button @click="formAdd()" class="button-primary">Thêm mới</button>
            </div>
            <table class="custom-table">
                <thead>
                    <tr>
                        <th>Mã loại hàng</th>
                        <th>Tên loại hàng</th>
                        <th>Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in tags" :key="item.id">
                        <td>{{ item.id }}</td>
                        <td>{{ item.name }}</td>
                        <td>
                            <button class='button-primary' @click="update(item.id)">Cập nhật</button>
                            <button class='button-remove' @click="remove(item.id)">Xóa</button>
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
      tags: [],
    };
  },
  methods: {
    update(id){
        this.$router.push({
            name: 'manager-tags-edit___en',
            params: { id: id }
        });
    },
    remove(id){
        this.$axios
        .delete(`http://127.0.0.1:8000/api/tags/delete/${id}`)
        .then((response) => {
            console.log(response)
            if(response.data > 0){
                alert("Xóa loại hàng thành công");
                // this.$router.push('/manager/tags/');
                location.reload();
            }
            else{
                alert("Vui lòng cập nhật sản phẩm thuộc loại hàng này")
                this.$router.push(`/manager/products/`);
            }
        })
        .catch((error) => {
            console.log(error);
        });
    },
    formAdd(){
        this.$router.push(`/manager/tags/add`);
    }
  },
  mounted() {
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
    h2{
        text-align: center;
    }
    .header-container{
        width: 80%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .custom-table {
        width: 80%;
        margin: 10px auto;
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
    }

    .button-remove{
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

