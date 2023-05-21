<template lang="">
  <div>
    <v-row>
      <template v-for="(p, i) in filteredProducts">
        <v-fade-transition :key="`product${p.id}-${i}`">
          <v-col cols="12" md="6">
            <v-card
              nuxt
              :to="`/products/${p.id}`"
              color="surface"
              class="el ma-2 mb-5 mr-5"
            >
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
            </v-card>
          </v-col>
        </v-fade-transition>
      </template>
    </v-row>
  </div>
</template>
<script>
export default {
  // async created() {
  //   this.categories = await this.$content('category').fetch()
  //   this.products = await this.$content('products').fetch()
  // },
  data() {
    return {
      products: [],
      categories: null,
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
        return (
          n.includes(s) ||
          price.includes(s) ||
          r.includes(s)
        )
      })
    },
  },
  mounted() {
  // Call the API and get the list of products
  this.$axios
    .get('http://127.0.0.1:8000/api/products')
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
