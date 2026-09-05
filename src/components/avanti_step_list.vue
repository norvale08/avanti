<script setup>
const stepsList = [
  { id: 1, name: 'Simulazione completata', status: 'Completato', isDone: true, icon: 'chart' },
  { id: 2, name: 'Credito approvato', status: 'Completato', isDone: true, icon: 'shield' },
  { id: 3, name: 'Account creato', status: 'Completato', isDone: true, icon: 'user' },
  { id: 4, name: 'Documenti caricati', status: 'Step attuale • Azione richiesta', isDone: false, isActive: true, icon: 'upload' },
  { id: 5, name: 'Contratto firmato', status: 'In attesa', isDone: false, icon: 'edit' }
]

const completedCount = stepsList.filter(s => s.isDone).length
const totalCount = stepsList.length
</script>

<template>
  <div class="list-card">
    <div class="list-header">
      <div>
        <div class="list-title">COMPLETA TUTTI GLI STEP</div>
        <div class="list-subtitle">Per il prelievo dei fondi, completa tutti gli step</div>
      </div>
      <div class="list-toggle">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="18 15 12 9 6 15"/>
        </svg>
      </div>
    </div>

    <div 
      v-for="item in stepsList" 
      :key="item.id" 
      class="list-row"
      :class="{ active: item.isActive, muted: !item.isDone && !item.isActive }"
    >
      <div class="row-left">
        <div class="row-icon" :class="{ done: item.isDone, active: item.isActive, pending: !item.isDone && !item.isActive }">
          <svg v-if="item.icon === 'chart'" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
          </svg>
          <svg v-else-if="item.icon === 'shield'" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          </svg>
          <svg v-else-if="item.icon === 'user'" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
          </svg>
          <svg v-else-if="item.icon === 'upload'" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
          </svg>
          <svg v-else class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
          </svg>
        </div>
        <div class="row-info">
          <span class="row-name">{{ item.name }}</span>
          <span class="row-status">{{ item.status }}</span>
        </div>
      </div>
      <div class="row-badge" :class="{ check: item.isDone, active: item.isActive, pending: !item.isDone && !item.isActive }">
        <svg v-if="item.isDone" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
        <svg v-else-if="item.isActive" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
          <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
        </svg>
        <svg v-else class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </div>
    </div>

    <div class="progress-track">
      <div
        v-for="n in totalCount"
        :key="n"
        class="progress-segment"
        :class="{ filled: n <= completedCount, active: n === completedCount + 1 }"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.list-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 18px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.list-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
}

.list-title {
  font-size: 11px;
  color: #00808c;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.list-subtitle {
  font-size: 12px;
  font-weight: 600;
  margin-top: 2px;
  color: #666;
}

.list-toggle {
  width: 28px;
  height: 28px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  color: #999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.list-toggle svg {
  width: 16px;
  height: 16px;
}

.list-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
}

.list-row:last-child {
  border-bottom: none;
}

.row-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.row-icon {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #f0f0f0;
  color: #999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.row-icon.done,
.row-icon.active {
  background: #00808c;
  color: #ffffff;
}

.row-icon.pending {
  background: #f0f0f0;
  color: #bbbbbb;
}

.icon {
  width: 18px;
  height: 18px;
}

.row-info {
  display: flex;
  flex-direction: column;
}

.row-name {
  font-size: 13px;
  font-weight: 600;
}

.row-status {
  font-size: 11px;
  color: #888888;
  margin-top: 2px;
}

.list-row.active .row-name {
  color: #333;
}

.list-row.active .row-status {
  color: #00808c;
  font-weight: 600;
}

.list-row.muted .row-name {
  color: #aaa;
}

.list-row.muted .row-status {
  color: #bbb;
}

.row-badge {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #f0f0f0;
  color: #bbbbbb;
  display: flex;
  align-items: center;
  justify-content: center;
}

.row-badge.check,
.row-badge.active {
  background: #00808c;
  color: #ffffff;
}

.row-badge.pending .icon {
  width: 14px;
  height: 14px;
}

.progress-track {
  display: flex;
  gap: 4px;
  margin-top: 14px;
}

.progress-segment {
  flex: 1;
  height: 4px;
  border-radius: 2px;
  background: #e6e6e6;
}

.progress-segment.filled,
.progress-segment.active {
  background: #00808c;
}

.progress-segment.active {
  opacity: 0.4;
}
</style>