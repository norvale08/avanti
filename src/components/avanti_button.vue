<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (val) => ['primary', 'secondary', 'action', 'outline'].includes(val)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  fullWidth: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])

const buttonClasses = computed(() => [
  'btn',
  `btn-${props.variant}`,
  { 'btn-full': props.fullWidth, 'btn-disabled': props.disabled }
])

function handleClick(event) {
  if (!props.disabled) {
    emit('click', event)
  }
}
</script>

<template>
  <button 
    :class="buttonClasses" 
    :disabled="disabled" 
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<style scoped>
.btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 18px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid transparent;
  cursor: pointer;
  transition: background-color 0.2s ease, opacity 0.2s ease;
}

.btn-primary {
  background-color: #00808c;
  color: #ffffff;
}

.btn-primary:hover:not(:disabled) {
  background-color: #006670;
}

.btn-secondary {
  background-color: #7bbac4;
  color: #ffffff;
}

.btn-action {
  background-color: #00808c;
  color: #ffffff;
}

.btn-outline {
  background-color: transparent;
  border-color: #00808c;
  color: #00808c;
}

.btn-full {
  width: 100%;
}

.btn-disabled,
.btn:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}
</style>