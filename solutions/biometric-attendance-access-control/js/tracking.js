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

/* tracking - device category tabs (click a category, see it large; auto-rotates every 3s) */
(function(){
  var tabs = document.querySelectorAll('.tk-devtab');
  if(!tabs.length) return; // guard: absent on non-tracking pages

  var ids = Array.prototype.map.call(tabs, function(t){ return t.getAttribute('data-dev'); });
  var current = 0;
  var autoTimer;

  function go(id){
    tabs.forEach(function(t){ t.classList.remove('active'); });
    document.querySelectorAll('.tk-devpreview-content').forEach(function(p){ p.classList.remove('active'); });
    var t = document.querySelector('.tk-devtab[data-dev="' + id + '"]');
    if(t) t.classList.add('active');
    var p = document.getElementById('tkdev-' + id);
    if(p) p.classList.add('active');
    current = ids.indexOf(id);
  }

  function resetAuto(){
    clearInterval(autoTimer);
    autoTimer = setInterval(function(){ go(ids[(current + 1) % ids.length]); }, 3000);
  }

  tabs.forEach(function(tab){
    tab.addEventListener('click', function(){ go(tab.getAttribute('data-dev')); resetAuto(); });
  });

  var wrap = document.querySelector('.tk-devtab-wrap');
  if(wrap){
    wrap.addEventListener('mouseenter', function(){ clearInterval(autoTimer); });
    wrap.addEventListener('mouseleave', resetAuto);
  }

  resetAuto();
}());

/* tracking - campus deployment map beacons (click a point, see device card) */
(function(){
  var points = document.querySelectorAll('.tk-deploy-point');
  if(!points.length) return; // guard: absent on non-tracking pages

  function closeAll(except){
    points.forEach(function(p){
      if(p === except) return;
      p.classList.remove('is-open');
      var b = p.querySelector('.tk-deploy-beacon');
      if(b) b.setAttribute('aria-expanded','false');
    });
  }

  points.forEach(function(point){
    var btn = point.querySelector('.tk-deploy-beacon');
    if(!btn) return;
    btn.addEventListener('click', function(e){
      e.stopPropagation();
      var willOpen = !point.classList.contains('is-open');
      closeAll(willOpen ? point : null);
      point.classList.toggle('is-open', willOpen);
      btn.setAttribute('aria-expanded', String(willOpen));
    });
  });

  document.addEventListener('click', function(){ closeAll(null); });
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape') closeAll(null); });
}());

