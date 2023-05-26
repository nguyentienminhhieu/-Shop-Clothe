<template lang="">
  <div>
    <div>
      <v-text-field
        prepend-inner-icon="mdi-magnify"
        outlined
        v-model="search"
        clearable
        placeholder="Search"
      ></v-text-field>
    </div>
    <v-row>
      <template v-for="(p, i) in filteredProducts">
        <v-fade-transition :key="`product${p.id}-${i}`">
          <v-col cols="12" md="4">
            <v-card nuxt color="surface" class="el ma-2 mb-5 mr-5">
              <div @click="goToProduct(p.id)">
                <v-img :src="p.image" height="300">
                  <template #placeholder>
                    <v-row class="fill-height" justify="center" align="center">
                      <v-progress-circular
                        width="2"
                        size="100"
                        color="primary"
                        indeterminate
                      ></v-progress-circular>
                    </v-row>
                  </template>
                </v-img>
                <v-card-title class="text-md-body-1 font-weight-bold">{{
                  p.name
                }}</v-card-title>
                <v-card-subtitle class="primary--text pb-3">
                  ${{ p.price }}
                </v-card-subtitle>
                <v-card-text>
                  <v-chip
                    x-small
                    label
                    outlined
                    class="mr-1"
                    v-for="(t, i) in p.products"
                    :key="`prod${p.id}-${i}`"
                  >
                    {{ t }}
                  </v-chip>
                </v-card-text>
                <v-rating
                  readonly
                  half-increments
                  class="mb-2"
                  color="yellow darken-2"
                  background-color="grey lighten-1"
                  :value="p.ratings"
                  dense
                  size="20"
                 ></v-rating>
              </div>
         
              <v-card-actions>
                <v-rating
                  v-model="p.rating"
                  :max="5"
                  :half-increments="true"
                  background-color="transparent"
                  color="primary"
                ></v-rating>
              </v-card-actions>
              <v-card-actions>
                <v-btn color="primary" text @click="addToCart(p)">
                  Add to Cart
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-fade-transition>
      </template>
    </v-row>
  </div>
</template>
<script>
export default {
  async created() {
    // await this.$store.dispatch('products/fetchProducts')
  },
  // khi dùng api laravel
  // computed: {
  //   getProducts(){
  //     // return this.$store.getters['products/getProducts']
  //   }
  // },
  
  data() {
    return {
      products: null,
      // categories: null,
      search: null,
    }
  },
  computed: {
    filteredProducts() {
      if (!this.products || !this.search) return this.products
      return this.products.filter((p) => {
        const s = this.search.toLowerCase()
        const n = p.name.toLowerCase()
        const price = p.price.toString()
        const r = p.ratings.toString()
        return n.includes(s) || price.includes(s) || r.includes(s)
      })
    },
  },
  methods: {
    addToCart(product) {
      this.$router.push('/products')
      this.$store.commit('cart/AddToCart', product)
    },
    goToProduct(productId) {
      this.$router.push(`/products/${productId}`)
    },
  },
  mounted() {
  // Call the API and get the list of products
  this.$api
    .get('/products')
    .then((response) => {
      this.products = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  },
}

</script>

<style lang=""></style>
