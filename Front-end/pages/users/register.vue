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
                                  label="Username"
                                  type="text"
                                  v-model="username"
                                  @blur="$v.username.$touch()"
                               ></v-text-field>
                               <div v-if="$v.username.$error" class="form-error">
                                <span v-if="!$v.username.required">Yêu cầu nhập tài khoản</span>
                               </div>
                               <v-text-field
                                  name="email"
                                  label="Email"
                                  type="text"
                                  v-model="email"
                                  @blur="$v.email.$touch()"
    
                               ></v-text-field>
                               <div v-if="$v.email.$error" class="form-error">
                               <span v-if="!$v.email.required">Yêu cầu nhập Email</span>
                               <span v-if="!$v.email.email">Địa chỉ email không hợp lệ </span>
                               </div>
                               <v-text-field
                                  id="password"
                                  name="password"
                                  label="Password"
                                  type="password"
                                  v-model="password"
                                  @blur="$v.password.$touch()"
                                  
                               ></v-text-field>
                               <div v-if="$v.password.$error" class="form-error">
                                  <span v-if="!$v.password.required">Yêu cầu nhập Password</span>
                                  <span v-if="!$v.password.minLength">
                                   Password cần ít nhất {{ $v.password.$params.minLength.min }}  kí tự
                                  </span>
                                  <span v-if="!$v.password.maxLength">
                                  Password cần ít nhất{{ $v.password.$params.maxLength.max }}kí tự
                                  </span>
                               </div>
                               <!-- <v-text-field
                                  id="re-password"
                                  name="re-password"
                                  label="Re-password"
                                  type="password"
                                  v-model="confirmPassword"
                                  @blur="$v.confirmPassword.$touch()"
    
                               ></v-text-field>
                               <div v-if="$v.confirmPassword.$error" class="form-error">
                                  <span v-if="!$v.confirmPassword.required">Yêu cầu nhập lại Password</span>
                                  <span v-if="!$v.confirmPassword.sameAs">
                                  Password không chùng nhau 
                                  </span>
                               </div> -->
                            </v-form>
                         </v-card-text>
                         <v-card-actions>
                              <p>Bạn đã có tài khoản?<nuxt-link to="/users/login"> Đăng nhập</nuxt-link></p>
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
    import { required, email, minLength, maxLength, sameAs } from 'vuelidate/lib/validators';
    
    export default {
       name: 'Signup',
       data() {
          return {
             username: null,
             email: null,
             password: null
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
             this.$v.$touch();
          if (!this.$v.$invalid) {
            // Thực hiện đăng nhập
            const formData = {
                username: this.username,
                email: this.email,
                password: this.password,
            }
            // eslint-disable-next-line no-console
            console.log(formData)
             // try {
             //     const res = await this.$axios.post('/users', data)
             //     console.log(res)
             // }
             // catch(e) {
             //     console.log(e.message)
             // }
          } else {
            // eslint-disable-next-line no-console
            alert('Vui lòng nhập đầy đủ thông tin.')
            console.log('Vui lòng nhập đầy đủ thông tin.');
          } 
         }
       }
       
    //    data() {
    //     return {
    //       username: '',
    //       password: '',
    //       email: ''
    //     }
    //   },
    //   methods: {
    //     async register() {
    //       try {
    //         const { data } = await this.$axios.post('/register', {
    //           username: this.username,
    //           password: this.password,
    //           email: this.email
    //         })
    //         console.log(data)
    //       } catch (error) {
    //         console.error(error)
    //       }
    //     }
    //   }
    };
    </script>
    
    <style>
    .form-error {
       color: red;
    }
    </style>