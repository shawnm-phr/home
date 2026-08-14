/* ═══════════════════════════════════════════════════════════════════
   interactive-demos-delta.js — full behavior for the Interactive Demos
   page (/interactive-demos/)

   Loaded AFTER the shared ../phrhome.js. This page's demo-gallery
   logic (tab switching, LAZY_SECTIONS content, the Supademo gate
   flow, the bottom contact form, the testimonial carousel) used to
   live in phrhome.js, but nothing else on the site actually calls
   any of it — home-page/index.html has its own independent
   testimonial carousel in script.js (#testimonial-track, no onclick
   wiring to tGoTo/tSlide), and the biometric solutions page has no
   testimonial markup at all. Only this page's dots/arrows call
   tGoTo()/tSlide() via onclick, so it's all been moved here.
   ═══════════════════════════════════════════════════════════════════ */

var tIndex = 0, tTotal = 4;

function tGoTo(n) {
  tIndex = n;
  var track = document.getElementById('t-track');
  if (track) track.style.transform = 'translateX(-' + (tIndex * 100) + '%)';
  document.querySelectorAll('.t-dot').forEach(function(d, i) { d.classList.toggle('active', i === tIndex); });
}
function tSlide(dir) { tGoTo((tIndex + dir + tTotal) % tTotal); }

document.addEventListener('DOMContentLoaded', function() {
  setInterval(function() { tSlide(1); }, 6000);
});

