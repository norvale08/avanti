<script setup>
import BaseButton from '../components/BaseButton.vue'
import StepList from '../components/StepList.vue'

function handlePasswordChange() {
  // Static placeholder
}

function handleEmailChange() {
  // Static placeholder
}
</script>

<template>
  <div class="page-container">
    <main class="grid-layout">
      <div class="left-column">
        <div class="profile-card">
          <div class="card-header">
            <h3>Dati personali</h3>
            <BaseButton variant="outline">Modifica nome</BaseButton>
          </div>

          <div class="info-grid">
            <div><label>Cognome</label><span>Intesa Sanpaolo S.p.A.</span></div>
            <div><label>Nome</label><span>Marco Rossi</span></div>
            <div><label>Email</label><span>ikoei@09gmail.com</span></div>
            <div><label>Importo approvato</label><span>12 000 €</span></div>
            <div><label>Tipo di documento</label><span>Passaporto</span></div>
            <div><label>Tipo di documento</label><span>AB1234567</span></div>
          </div>
        </div>

        <div class="security-card">
          <h3>Sicurezza</h3>
          
          <div class="action-row">
            <span>Cambia la password del tuo account.</span>
            <BaseButton variant="outline" @click="handlePasswordChange">Cambia password</BaseButton>
          </div>

          <div class="action-row">
            <span>Cambia l'indirizzo email del tuo account.</span>
            <BaseButton variant="outline" @click="handleEmailChange">Cambia email</BaseButton>
          </div>
        </div>
      </div>

      <div class="right-column">
        <StepList />
      </div>
    </main>
  </div>
</template>

<style scoped>
.page-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px;
  font-family: sans-serif;
  color: #333;
}

.grid-layout {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 20px;
}

.profile-card,
.security-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.info-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  font-size: 13px;
}

.info-grid label {
  display: block;
  color: #888888;
  font-size: 11px;
}

.action-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-top: 1px solid #f0f0f0;
  font-size: 13px;
}
</style>