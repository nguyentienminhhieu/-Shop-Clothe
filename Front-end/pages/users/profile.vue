<template>

<div>
    <DesktopNav/>
        <div class="profile">
          <h1 class="profile-title">Profile</h1>
        </div>

        <table class="custom-table">
          <thead>
              <tr>
                  <!-- <th>ID</th> -->
                  <th>User Name</th>
                  <th>Email</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="item in user" :key="item.id">
                  <!-- <td>{{ item.id }}</td> -->
                  <td>{{ item.username }}</td>
                  <td>{{ item.email }}</td>
              </tr>
          </tbody>
      </table>

    <Footer/>
    <ScrollTop />
  </div>
</template>


<script>
import { mapGetters } from 'vuex';
import {GET_USER} from '@/store/users'
import  Cookies  from "@/services/cookies.service.js";
export default {
  data() {
      return {
        user: null,
      } 
  },
  methods: {
    async fetchUsers() {
      await this.$store.dispatch('users/fetchUsers');
    },
  },
  mounted() {
    // let id = Cookies.getUser();
    this.$axios
      .get(`http://127.0.0.1:8000/api/users/search/2`)
      .then((response) => {
          console.log(response);
          this.user = response.data;
      })
      .catch((error) => {
          console.log(error);
      });
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
