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

const LAZY_SECTIONS = {
  pay:        `      <div class="dg-cat-header">
        <div class="dg-cat-header-left">
          <h2 class="dg-section-heading">Accurate payroll. Zero compliance risk.</h2>
          <p class="dg-cat-desc">From timesheets to final payslips Ã¢â‚¬ÂÃ¢â‚¬Â automate your entire payroll cycle with built-in statutory compliance for Sri Lanka and beyond.</p>
        </div>
        <div class="dg-cat-count-box">
          <div class="dg-cat-count-num">3</div>
          <div class="dg-cat-count-lbl">Demos available</div>
        </div>
      </div>
      <div class="dg-grid">
        <div class="dg-card" onclick="gatedDemo('REPLACE_PAY_RUN_ID')">
          <div class="dg-thumb dg-thumb-timepay">
            <div class="dg-thumb-ui">
              <div class="dg-ui-bar"></div>
              <div class="dg-ui-row"><div class="dg-ui-pill"></div><div class="dg-ui-pill w55"></div></div>
              <div class="dg-ui-bar s"></div>
            </div>
            <div class="dg-thumb-overlay"><div class="dg-play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>
            
          </div>
          <div class="dg-card-body">
            <div class="dg-card-tag">Payroll</div>
            <div class="dg-card-title">Payroll Processing &amp; Monthly Run</div>
            <div class="dg-card-desc">One-click payroll runs with automatic EPF/ETF, PAYE calculations, and bank file generation for all major Sri Lankan banks.</div>
            <div class="dg-card-footer">
              <button class="dg-card-cta">Watch Demo <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            </div>
          </div>
        </div>
        <div class="dg-card" onclick="gatedDemo('REPLACE_PAY_LEAVE_ID')">
          <div class="dg-thumb dg-thumb-timepay">
            <div class="dg-thumb-ui">
              <div class="dg-ui-bar"></div>
              <div class="dg-ui-row"><div class="dg-ui-pill"></div><div class="dg-ui-pill w55"></div></div>
              <div class="dg-ui-bar s"></div>
            </div>
            <div class="dg-thumb-overlay"><div class="dg-play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>
            
          </div>
          <div class="dg-card-body">
            <div class="dg-card-tag">Leave</div>
            <div class="dg-card-title">Leave &amp; Absence Management</div>
            <div class="dg-card-desc">Configure leave policies, approval workflows, accrual rules, and carry-forward limits Ã¢â‚¬ÂÃ¢â‚¬Â all without IT support.</div>
            <div class="dg-card-footer">
              <button class="dg-card-cta">Watch Demo <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            </div>
          </div>
        </div>
        <div class="dg-card" onclick="gatedDemo('REPLACE_PAY_EXPENSE_ID')">
          <div class="dg-thumb dg-thumb-timepay">
            <div class="dg-thumb-ui">
              <div class="dg-ui-bar"></div>
              <div class="dg-ui-row"><div class="dg-ui-pill"></div><div class="dg-ui-pill w55"></div></div>
              <div class="dg-ui-bar s"></div>
            </div>
            <div class="dg-thumb-overlay"><div class="dg-play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>
            
          </div>
          <div class="dg-card-body">
            <div class="dg-card-tag">Expenses</div>
            <div class="dg-card-title">Expense Claims &amp; Reimbursement</div>
            <div class="dg-card-desc">Mobile receipt capture, multi-level approvals, and direct payroll integration for seamless reimbursements.</div>
            <div class="dg-card-footer">
              <button class="dg-card-cta">Watch Demo <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            </div>
          </div>
        </div>
      </div>`,
  time:       `      <div class="dg-cat-header">
        <div class="dg-cat-header-left">
          <h2 class="dg-section-heading">Real-time visibility across every hour worked.</h2>
          <p class="dg-cat-desc">Biometric integrations, shift scheduling, overtime controls, and live attendance dashboards Ã¢â‚¬ÂÃ¢â‚¬Â across every site and shift pattern.</p>
        </div>
        <div class="dg-cat-count-box">
          <div class="dg-cat-count-num">2</div>
          <div class="dg-cat-count-lbl">Demos available</div>
        </div>
      </div>
      <div class="dg-grid">
        <div class="dg-card" onclick="gatedDemo('cmov2pgrk05pu9rr9ct8hjufa')">
          <div class="dg-thumb dg-thumb-timepay">
            <img src="https://peopleshr.com/wp-content/uploads/2026/05/Manage_Leave_Applications_Approvals.webp" alt="Manage Leave Applications & Approvals" class="dg-thumb-image">
            <div class="dg-thumb-overlay"><div class="dg-play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>
            <div class="dg-thumb-new"><span class="new-tag">NEW</span></div>
          </div>
          <div class="dg-card-body">
            <div class="dg-card-tag">Leave</div>
            <div class="dg-card-title">Manage Leave Applications &amp; Approvals</div>
            <div class="dg-card-desc">Request leave, approve pending applications, and review leave analytics Ã¢â‚¬ÂÃ¢â‚¬Â all in one streamlined workflow.</div>
            <div class="dg-card-footer">
              <button class="dg-card-cta">Watch Demo <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            </div>
          </div>
        </div>
        <div class="dg-card" onclick="gatedDemo('cmovhp1dj13hj9rr9on8k7xga')">
          <div class="dg-thumb dg-thumb-timepay">
            <img src="https://peopleshr.com/wp-content/uploads/2026/05/Configure_Employee_Shift_Schedules_Roster_Groups.webp" alt="Configure Employee Shift Schedules & Roster Groups" class="dg-thumb-image">
            <div class="dg-thumb-overlay"><div class="dg-play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>
            
          </div>
          <div class="dg-card-body">
            <div class="dg-card-tag">Attendance</div>
            <div class="dg-card-title">Configure Employee Shift Schedules &amp; Roster Groups</div>
            <div class="dg-card-desc">Assign employees to schedules by setting up roster groups, configuring shift parameters with breaks and overtime rules.</div>
            <div class="dg-card-footer">
              <button class="dg-card-cta">Watch Demo <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            </div>
          </div>
        </div>
      </div>`,
  talent:     `      <div class="dg-cat-header">
        <div class="dg-cat-header-left">
          <h2 class="dg-section-heading">Hire faster. Develop better. Retain longer.</h2>
          <p class="dg-cat-desc">From the first application to succession planning, build a high-performance talent engine that scales with your business.</p>
        </div>
        <div class="dg-cat-count-box">
          <div class="dg-cat-count-num">6</div>
          <div class="dg-cat-count-lbl">Demos available</div>
        </div>
      </div>

      <div class="dg-subcat">
        <div class="dg-subcat-header">
          <span class="dg-subcat-label">Hiring Manager</span>
          <span class="dg-subcat-pill">4 demos</span>
        </div>
        <div class="dg-grid">
        <div class="dg-card" onclick="gatedDemo('cmkgfw53z0001yg0ihojce4xw')">
          <div class="dg-thumb dg-thumb-talent">
            <img src="https://peopleshr.com/wp-content/uploads/2026/05/Job_Requisition.webp" alt="Job Requisitions" class="dg-thumb-image">
            <div class="dg-thumb-overlay"><div class="dg-play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>
            
          </div>
          <div class="dg-card-body">
            <div class="dg-card-tag">Recruitment</div>
            <div class="dg-card-title">Job Requisitions</div>
            <div class="dg-card-desc">Create and manage job requisitions, define role requirements, and route approval requests before opening a vacancy.</div>
            <div class="dg-card-footer">
              <button class="dg-card-cta">Watch Demo <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            </div>
          </div>
        </div>
        <div class="dg-card" onclick="gatedDemo('cmk0rq2ut1l9sgmn87oxiogg8')">
          <div class="dg-thumb dg-thumb-talent">
            <img src="https://peopleshr.com/wp-content/uploads/2026/05/Job_Advertisements.webp" alt="Job Advertisements" class="dg-thumb-image">
            <div class="dg-thumb-overlay"><div class="dg-play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>
            
          </div>
          <div class="dg-card-body">
            <div class="dg-card-tag">Recruitment</div>
            <div class="dg-card-title">Job Advertisements</div>
            <div class="dg-card-desc">Publish open roles across multiple job boards and channels directly from PeoplesHR with a few clicks.</div>
            <div class="dg-card-footer">
              <button class="dg-card-cta">Watch Demo <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            </div>
          </div>
        </div>
        <div class="dg-card" onclick="gatedDemo('cmk12fd6t1sr9gmn80bzrju5e')">
          <div class="dg-thumb dg-thumb-talent">
            <img src="https://peopleshr.com/wp-content/uploads/2026/05/CV_Ranking.webp" alt="CV Ranking" class="dg-thumb-image">
            <div class="dg-thumb-overlay"><div class="dg-play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>
            
          </div>
          <div class="dg-card-body">
            <div class="dg-card-tag">Recruitment</div>
            <div class="dg-card-title">CV Ranking</div>
            <div class="dg-card-desc">Let AI score and rank candidates against your job criteria automatically Ã¢â‚¬ÂÃ¢â‚¬Â so your team focuses on the best-fit applicants first.</div>
            <div class="dg-card-footer">
              <button class="dg-card-cta">Watch Demo <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            </div>
          </div>
        </div>
        </div>

      <div class="dg-subcat">
        <div class="dg-subcat-header">
          <span class="dg-subcat-label">Candidate</span>
          <span class="dg-subcat-pill">2 demos</span>
        </div>
        <div class="dg-grid">
        <div class="dg-card" onclick="gatedDemo('cmk2d4gcs325agmn8p2684u2s')">
          <div class="dg-thumb dg-thumb-talent">
            <img src="https://peopleshr.com/wp-content/uploads/2026/05/Manage_Job_Application.webp" alt="Manage Job Application" class="dg-thumb-image">
            <div class="dg-thumb-overlay"><div class="dg-play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>
            
          </div>
          <div class="dg-card-body">
            <div class="dg-card-tag">Recruitment</div>
            <div class="dg-card-title">Manage Job Application</div>
            <div class="dg-card-desc">See how candidates track, manage, and update their applications through the PeoplesHR candidate portal.</div>
            <div class="dg-card-footer">
              <button class="dg-card-cta">Watch Demo <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            </div>
          </div>
        </div>
        <div class="dg-card" onclick="gatedDemo('cmk0wamcb1n1dgmn8uxzyt7rg')">
          <div class="dg-thumb dg-thumb-talent">
            <img src="https://peopleshr.com/wp-content/uploads/2026/05/Candidate_Application.webp" alt="Candidate Application" class="dg-thumb-image">
            <div class="dg-thumb-overlay"><div class="dg-play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>
            
          </div>
          <div class="dg-card-body">
            <div class="dg-card-tag">Recruitment</div>
            <div class="dg-card-title">Candidate Application</div>
            <div class="dg-card-desc">Experience the candidate application journey first-hand Ã¢â‚¬ÂÃ¢â‚¬Â from discovering a role to submitting a complete application.</div>
            <div class="dg-card-footer">
              <button class="dg-card-cta">Watch Demo <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            </div>
          </div>
        </div>
        </div>
      </div>`,
  engagement: `      <div class="dg-cat-header">
        <div class="dg-cat-header-left">
          <h2 class="dg-section-heading">Build a culture people don't want to leave.</h2>
          <p class="dg-cat-desc">Measure, understand, and act on employee sentiment in real time Ã¢â‚¬ÂÃ¢â‚¬Â so you can fix problems before they become attrition.</p>
        </div>
        <div class="dg-cat-count-box">
          <div class="dg-cat-count-num">3</div>
          <div class="dg-cat-count-lbl">Demos available</div>
        </div>
      </div>
      <div class="dg-grid">
        <div class="dg-card" onclick="gatedDemo('REPLACE_ENGAGEMENT_SURVEYS_ID')">
          <div class="dg-thumb dg-thumb-engage">
            <div class="dg-thumb-ui">
              <div class="dg-ui-bar"></div>
              <div class="dg-ui-row"><div class="dg-ui-pill"></div><div class="dg-ui-pill w55"></div></div>
              <div class="dg-ui-bar s"></div>
            </div>
            <div class="dg-thumb-overlay"><div class="dg-play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>
            
          </div>
          <div class="dg-card-body">
            <div class="dg-card-tag">Engagement</div>
            <div class="dg-card-title">Employee Surveys &amp; Pulse Checks</div>
            <div class="dg-card-desc">Deploy pulse surveys, eNPS, and custom questionnaires Ã¢â‚¬ÂÃ¢â‚¬Â then visualise sentiment trends in real-time dashboards.</div>
            <div class="dg-card-footer">
              <button class="dg-card-cta">Watch Demo <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            </div>
          </div>
        </div>
        <div class="dg-card" onclick="gatedDemo('REPLACE_ENGAGEMENT_RECOGNITION_ID')">
          <div class="dg-thumb dg-thumb-engage">
            <div class="dg-thumb-ui">
              <div class="dg-ui-bar"></div>
              <div class="dg-ui-row"><div class="dg-ui-pill"></div><div class="dg-ui-pill w55"></div></div>
              <div class="dg-ui-bar s"></div>
            </div>
            <div class="dg-thumb-overlay"><div class="dg-play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>
            <div class="dg-thumb-new"><span class="new-tag">NEW</span></div>
          </div>
          <div class="dg-card-body">
            <div class="dg-card-tag">Recognition</div>
            <div class="dg-card-title">Recognition &amp; Rewards Programme</div>
            <div class="dg-card-desc">Peer-to-peer shoutouts, manager nominations, milestone awards, and a points-based reward marketplace Ã¢â‚¬ÂÃ¢â‚¬Â all in-platform.</div>
            <div class="dg-card-footer">
              <button class="dg-card-cta">Watch Demo <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            </div>
          </div>
        </div>
        <div class="dg-card" onclick="gatedDemo('REPLACE_ENGAGEMENT_MANAGER_ID')">
          <div class="dg-thumb dg-thumb-engage">
            <div class="dg-thumb-ui">
              <div class="dg-ui-bar"></div>
              <div class="dg-ui-row"><div class="dg-ui-pill"></div><div class="dg-ui-pill w55"></div></div>
              <div class="dg-ui-bar s"></div>
            </div>
            <div class="dg-thumb-overlay"><div class="dg-play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>
            
          </div>
          <div class="dg-card-body">
            <div class="dg-card-tag">Manager Intelligence</div>
            <div class="dg-card-title">Manager Effectiveness Scores</div>
            <div class="dg-card-desc">Track team-level eNPS, 1:1 completion rates, and upward feedback scores to surface your best Ã¢â‚¬ÂÃ¢â‚¬Â and riskiest Ã¢â‚¬ÂÃ¢â‚¬Â managers.</div>
            <div class="dg-card-footer">
              <button class="dg-card-cta">Watch Demo <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            </div>
          </div>
        </div>
      </div>`,
  insight:    `      <div class="dg-cat-header">
        <div class="dg-cat-header-left">
          <h2 class="dg-section-heading">Turn your people data into strategic decisions.</h2>
          <p class="dg-cat-desc">Real-time workforce intelligence Ã¢â‚¬ÂÃ¢â‚¬Â from pre-built dashboards to AI-powered natural language queries with Lexi, your HR copilot.</p>
          <div class="lexi-powered-badge">
            <span class="lpb-text">Powered by</span>
            <img src="https://peopleshr.com/wp-content/uploads/2026/05/lexi-s.png" alt="Lexi" class="lpb-logo-img">
          </div>
        </div>
        <div class="dg-cat-count-box">
          <div class="dg-cat-count-num">3</div>
          <div class="dg-cat-count-lbl">Demos available</div>
        </div>
      </div>
      <div class="dg-grid">
        <div class="dg-card" onclick="gatedDemo('REPLACE_INSIGHT_ANALYTICS_ID')">
          <div class="dg-thumb dg-thumb-insights">
            <div class="dg-thumb-ui">
              <div class="dg-ui-bar"></div>
              <div class="dg-ui-row"><div class="dg-ui-pill"></div><div class="dg-ui-pill w55"></div></div>
              <div class="dg-ui-bar s"></div>
            </div>
            <div class="dg-thumb-overlay"><div class="dg-play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>
            
          </div>
          <div class="dg-card-body">
            <div class="dg-card-tag">Analytics</div>
            <div class="dg-card-title">Workforce Analytics Dashboard</div>
            <div class="dg-card-desc">100+ pre-built reports covering attrition, headcount, diversity, time-to-hire, and more Ã¢â‚¬ÂÃ¢â‚¬Â updated in real time.</div>
            <div class="dg-card-footer">
              <button class="dg-card-cta">Watch Demo <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            </div>
          </div>
        </div>
        <div class="dg-card" onclick="gatedDemo('REPLACE_INSIGHT_LEXI_ID')">
          <div class="dg-thumb dg-thumb-insights">
            <div class="dg-thumb-ui">
              <div class="dg-ui-bar"></div>
              <div class="dg-ui-row"><div class="dg-ui-pill"></div><div class="dg-ui-pill w55"></div></div>
              <div class="dg-ui-bar s"></div>
            </div>
            <div class="dg-thumb-overlay"><div class="dg-play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>
            <div class="dg-thumb-new"><span class="new-tag">NEW</span></div>
          </div>
          <div class="dg-card-body">
            <div class="dg-card-tag">AI</div>
            <div class="dg-card-title">Lexi Ã¢â‚¬ÂÃ¢â‚¬Â Your HR AI Copilot</div>
            <div class="dg-card-desc">Ask Lexi anything in plain English. Get instant attrition forecasts, anomaly alerts, and recommended actions Ã¢â‚¬ÂÃ¢â‚¬Â no SQL required.</div>
            <div class="dg-card-footer">
              <button class="dg-card-cta">Watch Demo <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            </div>
          </div>
        </div>
        <div class="dg-card" onclick="gatedDemo('REPLACE_INSIGHT_REPORTS_ID')">
          <div class="dg-thumb dg-thumb-insights">
            <div class="dg-thumb-ui">
              <div class="dg-ui-bar"></div>
              <div class="dg-ui-row"><div class="dg-ui-pill"></div><div class="dg-ui-pill w55"></div></div>
              <div class="dg-ui-bar s"></div>
            </div>
            <div class="dg-thumb-overlay"><div class="dg-play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>
            
          </div>
          <div class="dg-card-body">
            <div class="dg-card-tag">Reporting</div>
            <div class="dg-card-title">Custom Report Builder</div>
            <div class="dg-card-desc">Drag-and-drop report builder with scheduled delivery, role-based access controls, and PDF/Excel export built in.</div>
            <div class="dg-card-footer">
              <button class="dg-card-cta">Watch Demo <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            </div>
          </div>
        </div>
      </div>`
};

