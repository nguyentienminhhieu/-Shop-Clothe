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
      <v-toolbar-title
        @click="$router.push('/')"
        class="logo text-md-h5 font-weight-bold pointhttp://localhost:3000/products/3er"
        >FreeShop</v-toolbar-title
      >
      <v-spacer />
      <ul class="nav-links">
            <li>
                <nuxt-link to="/">Home</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/products/Shoes">Shoes</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/products/Handbags">Handbags</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/products/Perfumes">Perfumes</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/products/Cosmetics">Cosmetics</nuxt-link>
            </li>
        </ul>   
      <v-spacer />
      <v-btn nuxt to="/products" class="mr-md-2" icon>
        <v-icon size="20">mdi-store-outline</v-icon>
      </v-btn>
      <v-badge
        v-if="$store.state.cart.cart.length > 0"
        overlap
        :content="`${$store.state.cart.cart.length}`"
      >
        <v-btn nuxt to="/cart" icon>
          <v-icon size="20">mdi-cart-outline</v-icon>
        </v-btn>
      </v-badge>
      <v-btn v-else nuxt to="/cart" icon>
        <v-icon size="20">mdi-cart-outline</v-icon>
      </v-btn>
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
 ul {
        display: flex;
        justify-content: center;
        list-style: none;
        margin: 0;
        padding: 0;
    }
    ul li {
      margin: 0 15px;
    }
    ul li a {
        color: #000 !important;
        font-size: 14px;
        margin: 0 20px;
        text-decoration: none;
    }
    ul li .nuxt-link-exact-active {
        text-decoration: underline;
    }

  @media (max-width: 400px) {
  .el {
    padding: 0 10px;
  }

  .nav-links {
    /* flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10px; */

    display: none;
  }

  .nav-links li {
    margin: 5px 0;
  }
}
 @media (max-width: 1124px) {
  .el {
    padding: 0 10px;
  }

  .nav-links {
    /* flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10px; */

    display: none;
  }

  .nav-links li {
    margin: 5px 0;
  }
}
</style>
