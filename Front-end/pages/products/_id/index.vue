<template lang="">
  <div>
    <DesktopNav />
    <v-container v-if="product">
      <v-row justify="center">
        <v-col cols="11" md="7">
          <v-card @click="goToProduct(product.id)">
          <h2 class="text-center text-md-h4 font-weight-bold">
            {{ product.name }}
          </h2>
          <div class="mt-2 text-center">
            <v-rating
              readonly
              half-increments
              class="mb-2"
              color="yellow darken-2"
              background-color="grey lighten-1"
              :value="product.ratings"
              dense
              size="20"
            ></v-rating>
            <v-chip
              small
              label
              outlined
              class="mr-1"
              v-for="(t, i) in product.tags"
              :key="`prod${product.id}-${i}`"
            >
              {{ t }}
            </v-chip>
          </div>
          <br />
          <v-img
            width="100%"
            class="el rounded-lg"
            height="50vh"
            :src="product.image"
          ></v-img>
          <p class="mt-5 mb-7">
            {{ product.description }}
          </p>
          <p class="text-center font-weight-bold">
             Price: ${{ product.price }}
          </p>
          <v-btn
            @click="$store.commit('cart/AddToCart', product)"
            min-height="45"
            min-width="170"
            class="text-capitalize"
            color="primary"
            >Add To Cart</v-btn
          >
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <br /><br />
    <!-- <Footer /> -->
    <ScrollTop />
  </div>
</template>


<script>
import axios from 'axios';
export default {

  async created() {
    const productId = this.$route.params.id;
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/products/searchByID/${productId}`);
      this.product = response.data;
    } catch (error) {
      console.log(error);
    }
  },
  // async created() {
  //   let d = await this.$content('products')
  //     .where({ id: parseInt(this.$route.params.id) })
  //     .limit(1)
  //     .fetch()
  //   this.product = d[0]
  // },
  data() {
    return {
      product: null,
    } 
  },
  
  // layout: 'searchP',
  // data() {
  //   return {
  //     products: null,
  //     // id: '',
  //   };
  // },
  methods: {
  goToProduct(productId) {
    this.$router.push(`/products/${productId}`);
  },
  },
  // mounted() {
  //   this.$axios
  //   .get('http://127.0.0.1:8000/api/products/search/1')
  //   .then((response) => {
  //     this.products = response.data;
  //     console.log(response);
  //     console.log(this.products);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
  // },
  
}
</script>


<style lang=""></style>






