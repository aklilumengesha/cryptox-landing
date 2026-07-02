<template>
  <section id="home" class="hero">
    <!-- Background Orbs -->
    <div class="orb orb-accent" style="width:700px;height:700px;top:-200px;right:-100px;opacity:0.7;"></div>
    <div class="orb orb-purple" style="width:500px;height:500px;bottom:-100px;left:-200px;opacity:0.5;"></div>

    <div class="container">
      <div class="hero-inner">
        <!-- LEFT -->
        <div class="hero-left">
          <!-- Badge -->
          <div class="section-badge reveal" style="gap:0.5rem;">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
            #1 Crypto Investing Platform
          </div>

          <!-- Headline -->
          <h1 class="hero-title reveal reveal-delay-1">
            Best crypto<br />
            <span class="highlight">investing platform</span><br />
            <span class="hero-sub-word">for your future.</span>
          </h1>

          <!-- Description -->
          <p class="hero-description reveal reveal-delay-2">
            Polkadot unites and secures a growing ecosystem of specialized blockchains. Invest smarter, grow faster, and keep your digital assets safe.
          </p>
        </div>

        <!-- RIGHT placeholder -->
        <div class="hero-right"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const els = document.querySelectorAll('.reveal')
  const observer = new IntersectionObserver(
    (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
    { threshold: 0.1 }
  )
  els.forEach(el => observer.observe(el))
})
</script>

<style scoped>
.hero {
  position: relative;
  padding: 8rem 0 4rem;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  align-items: center;
}

.hero-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
}

.hero-title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  line-height: 1.08;
  letter-spacing: -0.03em;
  margin-bottom: 1.5rem;
}

.hero-sub-word { color: var(--text-muted); }

.hero-description {
  color: var(--text-secondary);
  font-size: 1.05rem;
  line-height: 1.75;
  max-width: 480px;
  margin-bottom: 2.25rem;
}

@media (max-width: 1024px) {
  .hero-inner { grid-template-columns: 1fr; gap: 3rem; }
}
</style>
