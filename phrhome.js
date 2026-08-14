/* intractive-demo - page JS */
(function(){
  var tabs=document.querySelectorAll('.module-tab');
  function go(id){
    tabs.forEach(function(t){t.classList.remove('active');});
    document.querySelectorAll('.preview-content').forEach(function(p){p.classList.remove('active');});
    var t=document.querySelector('.module-tab[data-module="'+id+'"]');
    if(t) t.classList.add('active');
    var p=document.getElementById('preview-'+id);
    if(p) p.classList.add('active');
  }
  tabs.forEach(function(tab){
    tab.addEventListener('click',function(){go(tab.getAttribute('data-module'));});
  });
}());

(function(){
  const track = document.getElementById('testimonial-track');
  if(!track) return; // guard: element absent on non-homepage pages

  const dots = document.querySelectorAll('.t-dot');
  const prev = document.getElementById('t-prev');
  const next = document.getElementById('t-next');
  const total = dots.length;
  let current = 0;
  let autoTimer;

  function goTo(idx) {
    current = (idx + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  if(prev) prev.addEventListener('click', () => { goTo(current - 1); resetAuto(); });
  if(next) next.addEventListener('click', () => { goTo(current + 1); resetAuto(); });
  dots.forEach((d, i) => d.addEventListener('click', () => { goTo(i); resetAuto(); }));

  let startX = 0;
  track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, {passive:true});
  track.addEventListener('touchend', e => {
    const diff = startX - e.changedTouches[0].clientX;
    if(Math.abs(diff) > 40) { goTo(diff > 0 ? current + 1 : current - 1); resetAuto(); }
  });

  function resetAuto() { clearInterval(autoTimer); autoTimer = setInterval(() => goTo(current + 1), 5000); }
  resetAuto();
})();

const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');
if(hamburger && mobileNav){
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open');
    document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
  });
}

[['mob-customers-toggle','mob-customers-sub'],['mob-learn-toggle','mob-learn-sub'],['mob-company-toggle','mob-company-sub'],['mob-pricing-toggle','mob-pricing-sub']].forEach(([tid, sid]) => {
  const toggle = document.getElementById(tid);
  const sub = document.getElementById(sid);
  if(toggle && sub) toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    sub.classList.toggle('open');
  });
});
const mobProductToggle = document.getElementById('mob-product-toggle');
const mobProductSub = document.getElementById('mob-product-sub');
if(mobProductToggle && mobProductSub){
  mobProductToggle.addEventListener('click', () => {
    mobProductToggle.classList.toggle('open');
    mobProductSub.classList.toggle('open');
  });
}

window.addEventListener('resize', () => {
  if(hamburger && mobileNav && window.innerWidth > 768) {
    hamburger.classList.remove('open');
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  }
});

