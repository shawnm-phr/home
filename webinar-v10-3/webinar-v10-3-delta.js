/* ==========================================================================
   webinar-v10-3-delta.js
   Page-specific behavior for the PeoplesHR v10.3 Webinar registration page.
   Requires: phrhome.js loaded first.

   Registration modal -- same .hs-modal-overlay/.hs-modal shell used
   sitewide for HubSpot-embedded lead forms (see phrhome.css), wired to
   this page's own form instance following the same pattern as
   pricing/js/pricing.js's "Contact Us" modal. The embed script and the
   form itself are both built lazily on first open, not on page load.
   ========================================================================== */
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
      /* HUBSPOT FORM EMBED GOES HERE -- replace portalId/formId below with
         the real values for this webinar's registration form. */
      hbspt.forms.create({
        portalId: 'REPLACE_WITH_PORTAL_ID',
        formId:   'REPLACE_WITH_FORM_ID',
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
