<template>
    <div class="account-menu" :class="{ dark: darkMode }">
        <p class="menu-link" v-if="user">{{user.department}}</p>
        <p class="menu-link" v-else>Tài khoản</p>
        
 
        <nuxt-link v-if="user" to="/users/profile" class="menu-link">Thông tin tài khoản</nuxt-link>
        <nuxt-link v-if="isLoginPage" to="/users/register" class="menu-link">Đăng ký</nuxt-link>
        <nuxt-link v-if="user && isAuthentication" @click="logoutHandler" class="menu-link">Đăng xuất</nuxt-link>
        <nuxt-link v-if="!user && !isLoginPage" to="/users/login" class="menu-link">Đăng nhập</nuxt-link>

    </div>
</template>


<script>
import {mapGetters} from 'vuex'
import {GET_USER} from '@/store/users'
import { mapActions } from 'vuex';
// import {logout} from '@/store/login'

export default {
    computed: {
         ...mapGetters({
      user: "getUser",
    }),
        user() {
            return this.getUser
        },
        darkMode() {
            return this.$vuetify.theme.dark;
        },
        isLoginPage() {
            return this.$route.path === '/users/login';
        },
    },    
    mounted() {
      this.$store.dispatch(GET_USER)
      console.log(this.user);
    },
    methods: {
    ...mapActions(['logout']),
    logoutHandler() {
    // this.$store.dispatch('logout'); // Gọi action logout từ Vuex store
     this.logout();
   }
    },
}
</script>


<style scoped>
.account-menu {
  position: absolute;
  top: 100%;
  right: 5%;
  background-color: #fff;
  padding: 10px;
  z-index: 100;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.menu-link {
  display: block;
  text-decoration: none;
  color: #000;
  padding: 10px 20px;
  margin-bottom: 10px;
  cursor: pointer;
}

.menu-link:hover {
  background-color: #f0f0f0;
}

.account-menu.dark {
  /* CSS cho chế độ tối */
  background-color: #333;
  color: #fff ;
  border-color: #666;
}


.menu-link.dark {
  /* CSS cho chế độ tối */
  color: #fff ;

}

.menu-link.dark:hover {
  /* CSS cho chế độ tối khi hover */
  background-color: #444;
  color: #000;

}
</style>