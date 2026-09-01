/* ═══════════════════════════════════════════════════════════════════
   navbar toggle behavior, copied verbatim from ph-lander/js/ph-lander.js.
   Not yet part of the shared phrhome.js upstream, so every page that
   embeds the nv- nav markup currently carries its own copy (see
   customer-page/script.js, ph-lander/js/ph-lander.js,
   solutions/biometric-attendance-access-control/js/tracking.js).
   Self-guarded (no-ops if #nvBar/#nvMenu are absent) — do not modify.
   ═══════════════════════════════════════════════════════════════════ */

/* navbar - new JS additions */
(function(){var bar=document.getElementById('nvBar');var menu=document.getElementById('nvMenu');if(!bar||!menu)return;var onScroll=function(){if(window.scrollY>8)bar.classList.add('is-scrolled');else bar.classList.remove('is-scrolled');};window.addEventListener('scroll',onScroll,{passive:true});onScroll();var items=menu.querySelectorAll('[data-nv="dropdown"]');var openTimer,closeTimer,current=null;function open(item){clearTimeout(closeTimer);if(current&&current!==item)close(current,true);item.classList.add('is-open');var btn=item.querySelector('.nv-link');if(btn)btn.setAttribute('aria-expanded','true');current=item;}
function close(item,immediate){item=item||current;if(!item)return;item.classList.remove('is-open');var btn=item.querySelector('.nv-link');if(btn)btn.setAttribute('aria-expanded','false');if(current===item)current=null;}
items.forEach(function(item){var btn=item.querySelector('.nv-link');item.addEventListener('mouseenter',function(){clearTimeout(closeTimer);openTimer=setTimeout(function(){open(item);},60);});item.addEventListener('mouseleave',function(){clearTimeout(openTimer);closeTimer=setTimeout(function(){close(item,false);},140);});btn.addEventListener('click',function(e){e.preventDefault();if(item.classList.contains('is-open'))close(item,true);else open(item);});btn.addEventListener('keydown',function(e){if(e.key==='Escape'){close(item,true);btn.focus();}});});document.addEventListener('click',function(e){if(current&&!current.contains(e.target))close(current,true);});document.addEventListener('keydown',function(e){if(e.key==='Escape'&&current)close(current,true);});var burger=document.getElementById('nvBurger');var panel=document.getElementById('nvPanel');var scrim=document.getElementById('nvScrim');var closeBtn=document.getElementById('nvClose');function openPanel(){document.body.classList.add('nv-mobile-open');if(burger)burger.setAttribute('aria-expanded','true');if(panel)panel.setAttribute('aria-hidden','false');}
function closePanel(){document.body.classList.remove('nv-mobile-open');if(burger)burger.setAttribute('aria-expanded','false');if(panel)panel.setAttribute('aria-hidden','true');}
if(burger)burger.addEventListener('click',openPanel);if(closeBtn)closeBtn.addEventListener('click',closePanel);if(scrim)scrim.addEventListener('click',closePanel);document.addEventListener('keydown',function(e){if(e.key==='Escape')closePanel();});var accs=document.querySelectorAll('[data-acc]');accs.forEach(function(acc){var btn=acc.querySelector('.nv-acc-btn');btn.addEventListener('click',function(){var isOpen=acc.classList.toggle('is-open');btn.setAttribute('aria-expanded',isOpen?'true':'false');});});var ann=document.getElementById('nvAnn');var annClose=document.getElementById('nvAnnClose');var ANN_KEY='phr_ann_lexi_hr_v1';if(ann){try{if(sessionStorage.getItem(ANN_KEY)==='1')ann.classList.add('is-dismissed');}catch(e){}
if(annClose)annClose.addEventListener('click',function(){ann.classList.add('is-dismissed');try{sessionStorage.setItem(ANN_KEY,'1');}catch(e){}});}}());
/* capability-details.js
   Data + behaviour for capability-details.html.
   Renders the sidebar and main content from MODULES, then wires:
   accordion groups, click-to-scroll, scroll-spy, deep-linking, and the
   mobile drawer. Requires phrhome.js loaded first (shares no state with it —
   .mobile-nav-link/.mobile-sub/.hamburger classes are reused for their CSS
   only; phrhome.js binds those by element id, not by class, so there's no
   collision with the ids used below). */

