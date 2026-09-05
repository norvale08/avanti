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
      <div class="profile-meta">
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
  width: 100%;
  height: 60px;
  background: hsla(200, 27%, 98%, 1);
  border: none;
  padding: 10px 0px;
  box-sizing: border-box;
}

.profile-info {
  display: flex;
  align-items: center;
  gap: 12px;
  height: 40px;
  border: none;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.profile-meta {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 32px;
}

.profile-name {
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 600;
  font-style: normal;
  line-height: 100%;
  letter-spacing: 0;
  color: hsla(217, 32%, 15%, 1);
}

.profile-email {
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  line-height: 100%;
  letter-spacing: 0;
  color: hsla(240, 4%, 46%, 1);
}

.breadcrumb {
  display: flex;
  align-items: center;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: 100%;
  letter-spacing: 0;
  color: hsla(240, 4%, 46%, 1);
}

.breadcrumb .sep {
  margin: 0 4px;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 500;
  font-style: normal;
  line-height: 100%;
  letter-spacing: 0;
  color: hsla(240, 5%, 65%, 1);
}

.breadcrumb .current {
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 600;
  font-style: normal;
  line-height: 100%;
  letter-spacing: 0;
  color: hsla(217, 32%, 15%, 1);
}

@media (max-width: 640px) {
  .profile-bar {
    flex-direction: column;
    align-items: flex-start;
    height: auto;
    gap: 10px;
  }
}
</style>
