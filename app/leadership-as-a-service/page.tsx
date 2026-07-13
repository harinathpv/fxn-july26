import type { Metadata } from "next";
import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import StatCounter from "@/components/StatCounter";
import AllocationDiagram from "@/components/AllocationDiagram";
import RelationshipDiagram from "@/components/RelationshipDiagram";

export const metadata: Metadata = {
  title: "Leadership as a Service India | Flexible Senior Leadership — FxN",
  description:
    "Access senior leaders across finance, technology, GTM, product, people and operations through one flexible FxN Leadership as a Service subscription.",
};

export default function LeadershipAsAServicePage() {
  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="hero" id="top">
        <div className="wrap">
          <div className="hero-copy">
            <span className="label">Leadership as a Service</span>
            <h1>One subscription.<br />Multiple leadership capabilities.</h1>
            <p className="lede">Your company&apos;s leadership requirements do not remain fixed. One month, you may need financial guidance. The next, you may need support across GTM, technology, people, product or operations. FxN Leadership as a Service gives growing companies flexible access to a curated collective of senior leaders through one structured subscription.</p>
            <div className="hero-actions">
              <a href="https://cal.com/harinathpv" target="_blank" rel="noopener noreferrer" className="btn btn-teal">Design Your Leadership Subscription</a>
              <Link href="#pricing" className="btn btn-outline light">See Pricing</Link>
            </div>
            <div className="hero-proof">
              <div><span className="num">14</span><span className="cap">Active FxN Partners</span></div>
              <div><span className="num">6+</span><span className="cap">Leadership Disciplines</span></div>
              <div><span className="num">1</span><span className="cap">Shared Operating Model</span></div>
            </div>
          </div>
          <AllocationDiagram />
        </div>
      </section>

      {/* SECTION 2 — THE BUSINESS PROBLEM */}
      <section id="reality">
        <div className="wrap">
          <RevealOnScroll className="section-head">
            <span className="label">The Leadership Reality</span>
            <h2>Your leadership needs change faster than your organisation chart.</h2>
            <p>A growing company rarely needs every senior leadership capability at the same intensity, every month. It may require a finance leader during fundraising, a GTM leader during pipeline redesign, a technology leader during architecture decisions and a people leader during organisational change. Hiring a full-time executive for each need can be slow, expensive and premature. FxN creates a flexible leadership layer that changes as the business changes.</p>
          </RevealOnScroll>
          <RevealOnScroll className="compare-cols">
            <div className="compare-col">
              <div className="ck">Traditional Model</div>
              <h3>One fixed hire per need.</h3>
              <ul>
                <li>Hire one executive</li>
                <li>Fixed role</li>
                <li>Fixed cost</li>
                <li>Long recruitment cycle</li>
                <li>Capability tied to one individual</li>
              </ul>
            </div>
            <div className="compare-col hi">
              <div className="ck">FxN LaaS</div>
              <h3>One flexible leadership layer.</h3>
              <ul>
                <li>Access multiple leaders</li>
                <li>Flexible leadership allocation</li>
                <li>Subscription-based model</li>
                <li>Faster activation</li>
                <li>Capability drawn from a collective</li>
              </ul>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* SECTION 3 — WHAT LaaS IS */}
      <section className="warm" id="model">
        <div className="wrap">
          <RevealOnScroll className="section-head">
            <span className="label">The FxN Model</span>
            <h2>A flexible senior leadership bench for your business.</h2>
          </RevealOnScroll>
          <RevealOnScroll className="steps">
            <div className="step"><div className="idx">1</div><h3>Subscribe</h3><p>Choose a monthly or annual leadership subscription.</p></div>
            <div className="step"><div className="idx">2</div><h3>Diagnose</h3><p>Define the current business priorities and leadership requirements.</p></div>
            <div className="step"><div className="idx">3</div><h3>Allocate</h3><p>Use the available hours with one leader or distribute them across multiple leadership functions.</p></div>
            <div className="step"><div className="idx">4</div><h3>Operate</h3><p>Engage the relevant FxN Partners through structured leadership sessions, reviews and decision support.</p></div>
            <div className="step"><div className="idx">5</div><h3>Evolve</h3><p>Change the leadership allocation as company priorities change.</p></div>
          </RevealOnScroll>
          <RevealOnScroll className="callout-quote">
            <p>You are not subscribing to one job title. You are subscribing to leadership capacity.</p>
          </RevealOnScroll>
        </div>
      </section>

      {/* SECTION 4 — HOW FLEXIBLE ALLOCATION WORKS */}
      <section id="allocation">
        <div className="wrap">
          <RevealOnScroll className="section-head">
            <span className="label">Use Leadership Where It Matters Most</span>
            <h2>One pool of hours. Multiple ways to use it.</h2>
          </RevealOnScroll>
          <RevealOnScroll className="alloc-grid">
            <div className="alloc-card">
              <h3>Cross-Functional Support</h3>
              <div className="alloc-bar">
                <span style={{ width: "40%", background: "var(--fn-finance)" }}></span>
                <span style={{ width: "20%", background: "var(--fn-gtm)" }}></span>
                <span style={{ width: "20%", background: "var(--fn-tech)" }}></span>
                <span style={{ width: "20%", background: "var(--fn-people)" }}></span>
              </div>
              <ul className="alloc-legend">
                <li><span className="sw"><span className="dot" style={{ background: "var(--fn-finance)" }}></span>Finance</span><span>2 hrs</span></li>
                <li><span className="sw"><span className="dot" style={{ background: "var(--fn-gtm)" }}></span>GTM</span><span>1 hr</span></li>
                <li><span className="sw"><span className="dot" style={{ background: "var(--fn-tech)" }}></span>Technology</span><span>1 hr</span></li>
                <li><span className="sw"><span className="dot" style={{ background: "var(--fn-people)" }}></span>People</span><span>1 hr</span></li>
              </ul>
              <div className="alloc-total"><span>Total</span><span>5 hours</span></div>
            </div>
            <div className="alloc-card">
              <h3>One Concentrated Priority</h3>
              <div className="alloc-bar">
                <span style={{ width: "100%", background: "var(--fn-finance)" }}></span>
              </div>
              <ul className="alloc-legend">
                <li><span className="sw"><span className="dot" style={{ background: "var(--fn-finance)" }}></span>Fractional CFO</span><span>5 hrs</span></li>
              </ul>
              <div className="alloc-total"><span>Total</span><span>5 hours</span></div>
            </div>
            <div className="alloc-card">
              <h3>Product and Growth Decision</h3>
              <div className="alloc-bar">
                <span style={{ width: "40%", background: "var(--fn-product)" }}></span>
                <span style={{ width: "20%", background: "var(--fn-tech)" }}></span>
                <span style={{ width: "20%", background: "var(--fn-gtm)" }}></span>
                <span style={{ width: "20%", background: "var(--fn-finance)" }}></span>
              </div>
              <ul className="alloc-legend">
                <li><span className="sw"><span className="dot" style={{ background: "var(--fn-product)" }}></span>Product Strategy</span><span>2 hrs</span></li>
                <li><span className="sw"><span className="dot" style={{ background: "var(--fn-tech)" }}></span>Technology</span><span>1 hr</span></li>
                <li><span className="sw"><span className="dot" style={{ background: "var(--fn-gtm)" }}></span>GTM</span><span>1 hr</span></li>
                <li><span className="sw"><span className="dot" style={{ background: "var(--fn-finance)" }}></span>Finance</span><span>1 hr</span></li>
              </ul>
              <div className="alloc-total"><span>Total</span><span>5 hours</span></div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll className="alloc-note">
            <p>The exact allocation can change each month based on business priorities and Partner availability.</p>
          </RevealOnScroll>
        </div>
      </section>

      {/* SECTION 5 — WHAT IS INCLUDED */}
      <section className="warm" id="included">
        <div className="wrap">
          <RevealOnScroll className="section-head">
            <span className="label">What You Receive</span>
            <h2>More than access to a calendar.</h2>
          </RevealOnScroll>
          <RevealOnScroll className="included-grid">
            <div className="incl-card"><h3>Senior Leadership Hours</h3><p>Use the subscribed hours for meetings, decision support, reviews, analysis or agreed leadership work.</p></div>
            <div className="incl-card"><h3>Access to Multiple FxN Partners</h3><p>Use one Partner or a combination of leadership specialists.</p></div>
            <div className="incl-card"><h3>Accountable FxN Relationship Lead</h3><p>One Partner maintains continuity, helps allocate hours and coordinates the leadership collective.</p></div>
            <div className="incl-card"><h3>Expectation and Outcome Setting</h3><p>The engagement begins with clear expectations, priorities and desired outcomes.</p></div>
            <div className="incl-card"><h3>Partner Coordination</h3><p>FxN briefs and coordinates relevant Partners so the client does not repeatedly explain the same context.</p></div>
            <div className="incl-card"><h3>Action Notes</h3><p>Agreed recommendations, next steps and decisions are documented.</p></div>
            <div className="incl-card"><h3>Priority Scheduling</h3><p>Subscription clients receive priority over one-time advisory sessions.</p></div>
            <div className="incl-card"><h3>Utilisation Visibility</h3><p>Clients receive visibility into hours used and remaining.</p></div>
          </RevealOnScroll>
          <RevealOnScroll className="included-note">
            <p><strong>Leadership hours may include</strong> meetings, document review, preparation, analysis, agreed recommendations and participation in leadership discussions. Routine scheduling and administrative coordination should not be deducted from the subscribed hours.</p>
          </RevealOnScroll>
        </div>
      </section>

      {/* SECTION 6 — ACCOUNTABLE RELATIONSHIP LEAD */}
      <section className="dark" id="relationship-lead">
        <div className="wrap">
          <div className="rel-layout">
            <RevealOnScroll>
              <RelationshipDiagram />
            </RevealOnScroll>
            <RevealOnScroll>
              <span className="label on-dark">Leadership Orchestration</span>
              <h2>Multiple leaders. One point of continuity.</h2>
              <p style={{ marginBottom: 22 }}>Access to multiple leaders is valuable only when the advice remains connected. Every LaaS client is assigned an FxN Relationship Lead who:</p>
              <ul className="rel-list">
                <li>Understands the company context</li>
                <li>Helps prioritise leadership needs</li>
                <li>Recommends the appropriate FxN Partners</li>
                <li>Coordinates cross-functional inputs</li>
                <li>Tracks leadership priorities</li>
                <li>Maintains continuity across months</li>
                <li>Helps resolve conflicting recommendations</li>
              </ul>
              <div className="rel-emphasis">This is what makes FxN different from a directory or expert marketplace.</div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* SECTION 7 — PRICING */}
      <section id="pricing">
        <div className="wrap">
          <RevealOnScroll className="section-head">
            <span className="label">Leadership Plans</span>
            <h2>Choose the level of leadership access your business needs.</h2>
          </RevealOnScroll>
          <RevealOnScroll className="pricing-grid">
            <div className="price-card">
              <div className="plan-name">Executive Advisory</div>
              <div className="price">₹10,000<span style={{ fontSize: "0.9rem", color: "var(--grey)" }}> / hour</span></div>
              <div className="best-for">Best for: one-time senior decision support.</div>
              <ul>
                <li>One 60-minute session</li>
                <li>One selected FxN Partner</li>
                <li>Brief context review</li>
                <li>Agreed action points</li>
                <li>No rollover</li>
                <li>No multi-Partner coordination</li>
              </ul>
              <a href="https://cal.com/harinathpv" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Book an Advisory Session</a>
            </div>
            <div className="price-card">
              <div className="plan-name">Leadership Access</div>
              <div className="price">₹20,000<span style={{ fontSize: "0.9rem", color: "var(--grey)" }}> / month</span></div>
              <div className="sub">Two leadership hours</div>
              <div className="best-for">Best for: founders and leadership teams that need a consistent senior sounding board.</div>
              <ul>
                <li>Two hours per month</li>
                <li>One selected FxN Partner</li>
                <li>Monthly continuity</li>
                <li>Priority scheduling</li>
                <li>Brief post-session clarification</li>
                <li>Hours expire at the end of the billing cycle</li>
                <li>No multi-Partner allocation</li>
              </ul>
              <a href="https://cal.com/harinathpv" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Choose Leadership Access</a>
            </div>
            <div className="price-card hi">
              <div className="price-badge">Most Flexible</div>
              <div className="plan-name">Leadership as a Service</div>
              <div className="price">₹50,000<span style={{ fontSize: "0.9rem", color: "var(--grey)" }}> / month</span></div>
              <div className="sub">Five flexible leadership hours</div>
              <div className="best-for">Best for: companies that need access to multiple leadership capabilities.</div>
              <ul>
                <li>Five leadership hours</li>
                <li>Use with one or multiple FxN Partners</li>
                <li>Access to up to three Partners per month</li>
                <li>Flexible leadership allocation</li>
                <li>FxN Relationship Lead</li>
                <li>Outcome and expectation setting</li>
                <li>Partner coordination</li>
                <li>Action notes</li>
                <li>Priority scheduling</li>
                <li>Monthly utilisation summary</li>
                <li>Hours valid for 30 days</li>
                <li>No rollover on monthly subscriptions</li>
              </ul>
              <a href="https://cal.com/harinathpv" target="_blank" rel="noopener noreferrer" className="btn btn-amber">Design Your LaaS Plan</a>
            </div>
            <div className="price-card">
              <div className="plan-name">Annual Leadership Subscription</div>
              <div className="price">₹6,00,000<span style={{ fontSize: "0.9rem", color: "var(--grey)" }}> / year</span></div>
              <div className="sub">72 flexible leadership hours</div>
              <div className="best-for">Best for: companies that need continuous senior leadership access through the year.</div>
              <ul>
                <li>72 leadership hours</li>
                <li>Flexible use across 12 months</li>
                <li>Access to multiple FxN Partners</li>
                <li>FxN Relationship Lead</li>
                <li>Cross-functional leadership coordination</li>
                <li>Quarterly leadership allocation review</li>
                <li>Priority scheduling</li>
                <li>Flexible rollover within the active annual term</li>
                <li>Unused hours expire at the end of the term</li>
              </ul>
              <a href="https://cal.com/harinathpv" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Discuss the Annual Plan</a>
            </div>
          </RevealOnScroll>
          <RevealOnScroll className="price-gst-note">
            <p>All prices are exclusive of applicable GST.</p>
          </RevealOnScroll>
        </div>
      </section>

      {/* SECTION 8 — MONTHLY VS ANNUAL */}
      <section className="dark" id="monthly-vs-annual">
        <div className="wrap">
          <RevealOnScroll className="section-head">
            <span className="label on-dark">Choose Based on Continuity</span>
            <h2>Short-term access or year-round leadership capacity?</h2>
          </RevealOnScroll>
          <RevealOnScroll>
            <table className="compare-table">
              <thead><tr><th>Monthly LaaS</th><th>Annual Leadership Subscription</th></tr></thead>
              <tbody>
                <tr><td>₹50,000 per month</td><td>₹6,00,000 per year</td></tr>
                <tr><td>5 hours per month</td><td>72 hours across the year</td></tr>
                <tr><td>Hours valid for 30 days</td><td>Hours flexible across 12 months</td></tr>
                <tr><td>No rollover</td><td>Rollover within active term</td></tr>
                <tr><td>Good for immediate needs</td><td>Good for changing leadership needs</td></tr>
                <tr><td>Monthly allocation</td><td>Quarterly allocation review</td></tr>
                <tr><td>Lower commitment</td><td>Better continuity and flexibility</td></tr>
              </tbody>
            </table>
            <p className="recommend-note"><strong>Choose monthly LaaS</strong> when the need is immediate and defined. <strong>Choose the annual subscription</strong> when leadership priorities are likely to change across functions during the year.</p>
          </RevealOnScroll>
        </div>
      </section>

      {/* SECTION 9 — TYPICAL USE CASES */}
      <section id="use-cases">
        <div className="wrap">
          <RevealOnScroll className="section-head">
            <span className="label">Where LaaS Helps</span>
            <h2>Use senior leadership for the decisions that cannot wait.</h2>
          </RevealOnScroll>
          <RevealOnScroll className="usecase-grid">
            <div className="usecase-card"><h3>Finance</h3><ul><li>Cash-flow visibility</li><li>Fundraising readiness</li><li>Unit economics</li><li>Board reporting</li><li>Financial controls</li></ul></div>
            <div className="usecase-card"><h3>GTM and Revenue</h3><ul><li>ICP clarity</li><li>Pipeline review</li><li>Sales process</li><li>Channel strategy</li><li>Revenue alignment</li></ul></div>
            <div className="usecase-card"><h3>Technology and AI</h3><ul><li>Architecture review</li><li>AI readiness</li><li>Technology roadmap</li><li>Build-versus-buy decisions</li><li>Digital transformation</li></ul></div>
            <div className="usecase-card"><h3>Product</h3><ul><li>Product strategy</li><li>Roadmap review</li><li>Product-market fit</li><li>AI product design</li><li>Monetisation</li></ul></div>
            <div className="usecase-card"><h3>People and Organisation</h3><ul><li>Organisation design</li><li>Leadership roles</li><li>Hiring priorities</li><li>Performance systems</li><li>Founder-to-leadership transition</li></ul></div>
            <div className="usecase-card"><h3>Strategy and Operations</h3><ul><li>Growth strategy</li><li>Market entry</li><li>Operating cadence</li><li>Transformation priorities</li><li>Decision rights</li></ul></div>
          </RevealOnScroll>
        </div>
      </section>

      {/* SECTION 10 — WHAT LaaS IS NOT */}
      <section className="warm" id="boundaries">
        <div className="wrap">
          <RevealOnScroll className="section-head">
            <span className="label">Clear Boundaries</span>
            <h2>Leadership access is not unlimited execution capacity.</h2>
          </RevealOnScroll>
          <RevealOnScroll className="split-cols">
            <div className="split-col yes">
              <div className="ck">LaaS Is Designed For</div>
              <ul>
                <li>Strategic guidance</li>
                <li>Executive decision support</li>
                <li>Leadership reviews</li>
                <li>Diagnosis</li>
                <li>Targeted interventions</li>
                <li>Cross-functional alignment</li>
                <li>Agreed analysis and recommendations</li>
              </ul>
            </div>
            <div className="split-col no">
              <div className="ck">LaaS Is Not Automatically Intended For</div>
              <ul>
                <li>Full-time functional ownership</li>
                <li>Daily team management</li>
                <li>Large implementation projects</li>
                <li>Continuous operational execution</li>
                <li>Dedicated delivery teams</li>
                <li>Unlimited document review</li>
                <li>Open-ended WhatsApp support</li>
              </ul>
            </div>
          </RevealOnScroll>
          <RevealOnScroll className="boundary-statement">
            Companies requiring ongoing functional ownership or embedded executive responsibility can engage an FxN Partner through a separately scoped Embedded Fractional Leadership engagement.
          </RevealOnScroll>
          <RevealOnScroll className="cta-row">
            <Link href="/#final-cta" className="btn btn-outline">Discuss Embedded Fractional Leadership</Link>
          </RevealOnScroll>
        </div>
      </section>

      {/* SECTION 11 — TERMS AND GUARDRAILS */}
      <section id="terms">
        <div className="wrap">
          <RevealOnScroll className="section-head">
            <span className="label">How the Subscription Works</span>
            <h2>Terms and guardrails.</h2>
          </RevealOnScroll>
          <RevealOnScroll className="faq-list">
            <details className="faq-item">
              <summary>How are hours tracked?<span className="chev">+</span></summary>
              <div className="faq-body"><p>Hours are tracked in agreed increments. The first working session is normally booked for a minimum of 60 minutes.</p></div>
            </details>
            <details className="faq-item">
              <summary>What counts as leadership time?<span className="chev">+</span></summary>
              <div className="faq-body"><p>Meetings, agreed preparation, document review, analysis, recommendations and participation in leadership discussions may be counted.</p></div>
            </details>
            <details className="faq-item">
              <summary>Can hours be split across Partners?<span className="chev">+</span></summary>
              <div className="faq-body"><p>Yes. Monthly LaaS may be used across up to three Partners in one billing cycle, subject to availability.</p></div>
            </details>
            <details className="faq-item">
              <summary>Can unused monthly hours be rolled over?<span className="chev">+</span></summary>
              <div className="faq-body"><p>No. Monthly hours expire at the end of the 30-day billing period.</p></div>
            </details>
            <details className="faq-item">
              <summary>Can annual hours roll over?<span className="chev">+</span></summary>
              <div className="faq-body"><p>Annual hours can be used flexibly within the active 12-month subscription term. They expire at the end of the term.</p></div>
            </details>
            <details className="faq-item">
              <summary>Is a particular Partner guaranteed?<span className="chev">+</span></summary>
              <div className="faq-body"><p>Preferred Partners are subject to availability. FxN may recommend an equivalent leader based on the requirement.</p></div>
            </details>
            <details className="faq-item">
              <summary>Can all hours be used in one month?<span className="chev">+</span></summary>
              <div className="faq-body"><p>Annual plans may permit concentrated usage, subject to reasonable monthly limits, advance planning and Partner availability.</p></div>
            </details>
            <details className="faq-item">
              <summary>What happens if more execution is required?<span className="chev">+</span></summary>
              <div className="faq-body"><p>FxN will recommend a Pod, an embedded fractional engagement or a separately scoped project.</p></div>
            </details>
            <details className="faq-item">
              <summary>Are on-site sessions included?<span className="chev">+</span></summary>
              <div className="faq-body"><p>Travel, accommodation and on-site expenses are priced separately.</p></div>
            </details>
            <details className="faq-item">
              <summary>Is client information confidential?<span className="chev">+</span></summary>
              <div className="faq-body"><p>Yes. Appropriate confidentiality agreements should apply to FxN and the assigned Partners.</p></div>
            </details>
          </RevealOnScroll>
        </div>
      </section>

      {/* SECTION 12 — WHO THIS IS FOR */}
      <section className="warm" id="fit">
        <div className="wrap">
          <RevealOnScroll className="section-head">
            <span className="label">Client Fit</span>
            <h2>Designed for companies that need leadership before they need another full-time hire.</h2>
          </RevealOnScroll>
          <RevealOnScroll className="split-cols">
            <div className="split-col yes">
              <div className="ck">Good Fit</div>
              <ul>
                <li>Founder-led companies entering the next stage</li>
                <li>Growth-stage businesses</li>
                <li>Mid-sized companies</li>
                <li>Family businesses professionalising leadership</li>
                <li>Companies entering new markets</li>
                <li>GCCs building new capabilities</li>
                <li>Businesses preparing for capital</li>
                <li>Companies navigating AI or digital transformation</li>
                <li>Organisations with temporary leadership gaps</li>
              </ul>
            </div>
            <div className="split-col no">
              <div className="ck">Not Ideal For</div>
              <ul>
                <li>Companies seeking full-time daily execution for ₹50,000 per month</li>
                <li>Businesses unwilling to define priorities</li>
                <li>Teams looking only for task-level delivery</li>
                <li>Organisations requiring a full-time employee relationship</li>
                <li>Clients expecting unrestricted access outside the subscription</li>
              </ul>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* SECTION 13 — WHY FXN */}
      <section id="why-fxn-laas">
        <div className="wrap">
          <RevealOnScroll className="section-head">
            <span className="label">Why FxN</span>
            <h2>A collective operating model, not a collection of independent experts.</h2>
          </RevealOnScroll>
          <RevealOnScroll className="diff-grid">
            <div className="diff-card"><h3>Curated Partners</h3><p>Senior leaders selected for experience, judgement and functional depth.</p></div>
            <div className="diff-card"><h3>Cross-Functional Access</h3><p>Leadership capabilities across finance, GTM, technology, product, people and operations.</p></div>
            <div className="diff-card"><h3>Shared Context</h3><p>The relationship lead and Partner coordination reduce repeated onboarding.</p></div>
            <div className="diff-card"><h3>Flexible Configuration</h3><p>Leadership allocation changes as the organisation&apos;s priorities change.</p></div>
          </RevealOnScroll>
          <RevealOnScroll className="stat-grid">
            <div className="stat-cell"><StatCounter target={14} /><span className="cap">Active Partners</span></div>
            <div className="stat-cell"><StatCounter target={340} /><span className="cap">Years of Combined Leadership Experience</span></div>
            <div className="stat-cell"><StatCounter target={150} /><span className="cap">Client and Leadership Engagements</span></div>
            <div className="stat-cell"><StatCounter target={40} /><span className="cap">Industries Served</span></div>
          </RevealOnScroll>
          <RevealOnScroll className="disclosure">
            <p>The figures represent the combined professional experience and client outcomes of active FxN Partners, including work completed before and through FxN.</p>
          </RevealOnScroll>
        </div>
      </section>

      {/* SECTION 14 — FINAL CTA */}
      <section className="final-cta">
        <div className="wrap">
          <h2>What leadership capacity does your business need now?</h2>
          <p>Tell us what the company is trying to achieve, which decisions are blocked and where senior leadership capacity is missing. FxN will help determine whether you need Executive Advisory, Leadership Access, Leadership as a Service, a Leadership Pod or an embedded fractional engagement.</p>
          <div className="hero-actions">
            <a href="https://cal.com/harinathpv" target="_blank" rel="noopener noreferrer" className="btn btn-teal">Design Your Leadership Subscription</a>
            <Link href="/#final-cta" className="btn btn-outline light">Talk to FxN</Link>
          </div>
        </div>
      </section>
    </>
  );
}
