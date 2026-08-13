/* ═══════════════════════════════════════════════════════════════════
   interactive-demos-delta.js — delta script for the Interactive Demos
   page (/interactive-demos/)

   Loaded AFTER the shared ../phrhome.js. Most page behavior (gatedDemo,
   tab switching, testimonial carousel, gate form, etc.) already lives
   in the shared phrhome.js. This file only overrides the Insight tab's
   LAZY_SECTIONS.insight entry with real content/Supademo IDs — the
   version shipped in phrhome.js was stubbed with placeholder IDs.
   ═══════════════════════════════════════════════════════════════════ */

if (typeof LAZY_SECTIONS !== 'undefined') {
  LAZY_SECTIONS.insight = `      <div class="dg-cat-header">
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
      </div>`;
}
