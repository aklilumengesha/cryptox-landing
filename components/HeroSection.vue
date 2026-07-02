<template>
  <section id="home" class="hero">
    <div class="orb orb-accent" style="width:700px;height:700px;top:-200px;right:-100px;opacity:0.7;"></div>
    <div class="orb orb-purple" style="width:500px;height:500px;bottom:-100px;left:-200px;opacity:0.5;"></div>
    <div class="container">
      <div class="hero-inner">
        <div class="hero-left">
          <div class="section-badge reveal" style="gap:0.5rem;">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/></svg>
            #1 Crypto Investing Platform
          </div>
          <h1 class="hero-title reveal reveal-delay-1">
            Best crypto<br /><span class="highlight">investing platform</span><br /><span class="hero-sub-word">for your future.</span>
          </h1>
          <p class="hero-description reveal reveal-delay-2">Polkadot unites and secures a growing ecosystem of specialized blockchains. Invest smarter, grow faster, and keep your digital assets safe.</p>
        </div>
        <div class="hero-right reveal reveal-delay-2">
          <div class="phone-wrap">
            <div class="float-card float-card-tl glass-card">
              <span class="float-icon">₿</span>
              <div><strong>BTC/USD</strong><span class="float-change positive">+3.24%</span></div>
            </div>
            <div class="float-card float-card-br glass-card">
              <span class="float-icon eth">Ξ</span>
              <div><strong>ETH/USD</strong><span class="float-change positive">+2.17%</span></div>
            </div>
            <div class="phone" role="img" aria-label="Crypto app dashboard">
              <div class="phone-notch"></div>
              <div class="phone-inner">
                <div class="phone-topbar"><span class="phone-time">9:41</span><div class="phone-icons"><span>▲</span><span>●</span><span>▮▮</span></div></div>
                <div class="phone-balance"><p class="bal-label">Total Balance</p><h2 class="bal-amount">$84,291.40</h2><div class="bal-change"><span class="positive">▲ +$3,412.80</span><span class="pct positive">(+4.2%)</span></div></div>
                <div class="phone-chart-bars">
                  <div class="bar" style="height:40%;"></div><div class="bar" style="height:65%;"></div><div class="bar" style="height:50%;"></div>
                  <div class="bar active" style="height:85%;"></div><div class="bar" style="height:72%;"></div><div class="bar" style="height:60%;"></div><div class="bar" style="height:45%;"></div>
                </div>
                <div class="phone-assets">
                  <div class="asset-row"><div class="asset-icon btc">₿</div><div class="asset-info"><strong>Bitcoin</strong><span>0.842 BTC</span></div><div class="asset-value"><strong>$42,108</strong><span class="positive">+2.4%</span></div></div>
                  <div class="asset-row"><div class="asset-icon eth-icon">Ξ</div><div class="asset-info"><strong>Ethereum</strong><span>12.3 ETH</span></div><div class="asset-value"><strong>$28,440</strong><span class="positive">+1.8%</span></div></div>
                </div>
                <div class="phone-actions">
                  <button class="phone-action-btn"><span>↓</span>Receive</button>
                  <button class="phone-action-btn primary"><span>↑</span>Send</button>
                  <button class="phone-action-btn"><span>⇄</span>Swap</button>
                </div>
              </div>
            </div>
            <!-- Orbit Rings -->
            <div class="orbit-ring ring-1"></div>
            <div class="orbit-ring ring-2"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
