<script setup>
const stepsList = [
  { id: 1, name: 'Simulazione completata', status: 'Completato', isDone: true },
  { id: 2, name: 'Credito approvato', status: 'Completato', isDone: true },
  { id: 3, name: 'Account creato', status: 'Completato', isDone: true },
  { id: 4, name: 'Documenti caricati', status: 'Step attuale • Azione richiesta', isDone: false, isActive: true },
  { id: 5, name: 'Contratto firmato', status: 'In attesa', isDone: false }
]
</script>

<template>
  <div class="list-card">
    <div class="list-title">COMPLETA TUTTI GLI STEP</div>
    <div class="list-subtitle">Per il prelievo dei fondi, completa tutti gli step</div>

    <div 
      v-for="item in stepsList" 
      :key="item.id" 
      class="list-row"
      :class="{ active: item.isActive }"
    >
      <div class="row-info">
        <span class="row-name">{{ item.name }}</span>
        <span class="row-status">{{ item.status }}</span>
      </div>
      <div class="row-badge" :class="{ check: item.isDone }">
        {{ item.isDone ? '✓' : '→' }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.list-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.list-title {
  font-size: 11px;
  color: #00808c;
  font-weight: 700;
  letter-spacing: 0.5px;
}

.list-subtitle {
  font-size: 13px;
  font-weight: 600;
  margin: 4px 0 16px;
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
}

.list-row.active .row-status {
  color: #00808c;
}

.row-badge {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}

.row-badge.check {
  background: #00808c;
  color: #ffffff;
}
</style>