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
      <div class="row-content">
        <div class="row-main">
          <svg v-if="item.icon === 'shield'" class="row-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
          <span class="row-text">{{ item.text }}</span>
          <span v-if="item.badge" class="row-badge">{{ item.badge }}</span>
        </div>
        <p v-if="item.description" class="row-description">{{ item.description }}</p>
      </div>
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
  gap: 16px;
}

.action-row:first-child {
  border-top: none;
}

.row-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  min-width: 0;
}

.row-main {
  display: flex;
  align-items: center;
  gap: 10px;
}

.row-text {
  color: hsla(217, 32%, 15%, 1);
  font-weight: 600;
}

.row-icon {
  width: 20px;
  height: 20px;
  color: hsla(191, 65%, 40%, 1);
}

.row-badge {
  box-sizing: border-box;
  padding: 2px 8px;
  border-radius: 99px;
  background: hsla(0, 0%, 100%, 1);
  border: 1px solid hsla(240, 6%, 90%, 1);
  font-size: 11px;
  font-weight: 600;
  color: hsla(240, 4%, 46%, 1);
}

.row-description {
  margin: 0;
  font-size: 12px;
  color: hsla(240, 4%, 46%, 1);
}

@media (max-width: 640px) {
  .action-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
}
</style>
