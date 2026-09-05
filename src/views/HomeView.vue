<script setup>
import ProgressTracker from '../components/ProgressTracker.vue'
import StepList from '../components/StepList.vue'
import BaseButton from '../components/BaseButton.vue'

function handleWithdraw() {
  // Static placeholder
}
</script>

<template>
  <div class="page-container">
    <header class="top-nav">
      <div class="logo">Avanti</div>
      <div class="nav-links">
        <span class="active">Home</span>
        <span>Documenti</span>
        <span>Profilo</span>
      </div>
      <BaseButton variant="primary">ASSISTENZA 4</BaseButton>
    </header>

    <main class="grid-layout">
      <div class="left-column">
        <ProgressTracker :current-step="4" :total-steps="5" />

        <div class="banner-card">
          <div class="banner-tag">IL TUO SALDO</div>
          <div class="banner-subtitle">IMPORTO APPROVATO DAI NOSTRI PARTNER</div>
          <div class="banner-amount">€ 12 000</div>
          <div class="banner-rate">Prestito personale • TAN 3,8%</div>

          <BaseButton 
            variant="secondary" 
            :full-width="true" 
            @click="handleWithdraw"
          >
            Preleva i fondi →
          </BaseButton>

          <p class="banner-note">Fondi disponibili dopo l'approvazione dei documenti</p>
        </div>
      </div>

      <div class="right-column">
        <div class="personal-card">
          <div class="card-title">Dati personali</div>
          <p><strong>Cognome:</strong> Intesa Sanpaolo S.p.A.</p>
          <p><strong>Nome:</strong> Marco Rossi</p>
        </div>

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

.top-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}

.logo {
  font-size: 20px;
  font-weight: 800;
  color: #00808c;
}

.nav-links {
  display: flex;
  gap: 20px;
  font-size: 14px;
}

.nav-links span.active {
  color: #00808c;
  font-weight: 600;
}

.grid-layout {
  display: grid;
  grid-template-columns: 1fr 340px;
  gap: 20px;
}

.banner-card {
  background: #00808c;
  color: #ffffff;
  border-radius: 12px;
  padding: 24px;
}

.banner-tag {
  font-size: 11px;
  opacity: 0.8;
}

.banner-subtitle {
  font-size: 12px;
  font-weight: 600;
  margin-top: 4px;
}

.banner-amount {
  font-size: 36px;
  font-weight: 800;
  margin: 12px 0;
}

.banner-rate {
  font-size: 12px;
  margin-bottom: 20px;
}

.banner-note {
  font-size: 11px;
  text-align: center;
  margin-top: 12px;
  opacity: 0.8;
}

.personal-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  font-size: 13px;
}

.card-title {
  font-weight: 700;
  margin-bottom: 8px;
}
</style>