const LAZY_SECTIONS = {
  pay:        `      <div class="dg-cat-header">
        <div class="dg-cat-header-left">
          <h2 class="dg-section-heading">Accurate payroll. Zero compliance risk.</h2>
          <p class="dg-cat-desc">From timesheets to final payslips ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â€šÂ¬Ã‚Â automate your entire payroll cycle with built-in statutory compliance for Sri Lanka and beyond.</p>
        </div>
        <div class="dg-cat-count-box">
          <div class="dg-cat-count-num">3</div>
          <div class="dg-cat-count-lbl">Demos available</div>
        </div>
      </div>
      <div class="dg-grid">
        <div class="dg-card" onclick="gatedDemo('REPLACE_PAY_RUN_ID')">
          <div class="dg-thumb dg-thumb-timepay">
            <div class="dg-thumb-ui">
              <div class="dg-ui-bar"></div>
              <div class="dg-ui-row"><div class="dg-ui-pill"></div><div class="dg-ui-pill w55"></div></div>
              <div class="dg-ui-bar s"></div>
            </div>
            <div class="dg-thumb-overlay"><div class="dg-play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>
            
          </div>
          <div class="dg-card-body">
            <div class="dg-card-tag">Payroll</div>
            <div class="dg-card-title">Payroll Processing &amp; Monthly Run</div>
            <div class="dg-card-desc">One-click payroll runs with automatic EPF/ETF, PAYE calculations, and bank file generation for all major Sri Lankan banks.</div>
            <div class="dg-card-footer">
              <button class="dg-card-cta">Watch Demo <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            </div>
          </div>
        </div>
        <div class="dg-card" onclick="gatedDemo('REPLACE_PAY_LEAVE_ID')">
          <div class="dg-thumb dg-thumb-timepay">
            <div class="dg-thumb-ui">
              <div class="dg-ui-bar"></div>
              <div class="dg-ui-row"><div class="dg-ui-pill"></div><div class="dg-ui-pill w55"></div></div>
              <div class="dg-ui-bar s"></div>
            </div>
            <div class="dg-thumb-overlay"><div class="dg-play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>
            
          </div>
          <div class="dg-card-body">
            <div class="dg-card-tag">Leave</div>
            <div class="dg-card-title">Leave &amp; Absence Management</div>
            <div class="dg-card-desc">Configure leave policies, approval workflows, accrual rules, and carry-forward limits ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â€šÂ¬Ã‚Â all without IT support.</div>
            <div class="dg-card-footer">
              <button class="dg-card-cta">Watch Demo <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            </div>
          </div>
        </div>
        <div class="dg-card" onclick="gatedDemo('REPLACE_PAY_EXPENSE_ID')">
          <div class="dg-thumb dg-thumb-timepay">
            <div class="dg-thumb-ui">
              <div class="dg-ui-bar"></div>
              <div class="dg-ui-row"><div class="dg-ui-pill"></div><div class="dg-ui-pill w55"></div></div>
              <div class="dg-ui-bar s"></div>
            </div>
            <div class="dg-thumb-overlay"><div class="dg-play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>
            
          </div>
          <div class="dg-card-body">
            <div class="dg-card-tag">Expenses</div>
            <div class="dg-card-title">Expense Claims &amp; Reimbursement</div>
            <div class="dg-card-desc">Mobile receipt capture, multi-level approvals, and direct payroll integration for seamless reimbursements.</div>
            <div class="dg-card-footer">
              <button class="dg-card-cta">Watch Demo <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            </div>
          </div>
        </div>
      </div>`,
  time:       `      <div class="dg-cat-header">
        <div class="dg-cat-header-left">
          <h2 class="dg-section-heading">Real-time visibility across every hour worked.</h2>
          <p class="dg-cat-desc">Biometric integrations, shift scheduling, overtime controls, and live attendance dashboards across every site and shift pattern.</p>
        </div>
        <div class="dg-cat-count-box">
          <div class="dg-cat-count-num">2</div>
          <div class="dg-cat-count-lbl">Demos available</div>
        </div>
      </div>
      <div class="dg-grid">
        <div class="dg-card" onclick="gatedDemo('cmov2pgrk05pu9rr9ct8hjufa')">
          <div class="dg-thumb dg-thumb-timepay">
            <img src="https://peopleshr.com/wp-content/uploads/2026/05/Manage_Leave_Applications_Approvals.webp" alt="Manage Leave Applications & Approvals" class="dg-thumb-image">
            <div class="dg-thumb-overlay"><div class="dg-play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>
            <div class="dg-thumb-new"><span class="new-tag">NEW</span></div>
          </div>
          <div class="dg-card-body">
            <div class="dg-card-tag">Leave</div>
            <div class="dg-card-title">Manage Leave Applications &amp; Approvals</div>
            <div class="dg-card-desc">Request leave, approve pending applications, and review leave analytics all in one streamlined workflow.</div>
            <div class="dg-card-footer">
              <button class="dg-card-cta">Watch Demo <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            </div>
          </div>
        </div>
        <div class="dg-card" onclick="gatedDemo('cmovhp1dj13hj9rr9on8k7xga')">
          <div class="dg-thumb dg-thumb-timepay">
            <img src="https://peopleshr.com/wp-content/uploads/2026/05/Configure_Employee_Shift_Schedules_Roster_Groups.webp" alt="Configure Employee Shift Schedules & Roster Groups" class="dg-thumb-image">
            <div class="dg-thumb-overlay"><div class="dg-play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>
            
          </div>
          <div class="dg-card-body">
            <div class="dg-card-tag">Attendance</div>
            <div class="dg-card-title">Configure Employee Shift Schedules &amp; Roster Groups</div>
            <div class="dg-card-desc">Assign employees to schedules by setting up roster groups, configuring shift parameters with breaks and overtime rules.</div>
            <div class="dg-card-footer">
              <button class="dg-card-cta">Watch Demo <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            </div>
          </div>
        </div>
      </div>`,
  talent:     `      <div class="dg-cat-header">
        <div class="dg-cat-header-left">
          <h2 class="dg-section-heading">Hire faster. Develop better. Retain longer.</h2>
          <p class="dg-cat-desc">From the first application to succession planning, build a high-performance talent engine that scales with your business.</p>
        </div>
        <div class="dg-cat-count-box">
          <div class="dg-cat-count-num">6</div>
          <div class="dg-cat-count-lbl">Demos available</div>
        </div>
      </div>

      <div class="dg-subcat">
        <div class="dg-subcat-header">
          <span class="dg-subcat-label">Hiring Manager</span>
          <span class="dg-subcat-pill">4 demos</span>
        </div>
        <div class="dg-grid">
        <div class="dg-card" onclick="gatedDemo('cmkgfw53z0001yg0ihojce4xw')">
          <div class="dg-thumb dg-thumb-talent">
            <img src="https://peopleshr.com/wp-content/uploads/2026/05/Job_Requisition.webp" alt="Job Requisitions" class="dg-thumb-image">
            <div class="dg-thumb-overlay"><div class="dg-play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>
            
          </div>
          <div class="dg-card-body">
            <div class="dg-card-tag">Recruitment</div>
            <div class="dg-card-title">Job Requisitions</div>
            <div class="dg-card-desc">Create and manage job requisitions, define role requirements, and route approval requests before opening a vacancy.</div>
            <div class="dg-card-footer">
              <button class="dg-card-cta">Watch Demo <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            </div>
          </div>
        </div>
        <div class="dg-card" onclick="gatedDemo('cmk0rq2ut1l9sgmn87oxiogg8')">
          <div class="dg-thumb dg-thumb-talent">
            <img src="https://peopleshr.com/wp-content/uploads/2026/05/Job_Advertisements.webp" alt="Job Advertisements" class="dg-thumb-image">
            <div class="dg-thumb-overlay"><div class="dg-play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>
            
          </div>
          <div class="dg-card-body">
            <div class="dg-card-tag">Recruitment</div>
            <div class="dg-card-title">Job Advertisements</div>
            <div class="dg-card-desc">Publish open roles across multiple job boards and channels directly from PeoplesHR with a few clicks.</div>
            <div class="dg-card-footer">
              <button class="dg-card-cta">Watch Demo <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            </div>
          </div>
        </div>
        <div class="dg-card" onclick="gatedDemo('cmk12fd6t1sr9gmn80bzrju5e')">
          <div class="dg-thumb dg-thumb-talent">
            <img src="https://peopleshr.com/wp-content/uploads/2026/05/CV_Ranking.webp" alt="CV Ranking" class="dg-thumb-image">
            <div class="dg-thumb-overlay"><div class="dg-play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>
            
          </div>
          <div class="dg-card-body">
            <div class="dg-card-tag">Recruitment</div>
            <div class="dg-card-title">CV Ranking</div>
            <div class="dg-card-desc">Experience the candidate application journey first-hand, from discovering a role to submitting a complete application.</div>
            <div class="dg-card-footer">
              <button class="dg-card-cta">Watch Demo <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            </div>
          </div>
        </div>
        </div>

      <div class="dg-subcat">
        <div class="dg-subcat-header">
          <span class="dg-subcat-label">Candidate</span>
          <span class="dg-subcat-pill">2 demos</span>
        </div>
        <div class="dg-grid">
        <div class="dg-card" onclick="gatedDemo('cmk2d4gcs325agmn8p2684u2s')">
          <div class="dg-thumb dg-thumb-talent">
            <img src="https://peopleshr.com/wp-content/uploads/2026/05/Manage_Job_Application.webp" alt="Manage Job Application" class="dg-thumb-image">
            <div class="dg-thumb-overlay"><div class="dg-play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>
            
          </div>
          <div class="dg-card-body">
            <div class="dg-card-tag">Recruitment</div>
            <div class="dg-card-title">Manage Job Application</div>
            <div class="dg-card-desc">See how candidates track, manage, and update their applications through the PeoplesHR candidate portal.</div>
            <div class="dg-card-footer">
              <button class="dg-card-cta">Watch Demo <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            </div>
          </div>
        </div>
        <div class="dg-card" onclick="gatedDemo('cmk0wamcb1n1dgmn8uxzyt7rg')">
          <div class="dg-thumb dg-thumb-talent">
            <img src="https://peopleshr.com/wp-content/uploads/2026/05/Candidate_Application.webp" alt="Candidate Application" class="dg-thumb-image">
            <div class="dg-thumb-overlay"><div class="dg-play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>
            
          </div>
          <div class="dg-card-body">
            <div class="dg-card-tag">Recruitment</div>
            <div class="dg-card-title">Candidate Application</div>
            <div class="dg-card-desc">Let AI score and rank candidates against your job criteria automatically so your team focuses on the best-fit applicants first.</div>
            <div class="dg-card-footer">
              <button class="dg-card-cta">Watch Demo <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            </div>
          </div>
        </div>
        </div>
      </div>`,
  engagement: `      <div class="dg-cat-header">
        <div class="dg-cat-header-left">
          <h2 class="dg-section-heading">Build a culture people don't want to leave.</h2>
          <p class="dg-cat-desc">Measure, understand, and act on employee sentiment in real time ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â€šÂ¬Ã‚Â so you can fix problems before they become attrition.</p>
        </div>
        <div class="dg-cat-count-box">
          <div class="dg-cat-count-num">3</div>
          <div class="dg-cat-count-lbl">Demos available</div>
        </div>
      </div>
      <div class="dg-grid">
        <div class="dg-card" onclick="gatedDemo('REPLACE_ENGAGEMENT_SURVEYS_ID')">
          <div class="dg-thumb dg-thumb-engage">
            <div class="dg-thumb-ui">
              <div class="dg-ui-bar"></div>
              <div class="dg-ui-row"><div class="dg-ui-pill"></div><div class="dg-ui-pill w55"></div></div>
              <div class="dg-ui-bar s"></div>
            </div>
            <div class="dg-thumb-overlay"><div class="dg-play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>
            
          </div>
          <div class="dg-card-body">
            <div class="dg-card-tag">Engagement</div>
            <div class="dg-card-title">Employee Surveys &amp; Pulse Checks</div>
            <div class="dg-card-desc">Deploy pulse surveys, eNPS, and custom questionnaires ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â€šÂ¬Ã‚Â then visualise sentiment trends in real-time dashboards.</div>
            <div class="dg-card-footer">
              <button class="dg-card-cta">Watch Demo <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            </div>
          </div>
        </div>
        <div class="dg-card" onclick="gatedDemo('REPLACE_ENGAGEMENT_RECOGNITION_ID')">
          <div class="dg-thumb dg-thumb-engage">
            <div class="dg-thumb-ui">
              <div class="dg-ui-bar"></div>
              <div class="dg-ui-row"><div class="dg-ui-pill"></div><div class="dg-ui-pill w55"></div></div>
              <div class="dg-ui-bar s"></div>
            </div>
            <div class="dg-thumb-overlay"><div class="dg-play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>
            <div class="dg-thumb-new"><span class="new-tag">NEW</span></div>
          </div>
          <div class="dg-card-body">
            <div class="dg-card-tag">Recognition</div>
            <div class="dg-card-title">Recognition &amp; Rewards Programme</div>
            <div class="dg-card-desc">Peer-to-peer shoutouts, manager nominations, milestone awards, and a points-based reward marketplace ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â€šÂ¬Ã‚Â all in-platform.</div>
            <div class="dg-card-footer">
              <button class="dg-card-cta">Watch Demo <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            </div>
          </div>
        </div>
        <div class="dg-card" onclick="gatedDemo('REPLACE_ENGAGEMENT_MANAGER_ID')">
          <div class="dg-thumb dg-thumb-engage">
            <div class="dg-thumb-ui">
              <div class="dg-ui-bar"></div>
              <div class="dg-ui-row"><div class="dg-ui-pill"></div><div class="dg-ui-pill w55"></div></div>
              <div class="dg-ui-bar s"></div>
            </div>
            <div class="dg-thumb-overlay"><div class="dg-play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>
            
          </div>
          <div class="dg-card-body">
            <div class="dg-card-tag">Manager Intelligence</div>
            <div class="dg-card-title">Manager Effectiveness Scores</div>
            <div class="dg-card-desc">Track team-level eNPS, 1:1 completion rates, and upward feedback scores to surface your best ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â€šÂ¬Ã‚Â and riskiest ÃƒÂ¢Ã¢â€šÂ¬Ã‚ÂÃƒÂ¢Ã¢â€šÂ¬Ã‚Â managers.</div>
            <div class="dg-card-footer">
              <button class="dg-card-cta">Watch Demo <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            </div>
          </div>
        </div>
      </div>`,
  insight:    `      <div class="dg-cat-header">
        <div class="dg-cat-header-left">
          <h2 class="dg-section-heading">Turn your people data into strategic decisions.</h2>
          <p class="dg-cat-desc">Real-time workforce intelligence — from pre-built dashboards to AI-powered natural language queries with Lexi, your HR copilot.</p>
          <div class="lexi-powered-badge">
            <span class="lpb-text">Powered by</span>
            <img src="images/lexi-ai.webp" alt="Lexi" class="lpb-logo-img">
          </div>
        </div>
        <div class="dg-cat-count-box">
          <div class="dg-cat-count-num">3</div>
          <div class="dg-cat-count-lbl">Demos available</div>
        </div>
      </div>
      <div class="dg-grid">
        <div class="dg-card" onclick="gatedDemo('cmsr026bi0c1xqmm7mxnkwwam')">
          <div class="dg-thumb dg-thumb-insights">
            <img src="images/promotion-retention-analysis.webp" alt="Promotion vs Retention Analysis" class="dg-thumb-image">
            <div class="dg-thumb-overlay"><div class="dg-play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>
          </div>
          <div class="dg-card-body">
            <div class="dg-card-tag">Lexi AI Insights</div>
            <div class="dg-card-title">Promotion vs Retention Analysis</div>
            <div class="dg-card-desc">Use AI-powered workforce analysis to discover whether promoted employees are more likely to stay.</div>
            <div class="dg-card-footer">
              <button class="dg-card-cta">Watch Demo <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            </div>
          </div>
        </div>
        <div class="dg-card" onclick="gatedDemo('cmsr2xph3023azj0jppp4zqmc')">
          <div class="dg-thumb dg-thumb-insights">
            <img src="images/contracted-hours-analysis.webp" alt="Contracted Hours Analysis" class="dg-thumb-image">
            <div class="dg-thumb-overlay"><div class="dg-play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>
          </div>
          <div class="dg-card-body">
            <div class="dg-card-tag">Lexi AI Insights</div>
            <div class="dg-card-title">Contracted Hours Analysis</div>
            <div class="dg-card-desc">Use AI-powered workforce analysis to identify which departments are working beyond their contracted hours.</div>
            <div class="dg-card-footer">
              <button class="dg-card-cta">Watch Demo <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            </div>
          </div>
        </div>
        <div class="dg-card" onclick="gatedDemo('cmsr4wi1t029bzj0jot73obit')">
          <div class="dg-thumb dg-thumb-insights">
            <img src="images/workforce-insights-mobile.webp" alt="Workforce Insights on Mobile" class="dg-thumb-image">
            <div class="dg-thumb-overlay"><div class="dg-play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></div></div>
          </div>
          <div class="dg-card-body">
            <div class="dg-card-tag">Lexi AI Insights</div>
            <div class="dg-card-title">Workforce Insights on Mobile</div>
            <div class="dg-card-desc">Ask strategic workforce questions by text or voice and receive AI-powered insights directly on your mobile device.</div>
            <div class="dg-card-footer">
              <button class="dg-card-cta">Watch Demo <svg viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
            </div>
          </div>
        </div>
      </div>`
};

