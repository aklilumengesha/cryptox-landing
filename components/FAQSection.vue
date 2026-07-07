<template>
  <section id="faq" class="faq section-py">
    <div class="container">
      <div class="faq-inner">
        <!-- Left -->
        <div class="faq-left">
          <div class="section-badge reveal">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            FAQ
          </div>
          <h2 class="section-title reveal reveal-delay-1">
            Frequently<br /><span class="highlight">asked questions.</span>
          </h2>
          <p class="section-subtitle reveal reveal-delay-2">
            Still have questions? Reach out to our support team 24/7 and we'll respond within minutes.
          </p>
          <a href="mailto:support@crypto.app" class="btn-secondary reveal reveal-delay-3" style="margin-top:1.5rem;">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,12 2,6"/></svg>
            Contact Support
          </a>
        </div>

        <!-- Right: Accordion -->
        <div class="faq-list">
          <div
            v-for="(item, i) in faqs"
            :key="item.id"
            class="faq-item reveal"
            :class="`reveal-delay-${i + 1}`"
          >
            <button
              class="faq-question"
              @click="toggle(item.id)"
              :aria-expanded="openId === item.id"
              :id="`faq-btn-${item.id}`"
              :aria-controls="`faq-panel-${item.id}`"
            >
              <span>{{ item.question }}</span>
              <div class="faq-chevron" :class="{ open: openId === item.id }">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M6 9l6 6 6-6"/></svg>
              </div>
            </button>

            <Transition name="accordion">
              <div
                v-if="openId === item.id"
                class="faq-answer"
                :id="`faq-panel-${item.id}`"
                role="region"
                :aria-labelledby="`faq-btn-${item.id}`"
              >
                <p>{{ item.answer }}</p>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const openId = ref(1)

function toggle (id) {
  openId.value = openId.value === id ? null : id
}

const faqs = [
  {
    id: 1,
    question: 'Is my money safe on CRYPTO.?',
    answer: 'Absolutely. We use bank-grade encryption, multi-signature cold storage, and 2-factor authentication on every account. All assets are insured through our partner custodians up to $250,000 per account.'
  },
  {
    id: 2,
    question: 'How do I get started?',
    answer: 'Sign up in under 2 minutes with your email. Complete KYC verification (usually takes < 24 hours), fund your account via bank transfer or card, and start investing. Our onboarding flow guides you every step of the way.'
  },
  {
    id: 3,
    question: 'What cryptocurrencies do you support?',
    answer: 'We support 200+ cryptocurrencies across 50+ blockchains including Bitcoin, Ethereum, Solana, Polkadot, Chainlink, and all major DeFi tokens. New assets are added monthly based on user demand.'
  },
  {
    id: 4,
    question: 'Are there any trading fees?',
    answer: 'The Starter plan is completely free with no trading fees for the first 10 trades per month. Pro and Enterprise plans include unlimited zero-fee trades on all pairs. We earn a small spread on conversions, which is always displayed upfront.'
  },
  {
    id: 5,
    question: 'Can I transfer my existing portfolio?',
    answer: 'Yes! You can import your existing wallets and portfolio data from Binance, Coinbase, Kraken, Ledger, and more using our one-click migration tool. Your full history, PnL, and tax records migrate automatically.'
  },
  {
    id: 6,
    question: 'Do you offer mobile apps?',
    answer: 'We have native iOS and Android apps with feature parity to the web platform — including biometric login, real-time push alerts, and full trading capabilities. Available on the App Store and Google Play.'
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
.faq-inner {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 5rem;
  align-items: start;
}

.faq-left {
  position: sticky;
  top: 100px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
}

.faq-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.faq-item {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  overflow: hidden;
  transition: border-color var(--transition), box-shadow var(--transition);
}

.faq-item:has(.faq-answer) {
  border-color: var(--border-accent);
  box-shadow: 0 8px 30px rgba(196,255,0,0.06);
}

.faq-question {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 1.35rem 1.5rem;
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 0.95rem;
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  transition: color var(--transition);
}

.faq-question:hover { color: var(--accent); }

.faq-chevron {
  flex-shrink: 0;
  color: var(--text-muted);
  transition: transform 0.3s ease, color 0.3s ease;
}

.faq-chevron.open {
  transform: rotate(180deg);
  color: var(--accent);
}

.faq-answer {
  padding: 0 1.5rem 1.35rem;
}

.faq-answer p {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.75;
}

/* Accordion Transition */
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
  padding-bottom: 0;
}

.accordion-enter-to,
.accordion-leave-from {
  max-height: 300px;
  opacity: 1;
}

/* Responsive */
@media (max-width: 1024px) {
  .faq-inner { grid-template-columns: 1fr; gap: 3rem; }
  .faq-left { position: static; }
}
</style>
