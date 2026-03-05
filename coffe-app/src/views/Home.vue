<template>
  <div class="home-page">
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-content" data-aos="fade-up">
        <span class="badge">EST. 2026</span>
        <h1>Real Coffee<br><span class="highlight">Meeting Art</span></h1>
        <p style="color: white;">We transform beans sourced from the world's most select farms into works of art with the touch of our master baristas.</p>
        <div class="hero-btns">
          <router-link to="/menu" class="btn-primary">Explore the Menu</router-link>
          <a href="#services" class="btn-secondary">Our services</a>
        </div>
      </div>
    </section>

    <section class="stats-bar">
      <div class="stat-item">
        <span class="number">15+</span>
        <span class="label">Coffee Type</span>
      </div>
      <div class="stat-item">
        <span class="number">10k+</span>
        <span class="label">Happy Customer</span>
      </div>
      <div class="stat-item">
        <span class="number">5</span>
        <span class="label">Branch</span>
      </div>
      <div class="stat-item">
        <span class="number">120+</span>
        <span class="label">Daily Roasting</span>
      </div>
    </section>

    <section id="services" class="services" style="color: white;">
      <div class="section-title">
        <h2>Why Us?</h2>
        <div class="underline"></div>
      </div>
      <div class="services-grid">
        <div class="service-card">
          <div class="s-icon">🌱</div>
          <h3>100% Organic</h3>
          <p>We only use ethically farmed and organically certified beans.</p>
        </div>
        <div class="service-card">
          <div class="s-icon">🔥</div>
          <h3>Fresh Roasting</h3>
          <p>We roast our coffee fresh in our shop every morning.</p>
        </div>
        <div class="service-card">
          <div class="s-icon">🚚</div>
          <h3>Fast Delivery</h3>
          <p>Your hot coffee will be at your door in 15 minutes.</p>
        </div>
        <div class="service-card">
          <div class="s-icon">👨‍🎨</div>
          <h3>Master Baristas</h3>
          <p>We present a visual feast with our team of latte art champions.</p>
        </div>
      </div>
    </section>

    <section class="special-promo">
      <div class="promo-image">☕</div>
      <div class="promo-text">
        <span class="promo-tag">Günün Fırsatı</span>
        <h2>Karamel Macchiato %30 İndirimli!</h2>
        <p>Sadece bugün geçerli olan bu fırsatı kaçırmayın. Yanında taze kruvasan hediye!</p>
        <button class="btn-promo">Hemen Sipariş Ver</button>
      </div>
    </section>

    <section class="testimonials">
      <h2>Müşterilerimiz Ne Diyor?</h2>
      <div class="t-grid">
        <div class="t-card">
          <p>"İstanbul'da içtiğim en iyi Flat White! Atmosfer harika."</p>
          <h4>- Ahmet Yılma</h4>
        </div>
        <div class="t-card">
          <p>"Çalışmak için mükemmel bir ortam, internet hızı ve kahveler 10 numara."</p>
          <h4>- Selin Deniz</h4>
        </div>
      </div>
    </section>

    <section class="social-feed">
      <h3>Bizi @CoffeeArt hesabından takip edin</h3>
      <div class="insta-grid">
        <div class="insta-post p1"></div>
        <div class="insta-post p2"></div>
        <div class="insta-post p3"></div>
        <div class="insta-post p4"></div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* --- GENEL TASARIM --- */
.home-page {
  overflow-x: hidden;
  background: #121212;
}

.section-title {
  text-align: center;
  margin-bottom: 50px;
}

.section-title h2 {
  font-size: 2.5rem;
  color: #d2a679;
}

.underline {
  width: 80px;
  height: 4px;
  background: #d2a679;
  margin: 10px auto;
}

/* --- 1. HERO SECTION --- */
.hero {
  height: 90vh;
  position: relative;
  background-image: url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.4));
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
  padding: 20px;
}

.badge {
  background: #d2a679;
  color: #121212;
  padding: 5px 15px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 0.9rem;
}

h1 {
  font-size: 4rem;
  color: white;
  margin: 20px 0;
  line-height: 1.1;
}

.highlight {
  color: #d2a679;
  font-style: italic;
}

.hero-btns {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 30px;
}

.btn-primary {
  background: #d2a679;
  color: #121212;
  padding: 15px 35px;
  border-radius: 30px;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;
}

.btn-secondary {
  border: 2px solid white;
  color: white;
  padding: 15px 35px;
  border-radius: 30px;
  text-decoration: none;
  transition: 0.3s;
}

/* --- 2. STATS BAR --- */
.stats-bar {
  display: flex;
  justify-content: space-around;
  background: #1e1e1e;
  padding: 40px 10%;
  border-bottom: 1px solid #333;
}

.stat-item {
  text-align: center;
}

.stat-item .number {
  display: block;
  font-size: 2.5rem;
  color: #d2a679;
  font-weight: 800;
}

/* --- 3. SERVICES --- */
.services {
  padding: 80px 10%;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
}

.service-card {
  background: #1e1e1e;
  padding: 40px;
  border-radius: 15px;
  text-align: center;
  transition: 0.3s;
  border: 1px solid #333;
}

.service-card:hover {
  transform: translateY(-10px);
  border-color: #d2a679;
}

.s-icon { font-size: 3rem; margin-bottom: 20px; }

/* --- 4. SPECIAL PROMO --- */
.special-promo {
  background: #d2a679;
  margin: 50px 10%;
  border-radius: 20px;
  display: flex;
  align-items: center;
  padding: 50px;
  color: #121212;
  gap: 40px;
}

.promo-image { font-size: 8rem; }

.promo-tag {
  background: #121212;
  color: white;
  padding: 4px 12px;
  border-radius: 5px;
}

/* --- MOBİL UYUMLULUK --- */
@media (max-width: 768px) {
  h1 { font-size: 2.5rem; }
  .stats-bar { flex-direction: column; gap: 30px; }
  .special-promo { flex-direction: column; text-align: center; }
  .hero-btns { flex-direction: column; }
}

.label{
  color: white;
}
</style>