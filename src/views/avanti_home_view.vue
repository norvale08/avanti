<script setup>
import AvantiProfileBar from '../components/avanti_profile_bar.vue'
import AvantiProgressTracker from '../components/avanti_progress_tracker.vue'
import AvantiBannerCard from '../components/avanti_banner_card.vue'
import AvantiChecklistCard from '../components/avanti_checklist_card.vue'
import AvantiProfileCard from '../components/avanti_profile_card.vue'
import AvantiStepList from '../components/avanti_step_list.vue'

function handleWithdraw() {
  // Static placeholder
}

function handleChecklistAction() {
  // Static placeholder
}

const breadcrumbs = [
  { label: 'Piattaforma' },
  { label: 'Home', current: true }
]

const personalItems = [
  { label: 'Cognome', value: 'Intesa Sanpaolo S.p.A.' },
  { label: 'Nome', value: 'Marco Rossi' }
]

const checklistItems = ['Documenti', 'Firma']
</script>

<template>
  <div class="home-layout">
    <AvantiProfileBar
      avatar="/avatar.png"
      name="Marco Rossi"
      email="ikoei09@gmail.com"
      :breadcrumbs="breadcrumbs"
    />

    <main class="grid-layout">
      <div class="left-column">
        <AvantiProgressTracker :current-step="4" :total-steps="5" />

        <AvantiBannerCard
          tag="IL TUO SALDO"
          pill="Completa i passaggi"
          subtitle="IMPORTO APPROVATO DAI NOSTRI PARTNER"
          amount="€ 12 000"
          rate="Prestito personale • TAN 3,8%"
          button-text="Preleva i fondi"
          note="Fondi disponibili dopo l'approvazione dei documenti"
          @action="handleWithdraw"
        >
          <template #icon>
            <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 21h18"/><path d="M5 21V7l8-4 8 4v14"/><path d="M9 21v-6h6v6"/>
            </svg>
          </template>
        </AvantiBannerCard>

        <AvantiChecklistCard
          title="Per il prelievo dei fondi, completa tutti gli step"
          subtitle="Step ancora da completare"
          progress-text="3 / 5 COMPLETATI"
          :items="checklistItems"
          @action="handleChecklistAction"
        >
          <template #icon>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
            </svg>
          </template>
        </AvantiChecklistCard>
      </div>

      <div class="right-column">
        <AvantiProfileCard
          title="Dati personali"
          :items="personalItems"
          :columns="1"
        />

        <AvantiStepList />
      </div>
    </main>
  </div>
</template>

<style scoped>
.home-layout {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
}

.grid-layout {
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 20px;
}

.left-column,
.right-column {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.btn-icon {
  width: 18px;
  height: 18px;
}

@media (max-width: 900px) {
  .grid-layout {
    grid-template-columns: 1fr;
  }
}
</style>
