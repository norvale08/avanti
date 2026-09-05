<script setup>
defineProps({
  avatar: {
    type: String,
    default: '/avatar.png'
  },
  name: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: ''
  },
  breadcrumbs: {
    type: Array,
    default: () => []
  }
})
</script>

<template>
  <section class="profile-bar">
    <div class="profile-info">
      <img class="avatar" :src="avatar" :alt="name" />
      <div>
        <div class="profile-name">{{ name }}</div>
        <div class="profile-email">{{ email }}</div>
      </div>
    </div>

    <nav class="breadcrumb" aria-label="Breadcrumb">
      <template v-for="(item, index) in breadcrumbs" :key="index">
        <span :class="{ current: item.current }">{{ item.label }}</span>
        <span v-if="index < breadcrumbs.length - 1" class="sep">/</span>
      </template>
    </nav>
  </section>
</template>

<style scoped>
.profile-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  border-radius: 16px;
  padding: 18px 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.profile-info {
  display: flex;
  align-items: center;
  gap: 12px;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.profile-name {
  font-size: 14px;
  font-weight: 700;
}

.profile-email {
  font-size: 11px;
  color: #666666;
}

.breadcrumb {
  font-size: 12px;
  color: #888888;
}

.breadcrumb .sep {
  margin: 0 4px;
}

.breadcrumb .current {
  color: #00808c;
}

@media (max-width: 640px) {
  .profile-bar {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
}
</style>
