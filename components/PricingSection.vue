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
          :class="[`reveal-delay-${plan.id}`, { 'price-card--featured': plan.featured }]"
        >
          <!-- Popular Badge -->
          <div v-if="plan.featured" class="featured-badge">Most Popular</div>

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
            <li v-for="feat in plan.features" :key="feat.text" :class="{ disabled: !feat.included }">
              <span class="feat-icon">
                <svg v-if="feat.included" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                <svg v-else width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </span>
              {{ feat.text }}
            </li>
          </ul>

          <a :href="plan.cta.link" :class="['plan-cta', plan.featured ? 'btn-primary' : 'btn-secondary']">
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
    featured: false,
    cta: { label: 'Start Free', link: '#' },
    features: [
      { text: 'Up to 3 crypto wallets', included: true },
      { text: 'Basic portfolio tracking', included: true },
      { text: '10 trades/month', included: true },
      { text: 'Email support', included: true },
      { text: 'Advanced analytics', included: false },
      { text: 'AI-powered insights', included: false },
      { text: 'Priority support', included: false }
    ]
  },
  {
    id: 2,
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    name: 'Pro',
    desc: 'For active traders and investors.',
    monthlyPrice: '29',
    annualPrice: '23',
    featured: true,
    cta: { label: 'Get Pro', link: '#' },
    features: [
      { text: 'Unlimited wallets', included: true },
      { text: 'Advanced analytics', included: true },
      { text: 'Unlimited trades', included: true },
      { text: 'AI-powered insights', included: true },
      { text: 'Automated DCA strategies', included: true },
      { text: 'Priority 24/7 support', included: true },
      { text: 'White-glove onboarding', included: false }
    ]
  },
  {
    id: 3,
    icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
    name: 'Enterprise',
    desc: 'For funds, DAOs, and teams.',
    monthlyPrice: '99',
    annualPrice: '79',
    featured: false,
    cta: { label: 'Contact Sales', link: '#' },
    features: [
      { text: 'Everything in Pro', included: true },
      { text: 'Dedicated account manager', included: true },
      { text: 'Custom integrations & APIs', included: true },
      { text: 'Multi-user team access', included: true },
      { text: 'SLA uptime guarantee', included: true },
      { text: 'Tax reporting suite', included: true },
      { text: 'White-glove onboarding', included: true }
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

/* Grid */
.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
  align-items: start;
}

/* Cards */
.price-card {
  padding: 2.25rem;
  position: relative;
  transition: all 0.4s ease;
}

.price-card--featured {
  border-color: var(--border-accent);
  background: linear-gradient(160deg, rgba(196,255,0,0.08) 0%, rgba(196,255,0,0.02) 100%);
  box-shadow: 0 20px 60px rgba(196,255,0,0.12), 0 0 0 1px var(--border-accent);
  transform: translateY(-8px);
}

.price-card--featured:hover { transform: translateY(-14px); }

.price-card--featured::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--accent), transparent);
}

.featured-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--accent);
  color: var(--text-dark);
  font-size: 0.72rem;
  font-weight: 800;
  padding: 4px 14px;
  border-radius: var(--radius-full);
  white-space: nowrap;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.plan-icon { font-size: 2rem; margin-bottom: 1rem; }
.plan-name { font-size: 1.3rem; font-weight: 800; margin-bottom: 0.35rem; }
.plan-desc { font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.5rem; }
.plan-header { margin-bottom: 1.25rem; }

.plan-price {
  display: flex;
  align-items: flex-end;
  gap: 0.1rem;
  margin-bottom: 0.25rem;
}

.price-currency { font-size: 1.25rem; font-weight: 700; color: var(--text-secondary); margin-bottom: 0.4rem; }
.price-amount { font-size: 3rem; font-weight: 900; letter-spacing: -0.04em; line-height: 1; }
.price-period { font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem; }

.annual-note {
  font-size: 0.78rem;
  color: var(--text-muted);
  margin-bottom: 1.75rem;
}

/* Features List */
.plan-features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin: 1.75rem 0;
}

.plan-features li {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.88rem;
  color: var(--text-secondary);
}

.plan-features li.disabled {
  color: var(--text-muted);
  opacity: 0.5;
}

.feat-icon {
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: rgba(196,255,0,0.12);
  color: var(--accent);
  font-size: 0.65rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.disabled .feat-icon {
  background: rgba(255,255,255,0.05);
  color: var(--text-muted);
}

.plan-cta {
  display: block;
  text-align: center;
  width: 100%;
  padding: 0.875rem;
}

@media (max-width: 1024px) {
  .pricing-grid { grid-template-columns: 1fr; max-width: 420px; margin: 0 auto 3rem; }
  .price-card--featured { transform: none; }
  .price-card--featured:hover { transform: translateY(-6px); }
}
</style>
