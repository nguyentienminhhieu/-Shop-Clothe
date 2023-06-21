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
                  <v-toolbar-title>Đăng ký</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field
                      name="username"
                      label="Tên tài khoản"
                      type="text"
                      v-model="username"
                      @blur="$v.username.$touch()"
                      @keydown.enter.prevent="signupHandler"
                    ></v-text-field>

                    <div v-if="$v.username.$error" class="form-error">
                      <span v-if="!$v.username.required"
                        >Yêu cầu nhập tài khoản</span
                      >
                    </div>

                    <v-text-field
                      name="email"
                      label="Email"
                      type="text"
                      v-model="email"
                      @blur="$v.email.$touch()"
                      @keydown.enter.prevent="signupHandler"
                    ></v-text-field>

                    <div v-if="$v.email.$error" class="form-error">
                      <span v-if="!$v.email.required">Yêu cầu nhập Email</span>
                      <span v-if="!$v.email.email"
                        >Địa chỉ email không hợp lệ
                      </span>
                    </div>

                    <v-text-field
                      id="password"
                      name="password"
                      label="Mật khẩu"
                      type="password"
                      v-model="password"
                      @blur="$v.password.$touch()"
                      @keydown.enter.prevent="signupHandler"
                    ></v-text-field>
                    <div v-if="$v.password.$error" class="form-error">
                      <span v-if="!$v.password.required"
                        >Yêu cầu nhập Password</span
                      >
                      <span v-if="!$v.password.minLength">
                        Password cần ít nhất
                        {{ $v.password.$params.minLength.min }} kí tự
                      </span>
                      <span v-if="!$v.password.maxLength">
                        Password cần ít nhất{{
                          $v.password.$params.maxLength.max
                        }}kí tự
                      </span>
                    </div>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <p>
                    Bạn đã có tài khoản?<nuxt-link to="/users/login">
                      Đăng nhập</nuxt-link
                    >
                  </p>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" @click="signupHandler">Đăng ký</v-btn>
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
import { required, email, minLength, maxLength } from 'vuelidate/lib/validators'
import { mapActions } from 'vuex'
export default {
  name: 'Signup',
  data() {
    return {
      email: null,
      password: null,
      username: null,
    }
  },
  validations: {
    username: {
      required,
    },
    email: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(15),
    },
  },

  methods: {
    signupHandler() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$axios
          .post('http://127.0.0.1:8000/api/auth/register', {
            username: this.username,
            email: this.email,
            password: this.password,
          })
          .then((response) => {
            if (response.data == true) {
              alert('Đăng ký thành công! Vui lòng kiểm tra email đăng ký để xác thực tài khoản')
              this.$router.push(`/users/login`)
            } else {
              alert('Đăng ký thất bại. Vui lòng thử lại')
              this.$router.push(`/users/register`)
            }
          })
          .catch((error) => {
            console.log(error)
          })
      } else {
        alert('Vui lòng nhập đầy đủ thông tin.')
        console.log('Vui lòng nhập đầy đủ thông tin.')
      }
    },
  },
}
</script>

<style>
.form-error {
  color: red;
}
</style>
