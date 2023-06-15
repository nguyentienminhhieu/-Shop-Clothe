<template lang="">
  <div>
    <DesktopNav/>
    <HomeCarousel :sale_items="products" />
    <v-container>
    <h1 class="text-md-h4 text-h6">Check these out </h1>
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
   async created() {
    await this.$store.dispatch(`${GET_PRODUCTS}`)
  },
    computed: {
        ...mapGetters({
      products: "getProducts",
    }),
  },
}
</script>




<style lang="">
  
</style>
