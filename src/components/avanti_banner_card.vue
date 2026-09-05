<script setup>
import AvantiButton from './avanti_button.vue'

defineProps({
  tag: {
    type: String,
    default: ''
  },
  pill: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  },
  amount: {
    type: String,
    default: ''
  },
  rate: {
    type: String,
    default: ''
  },
  buttonText: {
    type: String,
    default: ''
  },
  note: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['action'])
</script>

<template>
  <section class="banner-card">
    <div class="banner-header">
      <span class="banner-tag">{{ tag }}</span>
      <span v-if="pill" class="banner-pill">{{ pill }}</span>
    </div>

    <div class="banner-subtitle">{{ subtitle }}</div>
    <div class="banner-amount">{{ amount }}</div>
    <div class="banner-rate">{{ rate }}</div>

    <AvantiButton variant="secondary" :full-width="true" class="withdraw-btn" @click="emit('action')">
      <slot name="icon" />
      {{ buttonText }}
      <span class="arrow">→</span>
    </AvantiButton>

    <p v-if="note" class="banner-note">{{ note }}</p>
  </section>
</template>

<style scoped>
.banner-card {
  background: linear-gradient(135deg, #00808c 0%, #1a6b77 100%);
  color: #ffffff;
  border-radius: 16px;
  padding: 28px;
}

.banner-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 4px;
}

.banner-tag {
  font-size: 11px;
  opacity: 0.85;
  letter-spacing: 0.5px;
}

.banner-pill {
  background: rgba(255, 255, 255, 0.25);
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 10px;
  font-weight: 600;
}

.banner-subtitle {
  font-size: 12px;
  font-weight: 600;
  opacity: 0.9;
}

.banner-amount {
  font-size: 44px;
  font-weight: 800;
  margin: 16px 0 6px;
}

.banner-rate {
  font-size: 13px;
  margin-bottom: 20px;
  opacity: 0.9;
}

.withdraw-btn {
  background: rgba(255, 255, 255, 0.5) !important;
  color: #00808c !important;
  font-size: 15px !important;
  padding: 14px !important;
}

.arrow {
  margin-left: 4px;
}

.banner-note {
  font-size: 11px;
  text-align: center;
  margin: 16px 0 0;
  opacity: 0.75;
}
</style>
