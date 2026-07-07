<template>
  <section class="testimonials section-py">
    <div class="orb orb-blue" style="width:500px;height:500px;top:0;left:50%;transform:translateX(-50%);opacity:0.3;"></div>

    <div class="container">
      <div class="testimonials-header">
        <div class="section-badge reveal">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          Testimonials
        </div>
        <h2 class="section-title reveal reveal-delay-1">
          Loved by <span class="highlight">168K+</span> investors
        </h2>
        <p class="section-subtitle reveal reveal-delay-2">
          Don't just take our word for it — hear from real investors using CRYPTO. every day.
        </p>
      </div>

      <!-- Base Carousel -->
      <div class="carousel-wrap reveal reveal-delay-2">
        <div class="carousel-container">
          <div
            v-for="(t, i) in testimonials"
            :key="t.id"
            class="tcard glass-card"
            :class="{ active: i === activeIndex }"
          >
            <div class="tcard-stars">
              <span v-for="s in t.stars" :key="s">★</span>
            </div>
            <p class="tcard-quote">"{{ t.quote }}"</p>
            <div class="tcard-author">
              <img :src="t.avatar" :alt="t.name" loading="lazy" />
              <div>
                <strong>{{ t.name }}</strong>
                <span>{{ t.role }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const activeIndex = ref(0)

const testimonials = [
  {
    id: 1,
    stars: 5,
    quote: "CRYPTO. completely changed how I invest. The AI insights alone saved me $12K in a volatile market. Absolutely the best platform I've used.",
    name: 'Sarah Johnson',
    role: 'Retail Investor, New York',
    avatar: 'https://i.pravatar.cc/56?img=5'
  },
  {
    id: 2,
    stars: 5,
    quote: "The security features give me true peace of mind. Multi-sig cold storage, 2FA, and insured wallets — I finally feel safe holding large amounts.",
    name: 'Marcus Chen',
    role: 'Crypto Fund Manager, Singapore',
    avatar: 'https://i.pravatar.cc/56?img=3'
  },
  {
    id: 3,
    stars: 5,
    quote: "As a total beginner, the UX made everything so simple. I went from zero to a diversified portfolio in one afternoon. The support team is incredible.",
    name: 'Aisha Okonkwo',
    role: 'First-time Investor, Lagos',
    avatar: 'https://i.pravatar.cc/56?img=9'
  },
  {
    id: 4,
    stars: 5,
    quote: "The automated DCA strategy saved me hours every week. My returns are up 38% YoY and I barely have to touch the app. Brilliant engineering.",
    name: 'Leon Weber',
    role: 'Software Engineer, Berlin',
    avatar: 'https://i.pravatar.cc/56?img=7'
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
.testimonials { position: relative; overflow: hidden; }
.testimonials-header { text-align: center; max-width: 600px; margin: 0 auto 3.5rem; display: flex; flex-direction: column; align-items: center; gap: 1rem; }
.carousel-wrap { width: 100%; max-width: 600px; margin: 0 auto; }
.carousel-container { position: relative; height: 320px; display: flex; justify-content: center; align-items: center; }
.tcard { position: absolute; width: 100%; padding: 2.5rem; display: flex; flex-direction: column; gap: 1.5rem; border-radius: var(--radius-xl); background: var(--bg-card); opacity: 0; pointer-events: none; transition: opacity 0.5s ease; }
.tcard.active { opacity: 1; pointer-events: auto; }
.tcard-stars { color: var(--accent); display: flex; gap: 0.2rem; }
.tcard-quote { font-size: 1.15rem; color: var(--text-primary); line-height: 1.8; font-style: italic; font-weight: 500; }
.tcard-author { display: flex; align-items: center; gap: 1.25rem; margin-top: auto; }
.tcard-author img { width: 52px; height: 52px; border-radius: 50%; border: 2px solid var(--border-accent); flex-shrink: 0; object-fit: cover; }
.tcard-author strong { display: block; font-size: 1rem; font-weight: 700; color: #fff; }
.tcard-author span { font-size: 0.85rem; color: var(--text-muted); }
</style>
