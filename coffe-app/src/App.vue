<script setup>
import { ref } from 'vue'

const isMobileMenuOpen = ref(false)

const toggleMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
</script>

<template>
  <div class="app-wrapper" style="margin: -8px;">
    <header class="navbar">
      <div class="nav-container">
        <router-link to="/" class="logo">
          <div class="logo-icon">☕</div>
          <div class="logo-text">
            <span class="main-title">COFFEE<span class="accent">ART</span></span>
            <span class="sub-title">Roastery & Brewery</span>
          </div>
        </router-link>

        <nav class="desktop-menu">
          <router-link to="/" class="nav-link">Kryefaqja</router-link>
          <router-link to="/menu" class="nav-link">Menuja</router-link>
          <a href="#location" class="nav-link">Lokacioni</a>
        </nav>

        <button class="mobile-toggle" @click="toggleMenu" aria-label="Menu">
          <div class="bar" :class="{ 'open': isMobileMenuOpen }"></div>
        </button>
      </div>

      <transition name="slide">
        <nav v-if="isMobileMenuOpen" class="mobile-menu" @click="isMobileMenuOpen = false">
          <router-link to="/" class="mobile-link">Kryefaqja</router-link>
          <router-link to="/menu" class="mobile-link">Menuja</router-link>
          <a href="#location" class="mobile-link">Lokacioni</a>
        </nav>
      </transition>
    </header>

    <main class="content">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer id="location" class="footer">
      <div class="footer-grid">
        <div class="footer-info">
          <h3>📍 Bize Ulaşın</h3>
          <p>Merkez Mah. Kahve Sok. No: 12</p>
          <p>Şişli / İstanbul</p>
          <a href="tel:+902120000000" class="phone">+90 (212) 000 00 00</a>
        </div>
        <div class="footer-hours">
          <h3>🕒 Çalışma Saatleri</h3>
          <ul>
            <li>Hafta içi: 07:00 - 23:00</li>
            <li>Hafta sonu: 09:00 - 00:00</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        &copy; 2024 CoffeeArt. Tüm hakları saklıdır.
      </div>
    </footer>
  </div>
</template>

<style>
/* --- TEMEL DEĞİŞKENLER & RESET --- */
:root {
  --primary: #d2a679;
  --primary-dark: #b08968;
  --bg-dark: #121212;
  --surface: #1e1e1e;
  --text-light: #f5f5f5;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

:global(body) {
  margin: 0;
  padding: 0;
  background-color: var(--bg-dark);
  color: var(--text-light);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  overflow-x: hidden;
}

/* --- NAVBAR --- */
.navbar {
  background: rgba(18, 18, 18, 0.95);
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 1rem 0;
  border-bottom: 1px solid rgba(210, 166, 121, 0.2);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
}

.logo-icon { font-size: 2rem; }
.logo-text { display: flex; flex-direction: column; }
.main-title { color: white; font-weight: 800; font-size: 1.2rem; letter-spacing: 2px; }
.accent { color: var(--primary); }
.sub-title { color: #666; font-size: 0.7rem; font-weight: bold; text-transform: uppercase; }

/* --- MENÜLER --- */
.desktop-menu { display: flex; gap: 2rem; }

.nav-link {
  color: var(--text-light);
  text-decoration: none;
  font-weight: 500;
  transition: var(--transition);
  opacity: 0.8;
}

.nav-link:hover, .router-link-active {
  opacity: 1;
  color: var(--primary);
}

/* --- MOBİL TOGGLE (HAMBURGER) --- */
.mobile-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
}

.bar, .bar::before, .bar::after {
  width: 25px;
  height: 2px;
  background: var(--primary);
  display: block;
  transition: var(--transition);
  position: relative;
}
.bar::before { content: ""; position: absolute; top: -8px; }
.bar::after { content: ""; position: absolute; top: 8px; }

.bar.open { background: transparent; }
.bar.open::before { transform: rotate(45deg); top: 0; }
.bar.open::after { transform: rotate(-45deg); top: 0; }

/* --- MOBİL MENÜ --- */
.mobile-menu {
  position: fixed;
  top: 70px;
  left: 0;
  width: 100%;
  background: var(--surface);
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1.5rem;
  box-shadow: 0 10px 20px rgba(0,0,0,0.5);
}

.mobile-link {
  font-size: 1.5rem;
  color: white;
  text-decoration: none;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  padding-bottom: 0.5rem;
}

/* --- FOOTER --- */
.footer {
  background: var(--surface);
  padding: 4rem 2rem 1rem;
  margin-top: auto;
}

.footer-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
}

.footer h3 { color: var(--primary); margin-bottom: 1.5rem; }
.footer p, .footer li { opacity: 0.7; line-height: 1.8; }
.footer ul { list-style: none; padding: 0; }
.phone { color: var(--primary); text-decoration: none; font-weight: bold; display: block; margin-top: 10px; }

.footer-bottom {
  text-align: center;
  margin-top: 4rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255,255,255,0.05);
  font-size: 0.8rem;
  opacity: 0.5;
}

/* --- RESPONSIVE TASARIM (MOBİL UYUMLULUK) --- */
@media (max-width: 768px) {
  .desktop-menu { display: none; }
  .mobile-toggle { display: block; }
  .main-title { font-size: 1rem; }
  .footer-grid { text-align: center; }
}

/* --- ANIMASYONLAR --- */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.slide-enter-active, .slide-leave-active { transition: transform 0.3s ease; }
.slide-enter-from, .slide-leave-to { transform: translateY(-100%); }
</style>