<template>
  <section class="cta section-py">
    <div class="container">
      <div class="cta-card reveal">
        <!-- Decorative orbs inside card -->
        <div class="cta-orb cta-orb-left"></div>
        <div class="cta-orb cta-orb-right"></div>

        <div class="cta-content">
          <div class="section-badge cta-badge">🎯 Get Started Today</div>
          <h2 class="cta-title">
            Ready to grow your<br />
            <span class="highlight">crypto wealth?</span>
          </h2>
          <p class="cta-desc">
            Join 168,000+ investors who trust CRYPTO. to secure and grow their digital assets. Start free, no credit card needed.
          </p>

          <div class="cta-actions">
            <a href="#pricing" class="btn-primary cta-btn-main" id="cta-main-btn">
              Start for Free
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a href="#features" class="cta-link">
              Learn more about features →
            </a>
          </div>

          <div class="cta-trust">
            <div class="cta-trust-item">
              <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></span>
              <span>Bank-grade security</span>
            </div>
            <div class="cta-trust-item">
              <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></span>
              <span>No credit card</span>
            </div>
            <div class="cta-trust-item">
              <span><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg></span>
              <span>30-day money back</span>
            </div>
          </div>
        </div>

        <!-- Right decoration -->
        <div class="cta-deco" aria-hidden="true">
          <div class="deco-ring deco-ring-1"></div>
          <div class="deco-ring deco-ring-2"></div>
          <div class="deco-coin btc">₿</div>
          <div class="deco-coin eth">Ξ</div>
          <div class="deco-coin dot">◈</div>
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
    { threshold: 0.15 }
  )
  els.forEach(el => obs.observe(el))
})
</script>

<style scoped>
.cta { position: relative; }

.cta-card {
  position: relative;
  background: linear-gradient(135deg, rgba(196,255,0,0.1) 0%, rgba(124,58,237,0.1) 100%);
  border: 1px solid rgba(196,255,0,0.2);
  border-radius: var(--radius-xl);
  padding: 5rem 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  overflow: hidden;
  box-shadow: 0 30px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06);
}

.cta-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(196,255,0,0.5), transparent);
}

.cta-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(80px);
  pointer-events: none;
}

.cta-orb-left {
  width: 350px;
  height: 350px;
  background: rgba(196,255,0,0.12);
  top: -100px;
  left: -100px;
}

.cta-orb-right {
  width: 300px;
  height: 300px;
  background: rgba(124,58,237,0.12);
  bottom: -80px;
  right: -80px;
}

.cta-content {
  position: relative;
  z-index: 2;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.25rem;
}

.cta-badge {
  color: var(--accent);
  border-color: var(--border-accent);
}

.cta-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.03em;
}

.cta-desc {
  font-size: 1rem;
  color: var(--text-secondary);
  max-width: 480px;
  line-height: 1.7;
}

.cta-actions {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.cta-btn-main {
  padding: 1rem 2.25rem;
  font-size: 1rem;
}

.cta-link {
  font-size: 0.9rem;
  color: var(--text-secondary);
  text-decoration: none;
  font-weight: 500;
  transition: color var(--transition);
}

.cta-link:hover { color: var(--accent); }

.cta-trust {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.cta-trust-item {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.82rem;
  color: var(--text-muted);
}

/* Right Decoration */
.cta-deco {
  position: relative;
  width: 280px;
  height: 280px;
  flex-shrink: 0;
}

.deco-ring {
  position: absolute;
  border-radius: 50%;
  border: 1.5px dashed rgba(196,255,0,0.2);
  top: 50%;
  left: 50%;
}

.deco-ring-1 {
  width: 220px;
  height: 220px;
  transform: translate(-50%, -50%);
  animation: spin-slow 30s linear infinite;
}

.deco-ring-2 {
  width: 280px;
  height: 280px;
  transform: translate(-50%, -50%);
  border-color: rgba(124,58,237,0.15);
  animation: spin-slow 20s linear infinite reverse;
}

@keyframes spin-slow {
  from { transform: translate(-50%, -50%) rotate(0deg); }
  to   { transform: translate(-50%, -50%) rotate(360deg); }
}

.deco-coin {
  position: absolute;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  font-weight: 800;
  border: 2px solid var(--border);
  backdrop-filter: blur(10px);
  animation: float-coin 4s ease-in-out infinite;
}

.deco-coin.btc {
  background: rgba(247,147,26,0.15);
  color: #f7931a;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  animation-delay: 0s;
}

.deco-coin.eth {
  background: rgba(98,126,234,0.15);
  color: #627eea;
  bottom: 20px;
  left: 20px;
  animation-delay: 1.5s;
}

.deco-coin.dot {
  background: rgba(196,255,0,0.12);
  color: var(--accent);
  bottom: 20px;
  right: 20px;
  animation-delay: 3s;
}

@keyframes float-coin {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}

.deco-coin.btc { animation: float-coin 4s ease-in-out infinite; }

/* Responsive */
@media (max-width: 1024px) {
  .cta-card { padding: 3.5rem 2.5rem; flex-direction: column; text-align: center; }
  .cta-content { align-items: center; }
  .cta-deco { display: none; }
}

@media (max-width: 480px) {
  .cta-card { padding: 2.5rem 1.5rem; }
  .cta-actions { flex-direction: column; align-items: stretch; }
  .cta-btn-main { text-align: center; justify-content: center; }
}
</style>
