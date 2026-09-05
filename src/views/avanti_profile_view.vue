<script setup>
import { ref } from 'vue'
import AvantiProfileCard from '../components/avanti_profile_card.vue'
import AvantiSecurityCard from '../components/avanti_security_card.vue'
import AvantiStepList from '../components/avanti_step_list.vue'

function handleAction(actionKey) {
  // Static placeholder
  console.log(actionKey)
}

const profileItems = ref([
  { label: 'Cognome', value: 'Intesa Sanpaolo S.p.A.' },
  { label: 'Nome', value: 'Marco Rossi' },
  { label: 'Email', value: 'ikoei@09gmail.com' },
  { label: 'Importo approvato', value: '12 000 €' },
  { label: 'Tipo di documento', value: 'Passaporto' },
  { label: 'Numero documento', value: 'AB1234567' }
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
  }
])
</script>

<template>
  <div class="profile-layout">
    <div class="profile-main">
      <AvantiProfileCard
        title="Dati personali"
        :items="profileItems"
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

    <aside class="profile-side">
      <AvantiStepList />
    </aside>
  </div>
</template>

<style scoped>
.profile-layout {
  display: grid;
  grid-template-columns: 1fr 360px;
  gap: 20px;
  width: 100%;
}

.profile-main {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.profile-side {
  min-width: 0;
}

@media (max-width: 900px) {
  .profile-layout {
    grid-template-columns: 1fr;
  }
}
</style>
