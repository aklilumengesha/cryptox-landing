<template>
  <section id="about" class="chart-section section-py">
    <div class="orb orb-accent" style="width:500px;height:500px;top:50%;right:-150px;opacity:0.5;"></div>

    <div class="container">
      <div class="chart-grid">
        <!-- Left: Price Chart Card -->
        <div class="chart-card glass-card reveal">
          <div class="chart-card-header">
            <div>
              <p class="chart-sub">BTC/USD Live Price</p>
              <h3 class="chart-price">$64,528 <span class="chart-price-usd">USD</span></h3>
              <span class="rate-change positive">▲ +$2,841.12 (4.6%) 24h</span>
            </div>
          </div>

          <!-- SVG Chart -->
          <div class="svg-chart-wrap">
            <svg viewBox="0 0 400 140" preserveAspectRatio="none" class="svg-chart" aria-hidden="true">
              <defs>
                <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="rgba(196,255,0,0.3)"/>
                  <stop offset="100%" stop-color="rgba(196,255,0,0)"/>
                </linearGradient>
              </defs>
              <path
                d="M0,120 L40,100 L80,95 L120,70 L160,80 L200,55 L240,50 L280,65 L320,40 L360,30 L400,20"
                fill="none"
                stroke="rgba(196,255,0,0.6)"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M0,120 L40,100 L80,95 L120,70 L160,80 L200,55 L240,50 L280,65 L320,40 L360,30 L400,20 L400,140 L0,140 Z"
                fill="url(#chartGrad)"
              />
              <!-- Data points -->
              <circle cx="200" cy="55" r="5" fill="var(--accent)" />
              <circle cx="320" cy="40" r="5" fill="var(--accent)" />
              <circle cx="400" cy="20" r="6" fill="var(--accent)" stroke="rgba(8,8,16,1)" stroke-width="2"/>
            </svg>
          </div>
        </div>

        <!-- Right: Content -->
        <div class="chart-content reveal reveal-delay-2">
          <div class="section-badge">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            Platform Overview
          </div>
          <h2 class="section-title">
            Trusted <span class="highlight">platform</span><br />
            anytime &amp; anywhere.
          </h2>
          <p class="section-subtitle" style="margin-top:1rem;">
            From real-time price tracking to automated portfolio rebalancing — our platform does the heavy lifting so you can focus on growing your wealth.
          </p>
          <div class="chart-cta">
            <a href="#pricing" class="btn-primary">Start for Free</a>
            <a href="#faq" class="btn-secondary">Ask a question</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  const els = document.querySelectorAll('.reveal')
  const obs = new IntersectionObserver(
    es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
    { threshold: 0.1 }
  )
  els.forEach(el => obs.observe(el))
})
</script>

<style scoped>
.chart-section { position: relative; overflow: hidden; }
.chart-grid { display: grid; grid-template-columns: 1.1fr 1fr; gap: 3rem; align-items: center; }
.chart-card { padding: 2rem; }
.chart-card-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem; }
.chart-sub { font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.3rem; text-transform: uppercase; letter-spacing: 0.08em; }
.chart-price { font-size: 2.25rem; font-weight: 800; letter-spacing: -0.03em; }
.chart-price-usd { font-size: 1rem; font-weight: 500; color: var(--text-muted); }
.rate-change { display: block; font-size: 0.85rem; font-weight: 600; margin-top: 0.25rem; }
.positive { color: #4ade80; }
.svg-chart-wrap { border-radius: var(--radius-md); overflow: hidden; background: rgba(196,255,0,0.02); border: 1px solid rgba(196,255,0,0.08); margin-bottom: 1.5rem; }
.svg-chart { width: 100%; height: 140px; display: block; }
.chart-content { display: flex; flex-direction: column; gap: 1.5rem; }
.chart-cta { display: flex; gap: 1rem; flex-wrap: wrap; }
@media (max-width: 1024px) { .chart-grid { grid-template-columns: 1fr; } }
</style>
