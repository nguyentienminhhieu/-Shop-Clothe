<template lang="">
 <!-- <v-card rounded="lg" class="pa-md-10 pa-5 text-center" color="primary" dark>
    <h2 class="text-md-h3">Newsletter</h2>
    <p class="text-md-h6 mt-5">Subscrie to receive discounts & more!</p>
    <br />
    <v-sheet color="transparent" class="mx-auto" max-width="400">
      <v-text-field
        v-model="email"
        color="white"
        label="Email"
        outlined
      ></v-text-field>
      <v-btn @click="submit" outlined min-height="50" block>Subscribe</v-btn>
    </v-sheet>
  </v-card> -->

  <v-card rounded="lg" class="pa-md-10 pa-5 text-center" color="primary" dark>
    <h2 class="text-md-h3">{{$t('Newsletter')}}</h2>
    <p class="text-md-h6 mt-5">{{$t('TitleSubscribe')}}</p>
    <br />
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6" lg="4">
          <v-sheet color="transparent">
            <v-text-field v-model="email" label="Email" outlined></v-text-field>
            <v-btn @click="submit" outlined min-height="50" block>{{$t('btnSubscribe')}}</v-btn>
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>
<script>
export default {
    data() {
        return {
             email: null,
        }
    },
    methods: {
        async submit() {
          await this.$swal({
        title: "Thank You For Subscribing.",
        icon: "success",
        allowEscapeKey: false,
        allowOutsideClick: false,
        timer: 4000,
        timerProgressBar: true,
        text: "You will be notified when we have a deal or items on sale.",
        showConfirmButton: false,
      });
    }, 
    }   
}
</script>
<style lang="">
    
</style>