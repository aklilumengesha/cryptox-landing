<template>
  <header class="header" :class="{ scrolled: isScrolled }">
    <div class="container">
      <div class="header-inner">
        <!-- Logo -->
        <a href="#home" class="logo" aria-label="CRYPTO. home">
          <span class="logo-icon">◈</span>
          CRYPTO.
        </a>

        <!-- Desktop Nav -->
        <nav class="nav" aria-label="Main navigation">
          <a href="#home" :class="{ active: activeSection === 'home' }">Home</a>
          <a href="#features" :class="{ active: activeSection === 'features' }">Features</a>
          <a href="#pricing" :class="{ active: activeSection === 'pricing' }">Pricing</a>
          <a href="#about" :class="{ active: activeSection === 'about' }">About</a>
          <a href="#faq" :class="{ active: activeSection === 'faq' }">FAQ</a>
        </nav>

        <!-- CTA + Mobile Toggle -->
        <div class="header-actions">
          <a href="#pricing" class="btn-primary">Get Started</a>
          <button
            class="hamburger"
            :class="{ open: mobileOpen }"
            @click="mobileOpen = !mobileOpen"
            aria-label="Toggle mobile menu"
            :aria-expanded="mobileOpen"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition name="slide-down">
      <div v-if="mobileOpen" class="mobile-menu" role="dialog" aria-label="Mobile navigation">
        <nav class="mobile-nav">
          <a href="#home" @click="mobileOpen = false">Home</a>
          <a href="#features" @click="mobileOpen = false">Features</a>
          <a href="#pricing" @click="mobileOpen = false">Pricing</a>
          <a href="#about" @click="mobileOpen = false">About</a>
          <a href="#faq" @click="mobileOpen = false">FAQ</a>
          <a href="#pricing" class="btn-primary mobile-cta" @click="mobileOpen = false">Get Started</a>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const mobileOpen = ref(false)
const activeSection = ref('home')

function onScroll () {
  isScrolled.value = window.scrollY > 20

  // Active section tracking
  const sections = ['home', 'features', 'pricing', 'about', 'faq']
  for (const id of sections.slice().reverse()) {
    const el = document.getElementById(id)
    if (el && window.scrollY >= el.offsetTop - 120) {
      activeSection.value = id
      break
    }
  }
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1.25rem 0;
  transition: all 0.4s ease;
}

.header.scrolled {
  padding: 0.875rem 0;
  background: rgba(8, 8, 16, 0.85);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.35rem;
  font-weight: 800;
  color: var(--accent);
  letter-spacing: -0.01em;
  flex-shrink: 0;
  text-decoration: none;
  transition: opacity var(--transition);
}

.logo:hover { opacity: 0.85; }

.logo-icon {
  font-size: 1.5rem;
  text-shadow: 0 0 20px rgba(196, 255, 0, 0.6);
}

/* Nav */
.nav {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.nav a {
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.5rem 0.875rem;
  border-radius: var(--radius-full);
  transition: all var(--transition);
  text-decoration: none;
}

.nav a:hover,
.nav a.active {
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.06);
}

.nav a.active {
  color: var(--accent);
}

/* Actions */
.header-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
}

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  padding: 6px;
  cursor: pointer;
}

.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: all 0.3s ease;
  transform-origin: center;
}

.hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
.hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* Mobile Menu */
.mobile-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: rgba(8, 8, 16, 0.97);
  backdrop-filter: blur(24px);
  border-bottom: 1px solid var(--border);
  padding: 1.5rem;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.mobile-nav a {
  color: var(--text-secondary);
  font-size: 1rem;
  font-weight: 500;
  padding: 0.875rem 1rem;
  border-radius: var(--radius-md);
  transition: all var(--transition);
  text-decoration: none;
}

.mobile-nav a:hover {
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.05);
}

.mobile-cta {
  margin-top: 0.75rem;
  text-align: center;
  justify-content: center;
}

/* Transitions */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Responsive */
@media (max-width: 768px) {
  .nav { display: none; }
  .hamburger { display: flex; }
}
</style>
