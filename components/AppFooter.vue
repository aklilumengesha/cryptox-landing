<template>
  <footer class="footer">
    <div class="footer-top-line"></div>
    <div class="container">
      <!-- Main Grid -->
      <div class="footer-grid">
        <!-- Brand -->
        <div class="footer-brand">
          <a href="#home" class="footer-logo">
            <span>◈</span> CRYPTO.
          </a>
          <p class="footer-tagline">
            The smartest way to invest, track, and grow your digital assets — all in one place.
          </p>
          <div class="footer-socials">
            <a href="#" aria-label="Twitter" class="social-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn" class="social-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" aria-label="GitHub" class="social-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            </a>
            <a href="#" aria-label="Discord" class="social-link">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.079.11 18.1.128 18.116a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>
            </a>
          </div>
        </div>

        <!-- Links -->
        <div v-for="col in footerLinks" :key="col.title" class="footer-col">
          <h4 class="footer-col-title">{{ col.title }}</h4>
          <ul>
            <li v-for="link in col.links" :key="link.label">
              <a :href="link.href">{{ link.label }}</a>
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div class="footer-newsletter">
          <h4 class="footer-col-title">Stay Updated</h4>
          <p>Get the latest crypto news and platform updates.</p>
          <form class="newsletter-form" @submit.prevent="subscribe">
            <input
              v-model="email"
              type="email"
              placeholder="Enter your email"
              aria-label="Email address for newsletter"
              required
            />
            <button type="submit" class="btn-primary newsletter-btn">
              {{ subscribed ? '✓ Done!' : 'Subscribe' }}
            </button>
          </form>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <p>© {{ new Date().getFullYear() }} CRYPTO. All rights reserved.</p>
        <div class="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Cookie Settings</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const subscribed = ref(false)

function subscribe () {
  if (email.value) {
    subscribed.value = true
    email.value = ''
    setTimeout(() => { subscribed.value = false }, 3000)
  }
}

const footerLinks = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Security', href: '#' },
      { label: 'Roadmap', href: '#' },
      { label: 'Changelog', href: '#' }
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Press Kit', href: '#' },
      { label: 'Contact', href: '#' }
    ]
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '#' },
      { label: 'Community', href: '#' },
      { label: 'API Docs', href: '#' },
      { label: 'Status', href: '#' },
      { label: 'FAQ', href: '#faq' }
    ]
  }
]
</script>

<style scoped>
.footer {
  position: relative;
  padding-bottom: 2rem;
  margin-top: 4rem;
}

.footer-top-line {
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(196,255,0,0.3), rgba(124,58,237,0.3), transparent);
  margin-bottom: 4rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.8fr repeat(3, 1fr) 1.5fr;
  gap: 3rem;
  margin-bottom: 4rem;
}

/* Brand */
.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.3rem;
  font-weight: 800;
  color: var(--accent);
  margin-bottom: 1rem;
  text-decoration: none;
}

.footer-tagline {
  font-size: 0.88rem;
  color: var(--text-muted);
  line-height: 1.7;
  max-width: 260px;
  margin-bottom: 1.5rem;
}

.footer-socials {
  display: flex;
  gap: 0.75rem;
}

.social-link {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: var(--bg-card);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  text-decoration: none;
  transition: all var(--transition);
}

.social-link:hover {
  background: var(--accent-subtle);
  border-color: var(--border-accent);
  color: var(--accent);
}

/* Columns */
.footer-col-title {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 1.25rem;
}

.footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 0.625rem; }

.footer-col a {
  font-size: 0.875rem;
  color: var(--text-muted);
  text-decoration: none;
  transition: color var(--transition);
}

.footer-col a:hover { color: var(--text-primary); }

/* Newsletter */
.footer-newsletter p {
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-bottom: 1rem;
  line-height: 1.6;
}

.newsletter-form {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
}

.newsletter-form input {
  width: 100%;
  padding: 0.75rem 1rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  color: var(--text-primary);
  font-size: 0.875rem;
  font-family: var(--font-sans);
  outline: none;
  transition: border-color var(--transition);
}

.newsletter-form input::placeholder { color: var(--text-muted); }
.newsletter-form input:focus { border-color: var(--border-accent); }

.newsletter-btn {
  padding: 0.75rem 1.5rem;
  font-size: 0.875rem;
}

/* Bottom */
.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;
  border-top: 1px solid var(--border);
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-bottom p { font-size: 0.82rem; color: var(--text-muted); }

.footer-legal {
  display: flex;
  gap: 1.5rem;
}

.footer-legal a {
  font-size: 0.82rem;
  color: var(--text-muted);
  text-decoration: none;
  transition: color var(--transition);
}

.footer-legal a:hover { color: var(--text-primary); }

/* Responsive */
@media (max-width: 1200px) {
  .footer-grid { grid-template-columns: 1fr 1fr 1fr; }
  .footer-newsletter { grid-column: span 3; }
}

@media (max-width: 768px) {
  .footer-grid { grid-template-columns: 1fr 1fr; gap: 2rem; }
  .footer-brand { grid-column: span 2; }
  .footer-newsletter { grid-column: span 2; }
  .footer-bottom { flex-direction: column; text-align: center; }
}

@media (max-width: 480px) {
  .footer-grid { grid-template-columns: 1fr; }
  .footer-brand, .footer-newsletter { grid-column: span 1; }
}
</style>
