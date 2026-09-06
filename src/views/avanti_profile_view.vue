<script setup>
import { ref } from 'vue'
import AvantiProfileBar from '../components/avanti_profile_bar.vue'
import AvantiProgressTracker from '../components/avanti_progress_tracker.vue'
import AvantiProfileCard from '../components/avanti_profile_card.vue'
import AvantiSecurityCard from '../components/avanti_security_card.vue'
import AvantiStepList from '../components/avanti_step_list.vue'

function handleAction(actionKey) {
  // Static placeholder
  console.log(actionKey)
}

const breadcrumbs = [
  { label: 'Piattaforma' },
  { label: 'Profilo', current: true }
]

const summaryItems = ref([
  { label: 'Cognome', value: 'Intesa Sanpaolo S.p.A.' },
  { label: 'Nome', value: 'Marco Rossi' }
])

const profileItems = ref([
  { label: 'Cognome', value: 'Intesa Sanpaolo S.p.A.' },
  { label: 'Nome', value: 'Marco Rossi' },
  { label: 'Email', value: 'ikoei@09gmail.com' },
  { label: 'Importo approvato', value: '12 000 €' },
  { label: 'Tipo di documento', value: 'Passaporto' },
  { label: 'Numero documento', value: 'AB1234567' },
  { label: 'IBAN', value: '-', copy: true }
])

const securityItems = ref([
  {
    actionKey: 'password',
    text: 'Cambia la password del tuo account.',
    buttonText: 'Cambia password',
    buttonVariant: 'outline'
  },
  {
    actionKey: 'email',
    text: "Cambia l'indirizzo email del tuo account.",
    buttonText: 'Cambia email',
    buttonVariant: 'outline'
  },
  {
    actionKey: 'verify-email',
    icon: 'shield',
    text: 'Verifica email',
    badge: 'Non verificata',
    description: 'Verifica il tuo indirizzo email per proteggere il tuo account.',
    buttonText: 'Invia codice',
    buttonVariant: 'primary'
  }
])
</script>

<template>
  <div class="profile-layout">
    <AvantiProfileBar
      avatar="/avatar.png"
      name="Marco Rossi"
      email="ikoei09@gmail.com"
      :breadcrumbs="breadcrumbs"
    />

    <main class="grid-layout">
      <div class="left-column">
        <AvantiProgressTracker :current-step="4" :total-steps="5" />

        <AvantiProfileCard
          title="Dati personali"
          :items="profileItems"
          :columns="1"
          action-text="Modifica nome"
          action-variant="outline"
          @action="handleAction('edit-name')"
        />

        <AvantiSecurityCard
          title="Sicurezza"
          :items="securityItems"
          @action="handleAction"
        />
      </div>

      <div class="right-column">
        <AvantiProfileCard
          title="Dati personali"
          :items="summaryItems"
          :columns="1"
        />

        <AvantiStepList />
      </div>
    </main>
  </div>
</template>

<style scoped>
.profile-layout {
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
  height: auto;
}

@media (max-width: 900px) {
  .profile-layout {
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
