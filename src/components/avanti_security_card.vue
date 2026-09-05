<script setup>
import AvantiButton from './avanti_button.vue'

defineProps({
  title: {
    type: String,
    default: ''
  },
  items: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['action'])
</script>

<template>
  <section class="security-card">
    <h3>{{ title }}</h3>

    <div v-for="item in items" :key="item.actionKey" class="action-row">
      <span>{{ item.text }}</span>
      <AvantiButton :variant="item.buttonVariant || 'outline'" @click="emit('action', item.actionKey)">
        {{ item.buttonText }}
      </AvantiButton>
    </div>
  </section>
</template>

<style scoped>
.security-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

h3 {
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 16px;
}

.action-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0;
  border-top: 1px solid #f0f0f0;
  font-size: 13px;
}

.action-row:first-child {
  border-top: none;
}

.action-row span {
  color: #555555;
  padding-right: 12px;
}

@media (max-width: 640px) {
  .action-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
}
</style>
