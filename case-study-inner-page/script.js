/* ==========================================================================
   CASE STUDY INNER PAGE — scroll-spy for sidebar TOC
   ========================================================================== */
(function () {
  'use strict';

  var tocItems = document.querySelectorAll('.csi-toc-item');
  var sections = Array.from(document.querySelectorAll('.csi-section[id]'));

  if (!tocItems.length || !sections.length) return;

  var OFFSET = 110;

  function getActiveId() {
    var scrollY = window.scrollY || window.pageYOffset;
    var active = sections[0].id;
    for (var i = 0; i < sections.length; i++) {
      var top = sections[i].getBoundingClientRect().top + scrollY;
      if (top - OFFSET <= scrollY) {
        active = sections[i].id;
      }
    }
    return active;
  }

  function updateToc() {
    var activeId = getActiveId();
    tocItems.forEach(function (item) {
      var link = item.querySelector('.csi-toc-link');
      if (!link) return;
      var match = link.getAttribute('href') === '#' + activeId;
      item.classList.toggle('csi-active', match);
    });
  }

  window.addEventListener('scroll', updateToc, { passive: true });
  updateToc();
}());
