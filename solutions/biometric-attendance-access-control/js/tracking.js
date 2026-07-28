/* ═══════════════════════════════════════════════════════════════════
   tracking.js — delta script for the Tracking page
   (Access & Attendance Devices — /solutions/biometric-attendance-access-control/)

   Loaded AFTER the shared ../phrhome.js. Two things live here:

   1. navbar/mobile-panel toggle behavior. Not yet part of the shared
      phrhome.js upstream, so every page that embeds the nv- nav markup
      currently carries its own copy (see customer-page/script.js,
      phr-webinar-page/phrhome.js). Copied verbatim so the nav actually
      works on this page.
   2. tk- — behavior specific to this page only, guarded to no-op if
      .tk-scope isn't present.
   ═══════════════════════════════════════════════════════════════════ */

/* navbar - new JS additions */
(function(){var bar=document.getElementById('nvBar');var menu=document.getElementById('nvMenu');if(!bar||!menu)return;var onScroll=function(){if(window.scrollY>8)bar.classList.add('is-scrolled');else bar.classList.remove('is-scrolled');};window.addEventListener('scroll',onScroll,{passive:true});onScroll();var items=menu.querySelectorAll('[data-nv="dropdown"]');var openTimer,closeTimer,current=null;function open(item){clearTimeout(closeTimer);if(current&&current!==item)close(current,true);item.classList.add('is-open');var btn=item.querySelector('.nv-link');if(btn)btn.setAttribute('aria-expanded','true');current=item;}
function close(item,immediate){item=item||current;if(!item)return;item.classList.remove('is-open');var btn=item.querySelector('.nv-link');if(btn)btn.setAttribute('aria-expanded','false');if(current===item)current=null;}
items.forEach(function(item){var btn=item.querySelector('.nv-link');item.addEventListener('mouseenter',function(){clearTimeout(closeTimer);openTimer=setTimeout(function(){open(item);},60);});item.addEventListener('mouseleave',function(){clearTimeout(openTimer);closeTimer=setTimeout(function(){close(item,false);},140);});btn.addEventListener('click',function(e){e.preventDefault();if(item.classList.contains('is-open'))close(item,true);else open(item);});btn.addEventListener('keydown',function(e){if(e.key==='Escape'){close(item,true);btn.focus();}});});document.addEventListener('click',function(e){if(current&&!current.contains(e.target))close(current,true);});document.addEventListener('keydown',function(e){if(e.key==='Escape'&&current)close(current,true);});var burger=document.getElementById('nvBurger');var panel=document.getElementById('nvPanel');var scrim=document.getElementById('nvScrim');var closeBtn=document.getElementById('nvClose');function openPanel(){document.body.classList.add('nv-mobile-open');if(burger)burger.setAttribute('aria-expanded','true');if(panel)panel.setAttribute('aria-hidden','false');}
function closePanel(){document.body.classList.remove('nv-mobile-open');if(burger)burger.setAttribute('aria-expanded','false');if(panel)panel.setAttribute('aria-hidden','true');}
if(burger)burger.addEventListener('click',openPanel);if(closeBtn)closeBtn.addEventListener('click',closePanel);if(scrim)scrim.addEventListener('click',closePanel);document.addEventListener('keydown',function(e){if(e.key==='Escape')closePanel();});var accs=document.querySelectorAll('[data-acc]');accs.forEach(function(acc){var btn=acc.querySelector('.nv-acc-btn');btn.addEventListener('click',function(){var isOpen=acc.classList.toggle('is-open');btn.setAttribute('aria-expanded',isOpen?'true':'false');});});var ann=document.getElementById('nvAnn');var annClose=document.getElementById('nvAnnClose');var ANN_KEY='phr_ann_lexi_hr_v1';if(ann){try{if(sessionStorage.getItem(ANN_KEY)==='1')ann.classList.add('is-dismissed');}catch(e){}
if(annClose)annClose.addEventListener('click',function(){ann.classList.add('is-dismissed');try{sessionStorage.setItem(ANN_KEY,'1');}catch(e){}});}}());