var MODULES = [
  {
    module: "HR", accent: "var(--cd-hr)",
    items: [
      {
        id: "standard-information-fields", title: "Standard Information Fields", type: "table",
        intro: "The default set of fields captured on every employee master record, available from day one before any custom fields are added.",
        data: {
          columns: ["Field", "Description"],
          rows: [
            ["Full legal name", "Employee's full name exactly as it appears on their statutory ID. <em>Example row — ready to use.</em>"],
            ["[To be completed]", "[To be completed]"],
            ["[To be completed]", "[To be completed]"],
            ["[To be completed]", "[To be completed]"]
          ]
        }
      },
      {
        id: "standard-info-validations", title: "Standard information validations", type: "table",
        intro: "Automated checks applied to employee-submitted information and profile changes before they're accepted into the master record.",
        data: {
          columns: ["Validation", "What it checks"],
          rows: [
            ["National ID format", "Confirms the ID number matches the expected format and checksum for the employee's country. <em>Example row — ready to use.</em>"],
            ["[To be completed]", "[To be completed]"],
            ["[To be completed]", "[To be completed]"],
            ["[To be completed]", "[To be completed]"]
          ]
        }
      },
      {
        id: "lifecycle-types", title: "Employee lifecycle types", type: "list",
        intro: "The stages and event types available for tracking an employee's journey from hire through to exit.",
        data: [
          { name: "Confirmation", desc: "Conversion from probation to permanent status. Example item — ready to use." },
          { name: "[To be completed]", desc: "[To be completed]" },
          { name: "[To be completed]", desc: "[To be completed]" },
          { name: "[To be completed]", desc: "[To be completed]" }
        ]
      },
      {
        id: "lifecycle-validations", title: "Lifecycle validations", type: "list",
        intro: "Rules that run automatically at each lifecycle event to keep transfers, promotions, and exits consistent and audit-ready.",
        data: [
          { name: "Effective-date sequencing", desc: "Blocks a new lifecycle event from being back-dated before an already-processed one. Example item — ready to use." },
          { name: "[To be completed]", desc: "[To be completed]" },
          { name: "[To be completed]", desc: "[To be completed]" },
          { name: "[To be completed]", desc: "[To be completed]" }
        ]
      },
      {
        id: "hr-statutory-letters", title: "HR & statutory letter templates", type: "table",
        intro: "Pre-built letter templates covering the common HR and statutory documents employees and managers need generated on demand.",
        data: {
          columns: ["Template", "When used"],
          rows: [
            ["Offer letter", "Sent to a candidate confirming a job offer and its terms. <em>Example row — ready to use.</em>"],
            ["[To be completed]", "[To be completed]"],
            ["[To be completed]", "[To be completed]"],
            ["[To be completed]", "[To be completed]"]
          ]
        }
      },
      {
        id: "standard-email-alerts", title: "Standard email alerts", type: "list",
        intro: "Automated email notifications sent to employees and managers as key HR and approval events happen.",
        data: [
          { name: "Leave request submitted", desc: "Notifies the approving manager when an employee submits a leave request. Example item — ready to use." },
          { name: "[To be completed]", desc: "[To be completed]" },
          { name: "[To be completed]", desc: "[To be completed]" },
          { name: "[To be completed]", desc: "[To be completed]" }
        ]
      },
      {
        id: "audit-trail", title: "Audit trail of system activity", type: "prose",
        intro: "A complete, tamper-evident record of every data import, edit, override, and user action across the system — capturing who changed what, when, and from where.",
        data: {
          prose: ["Every change made in the system is logged automatically, with no way for a user to edit or delete the entry afterwards. Entries are kept for compliance, security, and dispute resolution."],
          list: [
            "[To be completed] — exactly what's captured, e.g. field-level before/after values",
            "[To be completed] — retention period",
            "[To be completed] — who can access the audit log",
            "[To be completed] — export / reporting options"
          ]
        }
      },
      {
        id: "api-external-systems", title: "External systems via API", type: "prose",
        intro: "Structured API endpoints that let external systems, devices, and third-party applications securely push data into and pull data out of the platform.",
        data: { prose: ["[To be completed] — describe supported protocols, authentication method, rate limits, and available endpoint categories (employee data, attendance, payroll, etc.)."] }
      }
    ]
  },
  {
    module: "Time", accent: "var(--cd-time)",
    items: [
      {
        id: "standard-overtime-calculations", title: "Standard overtime calculations", type: "list",
        intro: "Overtime formulas available out of the box for converting hours worked beyond a scheduled shift into paid overtime.",
        data: [
          { name: "1.5x weekday rate", desc: "Applies to approved hours worked beyond the scheduled shift on a normal working day. Example item — ready to use." },
          { name: "[To be completed]", desc: "[To be completed]" },
          { name: "[To be completed]", desc: "[To be completed]" },
          { name: "[To be completed]", desc: "[To be completed]" }
        ]
      },
      {
        id: "statutory-leaves", title: "Statutory leaves", type: "list",
        intro: "The statutory leave types pre-configured for common jurisdictions, ready to enable and adjust to local regulation.",
        data: [
          { name: "Annual leave", desc: "Statutory minimum paid annual leave entitlement. Example item — ready to use." },
          { name: "[To be completed]", desc: "[To be completed]" },
          { name: "[To be completed]", desc: "[To be completed]" },
          { name: "[To be completed]", desc: "[To be completed]" }
        ]
      },
      {
        id: "org-leave-types", title: "Organisation leave types", type: "list",
        intro: "Additional, non-statutory leave types an organisation can configure on top of statutory leave.",
        data: [
          { name: "Compassionate leave", desc: "Paid leave granted following a bereavement or family emergency. Example item — ready to use." },
          { name: "[To be completed]", desc: "[To be completed]" },
          { name: "[To be completed]", desc: "[To be completed]" },
          { name: "[To be completed]", desc: "[To be completed]" }
        ]
      },
      {
        id: "standard-leave-validations", title: "Standard leave validations", type: "list",
        intro: "Automated checks applied to every leave request before it reaches an approver.",
        data: [
          { name: "Balance check", desc: "Blocks a request that exceeds the employee's remaining leave balance. Example item — ready to use." },
          { name: "[To be completed]", desc: "[To be completed]" },
          { name: "[To be completed]", desc: "[To be completed]" },
          { name: "[To be completed]", desc: "[To be completed]" }
        ]
      },
      {
        id: "geo-fencing", title: "Geo-fencing & map provider", type: "prose",
        intro: "Restricts clock-in to one or more approved location zones, so employees can only check in when they're physically inside a designated radius.",
        data: { prose: ["[To be completed] — confirm supported map provider(s), maximum number of zones per site, radius configuration, and behaviour when a device reports no GPS signal."] }
      }
    ]
  },
  {
    module: "Pay", accent: "var(--cd-pay)",
    items: [
      {
        id: "benefit-types", title: "Benefit types", type: "list",
        intro: "Non-cash benefits, allowances, and entitlements that can be administered per employee, each with its own eligibility rules.",
        data: [
          { name: "Meal allowance", desc: "Recurring allowance paid alongside salary for eligible employees. Example item — ready to use." },
          { name: "[To be completed]", desc: "[To be completed]" },
          { name: "[To be completed]", desc: "[To be completed]" },
          { name: "[To be completed]", desc: "[To be completed]" }
        ]
      },
      {
        id: "standard-integrations", title: "Standard payroll integrations", type: "list",
        intro: "Pre-built integrations for moving payroll data to and from the systems most organisations already run.",
        data: [
          { name: "Bank file export", desc: "Generates a bank-formatted payment file for salary disbursement. Example item — ready to use." },
          { name: "[To be completed]", desc: "[To be completed]" },
          { name: "[To be completed]", desc: "[To be completed]" },
          { name: "[To be completed]", desc: "[To be completed]" }
        ]
      }
    ]
  },
  {
    module: "Insights", accent: "var(--cd-insights)",
    items: [
      {
        id: "standard-reports", title: "Standard reports library", type: "table",
        intro: "Pre-built reports spanning every module, available on demand so HR can pull common data views without building them from scratch.",
        data: {
          columns: ["Report", "Module", "What it shows"],
          rows: [
            ["Headcount summary", "HR", "Current headcount broken down by department, location, and employment type. <em>Example row — ready to use.</em>"],
            ["[To be completed]", "[To be completed]", "[To be completed]"],
            ["[To be completed]", "[To be completed]", "[To be completed]"],
            ["[To be completed]", "[To be completed]", "[To be completed]"]
          ]
        }
      },
      {
        id: "standard-dashboards", title: "Standard dashboards", type: "table",
        intro: "Pre-built dashboards that connect metrics across modules and update automatically as the underlying data changes.",
        data: {
          columns: ["Dashboard", "What it shows"],
          rows: [
            ["Workforce overview", "Headcount, attrition, and leave trends across the organisation in one view. <em>Example row — ready to use.</em>"],
            ["[To be completed]", "[To be completed]"],
            ["[To be completed]", "[To be completed]"],
            ["[To be completed]", "[To be completed]"]
          ]
        }
      }
    ]
  }
];

