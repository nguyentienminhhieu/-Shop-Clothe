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
        > {{$t('Logo')}} </v-toolbar-title
      >
      <v-spacer />
        <ul class="nav-links">
            <li>
                <nuxt-link to="/">Trang chủ</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/products/Shoes">Giày dép</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/products/Handbags">Túi sách</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/products/Clothes">Quần áo</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/products/Perfume">Nước hoa</nuxt-link>
            </li>
            <li>
                <nuxt-link to="/products/Watch">Đồng hồ</nuxt-link>
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

      <div class="account-menu-container" >
        <!-- nuxt to="/users/login" -->
        <v-btn @click="toggleAccountMenu" icon >
          <v-icon size="20">mdi-account-circle</v-icon>
        </v-btn>
        <account-menu v-if="showAccountMenu" @close="hideAccountMenu"/>
      </div>
      <v-btn @click="toggleTheme" icon>
        <v-icon size="20">mdi-brightness-7</v-icon>
      </v-btn>
       <div>
    <select v-model="locale" @change="changeLocale">
      <option value="en">English</option>
      <option value="vi">Tiếng Việt</option>
      <option value="ja">日本語</option>
    </select>    
    </div>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showAccountMenu: false,
      locale: this.$i18n.locale,
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
    changeLocale() {
      this.$i18n.locale = this.locale;
      this.$router.push(this.switchLocalePath(this.locale))
    },
    // logOut(){
    //   this.$axios.post('http://127.0.0.1:8000/api/users/logout')
    //   .then(response => {
    //     localStorage.removeItem('id_session');
    //     // Xóa thông tin đăng nhập khác khỏi local storage nếu có
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
    // }
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