function ensureLoaded(cat) {
  var sec = document.getElementById('dg-' + cat);
  if (!sec || sec.getAttribute('data-loaded') !== 'false') return;
  sec.innerHTML = LAZY_SECTIONS[cat] || '';
  sec.setAttribute('data-loaded', 'true');
}

function activateCat(cat) {
  var tab = document.querySelector('.industry-tab[data-cat="' + cat + '"]');
  var sec = document.getElementById('dg-' + cat);
  if (!tab || !sec) return false;
  ensureLoaded(cat);
  document.querySelectorAll('.industry-tab').forEach(function(t) { t.classList.remove('active'); });
  document.querySelectorAll('.dg-section').forEach(function(s) { s.classList.remove('visible'); });
  tab.classList.add('active');
  sec.classList.add('visible');
  return true;
}

var catsWrap;
var tIndex = 0, tTotal = 4;

function scrollToDemos() {
  var target = document.getElementById('demos');
  if (!target || !catsWrap) return;
  var wpHeader = document.querySelector('header.site-header, .site-header, #masthead, header') || { offsetHeight: 80 };
  var headerH = wpHeader.offsetHeight || 80;
  window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - catsWrap.offsetHeight - headerH, behavior: 'smooth' });
}
function scrollToContact() {
  var target = document.getElementById('dg-contact');
  if (!target) return;
  window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - 24, behavior: 'smooth' });
}
function tGoTo(n) {
  tIndex = n;
  var track = document.getElementById('t-track');
  if (track) track.style.transform = 'translateX(-' + (tIndex * 100) + '%)';
  document.querySelectorAll('.t-dot').forEach(function(d, i) { d.classList.toggle('active', i === tIndex); });
}
function tSlide(dir) { tGoTo((tIndex + dir + tTotal) % tTotal); }

