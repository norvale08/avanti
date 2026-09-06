<template>
  <div class="page-layout">
    <AvantiHeader />
    <div class="page-shell">
      <main class="page-content">
        <slot />
      </main>
    </div>
    <AvantiMobileNav class="mobile-nav-bar" />
    <AvantiChatFab class="mobile-chat-fab" />
  </div>
</template>

<script setup>
import AvantiHeader from './avanti_header.vue'
import AvantiMobileNav from './avanti_mobile_nav.vue'
import AvantiChatFab from './avanti_chat_fab.vue'
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
  width: 100%;
  max-width: 1440px;
  min-height: 100vh;
  height: auto;
  display: flex;
  flex-direction: column;
  background: hsla(200, 27%, 98%, 1);
  overflow-x: hidden;
  overflow-y: hidden;
}

.page-content {
  flex: 1;
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  overflow-x: hidden;
  overflow-y: hidden;
}

@media (max-width: 900px) {
  .page-shell {
    width: 100%;
    height: auto;
    min-height: 100vh;
    overflow-y: auto;
  }

  .page-content {
    padding: 16px;
    gap: 16px;
    overflow-y: auto;
  }
}

:global(html),
:global(body) {
  margin: 0;
  background: #ffffff;
  overflow-x: hidden;
  overflow-y: hidden;
}

@media (max-width: 900px) {
  :global(html),
  :global(body) {
    overflow-y: auto;
  }

  .page-content {
    padding-bottom: 90px;
  }
}

.mobile-nav-bar,
.mobile-chat-fab {
  display: none;
}

@media (max-width: 900px) {
  .mobile-nav-bar,
  .mobile-chat-fab {
    display: flex;
  }
}
</style>
