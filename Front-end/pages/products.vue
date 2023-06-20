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
              <v-subheader>Loại hàng</v-subheader>
              <nuxt-link
                v-for="(c, index) in categories"
                :key="index"
                :to="`/products/${c.name}`"
                class="text-decoration-none"
              >
                <v-list-item link>
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
  },
  data() {
    return {
      categories: null,
    }
  },
}
</script>