document.addEventListener('DOMContentLoaded', function() {
  catsWrap = document.querySelector('.dg-cats-wrap');

  document.querySelectorAll('.industry-tab[data-cat]').forEach(function(tab) {
    tab.addEventListener('click', function() {
      if (tab.classList.contains('dg-tab-disabled')) { showDevToast(); return; }
      activateCat(tab.dataset.cat);
      history.replaceState(null, '', '#' + tab.dataset.cat);
      if (catsWrap) catsWrap.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  var hash = window.location.hash.replace('#', '').toLowerCase();
  if (hash) activateCat(hash);

  setInterval(function() { tSlide(1); }, 6000);

  var c = document.getElementById('hs-form-container');
  if (c) {
    var obs = new MutationObserver(function() {
      if (document.querySelector('#hs-form-container .hs-form')) {
        var ph = document.getElementById('hs-placeholder');
        if (ph) ph.style.display = 'none';
        obs.disconnect();
      }
    });
    obs.observe(c, { childList: true, subtree: true });
  }

  window.hsFormsOnReady = window.hsFormsOnReady || [];
  window.hsFormsOnReady.push(function() {
    hbspt.forms.create({
      portalId: "45700506",
      formId: "e3e8a63f-d050-4a3c-9178-acea4915a7cd",
      region: "na2",
      target: "#hs-form-container"
    });
  });
});

window.addEventListener('hashchange', function() {
  var hash = window.location.hash.replace('#', '').toLowerCase();
  if (hash) activateCat(hash);
});

var _pendingDemoId = null;
var _gateDone = !!sessionStorage.getItem('phr_gate_done');

function gatedDemo(id) {
  if (_gateDone) { Supademo.open(id); return; }
  _pendingDemoId = id;
  _showGate();
}

function gatedHeroDemo() {
  if (_gateDone) { _loadHeroIframe(); return; }
  _pendingDemoId = '__hero__';
  _showGate();
}

function _loadHeroIframe() {
  var iframe = document.getElementById('hero-demo-iframe');
  if (iframe && iframe.dataset.src && !iframe.getAttribute('src')) {
    iframe.setAttribute('src', iframe.dataset.src);
  }
  var overlay = document.getElementById('hero-gate-overlay');
  if (overlay) overlay.style.display = 'none';
}

if (_gateDone) {
  document.addEventListener('DOMContentLoaded', _loadHeroIframe);
}

function _showGate() {
  var overlay = document.getElementById('dg-gate-overlay');
  if (!overlay) return;
  /* Move to direct child of <body> to escape any parent stacking context */
  if (overlay.parentNode !== document.body) {
    document.body.appendChild(overlay);
  }
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  _initGateForm();
}

function _hideGate() {
  var overlay = document.getElementById('dg-gate-overlay');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
  _pendingDemoId = null;
}

function _onGateSubmit() {
  var id = _pendingDemoId;
  sessionStorage.setItem('phr_gate_done', '1');
  _gateDone = true;
  _hideGate();
  if (id === '__hero__') {
    setTimeout(_loadHeroIframe, 450);
  } else if (id) {
    setTimeout(function() { Supademo.open(id); }, 450);
  }
}

function _initGateForm() {
  var container = document.getElementById('dg-gate-form-container');
  if (!container || container.querySelector('.hs-form')) return;
  if (typeof hbspt === 'undefined') { setTimeout(_initGateForm, 250); return; }
  hbspt.forms.create({
    portalId:  '45700506',
    formId:    'e3e8a63f-d050-4a3c-9178-acea4915a7cd',
    region:    'na2',
    target:    '#dg-gate-form-container',
    onFormSubmitted: _onGateSubmit
  });
}

window.addEventListener('message', function(e) {
  if (!e.data || _gateDone) return;
  if (e.data.type === 'hsFormCallback' &&
     (e.data.eventName === 'onFormSubmitted' || e.data.eventName === 'onFormSubmit')) {
    _onGateSubmit();
  }
});

/* ==========================================================================
   smsgt-lexi-ph-page.js
   Page-specific interactions for SMSGT â€” AI-Powered HR Intelligence (Philippines).
   Requires: phrhome.js loaded first.
   ========================================================================== */

(function () {
  'use strict';

  /* â”€â”€ HubSpot Modal â”€â”€ */
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

  /* â”€â”€ Scroll Animations (page-specific elements only) â”€â”€
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


/* ── 1. Video Carousel ─────────────────────────────────────────────── */
(function() {
  var track    = document.getElementById('cs-vid-track');
  var prevBtn  = document.getElementById('cs-vid-prev');
  var nextBtn  = document.getElementById('cs-vid-next');
  if (!track || !prevBtn || !nextBtn) return;

  var CARD_W   = 240;
  var GAP      = 16;
  var STEP     = CARD_W + GAP;
  var cards    = track.querySelectorAll('.cs-vid-card');
  var total    = cards.length;
  var idx      = 0;

  function visibleCount() {
    return Math.max(1, Math.floor((track.parentElement.offsetWidth + GAP) / STEP));
  }
  function maxIdx() {
    return Math.max(0, total - visibleCount());
  }
  function render() {
    track.style.transform = 'translateX(-' + (idx * STEP) + 'px)';
    prevBtn.disabled = idx <= 0;
    nextBtn.disabled = idx >= maxIdx();
  }

  prevBtn.addEventListener('click', function() { if (idx > 0) { idx--; render(); } });
  nextBtn.addEventListener('click', function() { if (idx < maxIdx()) { idx++; render(); } });
  window.addEventListener('resize', function() { idx = Math.min(idx, maxIdx()); render(); });

  render();
}());


/* ── 2. Video Modal ────────────────────────────────────────────────── */
(function() {
  var modal      = document.getElementById('cs-vid-modal');
  var iframe     = document.getElementById('cs-vid-iframe');
  var closeBtn   = document.getElementById('cs-vid-modal-close');
  var titleEl    = document.getElementById('cs-vid-modal-title');
  if (!modal || !iframe || !closeBtn) return;

  function openModal(ytId, title) {
    iframe.src = 'https://www.youtube.com/embed/' + ytId + '?autoplay=1&rel=0&modestbranding=1';
    if (titleEl) titleEl.textContent = title || '';
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    modal.classList.remove('open');
    iframe.src = '';
    document.body.style.overflow = '';
  }

  // Wire all video cards — carousel cards + hero card
  document.querySelectorAll('.cs-vid-card, .cs-hero-vid-card, .cs-vf-thumb').forEach(function(card) {
    card.addEventListener('click', function() {
      var ytId  = card.getAttribute('data-youtube');
      var title = card.getAttribute('data-title') || '';
      if (!ytId || ytId.indexOf('REPLACE_') === 0) {
        console.warn('[PeoplesHR Customers] YouTube ID not set. Update data-youtube on this card.');
        return;
      }
      openModal(ytId, title);
    });
  });

  closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', function(e) { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });
}());


/* ── 3. Library Filter ─────────────────────────────────────────────── */
(function() {
  var cards      = Array.prototype.slice.call(document.querySelectorAll('#cs-grid .cs-card[data-industry]'));
  var noResults  = document.getElementById('cs-no-results');
  var countEl    = document.getElementById('cs-result-count');
  var trigger    = document.getElementById('cs-filter-trigger');
  var dropdown   = document.getElementById('cs-filter-dropdown');
  var badge      = document.getElementById('cs-filter-badge');
  var clearBtn   = document.getElementById('cs-filter-clear');
  var sidebarClear = document.getElementById('cs-sidebar-clear');
  if (!cards.length) return;

  var activeIndustry = 'all';
  var activeModule   = 'all';

  /* ── Mobile dropdown ── */
  function openDropdown() {
    dropdown.classList.add('open');
    trigger.classList.add('open');
    trigger.setAttribute('aria-expanded', 'true');
  }
  function closeDropdown() {
    dropdown.classList.remove('open');
    trigger.classList.remove('open');
    trigger.setAttribute('aria-expanded', 'false');
  }
  if (trigger) {
    trigger.addEventListener('click', function(e) {
      e.stopPropagation();
      dropdown.classList.contains('open') ? closeDropdown() : openDropdown();
    });
  }
  document.addEventListener('click', function(e) {
    if (dropdown && !dropdown.contains(e.target) && e.target !== trigger) closeDropdown();
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeDropdown();
  });

  /* ── Sync all filter UIs to current state ── */
  function syncUI() {
    /* Sidebar list buttons */
    document.querySelectorAll('#cs-industry-list .cs-filter-list-btn').forEach(function(b) {
      b.classList.toggle('active', b.getAttribute('data-filter-industry') === activeIndustry);
    });
    document.querySelectorAll('#cs-module-list .cs-filter-list-btn').forEach(function(b) {
      b.classList.toggle('active', b.getAttribute('data-filter-module') === activeModule);
    });
    /* Mobile pills */
    document.querySelectorAll('#cs-industry-pills-mobile .cs-pill').forEach(function(p) {
      p.classList.toggle('active', p.getAttribute('data-filter-industry') === activeIndustry);
    });
    document.querySelectorAll('#cs-module-pills-mobile .cs-pill').forEach(function(p) {
      p.classList.toggle('active', p.getAttribute('data-filter-module') === activeModule);
    });
    /* Badge */
    var count = (activeIndustry !== 'all' ? 1 : 0) + (activeModule !== 'all' ? 1 : 0);
    if (badge) { badge.textContent = count; badge.classList.toggle('hidden', count === 0); }
    /* Sidebar clear button */
    if (sidebarClear) sidebarClear.classList.toggle('visible', count > 0);
  }

  /* ── Apply filters to cards ── */
  function applyFilters() {
    var visible = 0;
    cards.forEach(function(card) {
      var industry = card.getAttribute('data-industry');
      var modules  = (card.getAttribute('data-modules') || '').split(' ');
      var show     = (activeIndustry === 'all' || industry === activeIndustry) &&
                     (activeModule   === 'all' || modules.indexOf(activeModule) !== -1);
      card.style.display = show ? '' : 'none';
      if (show) visible++;
    });
    if (countEl)   countEl.textContent = visible;
    if (noResults) noResults.classList.toggle('visible', visible === 0);
    syncUI();
  }

  /* ── Sidebar list buttons ── */
  document.querySelectorAll('#cs-industry-list .cs-filter-list-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      activeIndustry = btn.getAttribute('data-filter-industry');
      applyFilters();
    });
  });
  document.querySelectorAll('#cs-module-list .cs-filter-list-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      activeModule = btn.getAttribute('data-filter-module');
      applyFilters();
    });
  });

  /* ── Mobile dropdown pills ── */
  document.querySelectorAll('#cs-industry-pills-mobile .cs-pill').forEach(function(pill) {
    pill.addEventListener('click', function() {
      activeIndustry = pill.getAttribute('data-filter-industry');
      applyFilters();
    });
  });
  document.querySelectorAll('#cs-module-pills-mobile .cs-pill').forEach(function(pill) {
    pill.addEventListener('click', function() {
      activeModule = pill.getAttribute('data-filter-module');
      applyFilters();
    });
  });

  /* ── Clear (both mobile and sidebar) ── */
  function clearAll() {
    activeIndustry = 'all';
    activeModule   = 'all';
    applyFilters();
    closeDropdown();
  }
  if (clearBtn)    clearBtn.addEventListener('click', clearAll);
  if (sidebarClear) sidebarClear.addEventListener('click', clearAll);
}());


