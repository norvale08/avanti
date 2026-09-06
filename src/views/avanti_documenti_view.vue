<script setup>
import AvantiStepList from '../components/avanti_step_list.vue'
</script>

<template>
  <div class="documenti-layout">
    <div class="documenti-main">
      <h1 class="documenti-title">Documenti</h1>
      <p class="documenti-description">Qui trovi i documenti relativi al tuo profilo.</p>
    </div>
    <aside class="documenti-side">
      <AvantiStepList />
    </aside>
  </div>
</template>

<style scoped>
.documenti-layout {
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 20px;
  width: 100%;
}

.documenti-main {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.documenti-title {
  font-family: Inter, sans-serif;
  font-size: 20px;
  font-weight: 600;
  color: hsla(217, 32%, 15%, 1);
}

.documenti-description {
  font-family: Inter, sans-serif;
  font-size: 14px;
  color: hsla(217, 32%, 15%, 1);
}

.documenti-side {
  min-width: 0;
}

@media (max-width: 900px) {
  .documenti-layout {
    grid-template-columns: 1fr;
  }
}
</style>
