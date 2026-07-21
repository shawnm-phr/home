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

/* ── Webinar Page ─────────────────────────────────────────────────────────── */
(function () {
  var body = document.getElementById('wb-body');
  if (!body) return;

  /* ── Data ── */
  var DATA = {
    featured: {
      title: "The Resource Triangle: Aligning Tech, Finance & People for Real HR ROI",
      description: "Your HR technology investment is already underway — HRIS selected, budget approved, platform launched. But why is adoption still stagnant and ROI not being achieved? Join a 30-minute live session to discover why alignment between your HCM, workforce planning, and financial cycle is the key that has been overlooked.",
      date: "2026-06-05T14:00:00+07:00",
      dateLabel: "5th June, 2026",
      timeLabel: "2:00 PM WIB · 30 mins",
      registerUrl: "https://peopleshr.com/webinar-indonesia/",
      language: "Bahasa",
      speakers: [
        { initials: "MW", name: "Marcino Waas", role: "HR Technology Strategy Expert & Digital Employee Journey Architect · Pratesis", photo: "images/marcino_waas.webp", color: "#dbeafe", textColor: "#2563eb" }
      ]
    },
    upcoming: [],
    recordings: [
      {
        category: "Product",
        categoryColor: "#2563eb",
        videos: [
          { id: "rec-0", title: "The AI Intelligence Your C-Suite Needs", date: "19 May 2026", duration: "42:39", views: "new", language: "English", youtubeId: "lBM73hj9Vfg", thumbnailGradient: "linear-gradient(135deg,#1e40af,#3b82f6)", speakers: [{ initials: "SM", name: "Shawn Moses", role: "Product Marketing Manager, PeoplesHR", photo: "images/shawn_moses.webp", color: "#e0f2fe", textColor: "#0369a1" }] },
          { id: "rec-7", title: "The EverywhereWorkforce: A Live Look at HR Tech Built for Mobility", date: "10 Apr 2026", duration: "", views: "", language: "English", youtubeId: "StNpoZbNjVs", thumbnailGradient: "linear-gradient(135deg,#1e40af,#3b82f6)", speakers: [{ initials: "RS", name: "Riyazi Samsudeen", role: "Director Sales & Partner Management, PeoplesHR", photo: "images/riyazi_samsudeen.webp", color: "#ffedd5", textColor: "#c2410c" }] },
          { id: "rec-8", title: "AI in HR: From Hype to Everyday Impact", date: "26 Nov 2025", duration: "", views: "", language: "Bahasa", youtubeId: "iCLkCzA_EdE", thumbnailGradient: "linear-gradient(135deg,#312e81,#6d28d9)", speakers: [{ initials: "SD", name: "Sri Rejeki", role: "Head of HR, PT Metrodata Electronics", photo: "images/sri_rejeki.webp", color: "#ccfbf1", textColor: "#0f766e" }] },
          { id: "rec-11", title: "How to effectively use People Analytics for your People", date: "31 Aug 2023", duration: "", views: "", language: "English", youtubeId: "cAbGKlIRjkQ", thumbnailGradient: "linear-gradient(135deg,#1e40af,#3b82f6)", speakers: [{ initials: "AG", name: "Asitha Goonewardena", role: "Chief Product Owner, PeoplesHR", photo: "images/asitha_goonewardana.webp", color: "#ffedd5", textColor: "#c2410c" }] }
        ]
      },
      {
        category: "HR & People",
        categoryColor: "#be185d",
        videos: [
          { id: "rec-9", title: "Talent in the Age of AI: How HR Tech Is Transforming Workforce Management", date: "25 Feb 2026", duration: "", views: "", language: "Bahasa", youtubeId: "E3hYTxXqLDQ", thumbnailGradient: "linear-gradient(135deg,#9d174d,#ec4899)", speakers: [{ initials: "RN", name: "Dr. Rully C. Hamdani Nawawi, SP., MBA, CHRP", role: "Director - PT Hutama Mandiri Cipta", color: "#ede9fe", textColor: "#7c3aed" }] },
          { id: "rec-12", title: "The Future of HR in a Distributed Workforce: Supercharging Global Talent Mobility with Technology", date: "14 Nov 2024", duration: "", views: "", language: "English", youtubeId: "Opnd0QA7Tek", thumbnailGradient: "linear-gradient(135deg,#9d174d,#ec4899)", speakers: [{ initials: "CD", name: "Charlie Dyer", role: "Director, Product - Topia", photo: "images/charlie_dyer.webp", color: "#dbeafe", textColor: "#2563eb" }, { initials: "VW", name: "Vichalya Wijesuriya", role: "Director Marketing, PeoplesHR", color: "#d1fae5", textColor: "#065f46" }] },
          { id: "rec-13", title: "The Role of AI in HR: Shaping Tomorrow's Workforce", date: "28 Aug 2024", duration: "", views: "", language: "English", youtubeId: "wKQRUktg0Nw", thumbnailGradient: "linear-gradient(135deg,#7c2d12,#f97316)", speakers: [{ initials: "TP", name: "Tarvinder Puri", role: "Human Resources Director, ADP Advisory Services", color: "#fce7f3", textColor: "#be185d" }, { initials: "LL", name: "Luxsho Logan", role: "Vice President, Sales - PeoplesHR", photo: "images/luxsho_logan.webp", color: "#ede9fe", textColor: "#7c3aed" }] },
          { id: "rec-14", title: "The Influence of AI in HR: Friend or Foe", date: "18 Jun 2024", duration: "", views: "", language: "English", youtubeId: "WZ8jdOzlhnk", thumbnailGradient: "linear-gradient(135deg,#581c87,#a855f7)", speakers: [{ initials: "LL", name: "Luxsho Logan", role: "Vice President, Sales - PeoplesHR", photo: "images/luxsho_logan.webp", color: "#ede9fe", textColor: "#7c3aed" }, { initials: "KA", name: "Dr. Kwame Annor", role: "Senior HR Practitioner", photo: "images/kwame_annor.webp", color: "#fef9c3", textColor: "#854d0e" }] },
          { id: "rec-15", title: "Beginner's Blueprint: How to Use AI Prompts in HR", date: "19 Sep 2024", duration: "", views: "", language: "English", youtubeId: "3tc7z2Bekps", thumbnailGradient: "linear-gradient(135deg,#064e3b,#34d399)", speakers: [{ initials: "MG", name: "Maheshi Gamage", role: "Asst. Vice President, HR - Nations Trust Bank PLC", photo: "images/maheshi_gamage.webp", color: "#ccfbf1", textColor: "#0f766e" }] },
          { id: "rec-16", title: "AI's Influence on HR: Navigating the Future of Work in 2024", date: "24 Jul 2024", duration: "", views: "", language: "English", youtubeId: "P0j0D4oUebc", thumbnailGradient: "linear-gradient(135deg,#1e3a8a,#60a5fa)", speakers: [{ initials: "LL", name: "Luxsho Logan", role: "Vice President, Sales - PeoplesHR", photo: "images/luxsho_logan.webp", color: "#ede9fe", textColor: "#7c3aed" }] },
          { id: "rec-17", title: "How to Search for Talent Skills in Emerging Markets", date: "", duration: "", views: "", language: "English", youtubeId: "ghOShodEj6s", thumbnailGradient: "linear-gradient(135deg,#4c1d95,#8b5cf6)", speakers: [{ initials: "CF", name: "Charles H. Ferguson", role: "General Manager - APAC, Globalization Partners", photo: "images/charles_ferguson.webp", color: "#f0fdf4", textColor: "#15803d" }] }
        ]
      },
      {
        category: "Finance & Payroll",
        categoryColor: "#d97706",
        videos: [
          { id: "rec-10", title: "Fixing Philippines Payroll: What HR needs to get right in 2026", date: "18 Sep 2025", duration: "", views: "", language: "English", youtubeId: "oVoOESPejnM", thumbnailGradient: "linear-gradient(135deg,#78350f,#f59e0b)", speakers: [{ initials: "GP", name: "Gigs P. Patano", role: "", color: "#fef9c3", textColor: "#854d0e" }, { initials: "RS", name: "Riyazi Samsudeen", role: "Director Sales & Partner Management, PeoplesHR", photo: "images/riyazi_samsudeen.webp", color: "#ffedd5", textColor: "#c2410c" }] },
          { id: "rec-18", title: "Future-Proof Payroll: Navigating Compliance in the Digital Age", date: "23 Aug 2024", duration: "", views: "", language: "English", youtubeId: "mR7ll4k29h0", thumbnailGradient: "linear-gradient(135deg,#78350f,#f59e0b)", speakers: [{ initials: "AG", name: "Asitha Goonewardena", role: "Chief Product Owner, PeoplesHR", photo: "images/asitha_goonewardana.webp", color: "#ffedd5", textColor: "#c2410c" }, { initials: "RS", name: "Riyazi Samsudeen", role: "Director Sales & Partner Management, PeoplesHR", photo: "images/riyazi_samsudeen.webp", color: "#ffedd5", textColor: "#c2410c" }] }
        ]
      }
    ]
  };

  /* ── Helpers ── */
  var LANG_FLAG = { English: '🇬🇧', Bahasa: '🇮🇩' };
  function langBadge(lang) {
    if (!lang) return '';
    return '<span class="wb-lang-badge">' + (LANG_FLAG[lang] || '') + ' ' + lang + '</span>';
  }

  var IC_CAL  = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="3" width="12" height="11" rx="2" fill="none"/><path d="M5 2v2M11 2v2M2 7h12" stroke-linecap="round"/></svg>';
  var IC_CLK  = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="8" r="6" fill="none"/><path d="M8 5v3l2 2" stroke-linecap="round"/></svg>';
  var IC_ARR  = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 7h10M7 2l5 5-5 5"/></svg>';
  var IC_PLG  = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 4l8 4-8 4V4z" fill="#fff"/></svg>';
  var IC_PLB  = '<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7 5l9 5-9 5V5z" fill="#2563eb"/></svg>';
  var IC_EYE  = '<svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M1 5s1.5-3 4-3 4 3 4 3-1.5 3-4 3-4-3-4-3z" fill="none"/><circle cx="5" cy="5" r="1.2" fill="currentColor"/></svg>';
  var IC_MCK  = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.3"><circle cx="6" cy="6" r="4.5" fill="none"/><path d="M6 3.5v2.5l1.5 1.5" stroke-linecap="round"/></svg>';
  var IC_MAR  = '<svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 5h6M5 2l3 3-3 3"/></svg>';
  var IC_PRV  = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10 4l-4 4 4 4"/></svg>';
  var IC_NXT  = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 4l4 4-4 4"/></svg>';
  var IC_GRID = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" style="display:inline;vertical-align:-2px;margin-right:6px;"><rect x="1" y="1" width="5" height="5" rx="1.5" fill="#2563eb"/><rect x="8" y="1" width="5" height="5" rx="1.5" fill="#2563eb" opacity=".5"/><rect x="1" y="8" width="5" height="5" rx="1.5" fill="#2563eb" opacity=".5"/><rect x="8" y="8" width="5" height="5" rx="1.5" fill="#2563eb" opacity=".25"/></svg>';

  function speakerAv(s) {
    return s.photo
      ? '<img class="wb-speaker-av wb-rec-sp-photo" src="' + s.photo + '" alt="' + s.name + '">'
      : '<div class="wb-speaker-av" style="background:' + s.color + ';color:' + s.textColor + ';">' + s.initials + '</div>';
  }
  function recSpAv(s) {
    return s.photo
      ? '<img class="wb-rec-sp-av wb-rec-sp-photo" src="' + s.photo + '" alt="' + s.name + '">'
      : '<div class="wb-rec-sp-av" style="background:' + s.color + ';color:' + s.textColor + ';">' + s.initials + '</div>';
  }

  /* ── Renderers ── */
  function renderFeatured(f) {
    var speakersHTML = f.speakers.map(function (s) {
      return '<div class="wb-speaker">' + speakerAv(s) +
        '<div><div class="wb-speaker-name">' + s.name + '</div><div class="wb-speaker-role">' + s.role + '</div></div></div>';
    }).join('');
    return '<div class="wb-featured-card">' +
      '<div class="wb-featured-left"><div>' +
        '<div class="wb-featured-meta"><span class="wb-live-badge"><span class="wb-live-dot"></span>UPCOMING</span></div>' +
        '<h2 class="wb-featured-title">' + f.title + '</h2>' +
        langBadge(f.language) +
        '<p class="wb-featured-desc">' + f.description + '</p>' +
        '<div class="wb-speakers">' + speakersHTML + '</div>' +
      '</div><div class="wb-featured-footer">' +
        '<div class="wb-date-chip">' + IC_CAL + ' ' + f.dateLabel + '</div>' +
        '<div class="wb-date-chip">' + IC_CLK + ' ' + f.timeLabel + '</div>' +
        '<a href="' + f.registerUrl + '" class="btn-primary wb-featured-cta">Register Free ' + IC_ARR + '</a>' +
      '</div></div>' +
      '<div class="wb-featured-right"><div class="wb-countdown">' +
        '<div class="wb-countdown-label">Starts in</div>' +
        '<div class="wb-countdown-tiles">' +
          '<div class="wb-tile"><div class="wb-tile-num" id="cd-days">--</div><div class="wb-tile-unit">Days</div></div>' +
          '<div class="wb-sep">:</div>' +
          '<div class="wb-tile"><div class="wb-tile-num" id="cd-hrs">--</div><div class="wb-tile-unit">Hrs</div></div>' +
          '<div class="wb-sep">:</div>' +
          '<div class="wb-tile"><div class="wb-tile-num" id="cd-min">--</div><div class="wb-tile-unit">Min</div></div>' +
          '<div class="wb-sep">:</div>' +
          '<div class="wb-tile"><div class="wb-tile-num" id="cd-sec">--</div><div class="wb-tile-unit">Sec</div></div>' +
        '</div></div></div>' +
      '</div>';
  }

  function renderUpcoming(upcoming) {
    if (!upcoming || !upcoming.length) return '';
    var cardsHTML = upcoming.map(function (u) {
      var spHTML = u.speaker ? '<div class="wb-uc-speaker">' + recSpAv(u.speaker) +
        '<div class="wb-rec-sp-info"><span class="wb-rec-sp-name">' + u.speaker.name + '</span>' +
        (u.speaker.role ? '<span class="wb-rec-sp-role">' + u.speaker.role + '</span>' : '') +
        '</div></div>' : '';
      return '<a class="wb-upcoming-card" href="' + u.registerUrl + '">' +
        '<div class="wb-uc-thumb">' +
          (u.date && u.time ? '<span class="wb-uc-date-badge">' + u.date + ' · ' + u.time + '</span>' : '') +
          '<div class="wb-uc-icon">' + IC_PLG + '</div></div>' +
        '<div class="wb-uc-body">' +
          '<div class="wb-uc-cat-row"><div class="wb-uc-cat">' + u.category + '</div>' +
          '<div class="wb-rec-meta-right">' + langBadge(u.language) + (u.date ? '<span class="wb-rec-date-str">' + u.date + '</span>' : '') + '</div></div>' +
          '<div class="wb-uc-title">' + u.title + '</div>' + spHTML +
          '<div class="wb-uc-footer"><div class="wb-uc-time">' + IC_MCK + ' ' + u.duration + '</div>' +
          '<span class="wb-register-btn">Register ' + IC_MAR + '</span></div>' +
        '</div></a>';
    }).join('');
    return '<div class="wb-section-head">' +
      '<div class="wb-section-title wb-section-title--dark">More <span>Upcoming</span> Webinars</div>' +
      '<div class="wb-slider-arrows wb-slider-arrows--dark">' +
        '<button class="wb-arrow wb-arrow--dark" id="sliderPrev">' + IC_PRV + '</button>' +
        '<button class="wb-arrow wb-arrow--dark" id="sliderNext">' + IC_NXT + '</button>' +
      '</div></div>' +
      '<div class="wb-slider-track-wrap"><div class="wb-slider-track" id="upcomingTrack">' + cardsHTML + '</div></div>';
  }

  function renderRecordings(recordings) {
    var total = recordings.reduce(function (n, g) { return n + g.videos.length; }, 0);
    var groupsHTML = recordings.map(function (group) {
      var cardsHTML = group.videos.map(function (v) {
        var spHTML = (v.speakers || []).slice(0, 2).map(function (s) {
          return '<div class="wb-rec-speaker">' + recSpAv(s) +
            '<div class="wb-rec-sp-info"><span class="wb-rec-sp-name">' + s.name + '</span>' +
            (s.role ? '<span class="wb-rec-sp-role">' + s.role + '</span>' : '') + '</div></div>';
        }).join('');
        var ytThumb = (v.youtubeId && v.youtubeId !== 'dQw4w9WgXcQ')
          ? '<img src="https://img.youtube.com/vi/' + v.youtubeId + '/hqdefault.jpg" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:1;" loading="lazy" alt="' + v.title.replace(/"/g, '&quot;') + '">'
          : '';
        return '<div class="wb-rec-card" data-ytid="' + v.youtubeId + '" data-title="' + v.title.replace(/"/g, '&quot;') + '">' +
          '<div class="wb-rec-thumb" style="background:' + v.thumbnailGradient + '">' +
            ytThumb +
            '<span class="wb-preview-label">Preview</span>' +
            '<div class="wb-rec-thumb-inner"><div class="wb-rec-play">' + IC_PLB + '</div></div>' +
            (v.duration ? '<span class="wb-rec-duration">' + v.duration + '</span>' : '') +
            (v.views ? '<span class="wb-rec-viewed">' + IC_EYE + ' ' + v.views + ' views</span>' : '') +
          '</div>' +
          '<div class="wb-rec-body">' +
            '<div class="wb-rec-meta"><span class="wb-rec-cat-dot">' +
              '<span style="width:6px;height:6px;border-radius:50%;background:' + group.categoryColor + ';display:inline-block;"></span> ' + group.category +
            '</span><div class="wb-rec-meta-right">' + langBadge(v.language) + '<span class="wb-rec-date-str">' + v.date + '</span></div></div>' +
            '<div class="wb-rec-title">' + v.title + '</div>' +
            '<div class="wb-rec-footer"><div class="wb-rec-speakers">' + spHTML + '</div>' +
            '<button class="wb-watch-btn">Watch ' + IC_MAR + '</button></div>' +
          '</div></div>';
      }).join('');
      return '<div class="wb-cat-group">' +
        '<div class="wb-cat-label"><span class="wb-cat-label-text">' + IC_GRID + ' ' + group.category + '</span><div class="wb-cat-label-line"></div></div>' +
        '<div class="wb-rec-grid">' + cardsHTML + '</div></div>';
    }).join('');
    return '<div class="wb-recordings-wrap">' +
      '<div class="wb-rec-header"><div class="wb-rec-title-block">' +
        '<div class="wb-rec-eyebrow">On-Demand</div><div class="wb-rec-h2">Past Recordings</div>' +
      '</div><div class="wb-rec-count">' + total + ' sessions available</div></div>' +
      groupsHTML + '</div>';
  }

  function renderCTA() {
    return '<div class="wb-cta-strip">' +
      '<div class="wb-cta-strip-text"><h3>Never miss a webinar</h3>' +
        '<p>Get notified when new sessions go live. Join 8,000+ HR and finance leaders already subscribed.</p></div>' +
      '<div class="wb-cta-strip-btns"><a href="#" class="btn-primary" style="font-size:.9rem;padding:12px 24px;">Get Notified ' + IC_ARR + '</a></div>' +
      '</div>';
  }

  /* ── Countdown ── */
  function startCountdown(isoDate) {
    var target = new Date(isoDate);
    function pad(n) { return String(Math.floor(n)).padStart(2, '0'); }
    function tick() {
      var diff = target - new Date();
      var vals = { 'cd-days': diff/86400000, 'cd-hrs': (diff%86400000)/3600000, 'cd-min': (diff%3600000)/60000, 'cd-sec': (diff%60000)/1000 };
      Object.keys(vals).forEach(function (id) {
        var el = document.getElementById(id);
        if (el) el.textContent = diff <= 0 ? '00' : pad(vals[id]);
      });
    }
    tick();
    setInterval(tick, 1000);
  }

  /* ── Slider ── */
  var upIdx = 0;
  function getVisible() { return window.innerWidth <= 1024 ? 2 : 3; }
  function slideUpcoming(dir) {
    if (window.innerWidth <= 768) return;
    var track = document.getElementById('upcomingTrack');
    if (!track || !track.children.length) return;
    var max = track.children.length - getVisible();
    upIdx = Math.max(0, Math.min(upIdx + dir, max));
    var w = track.children[0].getBoundingClientRect().width + 20;
    track.style.transform = 'translateX(-' + (upIdx * w) + 'px)';
    var prev = document.getElementById('sliderPrev');
    var next = document.getElementById('sliderNext');
    if (prev) prev.disabled = upIdx === 0;
    if (next) next.disabled = upIdx >= max;
  }
  window.slideUpcoming = slideUpcoming;

  function initSlider() {
    var track = document.getElementById('upcomingTrack');
    if (!track) return;
    if (window.innerWidth <= 768) { track.style.transform = ''; upIdx = 0; return; }
    track.parentElement.style.overflow = 'hidden';
    slideUpcoming(0);
    var prev = document.getElementById('sliderPrev');
    if (prev) prev.disabled = true;
  }

  /* ── Scroll reveal ── */
  function initReveal() {
    if (!('IntersectionObserver' in window)) return;
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.style.opacity = '1';
          e.target.style.transform = 'translateY(0)';
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.wb-rec-card,.wb-upcoming-card,.wb-featured-card').forEach(function (el, i) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity .5s ease ' + (i * 0.06) + 's, transform .5s ease ' + (i * 0.06) + 's';
      obs.observe(el);
    });
  }

  /* ── Video modal ── */
  function initModal() {
    var el = document.createElement('div');
    el.id = 'wb-video-modal';
    el.className = 'wb-modal-backdrop';
    el.innerHTML = '<div class="wb-modal-box">' +
      '<button class="wb-modal-close" id="wb-modal-close">&#x2715;</button>' +
      '<div class="wb-modal-iframe-wrap"><iframe id="wb-modal-iframe" frameborder="0" allowfullscreen allow="autoplay; encrypted-media; picture-in-picture"></iframe></div>' +
      '<div class="wb-modal-title" id="wb-modal-title"></div></div>';
    document.body.appendChild(el);
    el.addEventListener('click', function (e) { if (e.target === el) closeModal(); });
    document.getElementById('wb-modal-close').addEventListener('click', closeModal);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeModal(); });
  }
  function openModal(ytId, title) {
    document.getElementById('wb-modal-iframe').src = 'https://www.youtube.com/embed/' + ytId + '?autoplay=1';
    document.getElementById('wb-modal-title').textContent = title;
    document.getElementById('wb-video-modal').classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    document.getElementById('wb-modal-iframe').src = '';
    document.getElementById('wb-video-modal').classList.remove('open');
    document.body.style.overflow = '';
  }

  /* ── Init ── */
  body.innerHTML =
    renderFeatured(DATA.featured) +
    renderUpcoming(DATA.upcoming) +
    renderRecordings(DATA.recordings) +
    renderCTA();

  initModal();
  body.addEventListener('click', function (e) {
    var card = e.target.closest('.wb-rec-card[data-ytid]');
    if (card) openModal(card.dataset.ytid, card.dataset.title);
  });

  startCountdown(DATA.featured.date);
  initSlider();
  initReveal();
  window.addEventListener('resize', function () { upIdx = 0; initSlider(); });
}());