const industryLogos = {
  manufacturing: [
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/bitumix.webp" alt="Bitumix" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/arpico.webp" alt="Arpico" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/acme.webp" alt="Acme" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/Ultratech.webp" alt="Ultratech" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/tropicoir.webp" alt="Tropicoir" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/TokyoCement.webp" alt="Tokyo Cement" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/sunagro.webp" alt="Sunagro" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/specialsteels.webp" alt="Special Steels" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/pyramidwilmar.webp" alt="Pyramid Wilmar" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/prym.webp" alt="Prym" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/phoenix.webp" alt="Phoenix" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/microminerals.webp" alt="Micro Minerals" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/laxapana.webp" alt="Laxapana" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/lankem.webp" alt="Lankem" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/lakro.webp" alt="Lakro" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/kvc.webp" alt="KVC" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/kotagala.webp" alt="Kotagala" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/kiffs.webp" alt="KIFFS" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/Fonterra.webp" alt="Fonterra" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/euorosubstrates.webp" alt="Euro Substrates" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/Delmege.webp" alt="Delmege" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/cwmackie.webp" alt="CW Mackie" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/ceytape.webp" alt="Ceytape" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/ceyflex.webp" alt="Ceyflex" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/CEAT.webp" alt="CEAT" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/brandix.webp" alt="Brandix" loading="lazy"/>',
  ],
  hospitality: [
    '<img src="https://peopleshr.com/wp-content/uploads/2026/06/LaVie.webp" alt="LaVie" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/06/Pratesis.webp" alt="Pratesis" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/06/Sunlight.webp" alt="Sunlight" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/Anantara.webp" alt="Anantara" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/avani.webp" alt="Avani" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/ayura-wellness.webp" alt="Ayura Wellness" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/club-palm-bay.webp" alt="Club Palm Bay" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/Galle-Fort-Hotel.webp" alt="Galle Fort Hotel" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/Kings-Pavilion.webp" alt="Kings Pavilion" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/sigiriya-village.webp" alt="Sigiriya Village" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/The-Palms.webp" alt="The Palms" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/Thotagala.webp" alt="Thotagala" loading="lazy"/>',
  ],
  banking: [
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/arpico-insurance.webp" alt="Arpico Insurance" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/Beckett-Capital.webp" alt="Beckett Capital" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/first-capital.webp" alt="First Capital" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/lcb-finance.webp" alt="LCB Finance" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/NDB-bank.webp" alt="NDB Bank" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/Orient-Finance.webp" alt="Orient Finance" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/peoplesbank.webp" alt="Peoples Bank" loading="lazy"/>',
  ],
  retail: [
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/akbar.webp" alt="Akbar" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/arpico.webp" alt="Arpico" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/Fonterra.webp" alt="Fonterra" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/keells.webp" alt="Keells" loading="lazy"/>',
  ],
  healthcare: [
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/ambicaglobal.webp" alt="Ambica Global" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/healthguard.webp" alt="Healthguard" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/sun-pharma.webp" alt="Sun Pharma" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/sunshine.webp" alt="Sunshine" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/UY-Dental.webp" alt="UY Dental" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/visioncare.webp" alt="Visioncare" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/Dispensing-Opticians.webp" alt="Dispensing Opticians" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/Lanka-Hospitals.webp" alt="Lanka Hospitals" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/B-Braun.webp" alt="B Braun" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/Browns-Hospitals.webp" alt="Browns Hospitals" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/Mount-Lotus.webp" alt="Mount Lotus" loading="lazy"/>',
  ],
  it: [
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/zillion-e.webp" alt="Zillione" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/Tellda.webp" alt="Tellda" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/nable.webp" alt="Nable" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/inivos.webp" alt="Inivos" loading="lazy"/>',
  ],
  logistics: [
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/mclarens-group.webp" alt="McLarens Group" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/oki-oki.webp" alt="Oki Oki" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/sri-lankan-airlines.webp" alt="SriLankan Airlines" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/transmaldivian-airways.webp" alt="Trans Maldivian Airways" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/advantis.webp" alt="Advantis" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/aitkenspence.webp" alt="Aitken Spence" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/ansell.webp" alt="Ansell" loading="lazy"/>',
    '<img src="https://peopleshr.com/wp-content/uploads/2026/04/efl.webp" alt="EFL" loading="lazy"/>',
  ],
};

const logosContainer = document.getElementById('client-logos-container');
if(logosContainer){ // guard: element absent on non-homepage pages

  function renderLogos(industry) {
    const logos = industryLogos[industry] || [];

    logosContainer.style.opacity = '0';
    logosContainer.style.transition = 'opacity 0.2s ease';

    setTimeout(() => {
      const items = logos.map(l => `<span class="client-logo">${l}</span>`).join('');
      logosContainer.innerHTML = `<div class="logo-slider-track">${items}${items}</div>`;

      const duration = logos.length * 2.2;
      const track = logosContainer.querySelector('.logo-slider-track');
      track.style.animationDuration = duration + 's';

      logosContainer.addEventListener('mouseenter', () => track.style.animationPlayState = 'paused');
      logosContainer.addEventListener('mouseleave', () => track.style.animationPlayState = 'running');

      logosContainer.style.transition = 'opacity 0.35s ease';
      logosContainer.style.opacity = '1';
    }, 200);
  }

  document.querySelectorAll('.industry-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.industry-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      renderLogos(tab.dataset.industry);
    });
  });

  const activeTab = document.querySelector('.industry-tab.active');
  if(activeTab) renderLogos(activeTab.dataset.industry);
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.module-card, .persona-card, .cs-card, .feature-item, .case-card, .chro-col').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

