<template>
  <div>
    <DesktopNavLogin />
    <v-app id="inspire">
      <v-main>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card class="elevation-12">
                <v-toolbar dark color="primary">
                  <v-toolbar-title>Đăng nhập</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field
                      name="email"
                      label="Email"
                      type="text"
                      v-model="email"
                      @keydown.enter.prevent="loginHandler"
                    ></v-text-field>
                    <v-text-field
                      id="password"
                      name="password"
                      label="Password"
                      type="password"
                      v-model="password"
                      @keydown.enter.prevent="loginHandler"
                    ></v-text-field>

                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <p>
                    Bạn chưa có tài khoản? 
                    <nuxt-link to="/users/register">Đăng ký</nuxt-link>
                  </p>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" @click="loginHandler">Đăng nhập</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import  Cookies  from "@/services/cookies.service.js";
export default {
  data() {
      return {
          email: '',
          password: '',
          errors: {},
      }
  },
  methods: {
      loginHandler() {
          this.$axios
          .post('http://127.0.0.1:8000/api/auth/login',
          {
              email: this.email,
              password: this.password,
          })
          .then((response) => {
              console.log(response);
              if(response.data.result == true){
                alert(response.data.message);
                Cookies.saveToken(response.data.access_token)
                Cookies.saveUser(response.data.user.id);
                Cookies.saveData('authentication', true)

                if (response.data.user.role == 1) {
                  this.$router.push(`../manager/`);
                } else {
                  this.$router.push(`../`);
                }
              } else {
                  alert(response.data.message);
              }
          })
          .catch((error) => {
              console.log(error);
          });   
      }
  }
}
</script>
