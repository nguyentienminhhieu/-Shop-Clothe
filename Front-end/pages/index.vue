<template lang="">
  <div>
    <DesktopNav/>
    <HomeCarousel :sale_items="products" />
    <v-container>
    <h1 class="text-md-h4 text-h6">Check these out 🔥</h1>
    <br />
    <ProductSlider :products="products" />
    <br /><br /><br />
    <Newsletter />
    </v-container>
    <br /><br />
    <Footer/>
    <ScrollTop />
  </div>
</template>


<script>

import {mapGetters} from 'vuex'
import {GET_PRODUCTS} from '@/store/products' 
export default {
  // async created() {
  //   this.sale_items = await this.$content("products")
  //     .where({ onSale: true })
  //     .fetch();
  //   this.products = await this.$content("products").fetch();

  //   // await this.$store.dispatch('products/fetchProduct'); 
  // },
  // computed: {
  //   sale_items() {
  //     this.$store.getters['products/saleItems']
  //   }
  // },
   async created() {
    await this.$store.dispatch(`${GET_PRODUCTS}`)
  },
    computed: {
        ...mapGetters({
      products: "getProducts",
    }),
  },
  // data() {
  //   return {
  //     products: null,
  //     sale_items: null,
  //   };
  // },
  // async created() {
  //   await this.$store.dispatch('products/fetchProducts');
  // },
}
</script>




<style lang="">
  
</style>
