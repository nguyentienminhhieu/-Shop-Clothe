<template>

<div>
    <DesktopNav/>
        <div class="profile">
          <h1 class="profile-title">Profile</h1>
        </div>

    <div class="profile-info" v-if="user !== null">
      <div class="info-item">
        <label class="info-label">ID:</label>
        <div class="info-value">{{ user.id }}</div>
      </div>
      <div class="info-item">
        <label class="info-label">User Name:</label>
        <div class="info-value">{{ user.username }}</div>
      </div>
      <div class="info-item">
        <label class="info-label">Email:</label>
        <div class="info-value">{{ user.email }}</div>
      </div>
    </div>

    <Footer/>
    <ScrollTop />
  </div>
</template>


<script>
import  Cookies  from "@/services/cookies.service.js";
export default {
  data() {
      return {
        user: null,
      } 
  },
  mounted() {
    let id = Cookies.getUser();
    this.$axios
      .get(`http://127.0.0.1:8000/api/users/search/${id}`)
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
  margin-left: 200px;
}

.info-item {
  display: flex;
  margin-bottom: 10px;
}

.info-label {
  font-weight: bold;
  margin-right: 5px;
}

.info-value {
  font-style: italic;
}
</style>
