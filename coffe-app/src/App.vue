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
      <div class="container">
  <button class="Btn instagram">
    <svg
      class="svgIcon"
      viewBox="0 0 448 512"
      height="1.5em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
      ></path>
    </svg>
    <span class="text">Instagram</span>
  </button>

  <button class="Btn youtube">
    <svg
      class="svgIcon"
      viewBox="0 0 576 512"
      height="1.5em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M549.655 148.28c-6.281-23.64-24.041-42.396-47.655-48.685C462.923 85 288 85 288 85S113.077 85 74 99.595c-23.614 6.289-41.374 25.045-47.655 48.685-12.614 47.328-12.614 147.717-12.614 147.717s0 100.39 12.614 147.718c6.281 23.64 24.041 42.396 47.655 48.684C113.077 427 288 427 288 427s174.923 0 214-14.595c23.614-6.289 41.374-25.045 47.655-48.685 12.614-47.328 12.614-147.718 12.614-147.718s0-100.389-12.614-147.717zM240 336V176l144 80-144 80z"
      ></path>
    </svg>
    <span class="text">YouTube</span>
  </button>

  <button class="Btn twitter">
    <svg
      class="svgIcon"
      viewBox="0 0 512 512"
      height="1.5em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M512 97.248c-18.84 8.36-39.082 14.008-60.277 16.54 21.62-12.92 38.212-33.216 46.042-57.45-20.242 12-42.71 20.67-66.61 25.41-19.128-20.412-46.344-33.21-76.51-33.21-58 0-105 47-105 105 0 8.22.926 16.188 2.714 23.914-87.18-4.376-164.66-46.2-216.45-109.97-9.066 15.508-14.254 33.586-14.254 52.836 0 36.37 18.54 68.542 46.844 87.428-17.272-.554-33.52-5.286-47.754-13.158v1.32c0 50.828 36.13 93.15 84.198 102.79-8.826 2.396-18.14 3.686-27.734 3.686-6.78 0-13.34-.664-19.676-1.902 13.36 41.77 52.164 72.198 98.116 73.052-35.96 28.17-81.38 44.99-130.76 44.99-8.54 0-16.94-.5-25.14-1.476 46.684 29.922 101.99 47.31 161.18 47.31 193.32 0 298.924-160.078 298.924-298.926 0-4.554-.106-9.086-.306-13.594 20.546-14.824 38.364-33.298 52.456-54.422z"
      ></path>
    </svg>
    <span class="text">Twitter</span>
  </button>
</div>

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
        <div class="footer-info" style="color: white;">
          <h3>📍Contact us</h3>
          <p>Central District, Coffee Street, No: 12</p>
          <p>Şişli / İstanbul</p>
          <a href="tel:+902120000000" class="phone">+90 (212) 000 00 00</a>
        </div>
        <div class="footer-hours" style="color: white;">
          <h3>🕒 Working Hours</h3>
          <ul>
            <li>Weekdays: 07:00 - 23:00</li>
            <li>Weekend: 09:00 - 00:00</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom" style="color: white;">
        &copy;2024 CoffeeArt. All rights reserved.
      </div>
    </footer>
  </div>
</template>

<style>

:root {
  --primary: #d2a679;
  --primary-dark: #b08968;
  --bg-dark: #121212;
  --surface: #1e1e1e;
  --text-light: #f5f5f5;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.container {
  display: flex;
  justify-content: right;
  margin-top: -50px;
  padding: 10px;
}

.Btn {
  border: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: 0.4s;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  margin-left: 10px;
}

.instagram {
  background: #f09433;
  background: -moz-linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  background: -webkit-linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  background: linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
}

.youtube {
  background-color: #ff0000;
}

.twitter {
  background-color: #1da1f2;
}

.Btn:hover {
  width: 110px;
  transition-duration: 0.4s;
  border-radius: 30px;
}

.Btn:hover .text {
  opacity: 1;
  transition-duration: 0.4s;
}

.Btn:hover .svgIcon {
  opacity: 0;
  transition-duration: 0.3s;
}

.text {
  position: absolute;
  color: rgb(255, 255, 255);
  width: 120px;
  font-weight: 600;
  opacity: 0;
  transition-duration: 0.4s;
}

.svgIcon {
  transition-duration: 0.3s;
}

.svgIcon path {
  fill: white;
}


:global(body) {
  margin: 0;
  padding: 0;
  background-color: var(--bg-dark);
  color: var(--text-light);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  overflow-x: hidden;
}

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

@media (max-width: 768px) {
  .desktop-menu { display: none; }
  .mobile-toggle { display: block; }
  .main-title { font-size: 1rem; }
  .footer-grid { text-align: center; }
  .container{display: none;}
}

@media (max-width: 1024px) {
  .container {
    display: none !important;
  }

  .desktop-menu { 
    display: none !important; 
  }
  
  .mobile-toggle { 
    display: block !important; 
  }

  .navbar { 
    padding: 0.8rem 0; 
  }
  
  .nav-container { 
    padding: 0 1.5rem; 
  }

  .logo-icon { 
    font-size: 1.6rem; 
  }
  
  .main-title { 
    font-size: 1.1rem; 
  }

  .mobile-menu {
    top: 65px; 
    z-index: 1100;
  }

  .footer-grid {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 2rem;
  }
}

@media (max-width: 480px) {
  .main-title { font-size: 0.9rem; }
  .logo-icon { font-size: 1.4rem; }
  .nav-container { padding: 0 1rem; }
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

.slide-enter-active, .slide-leave-active { transition: transform 0.3s ease; }
.slide-enter-from, .slide-leave-to { transform: translateY(-100%); }
</style>