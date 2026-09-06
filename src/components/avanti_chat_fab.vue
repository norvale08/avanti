<script setup>
defineProps({
  avatar: {
    type: String,
    default: '/avatar-image.png'
  },
  badge: {
    type: [String, Number],
    default: 2
  }
})
</script>

<template>
  <button class="chat-fab" aria-label="Assistenza">
    <img class="chat-avatar" :src="avatar" alt="Support" />
    <span class="chat-badge" v-if="badge">{{ badge }}</span>
  </button>
</template>

<style scoped>
.chat-fab {
  position: fixed;
  bottom: 88px;
  right: 16px;
  width: 93px;
  height: 93px;
  border-radius: 50%;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 101;
}

.chat-avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

.chat-badge {
  position: absolute;
  top: 3.56px;
  right: 6.56px;
  box-sizing: border-box;
  width: 28.44444465637207px;
  height: 28.44444465637207px;
  border-radius: 17.78px;
  background: hsla(0, 93%, 31%, 1);
  color: hsla(0, 0%, 100%, 1);
  font-family: Inter, sans-serif;
  font-size: 11px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
