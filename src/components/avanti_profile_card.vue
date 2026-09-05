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
  background: #ffffff;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

h3 {
  font-size: 16px;
  font-weight: 700;
  margin: 0;
}

.info-grid {
  display: grid;
  grid-template-columns: v-bind(gridColumns);
  gap: 16px 12px;
  font-size: 13px;
}

.info-item label {
  display: block;
  color: #888888;
  font-size: 11px;
  margin-bottom: 4px;
}

.info-item span {
  color: #333333;
  font-weight: 600;
}

@media (max-width: 640px) {
  .info-grid {
    grid-template-columns: 1fr;
  }

  .card-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
}
</style>
