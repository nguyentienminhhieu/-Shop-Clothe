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
        class="text-md-h5 font-weight-bold pointhttp://localhost:3000/products/3er"  @click="$router.push('/')"
        >2H-Shop</v-toolbar-title
      >
      <v-spacer />
      <v-divider vertical class="mx-md-5 mx-2" />
      <div class="account-menu-container" >
        <v-btn @click="toggleAccountMenu" icon >
          <v-icon size="20">mdi-account-circle</v-icon>
        </v-btn>
        <account-menu v-if="showAccountMenu" @close="hideAccountMenu"/>
      </div>
      <v-btn @click="toggleTheme" icon>
        <v-icon size="20">mdi-brightness-7</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>
<script>
export default {
data() {
    return {
      showAccountMenu: false,
    };
  },
   mounted() {
    // Lắng nghe sự kiện click trên toàn bộ trang
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeDestroy() {
    // Gỡ bỏ lắng nghe sự kiện click trước khi component bị hủy
    document.removeEventListener('click', this.handleClickOutside);
  },
  methods: {
    toggleAccountMenu() {
      this.showAccountMenu = !this.showAccountMenu;
    },
    toggleTheme() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
    hideAccountMenu() {
      this.showAccountMenu = false;
    },
    handleClickOutside(event) {
      const accountMenuContainer = this.$el.querySelector('.account-menu-container');
      if (accountMenuContainer && !accountMenuContainer.contains(event.target)) {
        this.hideAccountMenu();
      }
    },
  },
}
</script>
<style>
 
</style>
