<template>
  <div class="page-layout">
    <AvantiHeader :active-link="activeNav" />
    <div class="page-shell">
      <main class="page-content">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup>
import AvantiHeader from './avanti_header.vue'

defineProps({
  activeNav: {
    type: String,
    default: 'Home'
  }
})
</script>

<style scoped>
.page-layout {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: hsla(200, 27%, 98%, 1);
}

.page-shell {
  width: 1440px;
  height: 889px;
  display: flex;
  flex-direction: column;
  background: hsla(200, 27%, 98%, 1);
  overflow: hidden;
}

.page-content {
  flex: 1;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow: auto;
}

@media (max-width: 900px) {
  .page-shell {
    width: 100%;
    height: auto;
    min-height: 100vh;
  }

  .page-content {
    padding: 16px;
    gap: 16px;
  }
}

:global(body) {
  margin: 0;
  background: #ffffff;
}
</style>
