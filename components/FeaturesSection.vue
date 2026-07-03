<template>
  <section id="features" class="features section-py">
    <div class="orb orb-purple" style="width:600px;height:600px;top:-100px;left:-200px;opacity:0.4;"></div>

    <div class="container">
      <div class="features-header">
        <div class="section-badge reveal">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
          Why Choose Us
        </div>
        <h2 class="section-title reveal reveal-delay-1">
          Your <span class="highlight">trusted</span> partner<br />
          in cryptocurrency.
        </h2>
        <p class="section-subtitle reveal reveal-delay-2">
          We combine cutting-edge security with an intuitive experience — giving every investor the tools they need to succeed.
        </p>
      </div>

      <div class="features-grid">
        <div
          v-for="(feature, i) in features"
          :key="feature.id"
          class="feature-card glass-card reveal"
          :class="`reveal-delay-${i + 1}`"
        >
          <div class="feature-top">
            <span class="feature-num">{{ String(i + 1).padStart(2, '0') }}.</span>
          </div>
          <h3 class="feature-title">{{ feature.title }}</h3>
          <p class="feature-desc">{{ feature.desc }}</p>
          <a :href="feature.link" class="feature-link">
            Learn more
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

const features = [
  { id: 1, title: 'Bank-Grade Security', desc: 'Multi-layer encryption, 2FA, and cold storage protect every asset. Your funds are insured up to $250K.', link: '#' },
  { id: 2, title: 'Advanced Analytics', desc: 'Real-time charts, portfolio tracking, and AI-powered insights help you make smarter decisions every day.', link: '#' },
  { id: 3, title: 'Lightning Fast Trades', desc: 'Execute trades in milliseconds with our high-performance matching engine — zero downtime guaranteed.', link: '#' },
  { id: 4, title: 'Multi-Chain Support', desc: 'Trade across Ethereum, Polkadot, Solana, and 50+ blockchains from one unified dashboard.', link: '#' },
  { id: 5, title: 'AI-Powered Insights', desc: 'Our AI scans 1M+ data points daily to surface personalized opportunities and risk alerts for your portfolio.', link: '#' },
  { id: 6, title: 'Instant Fiat On/Off Ramp', desc: 'Link your bank account and move funds in seconds. No fees for the first 3 months.', link: '#' }
]

onMounted(() => {
  const els = document.querySelectorAll('.reveal')
  const obs = new IntersectionObserver(
    es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
    { threshold: 0.12 }
  )
  els.forEach(el => obs.observe(el))
})
</script>

<style scoped>
.features { position: relative; overflow: hidden; }
.features-header { max-width: 620px; margin-bottom: 4rem; }
.features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-bottom: 4rem; }
.feature-card { padding: 2.25rem; position: relative; overflow: hidden; cursor: default; }
.feature-top { display: flex; justify-content: flex-end; margin-bottom: 1.25rem; }
.feature-num { font-size: 0.75rem; font-weight: 700; color: var(--text-muted); letter-spacing: 0.05em; }
.feature-title { font-size: 1.15rem; font-weight: 700; margin-bottom: 0.75rem; line-height: 1.3; color: var(--text-primary); }
.feature-desc { font-size: 0.9rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 1.5rem; }
.feature-link { display: inline-flex; align-items: center; gap: 0.4rem; font-size: 0.85rem; font-weight: 600; color: var(--accent); text-decoration: none; transition: gap var(--transition); }
.feature-link:hover { gap: 0.75rem; }
@media (max-width: 1024px) { .features-grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 580px) { .features-grid { grid-template-columns: 1fr; } }
</style>
