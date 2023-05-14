<template>
    <div>
    <h2>List of Products</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        <h3>{{ product.name }}</h3>
        <p>{{ product.description }}</p>
        <p>{{ product.price }}</p>
      </li>
    </ul>
    </div>
</template>
<script>
export default {
  layout: 'admin',
   data() {
    return {
      products: [],
    };
  },
    computed: {
        number() {
            return this.$store.getters.getCounter;
        }
    },
    mounted() {
    // Call the API and get the list of products
    this.$axios1.get('/products')
      .then((response) => {
        // Update the products data with the response data
        this.products = response.data;
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  },
    methods: {
      countNumber(){
        this.$store.commit('increment')
      },
      async fetchCounter() {
        await this.$store.dispatch('fetchCounter');
      }
    },
  
}
</script>
<style>
    
</style>