onMounted(() => {
  const els = document.querySelectorAll('.reveal')
  const observer = new IntersectionObserver(
    (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
    { threshold: 0.1 }
  )
  els.forEach(el => observer.observe(el))
})
</script>

<style scoped>
.hero { position: relative; padding: 8rem 0 4rem; overflow: hidden; min-height: 100vh; display: flex; align-items: center; }
.hero-inner { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: center; }
.hero-title { font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 900; line-height: 1.08; letter-spacing: -0.03em; margin-bottom: 1.5rem; }
.hero-sub-word { color: var(--text-muted); }
.hero-description { color: var(--text-secondary); font-size: 1.05rem; line-height: 1.75; max-width: 480px; margin-bottom: 2.25rem; }
.hero-right { display: flex; justify-content: center; align-items: center; }
.phone-wrap { position: relative; width: 320px; }
.float-card { position: absolute; display: flex; align-items: center; gap: 0.75rem; padding: 0.875rem 1.25rem; border-radius: var(--radius-md); z-index: 10; animation: float 4s ease-in-out infinite; min-width: 160px; }
.float-card-tl { top: 30px; left: -70px; }
.float-card-br { bottom: 80px; right: -60px; animation-delay: 2s; }
.float-icon { font-size: 1.4rem; color: var(--accent); }
.float-icon.eth { color: #627eea; }
.float-card strong { display: block; font-size: 0.85rem; font-weight: 700; }
.float-change { font-size: 0.78rem; font-weight: 600; }
.positive { color: #4ade80; }
@keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-10px); } }
.phone { width: 280px; height: 560px; background: linear-gradient(160deg, #141424 0%, #0c0c1a 100%); border-radius: 40px; border: 2px solid rgba(255,255,255,0.12); position: relative; z-index: 2; margin: 0 auto; box-shadow: 0 60px 120px rgba(0,0,0,0.7), 0 0 80px rgba(196,255,0,0.12), inset 0 1px 0 rgba(255,255,255,0.1); transform: perspective(1200px) rotateY(-12deg) rotateX(4deg); transition: transform 0.6s ease; overflow: hidden; }
.phone:hover { transform: perspective(1200px) rotateY(-6deg) rotateX(2deg) scale(1.02); }
.phone-notch { position: absolute; top: 14px; left: 50%; transform: translateX(-50%); width: 90px; height: 6px; background: rgba(255,255,255,0.12); border-radius: 10px; z-index: 5; }
.phone-inner { padding: 2rem 1.25rem 1.25rem; height: 100%; display: flex; flex-direction: column; gap: 1.25rem; }
.phone-topbar { display: flex; justify-content: space-between; align-items: center; }
.phone-time { font-size: 0.8rem; font-weight: 600; }
.phone-icons { font-size: 0.6rem; color: var(--text-secondary); letter-spacing: 3px; }
.phone-balance { text-align: center; padding: 1rem 0; }
.bal-label { font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.25rem; }
.bal-amount { font-size: 1.75rem; font-weight: 800; letter-spacing: -0.02em; }
.bal-change { display: flex; gap: 0.5rem; justify-content: center; font-size: 0.8rem; margin-top: 0.25rem; }
.pct { color: var(--text-muted); }
.phone-chart-bars { display: flex; align-items: flex-end; gap: 6px; height: 60px; padding: 0 0.25rem; }
.bar { flex: 1; background: rgba(196,255,0,0.2); border-radius: 4px 4px 0 0; }
.bar.active { background: var(--accent); box-shadow: 0 0 12px rgba(196,255,0,0.5); }
.phone-assets { display: flex; flex-direction: column; gap: 0.75rem; }
.asset-row { display: flex; align-items: center; gap: 0.75rem; padding: 0.625rem; background: rgba(255,255,255,0.04); border-radius: var(--radius-sm); }
.asset-icon { width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; font-weight: 700; }
.asset-icon.btc { background: rgba(247,147,26,0.2); color: #f7931a; }
.asset-icon.eth-icon { background: rgba(98,126,234,0.2); color: #627eea; }
.asset-info { flex: 1; }
.asset-info strong { display: block; font-size: 0.8rem; font-weight: 700; }
.asset-info span { font-size: 0.72rem; color: var(--text-muted); }
.asset-value { text-align: right; }
.asset-value strong { display: block; font-size: 0.8rem; font-weight: 700; }
.asset-value span { font-size: 0.72rem; }
.phone-actions { display: flex; gap: 0.5rem; margin-top: auto; }
.phone-action-btn { flex: 1; padding: 0.6rem 0.25rem; border-radius: var(--radius-sm); border: 1px solid var(--border); background: rgba(255,255,255,0.04); color: var(--text-secondary); font-size: 0.72rem; font-weight: 600; display: flex; flex-direction: column; align-items: center; gap: 3px; cursor: pointer; transition: all var(--transition); }
.phone-action-btn span { font-size: 1rem; }
.phone-action-btn.primary { background: var(--accent); color: var(--text-dark); border: none; }
/* Orbit Rings */
.orbit-ring { position: absolute; border-radius: 50%; pointer-events: none; }
.ring-1 { width: 420px; height: 420px; top: 50%; left: 50%; transform: translate(-50%, -50%); border: 1.5px solid rgba(196,255,0,0.18); animation: spin 25s linear infinite; }
.ring-1::before { content: ''; position: absolute; width: 12px; height: 12px; background: var(--accent); border-radius: 50%; top: 0; left: 50%; transform: translate(-50%, -50%); box-shadow: 0 0 16px rgba(196,255,0,0.9); }
.ring-2 { width: 540px; height: 540px; top: 50%; left: 50%; transform: translate(-50%, -50%); border: 1px solid rgba(124,58,237,0.12); animation: spin 40s linear infinite reverse; }
@keyframes spin { from { transform: translate(-50%, -50%) rotate(0deg); } to { transform: translate(-50%, -50%) rotate(360deg); } }
@media (max-width: 1024px) { .hero-inner { grid-template-columns: 1fr; } .hero-right { order: -1; } .float-card-tl { left: -20px; } .float-card-br { right: -20px; } }
@media (max-width: 480px) { .float-card { display: none; } .ring-2 { display: none; } .phone-wrap { width: 260px; } .phone { width: 240px; height: 480px; } .ring-1 { width: 300px; height: 300px; } }
</style>
