<script setup>
import AvantiButton from './avanti_button.vue'

defineProps({
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  },
  progressText: {
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
  <section class="checklist-card">
    <div class="checklist-icon">
      <slot name="icon" />
    </div>

    <div class="checklist-body">
      <div class="checklist-title-row">
        <div>
          <div class="checklist-title">{{ title }}</div>
          <div class="checklist-subtitle">{{ subtitle }}</div>
        </div>
        <div class="checklist-progress">{{ progressText }}</div>
      </div>

      <div class="checklist-items">
        <label v-for="(item, index) in items" :key="index" class="check-item">
          <input type="checkbox" disabled />
          <span>{{ item }}</span>
        </label>
      </div>
    </div>

    <AvantiButton variant="action" class="checklist-action" @click="emit('action')">→</AvantiButton>
  </section>
</template>

<style scoped>
.checklist-card {
  display: flex;
  align-items: center;
  gap: 16px;
  background: #ffffff;
  border-radius: 16px;
  padding: 18px 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.checklist-icon {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #00808c;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.checklist-icon :slotted(svg) {
  width: 22px;
  height: 22px;
}

.checklist-body {
  flex: 1;
  min-width: 0;
}

.checklist-title-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
}

.checklist-title {
  font-size: 13px;
  font-weight: 700;
  color: #333333;
}

.checklist-subtitle {
  font-size: 11px;
  color: #666666;
  margin-top: 2px;
}

.checklist-progress {
  background: #00808c;
  color: #ffffff;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 10px;
  font-weight: 700;
  white-space: nowrap;
}

.checklist-items {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.check-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #444444;
  cursor: not-allowed;
}

.check-item input {
  width: 14px;
  height: 14px;
  accent-color: #00808c;
}

.checklist-action {
  width: 36px;
  height: 36px;
  min-width: 36px;
  padding: 0 !important;
  border-radius: 50% !important;
  font-size: 16px !important;
}

@media (max-width: 640px) {
  .checklist-card {
    align-items: flex-start;
  }

  .checklist-title-row {
    flex-direction: column;
    gap: 8px;
  }
}
</style>
