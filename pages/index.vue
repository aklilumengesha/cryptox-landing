<template>
  <div class="page">
    <AppHeader />
    <main>
      <HeroSection />
      <div class="section-divider"></div>
      <FeaturesSection />
      <div class="section-divider"></div>
      <ChartSection />
      <div class="section-divider"></div>
      <PricingSection />
      <div class="section-divider"></div>
      <TestimonialsSection />
      <div class="section-divider"></div>
      <FAQSection />
      <CTASection />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
// All components are auto-imported by Nuxt
</script>

<style scoped>
.page {
  min-height: 100vh;
  background: var(--bg-base);
}

.section-divider {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--container-px);
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--border), transparent);
}
</style>
