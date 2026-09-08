/* ═══════════════════════════════════════════════════════════════════
   payroll.js — delta script for the Payroll Outsourcing page
   (/solutions/payroll-outsourcing/)

   Loaded AFTER the shared ../phrhome.js. Two things live here:

   1. navbar/mobile-panel toggle behavior. Not yet part of the shared
      phrhome.js upstream, so every page that embeds the nv- nav markup
      currently carries its own copy (see solutions/biometric-attendance-
      access-control/js/tracking.js, customer-page/script.js). Copied
      verbatim so the nav actually works on this page.
   2. po- — tab-switcher behavior specific to this page only, guarded
      to no-op if .po-scope isn't present.
   ═══════════════════════════════════════════════════════════════════ */

/* navbar - new JS additions */
(function(){var bar=document.getElementById('nvBar');var menu=document.getElementById('nvMenu');if(!bar||!menu)return;var onScroll=function(){if(window.scrollY>8)bar.classList.add('is-scrolled');else bar.classList.remove('is-scrolled');};window.addEventListener('scroll',onScroll,{passive:true});onScroll();var items=menu.querySelectorAll('[data-nv="dropdown"]');var openTimer,closeTimer,current=null;function open(item){clearTimeout(closeTimer);if(current&&current!==item)close(current,true);item.classList.add('is-open');var btn=item.querySelector('.nv-link');if(btn)btn.setAttribute('aria-expanded','true');current=item;}
function close(item,immediate){item=item||current;if(!item)return;item.classList.remove('is-open');var btn=item.querySelector('.nv-link');if(btn)btn.setAttribute('aria-expanded','false');if(current===item)current=null;}
items.forEach(function(item){var btn=item.querySelector('.nv-link');item.addEventListener('mouseenter',function(){clearTimeout(closeTimer);openTimer=setTimeout(function(){open(item);},60);});item.addEventListener('mouseleave',function(){clearTimeout(openTimer);closeTimer=setTimeout(function(){close(item,false);},140);});btn.addEventListener('click',function(e){e.preventDefault();if(item.classList.contains('is-open'))close(item,true);else open(item);});btn.addEventListener('keydown',function(e){if(e.key==='Escape'){close(item,true);btn.focus();}});});document.addEventListener('click',function(e){if(current&&!current.contains(e.target))close(current,true);});document.addEventListener('keydown',function(e){if(e.key==='Escape'&&current)close(current,true);});var burger=document.getElementById('nvBurger');var panel=document.getElementById('nvPanel');var scrim=document.getElementById('nvScrim');var closeBtn=document.getElementById('nvClose');function openPanel(){document.body.classList.add('nv-mobile-open');if(burger)burger.setAttribute('aria-expanded','true');if(panel)panel.setAttribute('aria-hidden','false');}
function closePanel(){document.body.classList.remove('nv-mobile-open');if(burger)burger.setAttribute('aria-expanded','false');if(panel)panel.setAttribute('aria-hidden','true');}
if(burger)burger.addEventListener('click',openPanel);if(closeBtn)closeBtn.addEventListener('click',closePanel);if(scrim)scrim.addEventListener('click',closePanel);document.addEventListener('keydown',function(e){if(e.key==='Escape')closePanel();});var accs=document.querySelectorAll('[data-acc]');accs.forEach(function(acc){var btn=acc.querySelector('.nv-acc-btn');btn.addEventListener('click',function(){var isOpen=acc.classList.toggle('is-open');btn.setAttribute('aria-expanded',isOpen?'true':'false');});});var ann=document.getElementById('nvAnn');var annClose=document.getElementById('nvAnnClose');var ANN_KEY='phr_ann_lexi_hr_v1';if(ann){try{if(sessionStorage.getItem(ANN_KEY)==='1')ann.classList.add('is-dismissed');}catch(e){}
if(annClose)annClose.addEventListener('click',function(){ann.classList.add('is-dismissed');try{sessionStorage.setItem(ANN_KEY,'1');}catch(e){}});}}());

/* payroll - generic tab switcher, used by both the Regional Expertise
   (country) tabs and the Who The Service Is For (industry) tabs. Each
   .po-tabs-wrap is wired independently so the two sections don't affect
   each other. */
(function(){
  var wraps = document.querySelectorAll('.po-tabs-wrap');
  if(!wraps.length) return; // guard: absent on non-payroll pages

  wraps.forEach(function(wrap){
    var tabs = wrap.querySelectorAll(':scope > .po-tabs > .po-tab');
    var panels = wrap.querySelectorAll(':scope > .po-tab-panel');
    if(!tabs.length || !panels.length) return;

    function activate(name){
      tabs.forEach(function(t){ t.classList.toggle('active', t.getAttribute('data-tab') === name); t.setAttribute('aria-selected', t.getAttribute('data-tab') === name ? 'true' : 'false'); });
      panels.forEach(function(p){
        var isMatch = p.getAttribute('data-panel') === name;
        p.classList.toggle('active', isMatch);
        if(isMatch) p.removeAttribute('hidden'); else p.setAttribute('hidden', '');
      });
    }

    tabs.forEach(function(tab){
      tab.addEventListener('click', function(){ activate(tab.getAttribute('data-tab')); });
    });
  });
}());
