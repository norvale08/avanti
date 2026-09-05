<script setup>
import { ref } from 'vue'
import AvantiButton from './avanti_button.vue'

const logoFallback = ref(false)

const props = defineProps({
  activeLink: {
    type: String,
    default: 'Home'
  }
})
</script>

<template>
  <header class="app-header">
    <div class="header-inner">
      <div class="top-nav">
        <div class="nav-left">
      <div class="logo">
        <img
          class="logo-icon"
          src="/logo.png"
          alt="Avanti"
          v-show="!logoFallback"
          @error="logoFallback = true"
        />
        <svg v-if="logoFallback" class="logo-icon" viewBox="0 0 44 24" fill="currentColor">
          <path d="M0 8 h26 v-4 l18 8 l-18 8 v-4 h-26 z" />
        </svg>
        <span class="logo-text">Avanti</span>
      </div>
      <nav class="nav-links">
        <a class="nav-link" :class="{ active: props.activeLink === 'Home' }">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
          </svg>
          Home
        </a>
        <a class="nav-link" :class="{ active: props.activeLink === 'Documenti' }">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
          </svg>
          Documenti
        </a>
        <a class="nav-link" :class="{ active: props.activeLink === 'Profilo' }">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
          </svg>
          Profilo
        </a>
      </nav>
    </div>
    <AvantiButton variant="primary" class="support-btn">
      <img class="btn-icon" src="/Chat%20icon.png" alt="Assistenza" />
      ASSISTENZA
      <span class="badge">4</span>
    </AvantiButton>
      </div>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  box-sizing: border-box;
  width: 100%;
  height: 111px;
  background: var(--background, hsla(0, 0%, 100%, 1));
  border-bottom: 1px solid hsla(240, 6%, 90%, 1);
  opacity: 1;
}

.header-inner {
  width: 100%;
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
  padding: 16px 32px;
  box-sizing: border-box;
}

.top-nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}

.nav-left {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 864.01px;
  height: 100%;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  width: 178px;
  height: 49px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 100%;
  letter-spacing: -0.05em;
  color: #000000;
  overflow: hidden;
}

.logo-icon {
  height: 38px;
  width: auto;
  color: #00808c;
  object-fit: contain;
}

.logo-text {
  color: #000000;
  white-space: nowrap;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 14px;
  width: 660px;
  height: 38px;
  font-size: 14px;
}

.nav-link {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex: 0 0 210.67px;
  height: 38px;
  padding: 0;
  border-radius: 12px;
  background: #f8f9fa;
  color: #5a5a5a;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s ease;
  border: 1px solid transparent;
}

.nav-link.active {
  color: #00808c;
  background: #e8f4f6;
  border-color: #d0eaef;
}

.nav-icon {
  width: 18px;
  height: 18px;
}

.btn.support-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 156px;
  height: 39px;
  padding: 10px 12px;
  border-radius: 8px;
  background: hsla(191, 65%, 40%, 1);
  font-family: Inter, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0;
  text-transform: uppercase;
  color: hsla(0, 0%, 100%, 1);
}

.btn-icon {
  width: 18px;
  height: 18px;
  object-fit: contain;
  display: block;
}

.badge {
  position: absolute;
  top: -6px;
  right: -6px;
  box-sizing: border-box;
  width: 22px;
  height: 22px;
  background: hsla(0, 84%, 60%, 1);
  border: 2px solid hsla(0, 0%, 100%, 1);
  color: #fff;
  border-radius: 11px;
  font-size: 10px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 900px) {
  .app-header {
    height: auto;
    min-height: 111px;
  }

  .header-inner {
    height: auto;
    padding: 12px 16px;
  }

  .top-nav {
    flex-wrap: wrap;
    height: auto;
    gap: 12px;
  }

  .nav-left {
    width: 100%;
    height: auto;
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px;
  }

  .nav-links {
    width: 100%;
    height: auto;
    justify-content: center;
  }

  .nav-link {
    flex: 1 1 auto;
  }

  .logo {
    width: auto;
    height: auto;
  }

  .logo-icon {
    height: 32px;
  }

  .logo-text {
    font-size: 24px;
  }
}
</style>