function ensureLoaded(cat) {
  var sec = document.getElementById('dg-' + cat);
  if (!sec || sec.getAttribute('data-loaded') !== 'false') return;
  sec.innerHTML = LAZY_SECTIONS[cat] || '';
  sec.setAttribute('data-loaded', 'true');
}

function activateCat(cat) {
  var tab = document.querySelector('.industry-tab[data-cat="' + cat + '"]');
  var sec = document.getElementById('dg-' + cat);
  if (!tab || !sec) return false;
  ensureLoaded(cat);
  document.querySelectorAll('.industry-tab').forEach(function(t) { t.classList.remove('active'); });
  document.querySelectorAll('.dg-section').forEach(function(s) { s.classList.remove('visible'); });
  tab.classList.add('active');
  sec.classList.add('visible');
  return true;
}

var catsWrap;

function scrollToDemos() {
  var target = document.getElementById('demos');
  if (!target || !catsWrap) return;
  var wpHeader = document.querySelector('header.site-header, .site-header, #masthead, header') || { offsetHeight: 80 };
  var headerH = wpHeader.offsetHeight || 80;
  window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - catsWrap.offsetHeight - headerH, behavior: 'smooth' });
}
function scrollToContact() {
  var target = document.getElementById('dg-contact');
  if (!target) return;
  window.scrollTo({ top: target.getBoundingClientRect().top + window.pageYOffset - 24, behavior: 'smooth' });
}

