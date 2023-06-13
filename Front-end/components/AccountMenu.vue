<template>
    <div class="account-menu" :class="{ dark: darkMode }">
      <!-- <v-btn @click="register()" icon>
        Đăng ký
      </v-btn>
      <br> -->
      <v-btn @click="cookieExists ? profile() : register()" class="menu-link" text>
         {{ cookieExists ? 'Thông tin tài khoản' : 'Đăng ký' }}
      </v-btn>
      <br>

      <v-btn @click="cookieExists ? logOut() : logIn()" class="menu-link" text>
        {{ cookieExists ? 'Đăng xuất' : 'Đăng nhập' }}
      </v-btn>

    </div>
</template>


<script>
import {mapGetters} from 'vuex'
import {GET_USER} from '@/store/users'
import { mapActions } from 'vuex';
import  Cookies  from "@/services/cookies.service.js";

export default {
    data() {
        return {
            cookieExists: false,
        };
        
    },
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
      // console.log(this.user);
      if (Cookies.getToken() != null) {
            this.cookieExists = true;
      }
    },
    methods: {
      ...mapActions(['logout']),
      logOut(){
        // console.log('Token đang đăng nhập',Cookies.getToken());
        this.logout();
        this.$router.push('/users/login');
      },
      logIn(){
        console.log("User chưa đăng nhập");
        this.$router.push('/users/login');
      },
      register() {
        console.log("Đăng ký");
        this.$router.push('/users/register');

      },
      profile() {
        this.$router.push('/users/profile');
       
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
  background-color: transparent;
  border: none;
  outline: none;
}

.menu-link:hover {
  background-color: #f0f0f0;
}

.account-menu.dark {
  /* CSS cho chế độ tối */
  background-color: #333;
  color: #fff;
  border-color: #666;
}

.menu-link.dark {
  /* CSS cho chế độ tối */
  color: #fff;
}

.menu-link.dark:hover {
  /* CSS cho chế độ tối khi hover */
  background-color: #444;
  color: #000;
}
</style>
