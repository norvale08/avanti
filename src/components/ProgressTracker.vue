<script setup>
defineProps({
  currentStep: {
    type: Number,
    default: 4
  },
  totalSteps: {
    type: Number,
    default: 5
  }
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
        :class="{ completed: step.id < currentStep, active: step.id === currentStep }"
      >
        <div class="step-icon">
          <span v-if="step.id < currentStep">✓</span>
          <span v-else-if="step.id === currentStep">↑</span>
          <span v-else>✎</span>
        </div>
        <span class="step-label">{{ step.label }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tracker-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 16px 24px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.tracker-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  font-size: 13px;
  color: #666666;
}

.tracker-steps {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.step-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  z-index: 1;
}

.step-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 2px solid #cccccc;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  color: #999999;
}

.step-item.completed .step-icon {
  background: #00808c;
  border-color: #00808c;
  color: #ffffff;
}

.step-item.active .step-icon {
  border-color: #00808c;
  color: #00808c;
}

.step-label {
  font-size: 11px;
  color: #888888;
}
</style>