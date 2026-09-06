<script setup>
import { computed } from 'vue'
import AvantiButton from './avanti_button.vue'

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  items: {
    type: Array,
    default: () => []
  },
  actionText: {
    type: String,
    default: ''
  },
  actionVariant: {
    type: String,
    default: 'outline'
  },
  columns: {
    type: Number,
    default: 2
  }
})

const emit = defineEmits(['action'])

const gridColumns = computed(() => `repeat(${props.columns}, 1fr)`)
</script>

<template>
  <section class="profile-card">
    <div class="card-header">
      <h3>{{ title }}</h3>
      <AvantiButton v-if="actionText" :variant="actionVariant" @click="emit('action')">
        {{ actionText }}
      </AvantiButton>
    </div>

    <div class="info-grid">
      <div v-for="item in items" :key="item.label" class="info-item">
        <label>{{ item.label }}</label>
        <span>{{ item.value }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.profile-card {
  box-sizing: border-box;
  width: 100%;
  height: 131px;
  padding: 24px;
  border-radius: 16px;
  border: 1px solid hsla(240, 6%, 90%, 1);
  background: hsla(0, 0%, 100%, 1);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.card-header :deep(.btn) {
  border: none;
}

h3 {
  font-family: Inter, sans-serif;
  font-size: 15px;
  font-weight: 600;
  font-style: normal;
  line-height: 100%;
  letter-spacing: 0;
  color: hsla(217, 32%, 15%, 1);
  margin: 0;
}

.info-grid {
  display: grid;
  grid-template-columns: v-bind(gridColumns);
  gap: 16px;
  font-size: 13px;
}

.info-item {
  display: flex;
  align-items: baseline;
  gap: 8px;
  justify-content: space-between
}

.info-item label {
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  line-height: 100%;
  letter-spacing: 0;
  color: hsla(240, 4%, 46%, 1);
}

.info-item span {
  font-family: Inter, sans-serif;
  font-size: 13px;
  font-weight: 600;
  font-style: normal;
  line-height: 100%;
  letter-spacing: 0;
  color: hsla(217, 32%, 15%, 1);
}

@media (max-width: 900px) {
  .profile-card {
    display: none;
    width: 100%;
    max-width: 100%;
  }
}
</style>
