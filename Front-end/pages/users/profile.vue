<template>

<div>
    <DesktopNav/>
        <div class="profile">
    <h1 class="profile-title">Profile</h1>
        </div>
    <Footer/>
    <ScrollTop />
  </div>
</template>


<script>
import { mapGetters } from 'vuex';
import {GET_USER} from '@/store/users' 
export default {
  // async created() {
  //   await this.$store.dispatch('fetchUsers')
  // },
  // computed: {
  //   ...mapGetters({
  //     user: 'product/getUser',
  //   }),
  // },
  //  computed: {
  //   ...mapGetters('users', ['getUsers']),
  // },
  // created() {
  //   this.fetchUsers();
  // },
  // methods: {
  //   async fetchUsers() {
  //     await this.$store.dispatch('users/fetchUsers');
  //   },
  // },
  computed: {
        ...mapGetters({
      user: "getUsers",
    }),
  },
   async created() {
    await this.$store.dispatch(`${GET_USER}`)
    console.log(this.user);
  },
}
</script>
<style scoped>
.profile {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
}

.profile-title {
  font-size: 24px;
  margin-bottom: 20px;
}

.profile-info {
  display: flex;
  flex-direction: column;
}

.profile-item {
  margin-bottom: 10px;
}

.profile-label {
  font-weight: bold;
  margin-right: 5px;
}

.profile-value {
  font-style: italic;
}
</style>