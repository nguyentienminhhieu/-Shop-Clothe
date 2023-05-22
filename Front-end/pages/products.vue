<template lang="">
  <div>
    <DesktopNav />
    <v-container>
      <v-row dense>
        <v-col md="2">
          <div style="position: sticky; top: 92px">
            <v-list
              v-if="$vuetify.breakpoint.mdAndUp"
              color="transparent"
              subheader
            >
              <v-subheader>Categories</v-subheader>
              <nuxt-link v-for="(c, index) in categories" :key="index" :to="`/products/${c.name}`" class="text-decoration-none">
              <v-list-item
                link
              >
                <v-list-item-avatar>
                  <v-img :src="c.image"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ c.name }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              </nuxt-link>
            </v-list>
          </div>
        </v-col>
        <v-col md="10">
         <nuxt-child />
        </v-col>
      </v-row>
    </v-container>
    <br /><br />
    <Footer />
    <ScrollTop />
  </div>
</template>
<script>
export default {
  async created() {
    this.categories = await this.$content('category').fetch()
    this.products = await this.$content('products').fetch()
  },
  data() {
    return {
      products: null,
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
        const sprice = p.salePrice?.toString() || ''
        const r = p.ratings.toString()
        return (
          n.includes(s) ||
          price.includes(s) ||
          sprice.includes(s) ||
          r.includes(s)
        )
      })
    },
  },

  // axios trong plugins
  // async asyncData ({ $axios }) {
  //   const { data } = await $axios.get('/posts')
  //   return { posts: data }
  // }
}
</script>
<style >
   /* .active-link {
  background-color: red;
  border-radius: 5px;
} */

</style>
