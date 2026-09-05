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
      <span class="btn-text">{{ buttonText }}</span>
      <span class="arrow">→</span>
    </AvantiButton>

    <div v-if="note" class="banner-note">
      <span class="note-line"></span>
      <span class="note-text">{{ note }}</span>
    </div>
  </section>
</template>

<style scoped>
.banner-card {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 792px;
  height: 340px;
  padding: 32px;
  gap: 16px;
  border-radius: 20px;
  background: linear-gradient(180deg, #2491AA 0%, #1A7488 100%);
  color: #ffffff;
  box-shadow: 0px 8px 24px 0px hsla(191, 65%, 40%, 0.19);
}

.banner-card > * {
  margin: 0;
}

.banner-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 4px;
}

.banner-tag {
  font-family: Inter, sans-serif;
  font-size: 13px;
  font-weight: 600;
  font-style: normal;
  line-height: 100%;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: hsla(190, 40%, 94%, 1);
}

.banner-pill {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 21px;
  padding: 4px 10px;
  border-radius: 99px;
  background: hsla(0, 0%, 100%, 0.2);
  font-family: Inter, sans-serif;
  font-size: 11px;
  font-weight: 700;
  font-style: normal;
  line-height: 100%;
  letter-spacing: 0;
  color: hsla(0, 0%, 100%, 1);
}

.banner-subtitle {
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 600;
  font-style: normal;
  line-height: 100%;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: hsla(190, 40%, 94%, 1);
}

.banner-amount {
  display: flex;
  align-items: center;
  width: 220px;
  height: 63px;
  font-family: Inter, sans-serif;
  font-size: 52px;
  font-weight: 700;
  font-style: normal;
  line-height: 100%;
  letter-spacing: -0.015em;
  color: hsla(0, 0%, 100%, 1);
  white-space: nowrap;
}

.banner-rate {
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  line-height: 100%;
  letter-spacing: 0;
  color: hsla(190, 40%, 94%, 1);
}

.withdraw-btn {
  background: hsla(0, 0%, 100%, 0.5) !important;
  border: none !important;
  color: transparent !important;
  font-family: Inter, sans-serif !important;
  font-size: 18px !important;
  font-weight: 600 !important;
  line-height: 100% !important;
  letter-spacing: 0.002em !important;
  padding: 14px !important;
}

.btn-text {
  background: linear-gradient(180deg, #2491AA 0%, #1A7488 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
}

.arrow {
  margin-left: 4px;
  color: #2491AA;
}

.banner-note {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 11px;
}

.note-line {
  box-sizing: border-box;
  width: 100px;
  height: 0;
  border-top: 1px solid hsla(0, 0%, 100%, 0.31);
}

.note-text {
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  line-height: 100%;
  letter-spacing: 0;
  color: hsla(190, 40%, 94%, 1);
  opacity: 1;
}
</style>
