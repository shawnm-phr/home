/* ==========================================================================
   webinar-v10-3-delta.js
   Page-specific behavior for the PeoplesHR v10.3 Webinar registration page.
   Requires: phrhome.js loaded first.

   Registration form is embedded directly in the hero (.wreg-hero-form),
   built on page load rather than lazily inside a modal.
   ========================================================================== */

/* hero registration form */
(function () {
  'use strict';

  var formContainer = document.getElementById('wregFormContainer');
  var loader        = document.getElementById('wregFormLoader');
  if (!formContainer) return;

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

  /* Fallback for cases where onFormSubmitted doesn't fire directly
     (matches the pattern already used for the demo-gate form in phrhome.js) */
  window.addEventListener('message', function (e) {
    if (!e.data) return;
    if (e.data.type === 'hsFormCallback' && e.data.eventName === 'onFormSubmitted') {
      showConfirmation();
    }
  });
}());
