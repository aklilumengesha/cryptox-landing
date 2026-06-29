<template>
  <header class="header">
    <div class="container">
      <div class="header-inner">
        <!-- Logo -->
        <a href="#home" class="logo" aria-label="CRYPTO. home">
          <span class="logo-icon">◈</span>
          CRYPTO.
        </a>

        <!-- Desktop Nav -->
        <nav class="nav" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#about">About</a>
          <a href="#faq">FAQ</a>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
// Base component setup
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

.nav a:hover {
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.06);
}
</style>
