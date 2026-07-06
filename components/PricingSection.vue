<template>
  <section id="pricing" class="pricing section-py">
    <div class="orb orb-purple" style="width:600px;height:600px;bottom:-200px;right:-150px;opacity:0.4;"></div>

    <div class="container">
      <!-- Header -->
      <div class="pricing-header">
        <div class="section-badge reveal">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
          Pricing Plans
        </div>
        <h2 class="section-title reveal reveal-delay-1">
          Simple, <span class="highlight">transparent</span> pricing.
        </h2>
        <p class="section-subtitle reveal reveal-delay-2">
          Start free, upgrade when you're ready. No hidden fees, ever.
        </p>

        <!-- Billing Toggle -->
        <div class="billing-toggle reveal reveal-delay-3">
          <span :class="{ 'toggle-active': !annual }">Monthly</span>
          <button class="toggle-btn" @click="annual = !annual" :aria-pressed="annual" aria-label="Toggle annual billing">
            <div class="toggle-knob" :class="{ 'knob-right': annual }"></div>
          </button>
          <span :class="{ 'toggle-active': annual }">
            Annual
            <span class="save-badge">Save 20%</span>
          </span>
        </div>
      </div>

      <!-- Pricing Cards -->
      <div class="pricing-grid">
        <div
          v-for="plan in plans"
          :key="plan.id"
          class="price-card glass-card reveal"
          :class="`reveal-delay-${plan.id}`"
        >
          <div class="plan-header">
            <div class="plan-icon" v-html="plan.icon"></div>
            <h3 class="plan-name">{{ plan.name }}</h3>
            <p class="plan-desc">{{ plan.desc }}</p>
          </div>

          <div class="plan-price">
            <span class="price-currency">$</span>
            <span class="price-amount">{{ annual ? plan.annualPrice : plan.monthlyPrice }}</span>
            <span class="price-period">/ mo</span>
          </div>

          <div v-if="annual && plan.monthlyPrice !== '0'" class="annual-note">
            Billed ${{ parseInt(plan.annualPrice) * 12 }}/year
          </div>

          <ul class="plan-features">
            <li v-for="feat in plan.features" :key="feat.text">
              {{ feat.text }}
            </li>
          </ul>

          <a :href="plan.cta.link" class="plan-cta btn-secondary">
            {{ plan.cta.label }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const annual = ref(true)

const plans = [
  {
    id: 1,
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
    name: 'Starter',
    desc: 'Perfect for crypto beginners.',
    monthlyPrice: '0',
    annualPrice: '0',
    cta: { label: 'Start Free', link: '#' },
    features: [
      { text: 'Up to 3 crypto wallets' },
      { text: 'Basic portfolio tracking' },
      { text: '10 trades/month' },
      { text: 'Email support' }
    ]
  },
  {
    id: 2,
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    name: 'Pro',
    desc: 'For active traders and investors.',
    monthlyPrice: '29',
    annualPrice: '23',
    cta: { label: 'Get Pro', link: '#' },
    features: [
      { text: 'Unlimited wallets' },
      { text: 'Advanced analytics' },
      { text: 'Unlimited trades' },
      { text: 'AI-powered insights' },
      { text: 'Automated DCA strategies' },
      { text: 'Priority 24/7 support' }
    ]
  },
  {
    id: 3,
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
    name: 'Enterprise',
    desc: 'For funds, DAOs, and teams.',
    monthlyPrice: '99',
    annualPrice: '79',
    cta: { label: 'Contact Sales', link: '#' },
    features: [
      { text: 'Everything in Pro' },
      { text: 'Dedicated account manager' },
      { text: 'Custom integrations & APIs' },
      { text: 'Multi-user team access' },
      { text: 'SLA uptime guarantee' },
      { text: 'Tax reporting suite' },
      { text: 'White-glove onboarding' }
    ]
  }
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
.pricing { position: relative; overflow: hidden; }
.pricing-header { text-align: center; max-width: 640px; margin: 0 auto 4rem; display: flex; flex-direction: column; align-items: center; gap: 1rem; }

/* Billing Toggle */
.billing-toggle {
  display: flex;
  align-items: center;
  gap: 0.875rem;
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-top: 0.5rem;
}

.toggle-active { color: var(--text-primary); font-weight: 600; }

.toggle-btn {
  width: 48px;
  height: 26px;
  border-radius: 99px;
  background: var(--border);
  border: none;
  cursor: pointer;
  position: relative;
  transition: background var(--transition);
}

.toggle-btn:has(.knob-right) {
  background: var(--accent);
}

.toggle-knob {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: white;
  transition: transform var(--transition);
}

.knob-right { transform: translateX(22px); }

.save-badge {
  display: inline-block;
  background: rgba(196,255,0,0.15);
  color: var(--accent);
  border-radius: var(--radius-full);
  font-size: 0.7rem;
  font-weight: 700;
  padding: 2px 8px;
  margin-left: 0.35rem;
}

.pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem; margin-bottom: 3rem; align-items: start; }
.price-card { padding: 2.25rem; position: relative; }
.plan-icon { font-size: 2rem; margin-bottom: 1rem; }
.plan-name { font-size: 1.3rem; font-weight: 800; margin-bottom: 0.35rem; }
.plan-desc { font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.5rem; }
.plan-header { margin-bottom: 1.25rem; }
.plan-price { display: flex; align-items: flex-end; gap: 0.1rem; margin-bottom: 0.25rem; }
.price-currency { font-size: 1.25rem; font-weight: 700; color: var(--text-secondary); margin-bottom: 0.4rem; }
.price-amount { font-size: 3rem; font-weight: 900; letter-spacing: -0.04em; line-height: 1; }
.price-period { font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem; }

.annual-note {
  font-size: 0.78rem;
  color: var(--text-muted);
  margin-bottom: 1.75rem;
}

.plan-features { list-style: none; display: flex; flex-direction: column; gap: 0.75rem; margin: 1.75rem 0; }
.plan-features li { font-size: 0.88rem; color: var(--text-secondary); }
.plan-cta { display: block; text-align: center; width: 100%; padding: 0.875rem; }
@media (max-width: 1024px) { .pricing-grid { grid-template-columns: 1fr; max-width: 420px; margin: 0 auto 3rem; } }
</style>
