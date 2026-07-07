# CryptoX — Crypto Landing Page

A modern, dark-themed cryptocurrency investing platform landing page built with Nuxt 3 by **[Aklilu Mengesha](mailto:aklilumengesha57@gmail.com)**.

## Features

- 🎨 Dark theme with neon green accents
- 📱 Fully responsive design
- ⚡ Smooth animations and transitions
- 🎯 Modern UI components:
  - Hero section with animated phone mockup
  - Feature cards grid (3-column)
  - Live chart & price visualization
  - Pricing tiers with comparison table
  - Testimonials carousel with 3D coverflow
  - FAQ accordion with smooth transitions
  - Call-to-action section with floating coin animations
  - Full site footer with newsletter signup

## Tech Stack

- **Nuxt 3** - Vue.js framework
- **Vue 3** - Progressive JavaScript framework
- Pure CSS for styling (no external libraries needed)

## Getting Started

### Installation

```bash
# Navigate to the project directory
cd crypto-landing

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

The app will be available at `http://localhost:3000`

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
crypto-landing/
├── components/
│   ├── AppHeader.vue          # Sticky nav with mobile menu
│   ├── HeroSection.vue        # Hero with animated phone mockup
│   ├── FeaturesSection.vue    # 3-column feature cards grid
│   ├── ChartSection.vue       # Price chart visualization
│   ├── PricingSection.vue     # Tiered pricing cards
│   ├── TestimonialsSection.vue# 3D coverflow carousel
│   ├── FAQSection.vue         # Accordion with sidebar
│   ├── CTASection.vue         # Call-to-action with coin deco
│   └── AppFooter.vue          # Footer with newsletter
├── pages/
│   └── index.vue              # Main landing page
├── assets/
│   └── css/main.css           # Global design tokens & utilities
├── public/
│   ├── favicon.ico
│   └── robots.txt
├── app.vue                    # Root component
├── nuxt.config.ts             # Nuxt configuration
└── package.json               # Dependencies
```

## Customization

### Colors

The main accent color is neon green (`#c4ff00`). You can customize it by changing the color values in the CSS:

- Primary accent: `#c4ff00`
- Background: `#0a0a0a`
- Text: `#fff`
- Muted text: `#999`, `#666`

### Content

Edit `pages/index.vue` to update:
- Hero text and titles
- Feature cards
- Statistics and numbers
- Button labels

## Design Features

- **Hero Section**: Large heading, live stats counter, animated phone mockup
- **Features Grid**: 3-column grid with highlighted center card
- **Chart Section**: BTC/ETH price display with animated SVG chart
- **Pricing Section**: Starter / Pro / Enterprise tiers with feature checklists
- **Testimonials**: 3D coverflow carousel with auto-advance and dot indicators
- **FAQ**: Accordion with left sidebar contact card
- **CTA**: Full-width card with spinning rings and floating crypto coin icons
- **Footer**: 5-column grid, social links, newsletter form, legal links
- **Responsive**: Mobile-first design that adapts to all screen sizes

## License

MIT

---

## Author

**Aklilu Mengesha** — [aklilumengesha57@gmail.com](mailto:aklilumengesha57@gmail.com)

Built with ❤️ using Nuxt 3
