<script setup>
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

    <button class="checklist-action" @click="emit('action')">
      <img src="/Arrow%20icon.png" alt="Arrow" />
    </button>
  </section>
</template>

<style scoped>
.checklist-card {
  box-sizing: border-box;
  display: flex;
  gap: 16px;
  width: 792px;
  height: 124px;
  padding: 16px 20px;
  border-radius: 16px;
  border: 1px solid hsla(192, 45%, 85%, 1);
  background: hsla(190, 40%, 94%, 1);
}

.checklist-icon {
  box-sizing: border-box;
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background: hsla(191, 65%, 40%, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0px 4px 8px 0px hsla(191, 65%, 40%, 0.19);
}

.checklist-icon :slotted(img) {
  width: 22px;
  height: 22px;
  object-fit: contain;
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
  font-family: Geist, sans-serif;
  font-size: 13px;
  font-weight: 600;
  font-style: normal;
  line-height: 100%;
  letter-spacing: 0;
  color: hsla(217, 32%, 15%, 1);
}

.checklist-subtitle {
  font-family: Geist, sans-serif;
  font-size: 12px;
  font-weight: 500;
  font-style: normal;
  line-height: 100%;
  letter-spacing: 0;
  color: hsla(240, 4%, 46%, 1);
  margin-top: 6px;
}

.checklist-progress {
  box-sizing: border-box;
  width: 126px;
  height: 22px;
  padding: 4px 12px;
  border-radius: 99px;
  background: hsla(191, 65%, 40%, 1);
  font-family: Geist, sans-serif;
  font-size: 11px;
  font-weight: 700;
  font-style: normal;
  line-height: 100%;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: hsla(0, 0%, 100%, 1);
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
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
  font-family: Geist, sans-serif;
  font-size: 13px;
  font-weight: 500;
  font-style: normal;
  line-height: 100%;
  letter-spacing: 0;
  color: hsla(217, 32%, 15%, 1);
  cursor: not-allowed;
}

.check-item input {
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border-radius: 4px;
  background: hsla(0, 0%, 100%, 1);
  border: 1px solid hsla(191, 65%, 40%, 1);
  accent-color: hsla(191, 65%, 40%, 1);
  appearance: none;
}

.checklist-action {
  box-sizing: border-box;
  width: 36px;
  height: 36px;
  min-width: 36px;
  padding: 0;
  border-radius: 18px;
  background: hsla(191, 65%, 40%, 1);
  box-shadow: 0px 4px 8px 0px hsla(191, 65%, 40%, 0.25);
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.checklist-action img {
  width: 16px;
  height: 16px;
  object-fit: contain;
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