/* tracking - industry switcher (Manufacturing / Retail / Office / etc.) */
(function(){
  'use strict';

  var contentEl = document.getElementById('tkIndContent');
  var imgEl     = document.getElementById('tkIndImg');
  var tabs      = document.querySelectorAll('#tkIndTabs .tk-ind-tab');

  if(!contentEl || !imgEl || !tabs.length) return; // guard: absent on non-tracking pages

  var industries = [
    {
      title: 'Manufacturing & Factories',
      body:  'Track attendance and control access across production floors and warehouses, with rugged devices built for high-traffic industrial environments and shift-based rules that match your production schedule. Fingerprint terminals hold up to dust, heat, and constant handling far better than card-only readers, so the hardware keeps working through the conditions a factory floor actually throws at it.',
      tags:  ['Shift-based access', 'Rugged hardware', 'Multi-site sync'],
      img:   'images/Factory worker operating industrial machinery, wearing gloves, hard hat, and protective eyewear.webp'
    },
    {
      title: 'Retail & Multi-Branch Operations',
      body:  'Keep every store staffed and accountable on one platform, with consistent attendance data and access control whether you run 5 locations or 500. New branches roll out on the same device standard and report into the same dashboard, so head office gets one clean view of attendance instead of a different spreadsheet from every store.',
      tags:  ['Fast rollout', 'Centralized reporting', 'Any headcount'],
      img:   'images/Two supermarket staff members in uniform, one holding a tablet and the other carrying a box, in a grocery store.webp'
    },
    {
      title: 'Corporate Offices',
      body:  'Give employees frictionless badge or biometric entry at reception and secure zones, with attendance data flowing straight into payroll and no separate systems to reconcile. Visitors and contractors can be granted temporary access on the same platform, so security and HR are working off the same record instead of two.',
      tags:  ['Badge & biometric entry', 'Zone permissions', 'Payroll sync'],
      img:   'images/Two colleagues in a corporate boardroom meeting.webp'
    },
    {
      title: 'Healthcare Facilities',
      body:  'Secure wards and pharmacies with role-based access, while contactless biometric check-in keeps staff attendance accurate without adding to infection-control risk. Access rights can be scoped tightly by ward, shift, or clearance level, so sensitive areas stay restricted to the staff who are actually authorized to be there.',
      tags:  ['Contactless check-in', 'Restricted-zone control', 'Audit trail'],
      img:   'images/Doctor and nurse walking through a hospital corridor.webp'
    },
    {
      title: 'Warehousing & Logistics',
      body:  'Track attendance across shifts and loading docks, with access gates that log every entry and exit for full visibility over who\'s on site, at every facility. Handheld and gate-mounted devices cover both fixed checkpoints and moving crews, so coverage doesn\'t drop off between the office and the yard.',
      tags:  ['Gate & dock access', 'Shift coverage', 'Real-time visibility'],
      img:   'images/Lorry driver in uniform, viewed close-up through the vehicle window.webp'
    },
    {
      title: 'Educational Institutions',
      body:  'Manage staff and campus access across multiple buildings from one dashboard, with attendance data ready for compliance reporting whenever it\'s needed. Term-time schedules, multiple campuses, and mixed staff and faculty access rules are all handled from the same system, without extra spreadsheets at reporting time.',
      tags:  ['Campus-wide access', 'Staff attendance', 'Compliance-ready'],
      img:   'images/Professor walking into a university building.webp'
    }
  ];

  function buildContent(ind){
    var tagsHtml = ind.tags.map(function(t){ return '<span class="tk-ind-tag">' + t + '</span>'; }).join('');
    return '<h3 class="tk-ind-title">' + ind.title + '</h3>'
      + '<p class="tk-ind-body">' + ind.body + '</p>'
      + '<div class="tk-ind-tags">' + tagsHtml + '</div>';
  }

  var current = 0;
  var autoTimer;

  function switchTo(idx){
    var ind = industries[idx];
    if(!ind) return;
    current = idx;

    tabs.forEach(function(t,i){ t.classList.toggle('active', i === idx); });
    contentEl.classList.add('tk-ind-out');
    imgEl.classList.add('tk-ind-img-out');

    setTimeout(function(){
      contentEl.innerHTML = buildContent(ind);
      imgEl.src           = ind.img;
      imgEl.alt           = ind.title;

      contentEl.classList.remove('tk-ind-out');
      contentEl.classList.add('tk-ind-in');
      imgEl.classList.remove('tk-ind-img-out');

      void contentEl.offsetWidth; /* force reflow so the fade-in transition fires */
      contentEl.classList.remove('tk-ind-in');
    }, 220);
  }

  function resetAuto(){
    clearInterval(autoTimer);
    autoTimer = setInterval(function(){ switchTo((current + 1) % industries.length); }, 3000);
  }

  tabs.forEach(function(tab, i){
    tab.addEventListener('click', function(){ switchTo(i); resetAuto(); });
  });

  var indWrap = document.querySelector('.tk-ind');
  if(indWrap){
    indWrap.addEventListener('mouseenter', function(){ clearInterval(autoTimer); });
    indWrap.addEventListener('mouseleave', resetAuto);
  }

  switchTo(0);
  resetAuto();
}());

(function(){
  var img = document.querySelector('.tk-deploy-photo>img');
  if(!img) return;
  var tags = document.querySelectorAll('.tk-deploy-photo .tk-deploy-tag');
  var MAX_X = 10, MAX_Y = 8;
  var TAG_FACTOR = 0.35;
  var ticking = false, dx = 0, dy = 0;
  function onMove(e){
    dx = (0.5 - e.clientX / window.innerWidth) * 2 * MAX_X;
    dy = (0.5 - e.clientY / window.innerHeight) * 2 * MAX_Y;
    if(!ticking){
      ticking = true;
      requestAnimationFrame(function(){
        img.style.transform = 'scale(1.04) translate3d(' + dx.toFixed(2) + 'px,' + dy.toFixed(2) + 'px,0)';
        var tagX = (dx * TAG_FACTOR).toFixed(2), tagY = (dy * TAG_FACTOR).toFixed(2);
        tags.forEach(function(tag){
          tag.style.transform = 'translateX(-50%) translate3d(' + tagX + 'px,' + tagY + 'px,0)';
        });
        ticking = false;
      });
    }
  }
  window.addEventListener('mousemove', onMove, {passive:true});
}());