/* tracking - pillar switcher (Attendance / Access / Payroll) */
(function(){
  'use strict';

  var contentEl = document.getElementById('tkSwitchContent');
  var imgEl     = document.getElementById('tkSwitchImg');
  var tintEl    = document.getElementById('tkSwitchTint');
  var tabs      = document.querySelectorAll('#tkSwitchTabs .tk-switch-tab');

  if(!contentEl || !imgEl || !tabs.length) return; // guard: absent on non-tracking pages

  var pillars = [
    {
      title: 'Attendance Tracking',
      body:  'Capture every clock-in and clock-out the moment it happens, with biometric, card, PIN, or mobile options — no manual entry, no guesswork, no gaps in the timesheet.',
      img:   'https://images.unsplash.com/photo-1586528116022-aeda1613c63d?auto=format&fit=crop&w=1000&q=80',
      tint:  '#2563eb'
    },
    {
      title: 'Access Control & Security',
      body:  'Restrict entry to sensitive areas, manage door and gate access by role, shift, or clearance level, and keep a full audit trail of who went where and when.',
      img:   'https://images.unsplash.com/photo-1521386455230-4ceaa25b72be?auto=format&fit=crop&w=1000&q=80',
      tint:  '#0f766e'
    },
    {
      title: 'Payroll-Ready Data',
      body:  'Attendance and access data sync directly with PeoplesHR Time and Pay, so hours worked, overtime, and exceptions are calculated automatically and paid correctly.',
      img:   'https://images.unsplash.com/photo-1551836022-4c4c79ecde51?auto=format&fit=crop&w=1000&q=80',
      tint:  '#7c3aed'
    }
  ];

  function buildContent(p){
    return '<h3 class="tk-switch-title">' + p.title + '</h3><p class="tk-switch-body">' + p.body + '</p>';
  }

  function switchTo(idx){
    var p = pillars[idx];
    if(!p) return;

    tabs.forEach(function(t,i){ t.classList.toggle('active', i === idx); });
    contentEl.classList.add('tk-switch-out');
    imgEl.classList.add('tk-switch-img-out');

    setTimeout(function(){
      contentEl.innerHTML     = buildContent(p);
      imgEl.src               = p.img;
      imgEl.alt               = p.title;
      tintEl.style.background = p.tint;

      contentEl.classList.remove('tk-switch-out');
      contentEl.classList.add('tk-switch-in');
      imgEl.classList.remove('tk-switch-img-out');

      void contentEl.offsetWidth; /* force reflow so the fade-in transition fires */
      contentEl.classList.remove('tk-switch-in');
    }, 220);
  }

  tabs.forEach(function(tab, i){
    tab.addEventListener('click', function(){ switchTo(i); });
  });

  switchTo(0);
}());

/* tracking - device-type carousel (vertical cards, 3+ visible at a time) */
(function(){
  var wrap = document.querySelector('.tk-devtype-track-wrap');
  var track = document.getElementById('tkDevtypeTrack');
  if(!track || !wrap) return; // guard: absent on non-tracking pages

  var slides = track.children;
  var total = slides.length;
  var dotsWrap = document.getElementById('tkDevtypeDots');
  var prev = document.getElementById('tkDevtypePrev');
  var next = document.getElementById('tkDevtypeNext');
  var current = 0;
  var autoTimer;

  function cardStep(){
    var gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    return slides[0].getBoundingClientRect().width + gap;
  }

  function maxIndex(){
    var visible = Math.max(1, Math.round(wrap.clientWidth / cardStep()));
    return Math.max(0, total - visible);
  }

  function buildDots(){
    var m = maxIndex();
    dotsWrap.innerHTML = '';
    for(var i = 0; i <= m; i++){
      var b = document.createElement('button');
      b.className = 'tk-devtype-dot' + (i === current ? ' active' : '');
      b.setAttribute('aria-label', 'Go to card ' + (i + 1));
      b.addEventListener('click', (function(idx){ return function(){ goTo(idx); resetAuto(); }; }(i)));
      dotsWrap.appendChild(b);
    }
  }

  function goTo(idx){
    var m = maxIndex();
    current = Math.max(0, Math.min(idx, m));
    track.style.transform = 'translateX(-' + (current * cardStep()) + 'px)';
    var dots = dotsWrap.children;
    for(var i = 0; i < dots.length; i++){ dots[i].classList.toggle('active', i === current); }
  }

  if(prev) prev.addEventListener('click', function(){ goTo(current - 1); resetAuto(); });
  if(next) next.addEventListener('click', function(){ goTo(current + 1 > maxIndex() ? 0 : current + 1); resetAuto(); });

  var startX = 0;
  track.addEventListener('touchstart', function(e){ startX = e.touches[0].clientX; }, {passive:true});
  track.addEventListener('touchend', function(e){
    var diff = startX - e.changedTouches[0].clientX;
    if(Math.abs(diff) > 40){ goTo(diff > 0 ? current + 1 : current - 1); resetAuto(); }
  });

  var resizeTimer;
  window.addEventListener('resize', function(){
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function(){ buildDots(); goTo(current); }, 150);
  });

  function resetAuto(){
    clearInterval(autoTimer);
    autoTimer = setInterval(function(){ goTo(current + 1 > maxIndex() ? 0 : current + 1); }, 5000);
  }

  buildDots();
  goTo(0);
  resetAuto();
}());

