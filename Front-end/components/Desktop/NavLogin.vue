<template lang="">
  <div>
    <v-app-bar
      color="surface"
      height="80"
      class="el"
      :style="{
        padding: $vuetify.breakpoint.mdAndUp ? '0px 100px' : '',
      }"
      app
    >
        <!-- @click="$router.push('/')" -->
      <v-toolbar-title
        class="text-md-h5 font-weight-bold pointhttp://localhost:3000/products/3er"
        >FreeShop</v-toolbar-title
      >
      <v-spacer />
      <v-divider vertical class="mx-md-5 mx-2" />
      <v-btn nuxt to="/users/login" icon >
        <v-icon size="20">mdi-account-circle</v-icon>
      </v-btn>
      <v-btn @click="toggleTheme" icon>
        <v-icon size="20">mdi-brightness-7</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  methods: {
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
  },
}
</script>
<style>
 
</style>
