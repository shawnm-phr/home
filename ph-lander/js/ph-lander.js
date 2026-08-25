/* ═══════════════════════════════════════════════════════════════════
   ph-lander.js — delta script for the PeoplesHR PH landing page
   (/ph-lander/)

   Loaded AFTER the shared ../../phrhome.js. Two things live here:

   1. navbar/mobile-panel toggle behavior. Not yet part of the shared
      phrhome.js upstream, so every page that embeds the nv- nav markup
      currently carries its own copy (see customer-page/script.js,
      solutions/biometric-attendance-access-control/js/tracking.js).
      Copied verbatim so the nav actually works on this page.
   2. ph- — behavior specific to this page only, guarded to no-op if
      .ph-scope content isn't present.
   ═══════════════════════════════════════════════════════════════════ */

/* navbar - new JS additions */
(function(){var bar=document.getElementById('nvBar');var menu=document.getElementById('nvMenu');if(!bar||!menu)return;var onScroll=function(){if(window.scrollY>8)bar.classList.add('is-scrolled');else bar.classList.remove('is-scrolled');};window.addEventListener('scroll',onScroll,{passive:true});onScroll();var items=menu.querySelectorAll('[data-nv="dropdown"]');var openTimer,closeTimer,current=null;function open(item){clearTimeout(closeTimer);if(current&&current!==item)close(current,true);item.classList.add('is-open');var btn=item.querySelector('.nv-link');if(btn)btn.setAttribute('aria-expanded','true');current=item;}
function close(item,immediate){item=item||current;if(!item)return;item.classList.remove('is-open');var btn=item.querySelector('.nv-link');if(btn)btn.setAttribute('aria-expanded','false');if(current===item)current=null;}
items.forEach(function(item){var btn=item.querySelector('.nv-link');item.addEventListener('mouseenter',function(){clearTimeout(closeTimer);openTimer=setTimeout(function(){open(item);},60);});item.addEventListener('mouseleave',function(){clearTimeout(openTimer);closeTimer=setTimeout(function(){close(item,false);},140);});btn.addEventListener('click',function(e){e.preventDefault();if(item.classList.contains('is-open'))close(item,true);else open(item);});btn.addEventListener('keydown',function(e){if(e.key==='Escape'){close(item,true);btn.focus();}});});document.addEventListener('click',function(e){if(current&&!current.contains(e.target))close(current,true);});document.addEventListener('keydown',function(e){if(e.key==='Escape'&&current)close(current,true);});var burger=document.getElementById('nvBurger');var panel=document.getElementById('nvPanel');var scrim=document.getElementById('nvScrim');var closeBtn=document.getElementById('nvClose');function openPanel(){document.body.classList.add('nv-mobile-open');if(burger)burger.setAttribute('aria-expanded','true');if(panel)panel.setAttribute('aria-hidden','false');}
function closePanel(){document.body.classList.remove('nv-mobile-open');if(burger)burger.setAttribute('aria-expanded','false');if(panel)panel.setAttribute('aria-hidden','true');}
if(burger)burger.addEventListener('click',openPanel);if(closeBtn)closeBtn.addEventListener('click',closePanel);if(scrim)scrim.addEventListener('click',closePanel);document.addEventListener('keydown',function(e){if(e.key==='Escape')closePanel();});var accs=document.querySelectorAll('[data-acc]');accs.forEach(function(acc){var btn=acc.querySelector('.nv-acc-btn');btn.addEventListener('click',function(){var isOpen=acc.classList.toggle('is-open');btn.setAttribute('aria-expanded',isOpen?'true':'false');});});var ann=document.getElementById('nvAnn');var annClose=document.getElementById('nvAnnClose');var ANN_KEY='phr_ann_lexi_hr_v1';if(ann){try{if(sessionStorage.getItem(ANN_KEY)==='1')ann.classList.add('is-dismissed');}catch(e){}
if(annClose)annClose.addEventListener('click',function(){ann.classList.add('is-dismissed');try{sessionStorage.setItem(ANN_KEY,'1');}catch(e){}});}}());