/* tracking - industry switcher (Manufacturing / Retail / Office / etc.) */
(function(){
  'use strict';

  var contentEl = document.getElementById('tkIndContent');
  var imgEl     = document.getElementById('tkIndImg');
  var tintEl    = document.getElementById('tkIndTint');
  var tabs      = document.querySelectorAll('#tkIndTabs .tk-ind-tab');

  if(!contentEl || !imgEl || !tabs.length) return; // guard: absent on non-tracking pages

  var industries = [
    {
      title: 'Manufacturing & Factories',
      body:  'Track attendance and control access across production floors and warehouses, with rugged devices built for high-traffic industrial environments and shift-based rules that match your production schedule.',
      tags:  ['Shift-based access', 'Rugged hardware', 'Multi-site sync'],
      img:   'https://images.unsplash.com/photo-1700727448686-b314cb5f9948?auto=format&fit=crop&w=1000&q=80',
      tint:  '#ea580c'
    },
    {
      title: 'Retail & Multi-Branch Operations',
      body:  'Keep every store staffed and accountable on one platform — consistent attendance data and access control whether you run 5 locations or 500.',
      tags:  ['Fast rollout', 'Centralized reporting', 'Any headcount'],
      img:   'https://images.unsplash.com/photo-1558898452-e5c989f41b27?auto=format&fit=crop&w=1000&q=80',
      tint:  '#db2777'
    },
    {
      title: 'Corporate Offices',
      body:  'Give employees frictionless badge or biometric entry at reception and secure zones, with attendance data flowing straight into payroll — no separate systems to reconcile.',
      tags:  ['Badge & biometric entry', 'Zone permissions', 'Payroll sync'],
      img:   'https://images.unsplash.com/photo-1543325042-c67825847491?auto=format&fit=crop&w=1000&q=80',
      tint:  '#2563eb'
    },
    {
      title: 'Healthcare Facilities',
      body:  'Secure wards and pharmacies with role-based access, while contactless biometric check-in keeps staff attendance accurate without adding to infection-control risk.',
      tags:  ['Contactless check-in', 'Restricted-zone control', 'Audit trail'],
      img:   'https://images.unsplash.com/photo-1584451049700-ec9b394f3805?auto=format&fit=crop&w=1000&q=80',
      tint:  '#059669'
    },
    {
      title: 'Warehousing & Logistics',
      body:  'Track attendance across shifts and loading docks, with access gates that log every entry and exit — full visibility over who\'s on site, at every facility.',
      tags:  ['Gate & dock access', 'Shift coverage', 'Real-time visibility'],
      img:   'https://images.unsplash.com/photo-1620388640785-892616248ec8?auto=format&fit=crop&w=1000&q=80',
      tint:  '#7c3aed'
    },
    {
      title: 'Educational Institutions',
      body:  'Manage staff and campus access across multiple buildings from one dashboard, with attendance data ready for compliance reporting whenever it\'s needed.',
      tags:  ['Campus-wide access', 'Staff attendance', 'Compliance-ready'],
      img:   'https://images.unsplash.com/photo-1731349219592-60ca16964631?auto=format&fit=crop&w=1000&q=80',
      tint:  '#0891b2'
    }
  ];

  function buildContent(ind){
    var tagsHtml = ind.tags.map(function(t){ return '<span class="tk-ind-tag">' + t + '</span>'; }).join('');
    return '<h3 class="tk-ind-title">' + ind.title + '</h3>'
      + '<p class="tk-ind-body">' + ind.body + '</p>'
      + '<div class="tk-ind-tags">' + tagsHtml + '</div>';
  }

  function switchTo(idx){
    var ind = industries[idx];
    if(!ind) return;

    tabs.forEach(function(t,i){ t.classList.toggle('active', i === idx); });
    contentEl.classList.add('tk-ind-out');
    imgEl.classList.add('tk-ind-img-out');

    setTimeout(function(){
      contentEl.innerHTML     = buildContent(ind);
      imgEl.src               = ind.img;
      imgEl.alt               = ind.title;
      tintEl.style.background = ind.tint;

      contentEl.classList.remove('tk-ind-out');
      contentEl.classList.add('tk-ind-in');
      imgEl.classList.remove('tk-ind-img-out');

      void contentEl.offsetWidth; /* force reflow so the fade-in transition fires */
      contentEl.classList.remove('tk-ind-in');
    }, 220);
  }

  tabs.forEach(function(tab, i){
    tab.addEventListener('click', function(){ switchTo(i); });
  });

  switchTo(0);
}());