(function(){
  const items = document.querySelectorAll('.pillar-item');
  if(!items.length) return; // guard: element absent on non-CHRO pages

  items.forEach(item => {
    item.addEventListener('toggle', function(){
      if(!this.open) return;

      items.forEach(other => {
        if(other !== this && other.open) other.removeAttribute('open');
      });

      const top = this.getBoundingClientRect().top + window.scrollY - 24;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();

(function(){
  if(!('IntersectionObserver' in window)) return;
  var wbrObserver = new IntersectionObserver(function(entries){
    entries.forEach(function(entry){
      if(entry.isIntersecting){
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        wbrObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.wbr-agenda-card, .wbr-getting-card').forEach(function(el){
    requestAnimationFrame(function(){
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      wbrObserver.observe(el);
    });
  });

  setTimeout(function(){
    document.querySelectorAll('.wbr-agenda-card, .wbr-getting-card').forEach(function(el){
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    });
  }, 2000);
})();

(function(){'use strict';var ProductsPage={initFaq:function(){var triggers=document.querySelectorAll('.phr-faq-item__trigger');triggers.forEach(function(btn){btn.addEventListener('click',function(){var item=btn.closest('.phr-faq-item');var body=item.querySelector('.phr-faq-item__body');var isOpen=item.classList.contains('phr-faq-item--open');document.querySelectorAll('.phr-faq-item--open').forEach(function(el){el.classList.remove('phr-faq-item--open');el.querySelector('.phr-faq-item__body').style.maxHeight='0';el.querySelector('.phr-faq-item__trigger').setAttribute('aria-expanded','false')});if(!isOpen){item.classList.add('phr-faq-item--open');body.style.maxHeight=body.scrollHeight+'px';btn.setAttribute('aria-expanded','true')}})})},init:function(){this.initFaq()}};document.addEventListener('DOMContentLoaded',function(){ProductsPage.init()});}());

/* ==========================================================================
   smsgt-lexi-ph-page.js
   Page-specific interactions for SMSGT Ã¢â‚¬â€ AI-Powered HR Intelligence (Philippines).
   Requires: phrhome.js loaded first.
   ========================================================================== */

(function () {
  'use strict';

  /* Ã¢â€â‚¬Ã¢â€â‚¬ HubSpot Modal Ã¢â€â‚¬Ã¢â€â‚¬ */
  var overlay  = document.getElementById('hs-modal-overlay');
  var closeBtn = document.getElementById('hs-modal-close');

  if (overlay) {
    function openModal(e) {
      if (e) e.preventDefault();
      overlay.classList.add('active');
      overlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      overlay.classList.remove('active');
      overlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    document.querySelectorAll('[data-open-hs]').forEach(function (el) {
      el.addEventListener('click', openModal);
    });

    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeModal();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && overlay.classList.contains('active')) closeModal();
    });
  }

  /* Ã¢â€â‚¬Ã¢â€â‚¬ Scroll Animations (page-specific elements only) Ã¢â€â‚¬Ã¢â€â‚¬
     phrhome.js handles .module-card, .persona-card, .cs-card, .feature-item.
     This guard covers the selectors unique to this page.                    */
  if ('IntersectionObserver' in window) {
    var pageObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity  = '1';
          entry.target.style.transform = 'translateY(0)';
          pageObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.lexi-card, .phr-module-card, .smsgt-cred-item').forEach(function (el) {
      requestAnimationFrame(function () {
        el.style.opacity    = '0';
        el.style.transform  = 'translateY(24px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        pageObserver.observe(el);
      });
    });

    /* Fallback: ensure elements are visible after 2 s regardless of observer */
    setTimeout(function () {
      document.querySelectorAll('.lexi-card, .phr-module-card, .smsgt-cred-item').forEach(function (el) {
        el.style.opacity   = '1';
        el.style.transform = 'translateY(0)';
      });
    }, 2000);
  }

}());