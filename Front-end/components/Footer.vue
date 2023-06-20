<template lang="">
      <v-card
    tile
    flat
    rounded="lg"
    class="pa-md-10 pa-5 text-center"
    color="surface"
  >
    <hr>
    <br>
    <h2 class="text-md-h6 font-weight-bold">2H-Shop</h2>
    <p class="text-md-body-2 mt-5">Website Thương mại điện tử Thời trang</p>
    <div class="text-center">
      <v-btn
        color="surface"
        class="mr-2"
        v-for="(b, i) in sm"
        :key="`sm${i}`"
        fab
        depressed
      >
        <v-icon>{{ b.icon }}</v-icon>
      </v-btn>
    </div>
    <br />
  </v-card>
</template>
<script>
export default {
    data() {
        return {
            sm: [
        { icon: "mdi-facebook", link: "https://facebook.com" },
        { icon: "mdi-twitter", link: "https://twitter.com" },
        { icon: "mdi-instagram", link: "https://instagram.com" },
        { icon: "mdi-youtube", link: "https://youtube.com" },
      ],
        }
    },
}
</script>
<style lang="">
    
</style>
