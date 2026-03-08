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
          <router-link to="/" class="nav-link">Ballina</router-link>
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
        <div class="footer-info" style="color: white;">
          <h3>📍Contact us</h3>
          <p>Central District, Coffee Street, No: 12</p>
          <p>Kurilla / Prizren</p>
          <a href="tel:+902120000000" class="phone">+90 (212) 000 00 00</a>
        </div>
        <div class="footer-hours" style="color: white;">
          <h3>🕒 Working Hours</h3>
          <ul>
            <li>Weekdays: 07:00 - 23:00</li>
            <li>Weekend: 09:00 - 00:00</li>
          </ul>
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
         d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.1 0-65.6-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.4-8.6-44.6-27.6-16.5-14.7-27.6-32.8-30.8-38.4-3.2-5.6-.3-8.6 2.5-11.4 2.5-2.5 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.6-9.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.5 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
    </svg>
    <span class="text">WhatsApp</span>
  </button>

  <button class="Btn twitter">
    <svg
      class="svgIcon"
      viewBox="0 0 512 512"
      height="1.5em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.75l-11 71.69h-57.75V501C413.31 482.38 504 379.78 504 256z"
      ></path>
    </svg>
    <span class="text">Facebook</span>
  </button>
</div>
        </div>
<div class="map-wrapper">

    <div class="map-container">
      <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11818.986400853977!2d20.707368287158197!3d42.21986020000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1353956750daee73%3A0x8ef63b11a4ab319f!2sHome%20Lighting!5e0!3m2!1sen!2s!4v1772923328676!5m2!1sen!2s" 
      width="300" 
      height="250" 
      style="border:0;" 
      allowfullscreen=""
       loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>

  </div>
      </div>
      <div class="footer-bottom" style="color: white;">
        &copy;2026 CoffeeArt. All rights reserved.
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
  justify-content: center;
  margin-top: -10px;
  padding: 10px;
  margin-left: -218px;
}

.map-container {
  border: 2px solid #ccc;
  width: 300px;
  height: 250px;
  overflow: hidden;
  border-radius: 8px;
  margin-left: auto; 
  
  right: 20px;  
  top: 50%;    
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
  background-color: #40cd16;
}

.twitter {
  background-color: #1d44f2;
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

.desktop-menu{
  font-size: 25px !important;
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

.logo-icon { font-size: 4rem; }
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