/* ph - behavior specific to this page */
(function(){
  var scope = document.querySelector('.ph-scope');
  if(!scope) return; // guard: absent on non-ph-lander pages

  /* FAQ accordion: already wired up globally by the shared ../phrhome.js
     (ProductsPage.initFaq targets .phr-faq-item__trigger site-wide) —
     nothing to add here, just reusing the shared .phr-faq markup. */

  /* Modules tabs — click a tab, show its panel, hide the rest. */
  var modTabs = document.querySelectorAll('.ph-mod-tab');
  modTabs.forEach(function(tab){
    tab.addEventListener('click', function(){
      var target = tab.getAttribute('data-mod-tab');
      modTabs.forEach(function(t){
        var isActive = t === tab;
        t.classList.toggle('is-active', isActive);
        t.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });
      document.querySelectorAll('.ph-mod-panel').forEach(function(panel){
        var isActive = panel.getAttribute('data-mod-panel') === target;
        panel.classList.toggle('is-active', isActive);
        panel.hidden = !isActive;
      });
    });
  });

  /* Video testimonial modal — ported from customer-page/script.js's
     "2. Video Modal" IIFE, retargeted at this page's own element ids. */
  var vidModal = document.getElementById('phVidModal');
  var vidIframe = document.getElementById('phVidIframe');
  var vidClose = document.getElementById('phVidModalClose');
  var vidTitle = document.getElementById('phVidModalTitle');
  if(vidModal && vidIframe && vidClose){
    var openVidModal = function(ytId, title){
      vidIframe.src = 'https://www.youtube.com/embed/' + ytId + '?autoplay=1&rel=0&modestbranding=1';
      if(vidTitle) vidTitle.textContent = title || '';
      vidModal.classList.add('open');
      document.body.style.overflow = 'hidden';
    };
    var closeVidModal = function(){
      vidModal.classList.remove('open');
      vidIframe.src = '';
      document.body.style.overflow = '';
    };
    document.querySelectorAll('.cs-vid-card').forEach(function(card){
      card.addEventListener('click', function(){
        var ytId = card.getAttribute('data-youtube');
        var title = card.getAttribute('data-title') || '';
        if(!ytId) return;
        openVidModal(ytId, title);
      });
    });
    vidClose.addEventListener('click', closeVidModal);
    vidModal.addEventListener('click', function(e){ if(e.target === vidModal) closeVidModal(); });
    document.addEventListener('keydown', function(e){ if(e.key === 'Escape' && vidModal.classList.contains('open')) closeVidModal(); });
  }

  /* Sticky CTA — visible once scrolled past the hero, hidden again near
     the Final CTA section so the ask isn't duplicated on top of itself.
     Dismiss persists for the tab session, same pattern as the nv-ann
     announcement-bar dismiss above. */
  var sticky = document.getElementById('phStickyCta');
  var stickyClose = document.getElementById('phStickyCtaClose');
  var hero = document.querySelector('.phr-hero');
  var finalCta = document.getElementById('ph-final-cta');
  var STICKY_KEY = 'phr_ph_lander_sticky_dismissed';
  var stickyDismissed = false;
  try { stickyDismissed = sessionStorage.getItem(STICKY_KEY) === '1'; } catch(e){}

  if(sticky && !stickyDismissed){
    var pastHero = false;
    var nearFinalCta = false;
    var updateSticky = function(){
      sticky.classList.toggle('is-visible', pastHero && !nearFinalCta);
    };
    if(hero && 'IntersectionObserver' in window){
      new IntersectionObserver(function(entries){
        pastHero = !entries[0].isIntersecting;
        updateSticky();
      }, {threshold:0}).observe(hero);
    }
    if(finalCta && 'IntersectionObserver' in window){
      new IntersectionObserver(function(entries){
        nearFinalCta = entries[0].isIntersecting;
        updateSticky();
      }, {threshold:0, rootMargin:'0px 0px -20% 0px'}).observe(finalCta);
    }
    if(stickyClose){
      stickyClose.addEventListener('click', function(){
        sticky.classList.remove('is-visible');
        try { sessionStorage.setItem(STICKY_KEY, '1'); } catch(e){}
        stickyDismissed = true;
      });
    }
  } else if(sticky){
    sticky.style.display = 'none';
  }
}());
