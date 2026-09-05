<script setup>
import { ref } from 'vue'
import HomeView from './views/HomeView.vue'
import ProfileView from './views/ProfileView.vue'

const currentTab = ref('home')
</script>

<template>
  <div class="app-wrapper">
    <div class="view-switcher">
      <button :class="{ active: currentTab === 'home' }" @click="currentTab = 'home'">Home View</button>
      <button :class="{ active: currentTab === 'profile' }" @click="currentTab = 'profile'">Profile View</button>
    </div>
    <HomeView v-if="currentTab === 'home'" />
    <ProfileView v-else />
  </div>
</template>

<style scoped>
.app-wrapper {
  padding-top: 10px;
}
.view-switcher {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 20px;
}
.view-switcher button {
  padding: 8px 16px;
  border-radius: 6px;
  border: 1px solid #00808c;
  background: white;
  color: #00808c;
  font-weight: 600;
  cursor: pointer;
}
.view-switcher button.active {
  background: #00808c;
  color: white;
}
</style>