<script setup>
import { computed } from 'vue'

const props = defineProps({
  currentStep: {
    type: Number,
    default: 4
  },
  totalSteps: {
    type: Number,
    default: 5
  }
})

const progressPercent = computed(() => {
  return `${((props.currentStep - 1) / (props.totalSteps - 1)) * 100}%`
})

const steps = [
  { id: 1, label: 'Simul.' },
  { id: 2, label: 'Approv.' },
  { id: 3, label: 'Account' },
  { id: 4, label: 'Docum.' },
  { id: 5, label: 'Firma' }
]
</script>

<template>
  <div class="tracker-card">
    <div class="tracker-header">
      <span class="step-title">Passo {{ currentStep }} di {{ totalSteps }}</span>
      <span class="step-count">{{ currentStep - 1 }} / {{ totalSteps }} completati</span>
    </div>

    <div class="tracker-steps">
      <div 
        v-for="step in steps" 
        :key="step.id" 
        class="step-item"
        :class="{ completed: step.id < currentStep, active: step.id === currentStep, pending: step.id > currentStep }"
      >
        <div class="step-icon">
          <svg v-if="step.id < currentStep" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          <svg v-else-if="step.id === currentStep" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          <svg v-else class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
          </svg>
        </div>
        <span class="step-label">{{ step.label }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tracker-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 18px 24px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.tracker-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
  font-size: 13px;
  color: #666666;
}

.tracker-steps {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
}

.tracker-steps::before {
  content: '';
  position: absolute;
  top: 18px;
  left: 18px;
  right: 18px;
  height: 2px;
  background: linear-gradient(to right, #00808c v-bind(progressPercent), #e6e6e6 v-bind(progressPercent));
  z-index: 0;
}

.step-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  z-index: 1;
}

.step-icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2px solid #cccccc;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #999999;
}

.icon {
  width: 16px;
  height: 16px;
}

.step-item.completed .step-icon {
  background: #00808c;
  border-color: #00808c;
  color: #ffffff;
}

.step-item.active .step-icon {
  border-color: #00808c;
  color: #00808c;
  background: #ffffff;
}

.step-item.pending .step-icon {
  background: #f5f5f5;
  border-color: #cccccc;
  color: #bbbbbb;
}

.step-label {
  font-size: 11px;
  color: #888888;
}

.step-item.completed .step-label,
.step-item.active .step-label {
  color: #00808c;
  font-weight: 600;
}

.step-item.pending .step-label {
  color: #bbbbbb;
}
</style>