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
            <div class="time-pills">
              <button
                v-for="t in timeframes"
                :key="t"
                :class="['time-pill', { active: activeTime === t }]"
                @click="activeTime = t"
              >{{ t }}</button>
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

          <!-- Bottom row -->
          <div class="chart-metrics">
            <div class="metric">
              <span class="metric-label">24h High</span>
              <strong class="metric-val">$65,412</strong>
            </div>
            <div class="metric">
              <span class="metric-label">24h Low</span>
              <strong class="metric-val">$61,890</strong>
            </div>
            <div class="metric">
              <span class="metric-label">Volume</span>
              <strong class="metric-val">$28.4B</strong>
            </div>
            <div class="metric">
              <span class="metric-label">Market Cap</span>
              <strong class="metric-val">$1.24T</strong>
            </div>
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

          <div class="check-list">
            <div v-for="item in checkList" :key="item" class="check-item">
              <div class="check-icon">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <span>{{ item }}</span>
            </div>
          </div>

          <div class="chart-cta">
            <a href="#pricing" class="btn-primary">Start for Free</a>
            <a href="#faq" class="btn-secondary">Ask a question</a>
          </div>

          <!-- Mini trust card -->
          <div class="trust-mini glass-card">
            <div class="trust-rating">★★★★★</div>
            <p>"The best crypto platform I've ever used. Security is top-notch."</p>
            <div class="trust-author">
              <img src="https://i.pravatar.cc/32?img=11" alt="Reviewer" />
              <span>Marcus T. — Verified Investor</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const timeframes = ['1H', '24H', '7D', '1M', '1Y']
const activeTime = ref('24H')

const checkList = [
  'Zero-fee trading on 200+ crypto pairs',
  'Automated DCA strategies and alerts',
  'Cold storage with multi-sig security',
  'Tax reporting and profit/loss statements',
  '24/7 live support from crypto experts'
]

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

.chart-grid {
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 3rem;
  align-items: center;
}

/* Chart Card */
.chart-card {
  padding: 2rem;
}

.chart-card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.chart-sub {
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-bottom: 0.3rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.chart-price {
  font-size: 2.25rem;
  font-weight: 800;
  letter-spacing: -0.03em;
}

.chart-price-usd {
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-muted);
}

.rate-change {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  margin-top: 0.25rem;
}

.positive { color: #4ade80; }

.time-pills {
  display: flex;
  gap: 0.25rem;
  background: rgba(255,255,255,0.04);
  border-radius: var(--radius-full);
  padding: 3px;
}

.time-pill {
  border: none;
  background: none;
  color: var(--text-muted);
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.35rem 0.75rem;
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all var(--transition);
}

.time-pill.active {
  background: var(--accent);
  color: var(--text-dark);
}

.time-pill:hover:not(.active) {
  color: var(--text-primary);
  background: rgba(255,255,255,0.06);
}

/* SVG Chart */
.svg-chart-wrap {
  border-radius: var(--radius-md);
  overflow: hidden;
  background: rgba(196,255,0,0.02);
  border: 1px solid rgba(196,255,0,0.08);
  margin-bottom: 1.5rem;
}

.svg-chart {
  width: 100%;
  height: 140px;
  display: block;
}

/* Metrics */
.chart-metrics {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border);
}

.metric-label {
  display: block;
  font-size: 0.72rem;
  color: var(--text-muted);
  margin-bottom: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.metric-val {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-primary);
}

/* Right Content */
.chart-content { display: flex; flex-direction: column; gap: 1.5rem; }

.check-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.check-item {
  display: flex;
  align-items: center;
  gap: 0.875rem;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.check-icon {
  width: 22px; height: 22px;
  border-radius: 50%;
  background: rgba(196,255,0,0.15);
  color: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.7rem;
  font-weight: 800;
  flex-shrink: 0;
}

.chart-cta { display: flex; gap: 1rem; flex-wrap: wrap; }

/* Trust Mini */
.trust-mini {
  padding: 1.25rem 1.5rem;
}

.trust-rating { color: var(--accent); font-size: 0.85rem; margin-bottom: 0.5rem; }

.trust-mini p {
  font-size: 0.9rem;
  color: var(--text-secondary);
  font-style: italic;
  margin-bottom: 0.875rem;
  line-height: 1.5;
}

.trust-author {
  display: flex;
  align-items: center;
  gap: 0.625rem;
}

.trust-author img {
  width: 28px;
  height: 28px;
  border-radius: 50%;
}

.trust-author span {
  font-size: 0.78rem;
  color: var(--text-muted);
}

/* Responsive */
@media (max-width: 1024px) {
  .chart-grid { grid-template-columns: 1fr; }
  .chart-metrics { grid-template-columns: repeat(2, 1fr); }
}

@media (max-width: 480px) {
  .chart-metrics { grid-template-columns: repeat(2, 1fr); }
  .time-pills { flex-wrap: wrap; }
}
</style>
