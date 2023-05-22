<template lang="">
  <div>
    <DesktopNav />
    <v-container v-if="products">
      <v-row justify="center">
        <v-col cols="11" md="7">
          <h2 class="text-center text-md-h4 font-weight-bold">
            {{ products.name }}
          </h2>
          <!-- <div class="mt-2 text-center">
            <v-rating
              readonly
              half-increments
              class="mb-2"
              color="yellow darken-2"
              background-color="grey lighten-1"
              :value="products.ratings"
              dense
              size="20"
            ></v-rating>
            <v-chip
              small
              label
              outlined
              class="mr-1"
              v-for="(t, i) in products.price"
              :key="`prod${products.id}-${i}`"
            >
              {{ t }}
            </v-chip>
          </div> -->
          <br />
          <v-img
            width="100%"
            class="el rounded-lg"
            height="50vh"
            :src="products.image"
          ></v-img>
          <p class="mt-5 mb-7">
            {{ products.description }}

          </p>
          <v-btn
            @click="$store.commit('cart/AddToCart', products)"
            min-height="45"
            min-width="170"
            class="text-capitalize"
            color="primary"
            >Add To Cart</v-btn>
        </v-col>
      </v-row>
    </v-container>
    <ScrollTop />
  </div>
</template>


<script>
export default {
  layout: 'searchP',
  data() {
    return {
      products: null,
    };
  },
  mounted() {
    this.$axios
    .get(`http://127.0.0.1:8000/api/products/search/${this.$route.params.id}`)
    .then((response) => {
      this.products = response.data;
      // console.log(response);
      // console.log(this.products);
    })
    .catch((error) => {
      console.log(error);
    });
  },
}
</script>
<style lang=""></style>
