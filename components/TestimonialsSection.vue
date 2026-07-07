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

      <!-- 3D Interactive Carousel -->
      <div class="carousel-3d-wrap reveal reveal-delay-2">
        <div class="carousel-3d-container">
          <div
            v-for="(t, i) in testimonials"
            :key="t.id"
            class="tcard-3d glass-card"
            :style="getCardStyle(i)"
            @click="activeIndex = i"
          >
            <div class="tcard-stars">
              <span v-for="s in t.stars" :key="s">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </span>
            </div>
            <p class="tcard-quote">"{{ t.quote }}"</p>
            <div class="tcard-author">
              <img :src="t.avatar" :alt="t.name" loading="lazy" />
              <div>
                <strong>{{ t.name }}</strong>
                <span>{{ t.role }}</span>
              </div>
              <div class="tcard-tag">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-right: 0.25rem;"><polyline points="20 6 9 17 4 12"/></svg>
                {{ t.tag }}
              </div>
            </div>
          </div>
        </div>

        <!-- Controls -->
        <div class="carousel-controls">
          <button class="carousel-btn" @click="prev" aria-label="Previous testimonial">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 18l-6-6 6-6"/></svg>
          </button>

          <div class="carousel-dots">
            <button
              v-for="(_, i) in testimonials"
              :key="i"
              :class="['dot', { 'dot--active': i === activeIndex }]"
              @click="activeIndex = i"
              :aria-label="`Go to testimonial ${i + 1}`"
            ></button>
          </div>

          <button class="carousel-btn" @click="next" aria-label="Next testimonial">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const activeIndex = ref(0)

const testimonials = [
  {
    id: 1,
    stars: 5,
    quote: "CRYPTO. completely changed how I invest. The AI insights alone saved me $12K in a volatile market. Absolutely the best platform I've used.",
    name: 'Sarah Johnson',
    role: 'Retail Investor, New York',
    avatar: 'https://i.pravatar.cc/56?img=5',
    tag: 'Pro User'
  },
  {
    id: 2,
    stars: 5,
    quote: "The security features give me true peace of mind. Multi-sig cold storage, 2FA, and insured wallets — I finally feel safe holding large amounts.",
    name: 'Marcus Chen',
    role: 'Crypto Fund Manager, Singapore',
    avatar: 'https://i.pravatar.cc/56?img=3',
    tag: 'Enterprise'
  },
  {
    id: 3,
    stars: 5,
    quote: "As a total beginner, the UX made everything so simple. I went from zero to a diversified portfolio in one afternoon. The support team is incredible.",
    name: 'Aisha Okonkwo',
    role: 'First-time Investor, Lagos',
    avatar: 'https://i.pravatar.cc/56?img=9',
    tag: 'Starter'
  },
  {
    id: 4,
    stars: 5,
    quote: "The automated DCA strategy saved me hours every week. My returns are up 38% YoY and I barely have to touch the app. Brilliant engineering.",
    name: 'Leon Weber',
    role: 'Software Engineer, Berlin',
    avatar: 'https://i.pravatar.cc/56?img=7',
    tag: 'Pro User'
  }
]

function getCardStyle(i) {
  const total = testimonials.length
  let diff = i - activeIndex.value

  // Circular offset calculation
  if (diff > Math.floor(total / 2)) diff -= total
  if (diff < -Math.floor(total / 2)) diff += total

  const absDiff = Math.abs(diff)
  
  // Hide cards that are too far away
  if (absDiff > 1) {
    return {
      opacity: 0,
      transform: `translateX(${Math.sign(diff) * 100}%) scale(0.7) rotateY(${Math.sign(diff) * -20}deg)`,
      zIndex: 0,
      pointerEvents: 'none'
    }
  }

  const direction = diff === 0 ? 0 : Math.sign(diff)
  const translateX = diff === 0 ? 0 : direction * 65 // Move left/right by 65%
  const scale = diff === 0 ? 1 : 0.85
  const rotateY = diff === 0 ? 0 : direction * -12 // Rotate slightly inward
  const zIndex = 10 - absDiff
  const opacity = diff === 0 ? 1 : 0.4
  const blur = diff === 0 ? 0 : 2

  return {
    transform: `translateX(${translateX}%) scale(${scale}) rotateY(${rotateY}deg)`,
    zIndex,
    opacity,
    filter: `blur(${blur}px)`,
    cursor: diff === 0 ? 'default' : 'pointer'
  }
}

function next() { activeIndex.value = (activeIndex.value + 1) % testimonials.length }
function prev() { activeIndex.value = (activeIndex.value - 1 + testimonials.length) % testimonials.length }

let timer
onMounted(() => {
  timer = setInterval(next, 6000)

  const els = document.querySelectorAll('.reveal')
  const obs = new IntersectionObserver(
    es => es.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
    { threshold: 0.1 }
  )
  els.forEach(el => obs.observe(el))
})
onUnmounted(() => clearInterval(timer))
</script>

<style scoped>
.testimonials { position: relative; overflow: hidden; }

.testimonials-header {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

/* 3D Carousel Container */
.carousel-3d-wrap {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  perspective: 1200px; /* Enables 3D space */
}

.carousel-3d-container {
  position: relative;
  height: 380px; /* Fixed height to hold absolute cards */
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
}

/* Testimonial Card */
.tcard-3d {
  position: absolute;
  width: 100%;
  max-width: 540px;
  padding: 3rem 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  transition: all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
  will-change: transform, opacity, filter;
  border-radius: var(--radius-xl);
  background: var(--bg-card);
}

.tcard-3d[style*="zIndex: 10"] {
  border-color: var(--border-accent);
  box-shadow: 0 30px 80px rgba(196,255,0,0.08), inset 0 1px 0 rgba(255,255,255,0.05);
}

.tcard-stars { color: var(--accent); display: flex; gap: 0.2rem; }

.tcard-quote {
  font-size: 1.15rem;
  color: var(--text-primary);
  line-height: 1.8;
  font-style: italic;
  font-weight: 500;
}

.tcard-author {
  display: flex;
  align-items: center;
  gap: 1.25rem;
  margin-top: auto;
  flex-wrap: wrap;
}

.tcard-author img {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  border: 2px solid var(--border-accent);
  flex-shrink: 0;
  object-fit: cover;
}

.tcard-author strong { display: block; font-size: 1rem; font-weight: 700; color: #fff; }
.tcard-author span { font-size: 0.85rem; color: var(--text-muted); }

.tcard-tag {
  margin-left: auto;
  background: rgba(196,255,0,0.1);
  color: var(--accent);
  border-radius: var(--radius-full);
  padding: 0.35rem 1rem;
  font-size: 0.8rem;
  font-weight: 700;
  display: flex;
  align-items: center;
}

/* Controls */
.carousel-controls {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
}

.carousel-btn {
  width: 44px; height: 44px;
  border-radius: 50%;
  background: var(--bg-card);
  border: 1px solid var(--border);
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all var(--transition);
}

.carousel-btn:hover {
  border-color: var(--border-accent);
  color: var(--accent);
  background: var(--accent-subtle);
  transform: scale(1.05);
}

.carousel-dots { display: flex; gap: 0.6rem; }

.dot {
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--border);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dot--active {
  background: var(--accent);
  width: 28px;
  border-radius: var(--radius-full);
}

/* Responsive */
@media (max-width: 768px) {
  .carousel-3d-container { height: 420px; }
  .tcard-3d { padding: 2rem 1.5rem; max-width: 90%; }
  .tcard-quote { font-size: 1rem; }
  .tcard-tag { display: none; }
}
</style>
