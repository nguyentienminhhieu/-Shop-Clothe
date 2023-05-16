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
                  <v-toolbar-title>Login form</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field
                      name="email"
                      label="Email"
                      type="text"
                      v-model="email"
                      @blur="$v.email.$touch()"
                      :error-messages="errors.email"
                    ></v-text-field>
                    <div v-if="$v.email.$error" class="form-error">
                      <span v-if="!$v.email.required"
                        >Yêu cầu nhập trường dữ liệu này</span
                      >
                      <span v-if="!$v.email.email"
                        >Yêu cầu nhập đúng email</span
                      >
                    </div>
                    <v-text-field
                      id="password"
                      name="password"
                      label="Password"
                      type="password"
                      v-model="password"
                      @blur="$v.password.$touch()"
                      :error-messages="errors.password"
                    ></v-text-field>
                    <div v-if="$v.password.$error" class="form-error">
                      <span v-if="!$v.password.required"
                        >Yêu cầu nhập trường dữ liệu này</span
                      >
                    </div>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <p>
                    If you dont have account. Click
                    <nuxt-link to="/signup">Signup</nuxt-link> right here
                  </p>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" @click="loginHandler">Login</v-btn>
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
import { required, email } from 'vuelidate/lib/validators'

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      errors: {},
    }
  },
  methods: {
    loginHandler() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        // Dữ liệu hợp lệ, thực hiện xử lý đăng nhập
        const data = { email: this.email, password: this.password }
        console.log(data)
        // try{
        //    const response = await this.$auth.loginWith('local', { data: data})
        //    console.log(response)
        //    this.$auth.$storage.setUniversal('email', response.data.email)
        //    await this.$auth.setUserToken(response.data.access_token, response.data.refresh_token)
        // } catch(e) {
        //    console.log(e.message)
        // }
      } else {
        // Dữ liệu không hợp lệ, hiển thị thông báo lỗi
        alert('Vui lòng nhập đủ thông tin!')
      }
    },
  },
  validations: {
    email: { required, email },
    password: { required },
  },
  //      data() {
  //     return {
  //       username: '',
  //       password: ''
  //     }
  //   },
  //   methods: {
  //     async login() {
  //       try {
  //         const { data } = await this.$axios.post('/login', {
  //           username: this.username,
  //           password: this.password
  //         })
  //         console.log(data)
  //       } catch (error) {
  //         console.error(error)
  //       }
  //     }
  //   }
}
</script>

<style>
.form-error {
  color: red;
}
</style>
