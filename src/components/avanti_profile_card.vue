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

function handleCopy(text) {
  navigator.clipboard?.writeText(text)
}
</script>

<template>
  <section class="profile-card">
    <div class="card-header">
      <h3>{{ title }}</h3>
      <AvantiButton v-if="actionText" :variant="actionVariant" @click="emit('action')">
        {{ actionText }}
      </AvantiButton>
    </div>

    <div class="info-grid" :style="{ gridTemplateColumns: gridColumns }">
      <div v-for="item in items" :key="item.label" class="info-item">
        <label>{{ item.label }}</label>
        <span class="value-wrap">
          {{ item.value }}
          <button v-if="item.copy" class="copy-btn" aria-label="Copia" @click="handleCopy(item.value)">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
            </svg>
          </button>
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.profile-card {
  box-sizing: border-box;
  width: 100%;
  height: auto;
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

.value-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
}

.copy-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  background: transparent;
  color: hsla(191, 65%, 40%, 1);
  cursor: pointer;
}

.copy-btn svg {
  width: 16px;
  height: 16px;
}

@media (max-width: 900px) {
  .profile-card {
    width: 100%;
    max-width: 100%;
  }
}
</style>
