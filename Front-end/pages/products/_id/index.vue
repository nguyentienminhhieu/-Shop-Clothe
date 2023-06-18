<template lang="">
  <div>
    <DesktopNav />
    <v-container v-if="product_detail">
      <v-row justify="center">
        <v-col cols="11" md="7">
          <v-card @click="goToProduct(product_detail.id)">
          <h2 class="text-center text-md-h4 font-weight-bold">
            {{ product_detail.name }}
          </h2>
          <div class="mt-2 text-center">
            <v-rating
              readonly
              half-increments
              class="mb-2"
              color="yellow darken-2"
              background-color="grey lighten-1"
              :value="product_detail.rate"
              dense
              size="20"
            ></v-rating>
            <v-chip
              small
              label
              outlined
              class="mr-1"
              v-for="(t, i) in product_detail.tags"
              :key="`prod${product_detail.id}-${i}`"
            >
              {{ t }}
            </v-chip>
          </div>
          <br />
          <v-img
            width="100%"
            class="el rounded-lg"
            height="50vh"
            :src="product_detail.image"
          ></v-img>
          <p class="mt-5 mb-7">
            {{ product_detail.description }}
          </p>
          <p class="text-center font-weight-bold">
             Giá: ${{ product_detail.price }}
          </p>
          <v-btn
            
            @click="addToCart(product_detail)"
            min-height="45"
            min-width="170"
            class="text-capitalize"
            color="primary"
            >Thêm vào giỏ hàng</v-btn
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
export default {
  async created() {
    this.$axios
      .get(`http://127.0.0.1:8000/api/products/searchByID/${this.$route.params.id}`)
      .then((response) => {
          this.product_detail = response.data;
      })
      .catch((error) => {
          console.log(error);
      });
  },
  data() {
    return {
      product_detail: null,
    } 
  },
  methods: {
    addToCart(product) {
      this.$store.commit('cart/AddToCart', product)
    },
    goToProduct(productId) {
      this.$router.push(`/products/${productId}`);
    },
  },  
}
</script>

<style lang=""></style>






