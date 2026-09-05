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

    <template v-for="(item, index) in stepsList" :key="item.id">
      <div v-if="index === 0" class="row-divider"></div>
      <div 
        class="list-row"
        :class="{ active: item.isActive, muted: !item.isDone && !item.isActive }"
      >
        <div class="row-left">
          <div class="row-icon" :class="{ done: item.isDone, active: item.isActive, pending: !item.isDone && !item.isActive }">
            <svg v-if="item.icon === 'chart'" width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.22223 15.8888V10.9999M6.92658 15.8888V1.22217M12.6309 15.8888V6.11106" stroke="white" stroke-width="2.44444" stroke-linecap="round"/>
            </svg>
            <svg v-else-if="item.icon === 'shield'" width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.2959 9.37058L6.92536 11.0003L10.1843 7.7409M14.258 10.1858C14.258 14.26 11.4064 16.2971 8.01711 17.4786C7.83963 17.5388 7.64684 17.5359 7.47123 17.4705C4.0738 16.2971 1.22223 14.26 1.22223 10.1858V4.4819C1.22223 4.26579 1.30807 4.05853 1.46086 3.90572C1.61365 3.75291 1.82088 3.66706 2.03696 3.66706C3.66643 3.66706 5.70326 2.68925 7.1209 1.45069C7.2935 1.3032 7.51307 1.22217 7.7401 1.22217C7.96712 1.22217 8.18669 1.3032 8.35929 1.45069C9.78508 2.6974 11.8138 3.66706 13.4432 3.66706C13.6593 3.66706 13.8665 3.75291 14.0193 3.90572C14.1721 4.05853 14.258 4.26579 14.258 4.4819V10.1858Z" stroke="white" stroke-width="2.44444" stroke-linecap="round"/>
            </svg>
            <svg v-else-if="item.icon === 'user'" width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.6309 15.8888V14.2592C12.6309 13.3948 12.2875 12.5658 11.6762 11.9546C11.0649 11.3433 10.2358 10.9999 9.37131 10.9999H4.48186C3.61735 10.9999 2.78825 11.3433 2.17695 11.9546C1.56565 12.5658 1.22223 13.3948 1.22223 14.2592V15.8888M10.1862 4.48143C10.1862 6.28147 8.72683 7.74069 6.92658 7.74069C5.12634 7.74069 3.66695 6.28147 3.66695 4.48143C3.66695 2.68139 5.12634 1.22217 6.92658 1.22217C8.72683 1.22217 10.1862 2.68139 10.1862 4.48143Z" stroke="white" stroke-width="2.44444" stroke-linecap="round"/>
            </svg>
            <svg v-else-if="item.icon === 'upload'" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.55556 1.72852V11.5063M4.48149 5.80259L8.55556 1.72852L12.6296 5.80259M15.8889 11.5063V14.7656C15.8889 15.1978 15.7172 15.6123 15.4116 15.9179C15.106 16.2235 14.6915 16.3952 14.2593 16.3952H2.85186C2.41965 16.3952 2.00515 16.2235 1.69954 15.9179C1.39392 15.6123 1.22223 15.1978 1.22223 14.7656V11.5063" stroke="#2491AA" stroke-width="2.44444" stroke-linecap="round"/>
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
          <img v-else-if="item.isActive" src="/Arrow icon.png" alt="arrow" class="icon" />
          <img v-else src="/Arrow icon2.png" alt="arrow" class="icon" />
        </div>
      </div>
      <div v-if="index < stepsList.length - 1" class="row-divider"></div>
    </template>

    <div class="divider-line"></div>

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
  box-sizing: border-box;
  width: 464px;
  height: 483px;
  padding: 18px;
  border-radius: 16px;
  border: 1px solid hsla(240, 6%, 90%, 1);
  background: hsla(0, 0%, 100%, 1);
  box-shadow: 0px 4px 16px 0px hsla(217, 32%, 15%, 0.03);
}

.list-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
}

.list-title {
  font-family: Inter, sans-serif;
  font-size: 11px;
  font-weight: 700;
  font-style: normal;
  line-height: 100%;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: hsla(191, 65%, 40%, 1);
}

.list-subtitle {
  font-family: Inter, sans-serif;
  font-size: 13px;
  font-weight: 600;
  font-style: normal;
  line-height: 100%;
  letter-spacing: 0;
  color: hsla(217, 32%, 15%, 1);
  margin-top: 10px;
}

.list-toggle {
  box-sizing: border-box;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: 1px solid hsla(240, 6%, 90%, 1);
  background: hsla(200, 27%, 98%, 1);
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
}

.row-divider {
  box-sizing: border-box;
  width: 100%;
  height: 1px;
  background: hsla(216, 20%, 95%, 1);
  margin: 15px 0;
}

.divider-line {
  box-sizing: border-box;
  width: 100%;
  height: 1px;
  background: hsla(216, 20%, 95%, 1);
  margin: 16px 0;
}

.row-left {
  display: flex;
  align-items: center;
  gap: 12px;
}

.row-icon {
  box-sizing: border-box;
  width: 44px;
  height: 44px;
  border-radius: 50px;
  background: hsla(191, 65%, 40%, 1);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.row-icon.done {
  background: hsla(191, 65%, 40%, 1);
  color: #ffffff;
}

.row-icon.active {
  border: 2.44px solid hsla(191, 65%, 40%, 1);
  background: var(--background, hsla(0, 0%, 100%, 1));
  color: #2491aa;
}

.row-icon.pending {
  background: hsla(220, 9%, 46%, 0.12);
  color: #999999;
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
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 600;
  font-style: normal;
  line-height: 100%;
  letter-spacing: 0;
  color: hsla(217, 32%, 15%, 1);
}

.row-status {
  font-family: Inter, sans-serif;
  font-size: 11px;
  font-weight: 500;
  font-style: normal;
  line-height: 100%;
  letter-spacing: 0;
  color: hsla(191, 65%, 40%, 1);
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
  box-sizing: border-box;
  width: 28px;
  height: 28px;
  border-radius: 14px;
  background: hsla(191, 65%, 40%, 1);
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.row-badge.check,
.row-badge.active {
  background: hsla(191, 65%, 40%, 1);
  color: #ffffff;
}

.row-badge.pending {
  background: hsla(220, 9%, 46%, 0.12);
  color: #999999;
}

.row-badge.pending .icon {
  width: 14px;
  height: 14px;
}

.progress-track {
  box-sizing: border-box;
  width: 464px;
  height: 32px;
  gap: 4px;
  display: flex;
  margin-top: 0;
}

.progress-segment {
  flex: 0 0 83.2px;
  width: 83.2px;
  height: 4px;
  border-radius: 99px;
  opacity: 1;
  background: hsla(240, 6%, 90%, 1);
}

.progress-segment.filled {
  background: hsla(191, 65%, 40%, 1);
}

.progress-segment.active {
  background: linear-gradient(90deg, #2491AA 0%, #E4E4E7 100%);
}
</style>