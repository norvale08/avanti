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
          tag="Il tuo saldo"
          pill="Completa i passaggi"
          subtitle="IMPORTO APPROVATO DAI NOSTRI PARTNER"
          amount="€ 12 000"
          rate="Prestito personale • TAN 3,8%"
          button-text="Preleva i fondi"
          note="Fondi disponibili dopo l'approvazione dei documenti"
          @action="handleWithdraw"
        >
          <template #icon>
            <img class="btn-icon" src="/Bank%20icon.png" alt="Bank" />
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
            <img class="checklist-icon-img" src="/Padlock%20icon.png" alt="Padlock" />
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
  max-width: 1288px;
  align-self: center;
}

.grid-layout {
  display: grid;
  grid-template-columns: minmax(0, 792px) minmax(0, 464px);
  gap: 32px;
  justify-content: space-between;
}

.left-column,
.right-column {
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: flex-start;
}

.right-column {
  width: 464px;
  height: 646px;
}

@media (max-width: 900px) {
  :deep(.profile-bar) {
    display: none;
  }
}

.btn-icon {
  width: 18px;
  height: 18px;
}

@media (max-width: 900px) {
  .home-layout {
    padding: 0 16px;
    max-width: 100%;
  }

  .grid-layout {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .left-column,
  .right-column {
    width: 100%;
    align-items: center;
  }

  .right-column {
    height: auto;
  }
}

@media (max-width: 640px) {
  .grid-layout {
    gap: 20px;
  }

  .left-column,
  .right-column {
    gap: 20px;
  }
}
</style>