/* ── 4. Smooth scroll for hero CTA ────────────────────────────────── */
(function() {
  var btn = document.querySelector('a[href="#library"]');
  if (!btn) return;
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    var target = document.getElementById('library');
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}());


/* ── 5. Testimonial Slider ─────────────────────────────────────────── */
(function() {
  var slides     = Array.prototype.slice.call(document.querySelectorAll('.cs-ts-slide'));
  var total      = slides.length;
  if (!total) return;

  var current    = 0;
  var autoTimer  = null;
  var INTERVAL   = 6000;

  function goTo(n) {
    slides[current].classList.remove('active');
    current = (n + total) % total;
    slides[current].classList.add('active');
    document.querySelectorAll('.cs-ts-dot').forEach(function(dot) {
      dot.classList.toggle('active', parseInt(dot.getAttribute('data-slide'), 10) === current);
    });
    var bars = document.querySelectorAll('.cs-ts-progress-bar');
    bars.forEach(function(bar) {
      bar.style.transition = 'none';
      bar.style.width = '0%';
      bar.offsetHeight;
      bar.style.transition = 'width ' + INTERVAL + 'ms linear';
      bar.style.width = '100%';
    });
  }

  function resetAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(function() { goTo(current + 1); }, INTERVAL);
  }

  var prevBtn = document.getElementById('cs-ts-prev');
  var nextBtn = document.getElementById('cs-ts-next');
  if (prevBtn) prevBtn.addEventListener('click', function() { goTo(current - 1); resetAuto(); });
  if (nextBtn) nextBtn.addEventListener('click', function() { goTo(current + 1); resetAuto(); });

  document.querySelectorAll('[data-ts-prev]').forEach(function(btn) {
    btn.addEventListener('click', function() { goTo(current - 1); resetAuto(); });
  });
  document.querySelectorAll('[data-ts-next]').forEach(function(btn) {
    btn.addEventListener('click', function() { goTo(current + 1); resetAuto(); });
  });

  document.querySelectorAll('.cs-ts-dot[data-slide]').forEach(function(dot) {
    dot.addEventListener('click', function() {
      goTo(parseInt(dot.getAttribute('data-slide'), 10));
      resetAuto();
    });
  });

  var touchX = 0;
  var track = document.getElementById('cs-ts-track');
  if (track) {
    track.addEventListener('touchstart', function(e) { touchX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', function(e) {
      var diff = touchX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 44) { goTo(diff > 0 ? current + 1 : current - 1); resetAuto(); }
    });
  }

  goTo(0);
  resetAuto();
}());