/* pricing-delta.js — page-specific behavior for the Pricing page only.
   Renders the tier ladder and the module comparison table from the
   #pcMatrix JSON payload. All class names are .pc- prefixed and the
   whole thing is scoped under .pc-scope in the markup, so nothing
   here can collide with phrhome.css or the shared navbar/footer —
   see the matching note in pricing-delta.css. */
(function () {
  var scope = document.querySelector('.pc-scope');
  if (!scope) return; // guard: absent on non-pricing pages

  var DATA = JSON.parse(document.getElementById('pcMatrix').textContent);
  var TIERS = [['manage', 'Manage'], ['grow', 'Grow'], ['transform', 'Transform']];
  /* Talent and Recruitment aren't offered on Manage — only Grow and
     Transform — so both the tier cards and the table hide that column
     entirely for these modules instead of showing a value for it. */
  var NO_MANAGE = ['Talent', 'Recruitment'];
  var CARDS = {
    manage: { tag: 'Run the organisation', desc: 'Get HR right — accurate records, clean payroll, and statutory compliance across the full hire-to-retire journey.' },
    grow: { tag: 'Invest in your people', desc: 'Develop your people — performance, talent, recruitment and engagement become intentional, not reactive. Built for more complex HR operations and larger workforces.', popular: true },
    transform: { tag: 'Lead with people intelligence', desc: 'Put workforce data at the centre of decisions — anticipate attrition and align people strategy with the business.' }
  };
  /* what each tier means for whichever module is currently selected —
     grounded in that module's actual manage/grow/transform capability
     data, not generic platform copy. Falls back to CARDS above when a
     module has no entry yet. */
  var MODULE_TIERS = {
    HR: {
      manage: { desc: 'Get your people data right. Build your company structure, keep a single accurate record for every employee, and generate HR letters — with self-service updates, mobile access, and a full audit trail.',
        bullets: ['Company structure & single employee record', 'Statutory details & centralised documents', 'HR letters & self-service updates', 'Mobile access & full audit trail'] },
      grow: { desc: 'Your HR foundation, stretched for a more complex organisation — deeper hierarchies, custom fields, more lifecycle types, and richer supervisor dashboards as headcount and structure grow.',
        bullets: ['Deeper hierarchies & custom info fields', 'Custom validations & more lifecycle types', 'End-to-end exits', 'Richer supervisor dashboards'] },
      transform: { desc: 'HR administration at enterprise scale, shaped to how you operate. Structure, fields, lifecycle types, and alerts are configured to your requirements, with fully automated exit clearance and final settlement.',
        bullets: ['Structure, fields & lifecycle types configured to you', 'Custom alerts', 'Fully automated exit clearance & final settlement'] }
    },
    Time: {
      manage: { desc: 'Run attendance and leave accurately. Schedule shifts, capture clock-in from mobile or web, approve attendance before payroll, and manage statutory leave with balances and approvals.',
        bullets: ['Shift scheduling & mobile/web clock-in', 'Late arrival & overtime tracking', 'Attendance approval before payroll', 'Statutory leave balances & approvals'] },
      grow: { desc: 'Tighter control as your workforce spreads out. Adds geo-fenced clock-in, project timesheets, supervisor dashboards, earned leave planning, and multiple holiday calendars with your own leave types.',
        bullets: ['Geo-fenced clock-in & overtime approvals', 'Project timesheets & supervisor dashboards', 'Earned leave & leave planning', 'Multiple holiday calendars & custom leave types'] },
      transform: { desc: 'Time and attendance built for complex, multi-site operations — multiple shift patterns, flexi shifts, mutual shift swapping, and custom overtime and leave rules configured around how your business runs.',
        bullets: ['Multiple shift patterns', 'Flexi & staggered shifts, shift swapping', 'Custom overtime calculations', 'Custom leave rules & validations'] }
    },
    Pay: {
      manage: { desc: 'Pay people accurately and on time. Run payroll through approvals, generate bank files, payslips, and a full pay register, and stay compliant with automatic tax and statutory deductions.',
        bullets: ['Payroll runs, bank files & payslips', 'Full pay register', 'Approval workflows', 'Automatic tax & statutory deductions'] },
      grow: { desc: 'Payroll for a more complex pay structure. Adds multi-currency payroll, GL mapping, anomaly detection before processing, salary revisions with back-pay, employee loans, and a wider range of benefits.',
        bullets: ['Multi-currency payroll & GL mapping', 'Anomaly detection before processing', 'Salary revisions & backdated adjustments', 'Employee loans & wider benefit types'] },
      transform: { desc: 'Payroll shaped to your organisation. Pay runs, approvals, loan types, and benefit structures are all configured to your requirements — complex, high-volume payroll handled without compromise.',
        bullets: ['Pay runs & approvals configured to you', 'Custom loan types & benefit structures', 'High-volume payroll handled at scale'] }
    },
    Talent: {
      grow: { desc: 'Start developing your people deliberately. Run appraisals and 180° reviews, manage goals and OKRs, track probation, administer training with a course calendar, and model future headcount.',
        bullets: ['Appraisals & 180° reviews', 'Goals, OKRs & KPI planning', 'Probation tracking', 'Training calendar, budgets & headcount modelling'] },
      transform: { desc: 'Lead talent strategically. Adds 360° feedback (incl. external parties), bias-mitigated scoring, succession planning with 9-box calibration, AI-recommended learning paths, merit-based incentives, and workforce cost forecasting.',
        bullets: ['360° feedback incl. external parties', 'Succession planning & 9-box calibration', 'AI-recommended learning paths', 'Merit increments, incentives & cost forecasting'] }
    },
    Engagement: {
      manage: { desc: "Give employees a voice and handle issues properly — grievances follow a clear appeals path, and disciplinary incidents are tracked as structured cases with letter generation.",
        bullets: ['Employee voice channel', 'Grievances with appeals path', 'Disciplinary case management & letters'] },
      grow: { desc: 'Start listening at scale. Adds targeted employee surveys and pulse checks on top of voice and grievance handling, so you measure sentiment instead of guessing at it.',
        bullets: ['Everything in Manage, plus', 'Targeted surveys & pulse checks', 'Sentiment measurement at scale'] },
      transform: { desc: "Build a culture of recognition. Everything in Grow, plus in-the-moment recognition — points for great work, wins celebrated in a shared feed, and redeemable rewards.",
        bullets: ['Everything in Grow, plus', 'In-the-moment peer & manager recognition', 'Shared wins feed', 'Redeemable rewards'] }
    },
    Recruitment: {
      grow: { desc: 'Hire and onboard properly. Approve vacancies, post once to advertise everywhere, give candidates an interactive portal, shortlist and interview, then onboard with documentation and task checklists.',
        bullets: ['Vacancy approvals & multi-channel posting', 'Candidate portal, ranking & shortlisting', 'Structured interviews & offers', 'Onboarding checklists'] },
      transform: { desc: 'Recruit at volume, with intelligence. Adds bulk CV upload with AI processing, an external CV pool, and hiring performance and cost tracking against your approved budget.',
        bullets: ['Bulk CV upload & AI processing', 'External CV pool', 'Hiring performance & cost tracking vs. budget'] }
    },
    Insights: {
      manage: { desc: "See what's happening across your organisation — standard reports spanning every module, live workforce metrics in one view, and Lexi Smart Navigator to jump straight to any screen. Lexi AI is available as an add-on.",
        bullets: ['Standard report library', 'Live workforce metrics in one view', 'Lexi Smart Navigator', 'Lexi AI available as add-on'] },
      grow: { desc: 'Answer your own questions. Adds custom and scheduled reports, interactive dashboards, and Lexi Super Agent, so employees self-serve HR tasks just by asking.',
        bullets: ['Custom & scheduled reports', 'Interactive dashboards', 'Lexi Super Agent for self-service tasks'] },
      transform: { desc: 'Lead with people intelligence. Reporting and dashboards configured to your requirements, with a joined-up view across payroll, performance, and engagement, plus Lexi AI Insights to answer any workforce question.',
        bullets: ['Reporting & dashboards configured to you', 'Joined-up payroll, performance & engagement view', 'Lexi AI Insights answers any workforce question'] }
    }
  };
  var svgCheck = '<svg class="pc-ic pc-ic-yes" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';
  var svgTick = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>';

  /* tier ladder cards — desc/bullets are rewritten per selected module
     by updateLadderForModule() below, so keep a handle on each. */
  var ladder = document.getElementById('pcLadder');
  var ladderEls = {};
  TIERS.forEach(function (pair) {
    var k = pair[0], name = pair[1], c = CARDS[k];
    var el = document.createElement('div');
    el.className = 'pc-tier-card'; el.dataset.tier = k; el.tabIndex = 0; el.setAttribute('role', 'button');
    el.innerHTML = (c.popular ? '<span class="pc-popular">Most chosen</span>' : '') +
      '<div class="pc-tname"><span class="pc-chip"></span>' + name + '</div>' +
      '<div class="pc-ttag">' + c.tag + '</div>' +
      '<div class="pc-tdesc"></div>' +
      '<ul></ul>' +
      '<a href="#pcBuildQuote" class="pc-btn">Request a Quote</a>';
    var goToBuilder = function () { document.getElementById('pcCmp').scrollIntoView({ behavior: 'smooth', block: 'start' }); };
    el.addEventListener('click', function (e) { if (e.target.closest('a')) return; goToBuilder(); });
    el.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); goToBuilder(); } });
    ladderEls[k] = { card: el, desc: el.querySelector('.pc-tdesc'), list: el.querySelector('ul'), fallback: c };
    ladder.appendChild(el);
  });

  function updateLadderForModule(name) {
    var hideManage = NO_MANAGE.indexOf(name) !== -1;
    ladderEls.manage.card.hidden = hideManage;
    ladder.classList.toggle('pc-two-tier', hideManage);
    var copy = MODULE_TIERS[name];
    TIERS.forEach(function (pair) {
      var k = pair[0];
      if (k === 'manage' && hideManage) return;
      var c = (copy && copy[k]) || ladderEls[k].fallback;
      ladderEls[k].desc.textContent = c.desc;
      ladderEls[k].list.innerHTML = (c.bullets || []).map(function (b) { return '<li>' + svgTick + '<span>' + b + '</span></li>'; }).join('');
    });
  }

  /* cell rendering */
  function linkify(s) { return String(s).replace(/\[(.+?)\]\((.+?)\)/g, function (_, t, u) { return '<a class="pc-cell-link" href="' + u + '"' + (u !== '#' ? ' target="_blank" rel="noopener"' : '') + '>' + t + '</a>'; }); }
  function plainify(s) { return String(s).replace(/\[(.+?)\]\((.+?)\)/g, '$1'); }
  function cellContent(val) {
    var v = (val || '').trim();
    if (v === 'yes') return svgCheck;
    if (v === '' || v === '-') return '<span class="pc-dash">–</span>';
    if (v.toLowerCase() === 'add-on') return '<span class="pc-pill">Add-on</span>';
    if (/^tts:/i.test(v)) {
      var label = v.slice(v.indexOf(':') + 1).trim();
      return '<span class="pc-cap pc-tts-cap">' + linkify(label) + '</span><span class="pc-pill pc-sales">Talk to sales</span>';
    }
    if (v.toLowerCase() === 'talk to sales' || v.toLowerCase() === 'talk to sale') return '<span class="pc-pill pc-sales">Talk to sales</span>';
    return '<span class="pc-cap">' + linkify(v.replace(/\s{2,}/g, ' · ')) + '</span>';
  }
  var uid = 0;
  function itemRow(it, hideManage) {
    var row = document.createElement('div'); row.className = 'pc-row' + (it.flag ? ' pc-flag' : '');
    var hasInfo = it.info || (it.children && it.children.length);
    var pop = '';
    if (hasInfo) {
      var id = 'pcp' + (uid++);
      var covers = '';
      if (it.children && it.children.length) {
        covers = '<div class="pc-covers"><div class="pc-ch">Covers — based on the modules you own</div><div class="pc-tags">' + it.children.map(function (c) { return '<span class="pc-tag">' + c.module + '</span>'; }).join('') + '</div></div><div class="pc-avail">Available as an add-on; what Lexi can answer depends on the modules in your plan.</div>';
      }
      pop = '<span class="pc-info"><button class="pc-info-btn" aria-expanded="false" aria-controls="' + id + '" aria-label="More information">i</button>' +
        '<div class="pc-pop" id="' + id + '" role="dialog"><div class="pc-pt">' + plainify(it.label) + '</div>' + (it.info ? '<div class="pc-pd">' + it.info + '</div>' : '') + covers + '</div></span>';
    }
    row.innerHTML = '<div class="pc-cell-item"><span class="pc-lbl">' + linkify(it.label) + '</span>' + pop + '</div>' +
      (hideManage ? '' : '<div class="pc-cell" data-tier="manage">' + cellContent(it.manage) + '</div>') +
      '<div class="pc-cell" data-tier="grow">' + cellContent(it.grow) + '</div>' +
      '<div class="pc-cell" data-tier="transform">' + cellContent(it.transform) + '</div>';
    return row;
  }

  /* module nav (left) + detail panel (right): pick a module on the
     left, its capability list renders on the right under the one
     persistent Manage/Grow/Transform header (not re-rendered per
     module or per group — it's static markup, see pricing-body.html).
     Groups are always fully expanded, no accordion. */
  var cmpNav = document.getElementById('pcCmpNav');
  var panelHead = document.getElementById('pcPanelHead');
  var groupsEl = document.getElementById('pcGroups');
  var leadEl = document.getElementById('pcLead');
  var thRow = document.querySelector('.pc-th-row');
  var thManageCol = thRow.querySelector('[data-tier=manage]');
  var pcCmp = document.getElementById('pcCmp');
  var searchFeed = document.getElementById('pcSearchFeed');
  var ladderSection = document.getElementById('pcLadderSection');
  /* scrolls to the top of the light-grey .pc-ladder section itself
     (above the "Explore PeoplesHR" heading), not just the tier-card
     grid further down inside it — used whenever picking a module or
     standout feature from the left nav. */
  function scrollToLadderSection() { ladderSection.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  var ORDER = DATA.modules.map(function (m) { return m.name; });
  var dataByName = {};
  DATA.modules.forEach(function (m) { dataByName[m.name] = m; });
  var navByName = {};

  /* moduleIcon() renders the right markup at whatever size class is
     passed in, so the same source can appear at nav size, panel-head
     size, or the ladder heading's size. */
  var MODULE_ICON_SRC = {
    HR: 'images/module-icons/HR%20Icon.webp',
    Time: 'images/module-icons/Time%20Icon.webp',
    Pay: 'images/module-icons/Pay%20Icon.webp',
    Talent: 'images/module-icons/Talent%20Icon.webp',
    Engagement: 'images/module-icons/Engagement%20Icon.webp',
    Recruitment: 'images/module-icons/Recruitment.webp',
    Insights: 'images/module-icons/Insights%20Icon.webp'
  };
  function moduleIcon(name, sizeClass) {
    var src = MODULE_ICON_SRC[name];
    return src ? '<img class="' + sizeClass + '" src="' + src + '" alt="">' : '';
  }
  var NAV_ICONS = {};
  DATA.modules.forEach(function (m) { NAV_ICONS[m.name] = moduleIcon(m.name, 'pc-nav-ic'); });

  /* the module nav has no "All Modules" entry — searching (via the
     search bar) already covers every module at once regardless of
     which module button is selected (see showAllModulesView below);
     the per-module buttons here are just for browsing one module's
     full table directly. */
  DATA.modules.forEach(function (m) {
    var btn = document.createElement('button');
    btn.type = 'button'; btn.dataset.c = m.color;
    btn.innerHTML = (NAV_ICONS[m.name] || '') + '<span class="pc-nav-label">' + m.name + '</span>';
    btn.addEventListener('click', function () {
      if (!searchFeed.hidden) { jumpToModuleInFeed(m.name); }
      else { selectModule(m.name); scrollToLadderSection(); }
    });
    navByName[m.name] = btn;
    cmpNav.appendChild(btn);
  });

  /* three standout capabilities that cut across every module/tier
     rather than living in the Manage/Grow/Transform data — a divider
     separates them from the module list, and picking one swaps in a
     plain capability-card grid (no tier columns) instead of the
     comparison table. Copy/descriptions are condensed from the same
     capability text already used elsewhere on the site (mobile app,
     employee/manager self-service, and the Ask Lexi AI group), not
     new claims. */
  var FEATURE_ICON_MOBILE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="3" width="10" height="18" rx="2.4"/><path d="M11 18h2"/></svg>';
  var FEATURE_ICON_SELFSERVICE = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="10" cy="8" r="3.4"/><path d="M3.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16.5 15.5l2 2 4-4"/></svg>';
  /* no dedicated Lexi icon asset exists — the file that looked like
     one turned out to be a transparent re-export of the Insights icon
     (same gradient-circle-with-"X" artwork, confirmed pixel-for-pixel
     against the old Insights Icon.webp), so Lexi AI falls back to an
     inline sparkle glyph in the same stroke style as the other
     standout-feature icons, same as Recruitment's fallback above. */
  var FEATURE_ICON_LEXI = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M11 3.5l1.7 4.9 4.9 1.7-4.9 1.7L11 16.7l-1.7-4.9L4.4 10.1l4.9-1.7L11 3.5z"/><path d="M18.5 14l.9 2.6 2.6.9-2.6.9-.9 2.6-.9-2.6-2.6-.9 2.6-.9.9-2.6z"/></svg>';
  /* the Lexi wordmark (white text, meant for a dark background) works
     here since the pricing card itself IS dark blue — unlike the nav
     tile above, which is why that one uses the sparkle SVG instead. */
  var LEXI_LOGO_SRC = 'https://peopleshr.com/wp-content/uploads/2026/05/lexi-s.png';
  var STANDOUT = {
    mobile: {
      name: 'Mobile App', tagline: 'Work happens everywhere.',
      icon: '<span class="pc-nav-ic pc-ic-svg">' + FEATURE_ICON_MOBILE + '</span>',
      panelIcon: '<span class="pc-mod-ic pc-ic-svg">' + FEATURE_ICON_MOBILE + '</span>',
      cards: [
        { title: 'Employee Self-Service', items: [
          'A personalised home screen with at-a-glance widgets for everything you need',
          'View and update your own profile information',
          'View and download payslips anytime — no printed copies needed',
          'Apply for leave, including short and hourly leave',
          'Check your leave balance and see your team’s availability up to 5 days ahead',
          'View outstanding loan balances and repayment history',
          'View your enrolled benefits and entitlements',
          'Track the status of every request you’ve submitted, in one place',
          'Request a salary advance anytime, without a trip to HR',
          'View your attendance history directly in the app',
          'Take part in company surveys and pulse checks',
          'Log and track workplace incidents as they happen',
          'A direct channel to send feedback, suggestions, and concerns to HR'
        ] },
        { title: 'Attendance', items: [
          'Confirm your location automatically when you clock in',
          'Restrict clock-in to approved site locations',
          'Get instant notifications on attendance events'
        ] },
        { title: 'Manager Capabilities', items: [
          'Approve or decline leave requests right from a mobile notification',
          'See your team’s leave and availability up to 5 days ahead',
          'A dashboard of team attendance and performance analytics',
          'View attendance across departments, not just your own team',
          'Oversee shift schedules and rosters on the go'
        ] },
        { title: 'Lexi AI-Powered Features', items: [
          'File leave requests just by asking, by voice or text',
          'Apply for hourly leave with automatic policy checks and balance updates',
          'Ask for workforce insights and get instant, AI-generated answers'
        ] },
        { title: 'Performance & Talent', items: [
          'Complete performance evaluations, including multi-stage review templates',
          'Complete competency assessments against your role',
          'Track performance progress day to day'
        ] },
        { title: 'Personalisation & UX', items: [
          'Rearrange the app to put what you use most, first',
          'Customise your dashboard widgets to what matters to you',
          'Use the app in your preferred language',
          'Everyday tasks done in 3 taps or fewer'
        ] }
      ]
    },
    selfservice: {
      name: 'Self Service Portal', tagline: 'Fewer requests routed through HR.',
      icon: '<span class="pc-nav-ic pc-ic-svg">' + FEATURE_ICON_SELFSERVICE + '</span>',
      panelIcon: '<span class="pc-mod-ic pc-ic-svg">' + FEATURE_ICON_SELFSERVICE + '</span>',
      cards: [
        { title: 'Personal Information Management', items: [
          'View and update personal/employee profile details',
          'Changes routed through approval workflows before reflecting in the system',
          'Customisable fields (e.g., country-specific fields like IT numbers in Bangladesh)',
          'Digital employee file (201 file) management'
        ] },
        { title: 'Payroll & Compensation', items: [
          'On-demand payslip access — no need to request from HR, no printed payslips',
          'View pay history and compensation records',
          'Access loan information (company loans, SSS loans in Philippines)',
          'Salary and benefits visibility'
        ] },
        { title: 'Leave Management', items: [
          'Submit leave requests from anywhere (web or mobile)',
          'View real-time leave balances',
          'Track request status end-to-end',
          'Supervisor receives instant notifications for approval — no chasing required'
        ] },
        { title: 'Attendance & Time Tracking', items: [
          'Clock in/out via mobile app',
          'Geo-tagging and geo-fencing for location-verified clock-ins',
          'Geo-blocking to restrict time capture to approved locations',
          'View personal attendance records',
          'Offline time capture with sync (recently released)'
        ] },
        { title: 'Document & Certificate Management', items: [
          'Request Certificate of Employment (COE) without HR involvement',
          'Access and acknowledge policy documents and memos',
          'Document acknowledgement tracking'
        ] },
        { title: 'Performance & Development', items: [
          'Participate in performance evaluations and KPI management',
          'Goal proposal and planning',
          'Access training requests and L&D resources'
        ] },
        { title: 'Service Requests & Support', items: [
          'Raise HR tickets via Service Request Tracker',
          'Track ticket status in real-time',
          'Submit advance/loan requests at any time'
        ] },
        { title: 'AI-Powered: Lexi', items: [
          'Lexi Chat — ask HR questions in natural language',
          'Execute actions on behalf of the user (e.g., apply for leave via chat)',
          'Smart navigator for system guidance'
        ] },
        { title: 'Engagement & Communication', items: [
          'Access company surveys',
          'Grievance management',
          'Internal vacancy/job posting visibility',
          "Who's on leave / team availability dashboard"
        ] }
      ]
    },
    lexi: {
      name: 'Lexi Ai', tagline: 'Turn any HR action into a simple conversation.',
      icon: '<span class="pc-nav-ic pc-ic-svg">' + FEATURE_ICON_LEXI + '</span>',
      panelIcon: '<span class="pc-mod-ic pc-ic-svg">' + FEATURE_ICON_LEXI + '</span>',
      /* Lexi is three separate products, each rendered as its own
         bespoke pricing-card row (see renderFeaturePanel's
         f.pricingCards branch) instead of the shared title+desc/
         title+checklist card grid — none of them are tier-scoped
         capabilities like the other standout features. Insights is
         priced and sold as its own add-on; Super Agent and Smart
         Navigator are bundled into existing tiers (see their
         includedIn), so they show which tiers include them instead
         of a price. */
      pricingCards: [
        {
          badge: 'Insights',
          price: 'US$60', priceUnit: '/ seat / month',
          tokenNote: 'Includes <b>10 million tokens</b> per seat, per month.',
          footnote: 'Capabilities and insights available depend on the PeoplesHR modules enabled for your organisation.',
          includedHeading: "What's Included",
          included: [
            'Proactive insights, and recommendations',
            'Insights grounded in your organisation’s context',
            'Cross-module workforce planning',
            'Succession planning and readiness insights',
            'Payroll & cost-impact modelling',
            'Attrition & people-risk analysis',
            'Workforce health & burnout signals',
            'Multi-turn, follow-up-aware conversations',
            'Enterprise-grade security & compliance',
            'Recruitment bottleneck analysis'
          ]
        },
        {
          badge: 'Super Agent',
          accent: 'blue',
          includedIn: ['Grow', 'Transform'],
          tagline: 'Employees self-serve HR tasks just by asking.',
          includedHeading: "What's Included",
          groups: [
            { name: 'For Employees', items: [
              'Apply or cancel leave',
              'Check leave balances and history',
              'Retrieve pay-slips (including off-cycle/unscheduled payments)',
              'Ask about company policies',
              'View available benefits',
              'Access or update permitted profile information',
              'Ask about tax, insurance, statutory deductions, and projected income'
            ] },
            { name: 'For Managers', items: [
              'Review team attendance and absences',
              'Check shift information',
              'View pending approvals — leave, overtime, swipes, manual attendance entries, and shift adjustments'
            ] },
            { name: 'For HR and Administrators', items: [
              'Manage employee and organisational records',
              'Maintain structures, locations, cost centers, salary grades, and designations',
              'Update attendance and benefit configurations',
              'Generate job descriptions and goal plans',
              'Review recruitment information'
            ] }
          ]
        },
        {
          badge: 'Smart Navigator',
          accent: 'blue',
          includedIn: ['Manage', 'Grow', 'Transform'],
          tagline: 'A centralised search layer that cuts navigation time across the platform.',
          footnote: 'Highlighted as a key differentiator alongside Lexi Ai — built to significantly reduce the time HR users and employees spend navigating a complex system.',
          includedHeading: 'Key Capabilities',
          included: [
            'Intelligent Navigation — quickly locate and jump to any menu, module, or function without manually browsing the interface',
            'AI-Powered — uses AI to interpret user intent and surface the most relevant results',
            'Universal Access — acts as a centralised search layer across the entire PeoplesHR platform'
          ]
        }
      ]
    }
  };
  /* standout capabilities now live in their own section (#pcStandoutSection,
     right after the enterprise-guarantees block) rather than sharing the
     module comparison's nav/panel — they're not scoped to a module or tier,
     so mixing them into that nav under a divider was misleading. This
     section reuses the same .pc-cmp-layout nav+panel structure/CSS as the
     module comparison above (title+subtitle, left nav, detail panel that
     swaps and scrolls the section into view on click) minus the search bar,
     which doesn't apply here. */
  var featureBtnByKey = {};
  var featureHead = document.getElementById('pcFeatureHead');
  var featureGrid = document.getElementById('pcFeatureGrid');
  var standoutNav = document.getElementById('pcStandoutNav');
  var standoutSection = document.getElementById('pcStandoutSection');
  function scrollToStandoutSection() { standoutSection.scrollIntoView({ behavior: 'smooth', block: 'start' }); }

  Object.keys(STANDOUT).forEach(function (key) {
    var f = STANDOUT[key];
    var btn = document.createElement('button');
    btn.type = 'button'; btn.className = 'pc-nav-feature';
    btn.innerHTML = f.icon + '<span class="pc-nav-label">' + f.name + '</span>';
    btn.addEventListener('click', function () { selectFeature(key); scrollToStandoutSection(); });
    featureBtnByKey[key] = btn;
    standoutNav.appendChild(btn);
  });

  /* reuses .pc-cta-inner (the dark gradient CTA-band card), .pc-mod-
     nameline (the module panel-head's icon+name row), .pc-pill (the
     comparison table's Add-on/Talk-to-sales pills — colour supplied
     via the same --tint/--accent custom properties it already reads),
     .pc-eyebrow, .pc-module-card, and .pc-feature-list (Mobile App's
     tick list) rather than introducing a parallel set of one-off
     classes — only the layout glue below is new. Renders one row per
     pricing card (Insights, Super Agent, Smart Navigator, ...),
     stacked vertically. */
  function colHtml(items) {
    return '<ul class="pc-feature-list">' + items.map(function (t) {
      return '<li>' + svgTick + '<span>' + t + '</span></li>';
    }).join('') + '</ul>';
  }
  /* Insights' flat list splits evenly into two columns; Super Agent's
     list is naturally grouped by audience (Employees/Managers/HR) at
     very uneven sizes, so it renders as stacked named groups instead
     of an even split that would cut a group in half. */
  function includedBodyHtml(p) {
    if (p.groups) {
      return '<div class="pc-lexi-included-groups">' + p.groups.map(function (g) {
        return '<div class="pc-lexi-group"><div class="pc-lexi-group-name">' + g.name + '</div>' + colHtml(g.items) + '</div>';
      }).join('') + '</div>';
    }
    var half = Math.ceil(p.included.length / 2);
    return '<div class="pc-lexi-included-cols">' + colHtml(p.included.slice(0, half)) + colHtml(p.included.slice(half)) + '</div>';
  }
  function pricingCardHtml(p) {
    var priceHtml = p.price
      ? '<h2>' + p.price + '<span class="pc-lexi-price-unit">' + p.priceUnit + '</span></h2>' +
        (p.tokenNote ? '<div class="pc-lexi-token-box">' + p.tokenNote + '</div>' : '')
      : '<div class="pc-lexi-includedin"><span class="pc-lexi-includedin-label">Included in</span><div class="pc-lexi-tier-tags">' +
          p.includedIn.map(function (t) { return '<span class="pc-lexi-tier-tag" style="--accent:var(--' + t.toLowerCase() + ')">' + t + '</span>'; }).join('') +
        '</div></div>';
    return '<div class="pc-lexi-row">' +
      '<div class="pc-cta-inner pc-lexi-card' + (p.accent === 'blue' ? ' pc-lexi-card-blue' : '') + '">' +
        '<div class="pc-mod-nameline"><img src="' + LEXI_LOGO_SRC + '" alt="Lexi" height="18"><span class="pc-pill" style="--tint:#fff;--accent:#1d4ed8">Ai</span><span class="pc-eyebrow">' + p.badge + '</span></div>' +
        priceHtml +
        '<p>' + (p.tagline ? p.tagline + (p.footnote ? ' ' + p.footnote : '') : (p.footnote || '')) + '</p>' +
      '</div>' +
      '<div class="pc-module-card pc-lexi-included">' +
        '<div class="pc-eyebrow">' + p.includedHeading + '</div>' +
        includedBodyHtml(p) +
      '</div>' +
    '</div>';
  }
  function renderPricingFeaturePanel(cards) {
    featureGrid.innerHTML = cards.map(pricingCardHtml).join('');
  }

  /* long item lists (Mobile App's especially) made cards wildly uneven
     heights in the 2-col grid — clamp to the first 3, with the rest
     tagged .pc-feature-extra and hidden by CSS until the card picks up
     .is-expanded from the delegated click handler below. */
  var FEATURE_LIST_VISIBLE = 3;
  function featureListHtml(items) {
    var extra = items.length - FEATURE_LIST_VISIBLE;
    var lis = items.map(function (it, i) {
      return '<li' + (i >= FEATURE_LIST_VISIBLE ? ' class="pc-feature-extra"' : '') + '>' + svgTick + '<span>' + it + '</span></li>';
    }).join('');
    if (extra <= 0) return '<ul class="pc-feature-list">' + lis + '</ul>';
    var moreLabel = 'View ' + extra + ' more feature' + (extra === 1 ? '' : 's');
    return '<ul class="pc-feature-list">' + lis + '</ul>' +
      '<button type="button" class="pc-feature-more" data-more-label="' + moreLabel + '" data-less-label="Show less">' + moreLabel + '</button>';
  }

  function renderFeaturePanel(key) {
    var f = STANDOUT[key];
    featureGrid.className = 'pc-feature-grid' + (f.pricingCards ? ' pc-lexi-pricing' : '');
    if (f.pricingCards) {
      featureHead.innerHTML = '';
      renderPricingFeaturePanel(f.pricingCards);
      return;
    }
    featureHead.innerHTML = '<span class="pc-mod-textwrap"><span class="pc-mod-nameline">' + f.panelIcon + '<span class="pc-mod-name">' + f.name + '</span></span><span class="pc-mod-desc">' + f.tagline + '</span></span>';
    featureGrid.innerHTML = f.cards.map(function (c) {
      var body = c.items ? featureListHtml(c.items) : '<p>' + c.desc + '</p>';
      return '<div class="pc-feature-card"><h4>' + c.title + '</h4>' + body + '</div>';
    }).join('');
  }

  /* delegated so it keeps working across re-renders (switching between
     Mobile App / Self Service Portal rebuilds featureGrid's contents
     each time) without rebinding a listener per button */
  featureGrid.addEventListener('click', function (e) {
    var btn = e.target.closest('.pc-feature-more');
    if (!btn) return;
    var expanded = btn.closest('.pc-feature-card').classList.toggle('is-expanded');
    btn.textContent = expanded ? btn.dataset.lessLabel : btn.dataset.moreLabel;
  });

  function selectFeature(key) {
    Object.keys(featureBtnByKey).forEach(function (k) { featureBtnByKey[k].classList.toggle('pc-on', k === key); });
    renderFeaturePanel(key);
  }

  selectFeature(Object.keys(STANDOUT)[0]);

  function renderPanel(name) {
    var m = dataByName[name];
    var hideManage = NO_MANAGE.indexOf(name) !== -1;

    panelHead.innerHTML = '<span class="pc-mod-textwrap"><span class="pc-mod-nameline">' + moduleIcon(m.name, 'pc-mod-ic') + '<span class="pc-mod-name">' + m.name + '</span></span>' + (m.blurb ? '<span class="pc-mod-desc">' + m.blurb + '</span>' : '') + '</span>';

    pcCmp.classList.toggle('pc-no-manage', hideManage);
    thManageCol.hidden = hideManage;

    groupsEl.innerHTML = '';
    m.groups.forEach(function (g, i) {
      var grp = document.createElement('div'); grp.className = 'pc-grp'; grp.dataset.name = g.name;
      // the first group's name lives in the lead cell from the start
      // (see updateActiveGroupLabel) instead of repeating as its own
      // row right below it — later groups still get a heading, since
      // you're meant to see one coming as you scroll toward it.
      if (i > 0) {
        var gh = document.createElement('div'); gh.className = 'pc-grp-name';
        gh.textContent = g.name;
        grp.appendChild(gh);
      }
      g.items.forEach(function (it) { grp.appendChild(itemRow(it, hideManage)); });
      groupsEl.appendChild(grp);
    });
    updateActiveGroupLabel();
  }

  /* lead cell always shows the current group's name — the first
     group's from the moment a module is picked, then whichever later
     group has scrolled up underneath the sticky Manage/Grow/Transform
     row once it's actually pinned to the top. Group headings past the
     first are plain, ordinary rows in the flow — you see one coming
     as you scroll toward it — and take over the lead cell instead of
     stacking a second row below it. */
  function updateActiveGroupLabel() {
    var groups = groupsEl.querySelectorAll('.pc-grp');
    var current = groups[0] ? groups[0].dataset.name : '';
    var thRect = thRow.getBoundingClientRect();
    if (thRect.top <= 0.5) {
      for (var i = 0; i < groups.length; i++) {
        if (groups[i].getBoundingClientRect().top <= thRect.bottom) {
          current = groups[i].dataset.name;
        } else {
          break;
        }
      }
    }
    if (leadEl.textContent !== current) leadEl.textContent = current;
  }
  var spyTicking = false;
  function scheduleSpy() {
    if (spyTicking) return;
    spyTicking = true;
    window.requestAnimationFrame(function () { updateActiveGroupLabel(); spyTicking = false; });
  }
  window.addEventListener('scroll', scheduleSpy, { passive: true });
  window.addEventListener('resize', scheduleSpy);

  function selectModule(name) {
    Object.keys(navByName).forEach(function (n) { navByName[n].classList.toggle('pc-on', n === name); });
    searchFeed.hidden = true;
    ladder.hidden = false;
    pcCmp.hidden = false;
    renderPanel(name);
    updateLadderForModule(name);
    scheduleSpy();
  }

  /* while the all-modules search feed is showing, a module nav click
     acts like a table-of-contents link into it (scrolls to that
     module's block, keeping every other matching module visible)
     instead of replacing the feed with that module's full table —
     unless that module has no matches in the current feed, in which
     case there's nothing to jump to and it falls back to the normal
     single-module view. */
  function jumpToModuleInFeed(name) {
    var block = searchFeed.querySelector('.pc-cmp[data-module="' + name + '"]');
    if (!block) { selectModule(name); scrollToLadderSection(); return; }
    Object.keys(navByName).forEach(function (n) { navByName[n].classList.toggle('pc-on', n === name); });
    block.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  selectModule(ORDER[0]);

  /* capability search — a term may live in any module and people often
     don't know which one, so searching renders every matching module
     at once (filtered down to just the matching groups/items, not the
     full table) instead of guessing a single "best" module. Standout
     features are excluded from this merged feed — their card layout
     doesn't fit the module table shape — but a feature match still
     surfaces as a jump-to pill in the status line. Matching runs over
     plain-text label+info (module items) and title+desc (feature
     cards). */
  function toPlainText(s) { return String(s || '').replace(/^TTS:/i, '').replace(/\[(.+?)\]\((.+?)\)/g, '$1').replace(/<[^>]+>/g, ' ').toLowerCase(); }
  function itemMatches(it, q) { return (toPlainText(it.label) + ' ' + toPlainText(it.info)).indexOf(q) !== -1; }
  var FEATURE_SEARCH_TEXT = {};
  Object.keys(STANDOUT).forEach(function (key) {
    var f = STANDOUT[key];
    var text = f.name;
    (f.cards || []).forEach(function (c) { text += ' ' + c.title + ' ' + (c.desc || (c.items || []).join(' ')); });
    (f.pricingCards || []).forEach(function (p) {
      text += ' ' + p.badge + ' ' + (p.tagline || '') + ' ' + (p.footnote || '') + ' ' + toPlainText(p.tokenNote);
      text += ' ' + (p.included || []).join(' ');
      (p.groups || []).forEach(function (g) { text += ' ' + g.name + ' ' + g.items.join(' '); });
    });
    FEATURE_SEARCH_TEXT[key] = text.toLowerCase();
  });

  function escapeHtml(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }

  function clearSearchHighlights() {
    document.querySelectorAll('.pc-search-hit').forEach(function (el) { el.classList.remove('pc-search-hit'); });
  }
  function highlightFeatureMatch(key, q) {
    clearSearchHighlights();
    var first = null;
    featureGrid.querySelectorAll('.pc-feature-card').forEach(function (card) {
      if (card.textContent.toLowerCase().indexOf(q) !== -1) {
        card.classList.add('pc-search-hit');
        if (!first) first = card;
      }
    });
    if (first) first.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }

  /* builds one module's block for the merged feed: same panel-head +
     Manage/Grow/Transform header + group/item markup as the single-
     module view (renderPanel), just restricted to the groups/items
     that matched and rendered fresh each time rather than reusing the
     shared #pcCmp singleton, since several of these sit on the page
     at once. */
  function buildModuleBlock(m, groups) {
    var hideManage = NO_MANAGE.indexOf(m.name) !== -1;
    var block = document.createElement('div');
    block.className = 'pc-cmp' + (hideManage ? ' pc-no-manage' : '');
    block.dataset.module = m.name;

    var head = document.createElement('div');
    head.className = 'pc-panel-head';
    head.innerHTML = '<span class="pc-mod-textwrap"><span class="pc-mod-nameline">' + moduleIcon(m.name, 'pc-mod-ic') + '<span class="pc-mod-name">' + m.name + '</span></span>' + (m.blurb ? '<span class="pc-mod-desc">' + m.blurb + '</span>' : '') + '</span>';
    block.appendChild(head);

    var thRowEl = document.createElement('div');
    thRowEl.className = 'pc-th-row';
    thRowEl.innerHTML = '<div class="pc-lead">' + escapeHtml(groups[0].name) + '</div>' +
      (hideManage ? '' : '<div class="pc-th" data-tier="manage"><div class="pc-n">Manage</div><div class="pc-t">Run the organisation</div></div>') +
      '<div class="pc-th" data-tier="grow"><div class="pc-n">Grow</div><div class="pc-t">Invest in your people</div></div>' +
      '<div class="pc-th" data-tier="transform"><div class="pc-n">Transform</div><div class="pc-t">Lead with people intelligence</div></div>';
    block.appendChild(thRowEl);

    var groupsWrap = document.createElement('div');
    groupsWrap.className = 'pc-groups';
    groups.forEach(function (g, i) {
      var grp = document.createElement('div');
      grp.className = 'pc-grp';
      if (i > 0) {
        var gh = document.createElement('div');
        gh.className = 'pc-grp-name';
        gh.textContent = g.name;
        grp.appendChild(gh);
      }
      g.items.forEach(function (it) { grp.appendChild(itemRow(it, hideManage)); });
      groupsWrap.appendChild(grp);
    });
    block.appendChild(groupsWrap);
    return block;
  }

  var searchForm = document.getElementById('pcSearchForm');
  var searchInput = document.getElementById('pcSearchInput');
  var searchStatus = document.getElementById('pcSearchStatus');
  var searchClear = document.getElementById('pcSearchClear');

  function renderAllModulesStatus(query, totalCount, moduleCount, featureKeys) {
    if (!totalCount && !featureKeys.length) {
      searchStatus.hidden = false;
      searchStatus.innerHTML = '<span class="pc-search-empty">No capabilities found for “' + escapeHtml(query) + '”.</span>';
      return;
    }
    searchStatus.hidden = false;
    var html = totalCount
      ? '<span class="pc-search-found">' + totalCount + ' result' + (totalCount === 1 ? '' : 's') + ' for “' + escapeHtml(query) + '” across ' + moduleCount + ' module' + (moduleCount === 1 ? '' : 's') + '</span>'
      : '<span class="pc-search-found">No module results for “' + escapeHtml(query) + '”</span>';
    if (featureKeys.length) {
      html += '<span class="pc-search-also">Also in:</span>' + featureKeys.map(function (k) {
        return '<button type="button" class="pc-search-pill" data-feature="' + k + '">' + escapeHtml(STANDOUT[k].name) + '</button>';
      }).join('');
    }
    searchStatus.innerHTML = html;
    searchStatus.querySelectorAll('.pc-search-pill').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var key = btn.dataset.feature;
        selectFeature(key);
        scrollToStandoutSection();
        highlightFeatureMatch(key, query.toLowerCase());
      });
    });
  }

  /* the search form's submit handler lands here — search always
     covers every module at once (there's no "All Modules" nav button
     any more), so a query renders every matching module's filtered
     block into the feed in place of the single-module ladder/table
     view. The form only calls this with a non-empty query. */
  function showAllModulesView(rawQuery) {
    Object.keys(navByName).forEach(function (n) { navByName[n].classList.remove('pc-on'); });
    ladder.hidden = true;
    pcCmp.hidden = true;
    searchFeed.hidden = false;

    var query = (rawQuery || '').trim();
    if (!query) {
      searchFeed.innerHTML = '<div class="pc-search-feed-empty">Search for a capability above to see matching results across every module.</div>';
      searchStatus.hidden = true;
      searchStatus.innerHTML = '';
      return;
    }

    var q = query.toLowerCase();
    var moduleResults = [];
    var totalCount = 0;
    DATA.modules.forEach(function (m) {
      var groups = [];
      m.groups.forEach(function (g) {
        var items = g.items.filter(function (it) { return itemMatches(it, q); });
        if (items.length) { groups.push({ name: g.name, items: items }); totalCount += items.length; }
      });
      if (groups.length) moduleResults.push({ module: m, groups: groups });
    });

    searchFeed.innerHTML = '';
    if (moduleResults.length) {
      moduleResults.forEach(function (r) { searchFeed.appendChild(buildModuleBlock(r.module, r.groups)); });
    } else {
      searchFeed.innerHTML = '<div class="pc-search-feed-empty">No capabilities found for “' + escapeHtml(query) + '” in any module.</div>';
    }

    var featureKeys = Object.keys(STANDOUT).filter(function (k) { return FEATURE_SEARCH_TEXT[k].indexOf(q) !== -1; });
    renderAllModulesStatus(query, totalCount, moduleResults.length, featureKeys);
  }

  function runSearch(raw) {
    var query = (raw || '').trim();
    clearSearchHighlights();
    if (!query) { searchStatus.hidden = true; searchStatus.innerHTML = ''; return; }
    showAllModulesView(query);
  }

  if (searchForm) {
    searchForm.addEventListener('submit', function (e) {
      e.preventDefault();
      runSearch(searchInput.value);
    });
  }

  /* the "x" — cancels the current search result and returns to the
     default (first-module) view, same as a fresh page load. Also
     toggles itself on/off as the box empties/fills so it only shows
     up once there's something to clear. */
  if (searchInput && searchClear) {
    searchInput.addEventListener('input', function () {
      searchClear.hidden = !searchInput.value;
    });
    searchClear.addEventListener('click', function () {
      searchInput.value = '';
      searchClear.hidden = true;
      searchStatus.hidden = true;
      searchStatus.innerHTML = '';
      clearSearchHighlights();
      selectModule(ORDER[0]);
      /* the search feed can be much taller than the default single-
         module view, so collapsing it without scrolling back up can
         leave the page sitting well past the now-shorter content —
         jump back to the search bar so the reset is visible. */
      scrollToLadderSection();
      searchInput.focus();
    });
  }

  /* info popovers (fixed-positioned so overflow can't clip them) */
  var openPop = null, popHandler = null;
  function placePop(pop, btn) {
    var w = Math.min(340, window.innerWidth - 24);
    pop.style.position = 'fixed';
    pop.style.width = w + 'px';
    pop.style.maxHeight = (window.innerHeight - 24) + 'px';
    pop.style.overflowY = 'auto';
    var r = btn.getBoundingClientRect();
    var ph = pop.offsetHeight;
    var left = r.left; if (left + w > window.innerWidth - 12) left = window.innerWidth - 12 - w; if (left < 12) left = 12;
    var top = r.bottom + 8;
    if (top + ph > window.innerHeight - 12) {
      var above = r.top - ph - 8;
      top = above > 12 ? above : Math.max(12, window.innerHeight - 12 - ph);
    }
    pop.style.left = left + 'px'; pop.style.top = top + 'px';
    var rr = pop.getBoundingClientRect();
    if (rr.bottom > window.innerHeight - 8) pop.style.top = Math.max(8, top - (rr.bottom - (window.innerHeight - 8))) + 'px';
    if (rr.right > window.innerWidth - 8) pop.style.left = Math.max(8, left - (rr.right - (window.innerWidth - 8))) + 'px';
  }
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('.pc-info-btn');
    if (btn) {
      var pop = document.getElementById(btn.getAttribute('aria-controls'));
      var isOpen = pop.classList.contains('pc-open');
      closePop();
      if (!isOpen) {
        pop.classList.add('pc-open'); btn.setAttribute('aria-expanded', 'true'); openPop = { pop: pop, btn: btn };
        placePop(pop, btn);
        popHandler = function () { closePop(); };
        window.addEventListener('scroll', popHandler, true);
        window.addEventListener('resize', popHandler);
      }
      return;
    }
    if (openPop && !e.target.closest('.pc-pop')) closePop();
  });
  function closePop() {
    if (!openPop) return;
    var pop = openPop.pop, btn = openPop.btn;
    pop.classList.remove('pc-open');
    pop.style.cssText = '';
    btn.setAttribute('aria-expanded', 'false');
    openPop = null;
    if (popHandler) { window.removeEventListener('scroll', popHandler, true); window.removeEventListener('resize', popHandler); popHandler = null; }
  }
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closePop(); });
  document.addEventListener('click', function (e) { var a = e.target.closest('.pc-cell-link'); if (a && a.getAttribute('href') === '#') e.preventDefault(); });
}());
/* navbar - new JS additions */
(function(){var bar=document.getElementById('nvBar');var menu=document.getElementById('nvMenu');if(!bar||!menu)return;var onScroll=function(){if(window.scrollY>8)bar.classList.add('is-scrolled');else bar.classList.remove('is-scrolled');};window.addEventListener('scroll',onScroll,{passive:true});onScroll();var items=menu.querySelectorAll('[data-nv="dropdown"]');var openTimer,closeTimer,current=null;function open(item){clearTimeout(closeTimer);if(current&&current!==item)close(current,true);item.classList.add('is-open');var btn=item.querySelector('.nv-link');if(btn)btn.setAttribute('aria-expanded','true');current=item;}
function close(item,immediate){item=item||current;if(!item)return;item.classList.remove('is-open');var btn=item.querySelector('.nv-link');if(btn)btn.setAttribute('aria-expanded','false');if(current===item)current=null;}
items.forEach(function(item){var btn=item.querySelector('.nv-link');item.addEventListener('mouseenter',function(){clearTimeout(closeTimer);openTimer=setTimeout(function(){open(item);},60);});item.addEventListener('mouseleave',function(){clearTimeout(openTimer);closeTimer=setTimeout(function(){close(item,false);},140);});btn.addEventListener('click',function(e){e.preventDefault();if(item.classList.contains('is-open'))close(item,true);else open(item);});btn.addEventListener('keydown',function(e){if(e.key==='Escape'){close(item,true);btn.focus();}});});document.addEventListener('click',function(e){if(current&&!current.contains(e.target))close(current,true);});document.addEventListener('keydown',function(e){if(e.key==='Escape'&&current)close(current,true);});var burger=document.getElementById('nvBurger');var panel=document.getElementById('nvPanel');var scrim=document.getElementById('nvScrim');var closeBtn=document.getElementById('nvClose');function openPanel(){document.body.classList.add('nv-mobile-open');if(burger)burger.setAttribute('aria-expanded','true');if(panel)panel.setAttribute('aria-hidden','false');}
function closePanel(){document.body.classList.remove('nv-mobile-open');if(burger)burger.setAttribute('aria-expanded','false');if(panel)panel.setAttribute('aria-hidden','true');}
if(burger)burger.addEventListener('click',openPanel);if(closeBtn)closeBtn.addEventListener('click',closePanel);if(scrim)scrim.addEventListener('click',closePanel);document.addEventListener('keydown',function(e){if(e.key==='Escape')closePanel();});var accs=document.querySelectorAll('[data-acc]');accs.forEach(function(acc){var btn=acc.querySelector('.nv-acc-btn');btn.addEventListener('click',function(){var isOpen=acc.classList.toggle('is-open');btn.setAttribute('aria-expanded',isOpen?'true':'false');});});var ann=document.getElementById('nvAnn');var annClose=document.getElementById('nvAnnClose');var ANN_KEY='phr_ann_lexi_hr_v1';if(ann){try{if(sessionStorage.getItem(ANN_KEY)==='1')ann.classList.add('is-dismissed');}catch(e){}
if(annClose)annClose.addEventListener('click',function(){ann.classList.add('is-dismissed');try{sessionStorage.setItem(ANN_KEY,'1');}catch(e){}});}}());
