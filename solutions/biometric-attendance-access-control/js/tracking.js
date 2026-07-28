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

/* tracking - device-type carousel (same pattern as home-page testimonials) */
(function(){
  var track = document.getElementById('tkDevtypeTrack');
  if(!track) return; // guard: absent on non-tracking pages

  var dots = document.querySelectorAll('#tkDevtypeDots .tk-devtype-dot');
  var prev = document.getElementById('tkDevtypePrev');
  var next = document.getElementById('tkDevtypeNext');
  var total = dots.length;
  var current = 0;
  var autoTimer;

  function goTo(idx){
    current = (idx + total) % total;
    track.style.transform = 'translateX(-' + (current * 100) + '%)';
    dots.forEach(function(d, i){ d.classList.toggle('active', i === current); });
  }

  if(prev) prev.addEventListener('click', function(){ goTo(current - 1); resetAuto(); });
  if(next) next.addEventListener('click', function(){ goTo(current + 1); resetAuto(); });
  dots.forEach(function(d, i){ d.addEventListener('click', function(){ goTo(i); resetAuto(); }); });

  var startX = 0;
  track.addEventListener('touchstart', function(e){ startX = e.touches[0].clientX; }, {passive:true});
  track.addEventListener('touchend', function(e){
    var diff = startX - e.changedTouches[0].clientX;
    if(Math.abs(diff) > 40){ goTo(diff > 0 ? current + 1 : current - 1); resetAuto(); }
  });

  function resetAuto(){ clearInterval(autoTimer); autoTimer = setInterval(function(){ goTo(current + 1); }, 5000); }
  resetAuto();
}());
