<template>

<div>
    <DesktopNav/>
        <div class="profile">
    <h1 class="profile-title">Profile</h1>
    <div class="profile-info">
      <div class="profile-item">
        <span class="profile-label">Name:</span>
        <!-- <span class="profile-value">{{ customer.name }}</span> -->
      </div>
      <div class="profile-item">
        <span class="profile-label">Email:</span>
        <!-- <span class="profile-value">{{ customer.email }}</span> -->
      </div>
      <!-- Các thông tin khác của khách hàng -->
    </div>
        </div>
    <Footer/>
    <ScrollTop />
  </div>
</template>


<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      user: 'product/getUser',
    }),
  },
};
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