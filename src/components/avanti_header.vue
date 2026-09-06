<script setup>
import { ref } from 'vue'
import AvantiButton from './avanti_button.vue'

const logoFallback = ref(false)

const props = defineProps({
  activeLink: {
    type: String,
    default: 'Home'
  },
  avatar: {
    type: String,
    default: '/avatar.png'
  },
  initials: {
    type: String,
    default: 'MR'
  },
  bellBadge: {
    type: [String, Number],
    default: 4
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

      <div class="mobile-actions">
        <div class="bell-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>
          </svg>
          <span class="bell-badge" v-if="bellBadge">{{ bellBadge }}</span>
        </div>
        <img class="mobile-avatar" :src="avatar" alt="Profile" />
        <span class="mobile-initials">{{ initials }}</span>
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
    <div class="desktop-support">
      <AvantiButton variant="primary">
        <img class="btn-icon" src="/Chat%20icon.png" alt="Assistenza" />
        ASSISTENZA
        <span class="badge">4</span>
      </AvantiButton>
    </div>
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
  max-width: 1288px;
  height: 100%;
  margin: 0 auto;
  padding: 16px 0;
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
  gap: 12px;
  width: 660px;
  height: 38px;
  font-size: 14px;
}

.nav-link {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 0 0 212.66665649414062px;
  height: 38px;
  padding: 10px 12px;
  border-radius: 8px;
  background: hsla(200, 27%, 98%, 1);
  color: hsla(217, 32%, 15%, 1);
  cursor: pointer;
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: 0;
  transition: background 0.2s ease;
  border: 1px solid hsla(190, 40%, 94%, 1);
}

.nav-link.active {
  flex: 0 0 210.6666717529297px;
  color: hsla(191, 65%, 40%, 1);
  background: hsla(190, 40%, 94%, 1);
  border-color: transparent;
}

.nav-icon {
  width: 18px;
  height: 18px;
}

.desktop-support {
  display: flex;
  align-items: center;
}

.desktop-support .btn {
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

.mobile-actions {
  display: none;
  align-items: center;
  gap: 12px;
}

.bell-icon {
  position: relative;
  width: 24px;
  height: 24px;
  color: hsla(217, 32%, 15%, 1);
}

.bell-badge {
  position: absolute;
  top: -4px;
  right: -4px;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: hsla(0, 84%, 60%, 1);
  border: 2px solid hsla(0, 0%, 100%, 1);
  color: hsla(0, 0%, 100%, 1);
  font-family: Inter, sans-serif;
  font-size: 9px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid hsla(191, 65%, 40%, 1);
}

.mobile-initials {
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: hsla(217, 32%, 15%, 1);
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
    box-sizing: border-box;
    height: 62px;
    min-height: 62px;
    padding: 0 16px;
    display: flex;
    align-items: center;
  }

  .header-inner {
    width: 100%;
    height: 100%;
    padding: 0;
  }

  .top-nav {
    flex-wrap: nowrap;
    height: 100%;
    gap: 0;
  }

  .nav-left {
    width: 100%;
    height: 100%;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    gap: 0;
  }

  .nav-links,
  .desktop-support {
    display: none;
  }

  .mobile-actions {
    display: flex;
    align-items: center;
    gap: 12px;
    height: 38px;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 8px;
    width: auto;
    height: 29px;
  }

  .logo-icon {
    height: 29px;
    width: auto;
  }

  .logo-text {
    font-size: 21px;
    letter-spacing: -0.03em;
  }

  .bell-icon {
    width: 24px;
    height: 24px;
  }

  .mobile-avatar {
    width: 32px;
    height: 32px;
  }

  .mobile-initials {
    font-size: 13px;
  }
}
</style>
