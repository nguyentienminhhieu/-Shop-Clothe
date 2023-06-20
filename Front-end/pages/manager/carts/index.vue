<template>
  <div>
    <DesktopNav />

    <v-container>
      <h2>List Tag</h2>
      <ul>
        <li v-for="tag in tags" :key="tag.id">
          <h3>{{ tag.name }}</h3>
          <p>{{ tag.description }}</p>
          <button @click="edit(tag.id)">Cập nhật</button>
        </li>
      </ul>
    </v-container>

    <Footer />
    <ScrollTop />
  </div>
</template>

<script>
export default {
  layout: 'admin',
  data() {
    return {
      tags: [],
    }
  },
  methods: {
    edit(id) {
      this.$axios
        .get('http://127.0.0.1:8000/api/tags/edit/', id)
        .then((response) => {
          this.tags = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },
  mounted() {
    // Call the API and get the list of products
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
<style>
h3,
p {
  margin: 0 !important;
}
li {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 10px auto;
  padding-bottom: 10px;
  border-bottom: 1px solid #333;
}
li > button {
  background-color: rgb(48, 48, 165);
  color: white;
  padding: 8px 12px;
  border-radius: 10px;
}
</style>
