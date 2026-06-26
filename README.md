# Crypto Landing Page - Nuxt 3

A modern, dark-themed cryptocurrency investing platform landing page built with Nuxt 3.

## Features

- 🎨 Dark theme with neon green accents
- 📱 Fully responsive design
- ⚡ Smooth animations and transitions
- 🎯 Modern UI components:
  - Hero section with phone mockup
  - Feature cards grid
  - Chart visualization section
  - Trust indicators and statistics

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
├── pages/
│   └── index.vue          # Main landing page
├── app.vue                # Root component
├── nuxt.config.ts         # Nuxt configuration
└── package.json           # Dependencies
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

- **Hero Section**: Large heading, user stats, info card, animated phone mockup
- **Features Grid**: 3-column grid with highlighted center card
- **Chart Section**: Price display with visual chart placeholder
- **Trust Section**: Platform highlights with CTA buttons
- **Responsive**: Mobile-first design that adapts to all screen sizes

## License

MIT

---

Built with ❤️ using Nuxt 3
