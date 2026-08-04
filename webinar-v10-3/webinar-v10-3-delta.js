/* ==========================================================================
   webinar-v10-3-delta.js
   Page-specific behavior for the PeoplesHR v10.3 Webinar registration page.
   Requires: phrhome.js loaded first. Two things live here:

   1. navbar/mobile-panel toggle behavior. Not yet part of the shared
      phrhome.js upstream, so every page that embeds the nv- nav markup
      currently carries its own copy (see tracking.js, customer-page/script.js).
      Copied verbatim from tracking.js so the nav actually works on this page.
   2. Registration modal -- same .hs-modal-overlay/.hs-modal shell used
      sitewide for HubSpot-embedded lead forms (see phrhome.css), wired to
      this page's own form instance following the same pattern as
      pricing/js/pricing.js's "Contact Us" modal. The embed script and the
      form itself are both built lazily on first open, not on page load.
   ========================================================================== */

/* navbar - new JS additions */
(function(){var bar=document.getElementById('nvBar');var menu=document.getElementById('nvMenu');if(!bar||!menu)return;var onScroll=function(){if(window.scrollY>8)bar.classList.add('is-scrolled');else bar.classList.remove('is-scrolled');};window.addEventListener('scroll',onScroll,{passive:true});onScroll();var items=menu.querySelectorAll('[data-nv="dropdown"]');var openTimer,closeTimer,current=null;function open(item){clearTimeout(closeTimer);if(current&&current!==item)close(current,true);item.classList.add('is-open');var btn=item.querySelector('.nv-link');if(btn)btn.setAttribute('aria-expanded','true');current=item;}
function close(item,immediate){item=item||current;if(!item)return;item.classList.remove('is-open');var btn=item.querySelector('.nv-link');if(btn)btn.setAttribute('aria-expanded','false');if(current===item)current=null;}
items.forEach(function(item){var btn=item.querySelector('.nv-link');item.addEventListener('mouseenter',function(){clearTimeout(closeTimer);openTimer=setTimeout(function(){open(item);},60);});item.addEventListener('mouseleave',function(){clearTimeout(openTimer);closeTimer=setTimeout(function(){close(item,false);},140);});btn.addEventListener('click',function(e){e.preventDefault();if(item.classList.contains('is-open'))close(item,true);else open(item);});btn.addEventListener('keydown',function(e){if(e.key==='Escape'){close(item,true);btn.focus();}});});document.addEventListener('click',function(e){if(current&&!current.contains(e.target))close(current,true);});document.addEventListener('keydown',function(e){if(e.key==='Escape'&&current)close(current,true);});var burger=document.getElementById('nvBurger');var panel=document.getElementById('nvPanel');var scrim=document.getElementById('nvScrim');var closeBtn=document.getElementById('nvClose');function openPanel(){document.body.classList.add('nv-mobile-open');if(burger)burger.setAttribute('aria-expanded','true');if(panel)panel.setAttribute('aria-hidden','false');}
function closePanel(){document.body.classList.remove('nv-mobile-open');if(burger)burger.setAttribute('aria-expanded','false');if(panel)panel.setAttribute('aria-hidden','true');}
if(burger)burger.addEventListener('click',openPanel);if(closeBtn)closeBtn.addEventListener('click',closePanel);if(scrim)scrim.addEventListener('click',closePanel);document.addEventListener('keydown',function(e){if(e.key==='Escape')closePanel();});var accs=document.querySelectorAll('[data-acc]');accs.forEach(function(acc){var btn=acc.querySelector('.nv-acc-btn');btn.addEventListener('click',function(){var isOpen=acc.classList.toggle('is-open');btn.setAttribute('aria-expanded',isOpen?'true':'false');});});var ann=document.getElementById('nvAnn');var annClose=document.getElementById('nvAnnClose');var ANN_KEY='phr_ann_lexi_hr_v1';if(ann){try{if(sessionStorage.getItem(ANN_KEY)==='1')ann.classList.add('is-dismissed');}catch(e){}
if(annClose)annClose.addEventListener('click',function(){ann.classList.add('is-dismissed');try{sessionStorage.setItem(ANN_KEY,'1');}catch(e){}});}}());

/* registration modal */
(function () {
  'use strict';

  var modal = document.getElementById('wregModal');
  if (!modal) return;

  var closeBtn      = document.getElementById('wregModalClose');
  var formContainer = document.getElementById('wregFormContainer');
  var loader        = document.getElementById('wregFormLoader');
  var formBuilt     = false;

  function ensureHsScript(cb) {
    if (window.hbspt) { cb(); return; }
    var existing = document.querySelector('script[src*="hsforms.net/forms/embed/v2.js"]');
    if (existing) { existing.addEventListener('load', cb); return; }
    var s = document.createElement('script');
    s.src = '//js-na2.hsforms.net/forms/embed/v2.js';
    s.charset = 'utf-8';
    s.onload = cb;
    document.body.appendChild(s);
  }

  function showConfirmation() {
    formContainer.innerHTML =
      '<div class="wreg-form-confirm">' +
        '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>' +
        '<p>You’re registered! Check your inbox for the joining link.</p>' +
      '</div>';
  }

  function buildForm() {
    if (formBuilt) return;
    formBuilt = true;
    ensureHsScript(function () {
      /* HUBSPOT FORM EMBED GOES HERE */
      hbspt.forms.create({
        portalId: '45700506',
        formId:   '93181f13-b063-4e09-a572-345dbda4b062',
        region:   'na2',
        target:   '#wregFormContainer',
        onFormReady: function () {
          if (loader) loader.style.display = 'none';
        },
        onFormSubmitted: showConfirmation
      });
    });
  }

  function openModal(e) {
    if (e) e.preventDefault();
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    buildForm();
  }

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-open-hs]').forEach(function (el) {
    el.addEventListener('click', openModal);
  });
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', function (e) { if (e.target === modal) closeModal(); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
  });

  /* Fallback for cases where onFormSubmitted doesn't fire directly
     (matches the pattern already used for the demo-gate form in phrhome.js) */
  window.addEventListener('message', function (e) {
    if (!e.data) return;
    if (e.data.type === 'hsFormCallback' && e.data.eventName === 'onFormSubmitted') {
      showConfirmation();
    }
  });
}());
