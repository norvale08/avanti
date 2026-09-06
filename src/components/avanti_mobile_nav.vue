<script setup>
defineProps({
  activeLink: {
    type: String,
    default: 'Home'
  }
})
</script>

<template>
  <nav class="mobile-nav" aria-label="Mobile navigation">
    <a class="nav-item" :class="{ active: activeLink === 'Home' }">
      <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
      <span class="nav-label">Home</span>
    </a>
    <a class="nav-item" :class="{ active: activeLink === 'Documenti' }">
      <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
      </svg>
      <span class="nav-label">Documenti</span>
    </a>
    <a class="nav-item" :class="{ active: activeLink === 'Profilo' }">
      <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
      <span class="nav-label">Profilo</span>
    </a>
    <a class="nav-item support" :class="{ active: activeLink === 'Assistenza' }">
      <img class="nav-icon" src="/Chat%20icon.png" alt="Chat" />
      <span class="nav-label">Assistenza</span>
    </a>
  </nav>
</template>

<style scoped>
.mobile-nav {
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 62px;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: hsla(0, 0%, 100%, 1);
  border-top: 1px solid hsla(240, 6%, 90%, 1);
  z-index: 100;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  padding: 3px 5px;
  color: hsla(240, 4%, 46%, 1);
  text-decoration: none;
  font-family: Inter, sans-serif;
  font-size: 11px;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0;
}

.nav-item.active {
  color: hsla(191, 65%, 40%, 1);
}

.nav-item.support {
  box-sizing: border-box;
  width: 108px;
  height: 43px;
  padding: 4px 16px;
  border-radius: 8px;
  background: hsla(191, 65%, 40%, 1);
  color: hsla(0, 0%, 100%, 1);
  flex-direction: column;
  gap: 4px;
  text-transform: uppercase;
  font-weight: 600;
}

.nav-icon {
  width: 20px;
  height: 20px;
}

.support .nav-icon {
  width: 18px;
  height: 18px;
}

.support .nav-label {
  font-family: Inter, sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: 0;
  text-transform: uppercase;
  color: hsla(0, 0%, 100%, 1);
}

.nav-label {
  white-space: nowrap;
}
</style>
