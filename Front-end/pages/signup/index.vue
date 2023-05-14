<template>
   <v-app id="inspire">
      <v-main>
         <v-container fluid fill-height>
            <v-layout align-center justify-center>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar dark color="primary">
                        <v-toolbar-title>Signup form</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                        <v-form>
                            <v-text-field
                              name="firstname"
                              label="Firstname"
                              type="text"
                              v-model="firstName"
                           ></v-text-field>
                           <v-text-field
                              name="lastname"
                              label="Lastname"
                              type="text"
                              v-model="lastName"
                           ></v-text-field>
                           <v-text-field
                              name="email"
                              label="Email"
                              type="text"
                              v-model="email"
                           ></v-text-field>
                           <v-text-field
                              id="password"
                              name="password"
                              label="Password"
                              type="password"
                              v-model="password"
                           ></v-text-field>
                           <v-text-field
                              id="re-password"
                              name="re-password"
                              label="Re-password"
                              type="password"
                              v-model="rePassword"
                           ></v-text-field>
                        </v-form>
                     </v-card-text>
                     <v-card-actions>
                          <p>If you have account. Click <nuxt-link to="/login">Login</nuxt-link> right here</p>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" @click="signupHandler">Signup</v-btn>
                     </v-card-actions>
                  </v-card>
               </v-flex>
            </v-layout>
         </v-container>
      </v-main>
   </v-app>
</template>

<script>

export default {
   name: 'Signup',
   data() {
      return {
         firstName: null,
         lastName: null,
         email: null,
         password: null,
         rePassword: null,
      }
   },
   methods: {
      async signupHandler() {
         const data = {
            'first_name': this.firstName,
            'last_name': this.lastName,
            'email': this.email,
            'password': this.password,
            're-password': this.rePassword
         }
         console.log(data);
         try {
             const res = await this.$axios.post('/register', data)
             console.log(res)
         }
         catch(e) {
             console.log(e.message)
         }
      }
   }
};
</script>

<style></style>