function showDevToast() {
  var toast = document.getElementById('dg-dev-toast');
  if (!toast) return;
  toast.classList.add('show');
  clearTimeout(showDevToast._t);
  showDevToast._t = setTimeout(function() { toast.classList.remove('show'); }, 2200);
}

document.addEventListener('DOMContentLoaded', function() {
  catsWrap = document.querySelector('.dg-cats-wrap');

  document.querySelectorAll('.industry-tab[data-cat]').forEach(function(tab) {
    tab.addEventListener('click', function() {
      if (tab.classList.contains('dg-tab-disabled')) { showDevToast(); return; }
      activateCat(tab.dataset.cat);
      history.replaceState(null, '', '#' + tab.dataset.cat);
      if (catsWrap) catsWrap.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  var hash = window.location.hash.replace('#', '').toLowerCase();
  if (hash) activateCat(hash);

  var c = document.getElementById('hs-form-container');
  if (c) {
    var obs = new MutationObserver(function() {
      if (document.querySelector('#hs-form-container .hs-form')) {
        var ph = document.getElementById('hs-placeholder');
        if (ph) ph.style.display = 'none';
        obs.disconnect();
      }
    });
    obs.observe(c, { childList: true, subtree: true });
  }

  window.hsFormsOnReady = window.hsFormsOnReady || [];
  window.hsFormsOnReady.push(function() {
    hbspt.forms.create({
      portalId: "45700506",
      formId: "e3e8a63f-d050-4a3c-9178-acea4915a7cd",
      region: "na2",
      target: "#hs-form-container"
    });
  });
});

window.addEventListener('hashchange', function() {
  var hash = window.location.hash.replace('#', '').toLowerCase();
  if (hash) activateCat(hash);
});

var _pendingDemoId = null;
var _gateDone = !!sessionStorage.getItem('phr_gate_done');

function gatedDemo(id) {
  if (_gateDone) { Supademo.open(id); return; }
  _pendingDemoId = id;
  _showGate();
}

function gatedHeroDemo() {
  if (_gateDone) { _loadHeroIframe(); return; }
  _pendingDemoId = '__hero__';
  _showGate();
}

function _loadHeroIframe() {
  var iframe = document.getElementById('hero-demo-iframe');
  if (iframe && iframe.dataset.src && !iframe.getAttribute('src')) {
    iframe.setAttribute('src', iframe.dataset.src);
  }
  var overlay = document.getElementById('hero-gate-overlay');
  if (overlay) overlay.style.display = 'none';
}

if (_gateDone) {
  document.addEventListener('DOMContentLoaded', _loadHeroIframe);
}

function _showGate() {
  var overlay = document.getElementById('dg-gate-overlay');
  if (!overlay) return;
  /* Move to direct child of <body> to escape any parent stacking context */
  if (overlay.parentNode !== document.body) {
    document.body.appendChild(overlay);
  }
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
  _initGateForm();
}

function _hideGate() {
  var overlay = document.getElementById('dg-gate-overlay');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
  _pendingDemoId = null;
}

function _onGateSubmit() {
  var id = _pendingDemoId;
  sessionStorage.setItem('phr_gate_done', '1');
  _gateDone = true;
  _hideGate();
  if (id === '__hero__') {
    setTimeout(_loadHeroIframe, 450);
  } else if (id) {
    setTimeout(function() { Supademo.open(id); }, 450);
  }
}

function _initGateForm() {
  var container = document.getElementById('dg-gate-form-container');
  if (!container || container.querySelector('.hs-form')) return;
  if (typeof hbspt === 'undefined') { setTimeout(_initGateForm, 250); return; }
  hbspt.forms.create({
    portalId:  '45700506',
    formId:    'e3e8a63f-d050-4a3c-9178-acea4915a7cd',
    region:    'na2',
    target:    '#dg-gate-form-container',
    onFormSubmitted: _onGateSubmit
  });
}

window.addEventListener('message', function(e) {
  if (!e.data || _gateDone) return;
  if (e.data.type === 'hsFormCallback' &&
     (e.data.eventName === 'onFormSubmitted' || e.data.eventName === 'onFormSubmit')) {
    _onGateSubmit();
  }
});