(function () {
  "use strict";

  var sidebarNav = document.getElementById("cdSidebarNav");
  var contentEl = document.getElementById("cdContent");
  if (!sidebarNav || !contentEl) return;

  var navLinks = [];   // { id, linkEl, groupTriggerEl, groupBodyEl }
  var sections = [];   // { id, sectionEl }

  /* ---------- render sidebar ---------- */
  MODULES.forEach(function (mod, mi) {
    var group = document.createElement("div");
    group.className = "cd-group";

    var trigger = document.createElement("button");
    trigger.type = "button";
    trigger.className = "mobile-nav-link";
    trigger.setAttribute("aria-expanded", "false");
    trigger.innerHTML = "<span>" + mod.module + "</span>" +
      "<svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M6 9l6 6 6-6\"/></svg>";

    var body = document.createElement("div");
    body.className = "mobile-sub";

    var list = document.createElement("ul");
    list.className = "cd-group-list";
    list.style.listStyle = "none";

    mod.items.forEach(function (item) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = "#" + item.id;
      a.className = "cd-nav-link";
      a.textContent = item.title;
      a.dataset.target = item.id;
      li.appendChild(a);
      list.appendChild(li);
      navLinks.push({ id: item.id, linkEl: a, groupTriggerEl: trigger, groupBodyEl: body });
    });

    body.appendChild(list);
    group.appendChild(trigger);
    group.appendChild(body);
    sidebarNav.appendChild(group);

    trigger.addEventListener("click", function () {
      toggleGroup(trigger, body);
    });
  });

  /* ---------- render main content ---------- */
  MODULES.forEach(function (mod) {
    mod.items.forEach(function (item) {
      var section = document.createElement("section");
      section.className = "cd-section";
      section.id = item.id;

      var eyebrow = document.createElement("span");
      eyebrow.className = "phr-section__label cd-eyebrow";
      eyebrow.style.setProperty("--cd-accent", mod.accent);
      eyebrow.textContent = mod.module;

      var h2 = document.createElement("h2");
      h2.className = "phr-section__title cd-title";
      h2.textContent = item.title;

      var intro = document.createElement("p");
      intro.className = "phr-section__sub cd-intro";
      intro.textContent = item.intro;

      section.appendChild(eyebrow);
      section.appendChild(h2);
      section.appendChild(intro);
      section.appendChild(renderBody(item));

      contentEl.appendChild(section);
      sections.push({ id: item.id, sectionEl: section });
    });
  });

  function renderBody(item) {
    if (item.type === "table") {
      var wrap = document.createElement("div");
      wrap.className = "cd-table-wrap";
      var table = document.createElement("table");
      table.className = "cd-table";

      var thead = document.createElement("thead");
      var trh = document.createElement("tr");
      item.data.columns.forEach(function (col) {
        var th = document.createElement("th");
        th.textContent = col;
        trh.appendChild(th);
      });
      thead.appendChild(trh);

      var tbody = document.createElement("tbody");
      item.data.rows.forEach(function (row) {
        var tr = document.createElement("tr");
        row.forEach(function (cell) {
          var td = document.createElement("td");
          td.innerHTML = cell;
          tr.appendChild(td);
        });
        tbody.appendChild(tr);
      });

      table.appendChild(thead);
      table.appendChild(tbody);
      wrap.appendChild(table);
      return wrap;
    }

    if (item.type === "list") {
      var ul = document.createElement("ul");
      ul.className = "cd-list";
      item.data.forEach(function (entry) {
        var li = document.createElement("li");
        var name = document.createElement("span");
        name.className = "cd-list-name";
        name.textContent = entry.name;
        var desc = document.createElement("span");
        desc.className = "cd-list-desc";
        desc.textContent = entry.desc;
        li.appendChild(name);
        li.appendChild(desc);
        ul.appendChild(li);
      });
      return ul;
    }

    /* prose */
    var wrapDiv = document.createElement("div");
    wrapDiv.className = "cd-prose";
    item.data.prose.forEach(function (para) {
      var p = document.createElement("p");
      p.textContent = para;
      wrapDiv.appendChild(p);
    });
    if (item.data.list) {
      var pl = document.createElement("ul");
      item.data.list.forEach(function (line) {
        var li = document.createElement("li");
        li.textContent = line;
        pl.appendChild(li);
      });
      wrapDiv.appendChild(pl);
    }
    return wrapDiv;
  }

  /* ---------- accordion open/close ---------- */
  function toggleGroup(trigger, body) {
    var isOpen = trigger.classList.contains("open");
    if (isOpen) {
      trigger.classList.remove("open");
      body.classList.remove("open");
      trigger.setAttribute("aria-expanded", "false");
    } else {
      trigger.classList.add("open");
      body.classList.add("open");
      trigger.setAttribute("aria-expanded", "true");
    }
  }

  function openGroup(trigger, body) {
    if (trigger.classList.contains("open")) return;
    trigger.classList.add("open");
    body.classList.add("open");
    trigger.setAttribute("aria-expanded", "true");
  }

  /* ---------- active link + scroll ---------- */
  var topbar = document.getElementById("cdTopbar");
  var currentActive = null;

  /* Suppressed until the initial scroll position (hash-driven or not) has
     settled, so the IntersectionObserver's first (pre-scroll) notification
     can't clobber the deep-linked active item before the page has moved. */
  var programmaticScroll = true;

  /* #nvBar (the sitewide navbar) isn't actually sticky in practice — see
     the note in capability-details.css — so it's not part of this offset;
     only this page's own sticky topbar (mobile) needs to be cleared. */
  function scrollOffset() {
    return (topbar && topbar.offsetHeight ? topbar.offsetHeight : 0) + 24;
  }

  /* Polls scroll position (rather than guessing a timeout) so scroll-spy
     stays suppressed for exactly as long as the browser is still moving —
     smooth scrolls and clamped/instant jumps near the bottom of the page
     both settle at unpredictable times. */
  function waitForScrollSettle(targetTop) {
    var lastY = window.scrollY;
    var framesLeft = 180; /* ~3s safety cap at 60fps */
    function check() {
      var y = window.scrollY;
      var reached = Math.abs(y - targetTop) < 2;
      var stable = Math.abs(y - lastY) < 0.5;
      lastY = y;
      framesLeft -= 1;
      if ((reached && stable) || framesLeft <= 0) {
        programmaticScroll = false;
        return;
      }
      requestAnimationFrame(check);
    }
    requestAnimationFrame(check);
  }

  function setActive(id, expand) {
    if (id === currentActive) {
      if (expand) {
        var found = navLinks.filter(function (n) { return n.id === id; })[0];
        if (found) openGroup(found.groupTriggerEl, found.groupBodyEl);
      }
      return;
    }
    currentActive = id;
    navLinks.forEach(function (n) {
      var active = n.id === id;
      n.linkEl.classList.toggle("cd-nav-link--active", active);
      if (active && expand) openGroup(n.groupTriggerEl, n.groupBodyEl);
    });
  }

  function scrollToSection(id, instant) {
    var target = document.getElementById(id);
    if (!target) return;
    var top = target.getBoundingClientRect().top + window.pageYOffset - scrollOffset();
    var maxTop = document.documentElement.scrollHeight - window.innerHeight;
    top = Math.max(0, Math.min(top, maxTop));
    programmaticScroll = true;
    window.scrollTo({ top: top, behavior: instant ? "auto" : "smooth" });
    waitForScrollSettle(top);
  }

  navLinks.forEach(function (n) {
    n.linkEl.addEventListener("click", function (e) {
      e.preventDefault();
      history.replaceState(null, "", "#" + n.id);
      setActive(n.id, true);
      scrollToSection(n.id);
      closeDrawer();
    });
  });

  /* ---------- scroll-spy ---------- */
  if ("IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      if (programmaticScroll) return;
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActive(entry.target.id, true);
      });
    }, { rootMargin: "-15% 0px -70% 0px", threshold: 0 });

    sections.forEach(function (s) { spy.observe(s.sectionEl); });
  }

  /* The moment the visitor drives the page themselves, hand control back to
     scroll-spy immediately rather than waiting out a settle poll for a
     programmatic scroll they've since interrupted. */
  ["wheel", "touchstart", "keydown"].forEach(function (evt) {
    window.addEventListener(evt, function () { programmaticScroll = false; }, { passive: true });
  });

  /* ---------- deep link on load ---------- */
  function initFromHash() {
    var hash = decodeURIComponent((location.hash || "").replace("#", ""));
    if (hash && document.getElementById(hash)) {
      setActive(hash, true);
      requestAnimationFrame(function () { scrollToSection(hash, true); });
    } else {
      if (sections.length) setActive(sections[0].id, true);
      waitForScrollSettle(window.scrollY);
    }
  }
  initFromHash();

  /* ---------- mobile drawer ---------- */
  var hamburger = document.getElementById("cdHamburger");
  var sidebar = document.getElementById("cdSidebar");
  var overlay = document.getElementById("cdOverlay");

  function openDrawer() {
    hamburger.classList.add("open");
    sidebar.classList.add("cd-sidebar--open");
    overlay.classList.add("cd-overlay--visible");
    document.body.style.overflow = "hidden";
  }
  function closeDrawer() {
    if (!hamburger) return;
    hamburger.classList.remove("open");
    sidebar.classList.remove("cd-sidebar--open");
    overlay.classList.remove("cd-overlay--visible");
    document.body.style.overflow = "";
  }
  if (hamburger && sidebar && overlay) {
    hamburger.addEventListener("click", function () {
      if (sidebar.classList.contains("cd-sidebar--open")) closeDrawer();
      else openDrawer();
    });
    overlay.addEventListener("click", closeDrawer);
    window.addEventListener("resize", function () {
      if (window.innerWidth > 840) closeDrawer();
    });
  }
})();