/* ── 6. Featured Case Study Switcher (Challenge / Solution) ─────────── */
(function () {
  'use strict';

  var ARROW = '<svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var CHECK = '<svg viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  var contentEl = document.getElementById('sf2-content');
  var imgEl     = document.getElementById('sf2-img');
  var tintEl    = document.getElementById('sf2-tint');
  var btns      = document.querySelectorAll('#sf2-logos .sf2-btn');

  if (!contentEl || !imgEl || !btns.length) { return; }

  /* Logo asset base — update here if the upload path ever changes */
  var LOGO_BASE = 'https://dev.peopleshr.com/wp-content/uploads/2026/04/';
  var BRANDIX_LOGO = 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Brandix_Apparel_Limited_Logo.png';

  /* Featured story content — edit/add/remove entries here.
     Each entry needs a matching logo button in #sf2-logos (index.html)
     with the same data-idx as its position in this array. */
  var stories = [
    {
      logo:      BRANDIX_LOGO,
      logoAlt:   'Brandix',
      company:   'Brandix Group',
      headline:  'How Brandix unified HR for 50,000+ employees across 14 locations',
      challenge: 'Brandix was managing payroll, attendance, and workforce data independently across 14 manufacturing sites. With no unified view of the workforce, month-end reconciliation consumed days and errors were inevitable.',
      solution:  'PeoplesHR unified all 14 locations onto a single platform, giving HR complete visibility in real time. Payroll now closes in a fraction of the time with zero manual reconciliation between sites.',
      modules:   ['HR', 'Pay', 'Time'],
      img:       'https://img.magnific.com/free-photo/factory-workshop-interior-machines-glass-production-background_645730-396.jpg?semt=ais_hybrid&w=740&q=80',
      tint:      '#1d4ed8',
      href:      'https://phr-case-study-inner-page-47s7.vercel.app/'
    },
    {
      logo:      '',
      logoAlt:   'SMSGT',
      company:   'SMS Global Technologies',
      headline:  'How SMSGT cut their monthly HR close from five days to one',
      challenge: 'Three separate business units, three disconnected HR systems. SMSGT had no single source of truth for headcount, leave, or payroll and every monthly close required days of manual consolidation across divisions.',
      solution:  'PeoplesHR brought all three business units onto one platform. Reporting that previously took five days now completes in one, and every division works from the same live data.',
      modules:   ['HR', 'Talent'],
      img:       'https://shoppable.ph/wp-content/uploads/2023/12/business-philippines-limitations-1024x684.jpg',
      tint:      '#0f766e',
      href:      'https://phr-case-study-inner-page-47s7.vercel.app/'
    },
    {
      logo:      LOGO_BASE + 'peoplesbank.webp',
      logoAlt:   'Peoples Bank',
      company:   'Peoples Bank',
      headline:  'How Peoples Bank automated compliance and transformed payroll reporting',
      challenge: 'In a highly regulated sector, the Peoples Bank HR team was spending two weeks every quarter manually compiling compliance reports. Payroll errors carried serious regulatory risk and consumed significant audit preparation time.',
      solution:  'PeoplesHR automated the entire compliance workflow. Audit-ready reports are now generated at the push of a button, and payroll runs with built-in validation that eliminates manual errors before they happen.',
      modules:   ['Pay', 'Insight'],
      img:       'https://www.bria.com.ph/wp-content/uploads/2022/05/Central-Business-Districts-in-the-Philippines.png',
      tint:      '#b91c1c',
      href:      'https://phr-case-study-inner-page-47s7.vercel.app/'
    },
    {
      logo:      LOGO_BASE + 'pyramidwilmar.webp',
      logoAlt:   'Pyramid Wilmar',
      company:   'Pyramid Wilmar',
      headline:  'How Pyramid Wilmar eliminated payroll reconciliation across a distributed workforce',
      challenge: 'With a large hourly workforce spread across multiple sites, Pyramid Wilmar was manually reconciling attendance data with payroll every cycle. The process was slow, error-prone, and took days longer than it should.',
      solution:  'PeoplesHR connected time and attendance directly to payroll. Attendance data flows automatically into each pay run, eliminating reconciliation entirely and cutting the payroll cycle by several days.',
      modules:   ['HR', 'Time'],
      img:       'https://www.worldbank.org/content/dam/Worldbank/Feature%20Story/Africa/Tanzania/ug-empowering-ugandas-youth-to-be-job-creators-780x439.jpg',
      tint:      '#92400e',
      href:      'https://phr-case-study-inner-page-47s7.vercel.app/'
    }
  ];

  function buildContent(s) {
    var logoHtml = s.logo
      ? '<img class="sf2-company-logo" src="' + s.logo + '" alt="' + s.logoAlt + '">'
      : '<span class="sf2-company-name">' + s.company + '</span>';

    var modulesHtml = s.modules.map(function (m) {
      return '<span class="sf2-module-chip">' + CHECK + m + '</span>';
    }).join('');

    return '<h3 class="sf2-headline">' + s.headline + '</h3>'
      + '<div class="sf2-block">'
      +   '<div class="sf2-block-heading">Challenge</div>'
      +   '<p class="sf2-block-text">' + s.challenge + '</p>'
      + '</div>'
      + '<div class="sf2-block">'
      +   '<div class="sf2-block-heading">Solution</div>'
      +   '<p class="sf2-block-text">' + s.solution + '</p>'
      + '</div>'
      + '<div class="sf2-modules-section">'
      +   '<div class="sf2-modules-heading">Modules used</div>'
      +   '<div class="sf2-modules">' + modulesHtml + '</div>'
      +   '<a href="' + s.href + '" class="sf2-read" target="_blank">Read Case Study ' + ARROW + '</a>'
      + '</div>';
  }

  function switchTo(idx) {
    var s = stories[idx];
    if (!s) { return; }

    btns.forEach(function (b, i) { b.classList.toggle('active', i === idx); });
    contentEl.classList.add('sf2-out');
    imgEl.classList.add('sf2-img-out');

    setTimeout(function () {
      contentEl.innerHTML     = buildContent(s);
      imgEl.src               = s.img;
      imgEl.alt               = s.logoAlt;
      tintEl.style.background = s.tint;

      contentEl.classList.remove('sf2-out');
      contentEl.classList.add('sf2-in');
      imgEl.classList.remove('sf2-img-out');

      void contentEl.offsetWidth; /* force reflow so the fade-in transition fires */
      contentEl.classList.remove('sf2-in');
    }, 220);
  }

  btns.forEach(function (btn, i) {
    btn.addEventListener('click', function () { switchTo(i); });
  });

  switchTo(0);
}());
