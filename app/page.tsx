import Link from "next/link";
import RevealOnScroll from "@/components/RevealOnScroll";
import StatCounter from "@/components/StatCounter";
import HeroDiagram from "@/components/HeroDiagram";
import PartnerGrid from "@/components/PartnerGrid";

export default function HomePage() {
  return (
    <>
      {/* SECTION 1 — HERO */}
      <section className="hero" id="why-fxn">
        <div className="wrap">
          <div className="hero-copy">
            <span className="label">India&apos;s Shared Leadership Platform</span>
            <h1>Build the leadership your business needs.<br />Without building the overhead it doesn&apos;t.</h1>
            <p className="lede">FxN gives growing Indian companies access to senior leadership through outcome-led Leadership Pods and Leadership as a Service.</p>
            <div className="hero-actions">
              <Link href="#pods" className="btn btn-teal">Explore FxN</Link>
              <Link href="#model" className="btn btn-outline light">Find Your Leadership Model</Link>
            </div>
            <div className="hero-proof">
              <div><span className="num">14</span><span className="cap">Active FxN Partners</span></div>
              <div><span className="num">6+</span><span className="cap">Leadership Disciplines</span></div>
              <div><span className="num">1</span><span className="cap">Shared Operating Model</span></div>
            </div>
          </div>
          <HeroDiagram />
        </div>
      </section>

      {/* VISION & MISSION */}
      <section id="vision-mission" className="vm-section">
        <div className="wrap">
          <RevealOnScroll className="vm-grid">
            <div className="vm-block">
              <span className="label">Our Vision</span>
              <p className="vm-statement">To be India&apos;s definitive shared leadership platform — the model other markets look to when they ask how senior leadership should scale with a growing business.</p>
            </div>
            <div className="vm-divider"></div>
            <div className="vm-block">
              <span className="label">Our Mission</span>
              <p className="vm-statement">To give growing companies structured access to senior leadership through outcome-led Leadership Pods and Leadership as a Service, so leadership capacity scales with the business — not ahead of it, and not behind it.</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* SECTION 2 — THE LEADERSHIP GAP */}
      <section id="gap">
        <div className="wrap">
          <RevealOnScroll className="section-head">
            <span className="label">The Leadership Gap</span>
            <h2>Growing companies face a leadership paradox.</h2>
            <p>Companies need experienced leaders to scale, but building a full executive team is expensive, slow and often premature.</p>
          </RevealOnScroll>

          <RevealOnScroll className="gap-flow">
            <div className="stage">Business Growth</div>
            <div className="arrow">→</div>
            <div className="stage hi">Leadership Gap</div>
            <div className="arrow">→</div>
            <div className="stage hi">FxN</div>
            <div className="arrow">→</div>
            <div className="stage">Leadership Capacity</div>
          </RevealOnScroll>

          <RevealOnScroll className="gap-grid">
            <div className="cell"><span className="n">01</span>Founders become functional bottlenecks.</div>
            <div className="cell"><span className="n">02</span>Important decisions get delayed.</div>
            <div className="cell"><span className="n">03</span>Teams operate without cross-functional alignment.</div>
            <div className="cell"><span className="n">04</span>Strategic initiatives lose momentum.</div>
            <div className="cell"><span className="n">05</span>Senior roles remain vacant for months.</div>
            <div className="cell"><span className="n">06</span>Companies hire too early, too late, or for the wrong mandate.</div>
            <div className="cell"><span className="n">07</span>Talent retention challenges impact continuity.</div>
            <div className="cell"><span className="n">08</span>Unclear accountability across teams and functions.</div>
            <div className="cell"><span className="n">09</span>Inability to scale at the pace of business growth.</div>
            <div className="cell"><span className="n">10</span>Inconsistent execution across departments.</div>
            <div className="cell"><span className="n">11</span>Difficulty adapting to market changes quickly.</div>
            <div className="cell"><span className="n">12</span>Risk of losing competitive advantage.</div>
          </RevealOnScroll>

          <RevealOnScroll className="gap-close">
            <p>FxN closes the gap between the leadership a business needs and the organisation it is ready to build.</p>
          </RevealOnScroll>
        </div>
      </section>

      {/* SECTION 3 — TWO WAYS TO WORK WITH FXN */}
      <section className="warm" id="model">
        <div className="wrap">
          <RevealOnScroll className="section-head">
            <span className="label">The FxN Model</span>
            <h2>Leadership designed around the business condition.</h2>
            <p>Some companies need a focused intervention. Others need ongoing leadership capacity. FxN supports both.</p>
          </RevealOnScroll>

          <RevealOnScroll className="model-panels">
            <div className="panel pods" id="pods">
              <span className="kicker">Panel 01</span>
              <h3 className="big">Leadership Pods</h3>
              <div className="sub">For a defined business priority.</div>
              <p className="body">FxN Pods bring together complementary senior leaders around a specific outcome. Pods are designed for business challenges that cross functions and cannot be solved by one specialist working in isolation.</p>
              <ul className="attr-list">
                <li>Defined business outcome</li>
                <li>Cross-functional leadership team</li>
                <li>Fixed or structured duration</li>
                <li>Clear operating cadence</li>
                <li>Tangible deliverables</li>
                <li>Executive accountability</li>
              </ul>
              <div className="example-tags">
                <span>GTM Pod</span><span>Finance and Scale Pod</span><span>AI Transformation Pod</span><span>People and Organisation Pod</span><span>Market Entry Pod</span>
              </div>
              <Link href="#pod-cards" className="btn btn-teal">Explore Leadership Pods</Link>
            </div>
            <div className="panel laas" id="laas">
              <span className="kicker">Panel 02</span>
              <h3 className="big">Leadership as a Service</h3>
              <div className="sub">For ongoing leadership capacity.</div>
              <p className="body">LaaS gives companies structured access to experienced leaders through a flexible subscription model. The leadership configuration changes as the company&apos;s priorities evolve.</p>
              <ul className="attr-list">
                <li>Monthly subscription</li>
                <li>Flexible leadership access</li>
                <li>Functional and cross-functional support</li>
                <li>Executive operating cadence</li>
                <li>Strategic decision support</li>
                <li>Evolving leadership configuration</li>
              </ul>
              <div className="example-tags">
                <span>Strategy</span><span>Finance</span><span>Revenue</span><span>Marketing</span><span>Technology</span><span>Operations</span><span>People</span>
              </div>
              <Link href="/leadership-as-a-service" className="btn" style={{ background: "var(--amber)", color: "#fff" }}>Explore Leadership as a Service</Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* SECTION 4 — WHEN FXN IS USEFUL */}
      <section id="conditions">
        <div className="wrap">
          <RevealOnScroll className="section-head">
            <span className="label">Built for the Next Stage</span>
            <h2>FxN is designed for companies navigating change, scale and complexity.</h2>
          </RevealOnScroll>
          <RevealOnScroll className="condition-grid">
            <div className="card"><h3>Founder-Led to Leadership-Led</h3><p>The business has grown beyond what the founder can personally manage.</p></div>
            <div className="card"><h3>Preparing to Scale</h3><p>The company needs stronger operating discipline, financial visibility and leadership alignment.</p></div>
            <div className="card"><h3>Building a GTM Engine</h3><p>Sales, marketing, customer success and revenue operations need to work as one system.</p></div>
            <div className="card"><h3>Entering a New Market</h3><p>The company needs leadership experience across strategy, local context, partnerships and execution.</p></div>
            <div className="card"><h3>Building a GCC or Business Unit</h3><p>The organisation needs experienced leaders to establish capability, governance and scale.</p></div>
            <div className="card"><h3>Preparing for Capital</h3><p>The company needs stronger financial systems, metrics, governance and investor readiness.</p></div>
            <div className="card"><h3>Driving AI or Digital Transformation</h3><p>The company needs business leadership, not only technology implementation.</p></div>
            <div className="card"><h3>Restructuring the Organisation</h3><p>Roles, decision rights, leadership accountability and operating models need to be redesigned.</p></div>
          </RevealOnScroll>
        </div>
      </section>

      {/* SECTION 5 — HOW FXN WORKS */}
      <section className="warm">
        <div className="wrap">
          <RevealOnScroll className="section-head">
            <span className="label">The Operating Model</span>
            <h2>Leadership should be designed, not merely hired.</h2>
          </RevealOnScroll>
          <RevealOnScroll className="steps">
            <div className="step"><div className="idx">1</div><h3>Diagnose</h3><p>Understand the business condition, growth stage, priorities and leadership gaps.</p></div>
            <div className="step"><div className="idx">2</div><h3>Design</h3><p>Determine whether the company needs a Pod, LaaS or a focused leadership mandate.</p></div>
            <div className="step"><div className="idx">3</div><h3>Assemble</h3><p>Select the right combination of FxN Partners based on functional expertise, industry context and working chemistry.</p></div>
            <div className="step"><div className="idx">4</div><h3>Operate</h3><p>Establish outcomes, decision rights, meeting cadence, deliverables and accountability.</p></div>
            <div className="step"><div className="idx">5</div><h3>Evolve</h3><p>Change the leadership configuration as the company&apos;s priorities and stage of growth change.</p></div>
          </RevealOnScroll>
        </div>
      </section>

      {/* SECTION 6 — FEATURED LEADERSHIP PODS */}
      <section id="pod-cards">
        <div className="wrap">
          <RevealOnScroll className="section-head">
            <span className="label">Featured Pods</span>
            <h2>Cross-functional leadership for business-critical outcomes.</h2>
          </RevealOnScroll>
          <RevealOnScroll className="pod-grid">
            <div className="pod-card">
              <span className="tag">GTM Pod</span>
              <h3>Go-to-Market</h3>
              <p className="desc">Align strategy, positioning, sales, marketing, customer success and revenue operations.</p>
              <div className="ideal-label">Ideal For</div>
              <ul><li>Weak pipelines</li><li>Founder-led sales</li><li>Poor conversion</li><li>Unclear ICP</li><li>Misaligned revenue teams</li></ul>
              <Link href="/pods/gtm" className="btn btn-teal">Explore the Pod</Link>
            </div>
            <div className="pod-card">
              <span className="tag">Finance and Scale Pod</span>
              <h3>Finance and Scale</h3>
              <p className="desc">Build financial visibility, governance, unit economics and scale readiness.</p>
              <div className="ideal-label">Ideal For</div>
              <ul><li>Fundraising preparation</li><li>Cash-flow challenges</li><li>Margin improvement</li><li>Board reporting</li><li>Finance transformation</li></ul>
            </div>
            <div className="pod-card">
              <span className="tag">AI Transformation Pod</span>
              <h3>AI and Digital Transformation</h3>
              <p className="desc">Connect AI initiatives to business strategy, product outcomes and operational value.</p>
              <div className="ideal-label">Ideal For</div>
              <ul><li>AI readiness</li><li>Product transformation</li><li>Workflow redesign</li><li>Digital operating models</li><li>AI monetisation</li></ul>
            </div>
            <div className="pod-card">
              <span className="tag">People and Organisation Pod</span>
              <h3>People and Organisation</h3>
              <p className="desc">Align structure, leadership roles, culture, performance and organisational capability.</p>
              <div className="ideal-label">Ideal For</div>
              <ul><li>Leadership gaps</li><li>Rapid hiring</li><li>Organisational redesign</li><li>Performance systems</li><li>Founder-to-leadership transition</li></ul>
            </div>
          </RevealOnScroll>
          <RevealOnScroll className="partners-cta">
            <Link href="/member-directory" className="btn btn-outline">View All Pods</Link>
          </RevealOnScroll>
        </div>
      </section>

      {/* SECTION 7 — LAAS EXPLAINER */}
      <section className="dark" id="laas-explainer">
        <div className="wrap">
          <div className="laas-explain">
            <RevealOnScroll className="section-head" >
              <span className="label on-dark">Leadership as a Service</span>
              <h2>Your leadership needs change faster than your organisation chart.</h2>
              <p>A growing company may need financial discipline today, a stronger GTM engine next quarter and organisational redesign after that. Hiring a full-time executive for every requirement is often inefficient. Leadership as a Service gives companies ongoing access to senior leadership capacity through one flexible operating model.</p>
              <div className="laas-ctas">
                <Link href="/leadership-as-a-service" className="btn btn-teal">Understand LaaS</Link>
                <Link href="#final-cta" className="btn btn-outline light">Discuss a Leadership Subscription</Link>
              </div>
            </RevealOnScroll>
            <RevealOnScroll>
              <table className="compare-table">
                <thead><tr><th>Traditional Leadership Model</th><th>Leadership as a Service</th></tr></thead>
                <tbody>
                  <tr><td>Hire one full-time executive</td><td>Access multiple leadership capabilities</td></tr>
                  <tr><td>Fixed role and job description</td><td>Flexible leadership configuration</td></tr>
                  <tr><td>High annual commitment</td><td>Subscription-based engagement</td></tr>
                  <tr><td>Months to recruit</td><td>Faster activation</td></tr>
                  <tr><td>Capability tied to one individual</td><td>Capability drawn from a leadership collective</td></tr>
                  <tr><td>Difficult to change structure</td><td>Leadership evolves with business needs</td></tr>
                </tbody>
              </table>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* SECTION 8 — COLLECTIVE LEADERSHIP EXPERIENCE */}
      <section id="collective">
        <div className="wrap">
          <RevealOnScroll className="section-head">
            <span className="label">The FxN Collective</span>
            <h2>14 leaders. Multiple disciplines. One operating model.</h2>
            <p>FxN is a curated collective of senior leaders who have built businesses, led functions, entered markets, managed transformations and advised leadership teams across India and international markets.</p>
          </RevealOnScroll>

          <RevealOnScroll className="stat-grid">
            <div className="stat-cell"><StatCounter target={340} /><span className="cap">Years of combined leadership experience</span></div>
            <div className="stat-cell"><StatCounter target={150} /><span className="cap">Client and leadership engagements</span></div>
            <div className="stat-cell"><StatCounter target={40} /><span className="cap">Industries served</span></div>
            <div className="stat-cell"><span className="num">India · APAC · US · EU</span><span className="cap">Markets worked across</span></div>
          </RevealOnScroll>

          <RevealOnScroll className="disclosure" >
            <p>The figures shown represent the combined professional experience and client outcomes of active FxN Partners, including work completed before and through FxN.</p>
          </RevealOnScroll>

          <RevealOnScroll className="split-note">
            <div className="block">
              <h3>Experience brought into FxN</h3>
              <p>Work completed by FxN Partners in previous executive, entrepreneurial, advisory and consulting roles.</p>
            </div>
            <div className="block">
              <h3>Outcomes delivered through FxN</h3>
              <p>Pods, LaaS engagements and leadership interventions delivered through the FxN operating model.</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* SECTION 9 — LEADERSHIP CAPABILITIES */}
      <section className="warm">
        <div className="wrap">
          <RevealOnScroll className="section-head">
            <span className="label">Leadership Capability</span>
            <h2>Senior leadership across the functions that shape growth.</h2>
          </RevealOnScroll>
          <RevealOnScroll className="cap-grid">
            <div className="cap-card"><span className="num">01</span><h3>Strategy and Transformation</h3><p>Business strategy, operating models, transformation and market positioning.</p></div>
            <div className="cap-card"><span className="num">02</span><h3>Revenue and Go-to-Market</h3><p>Sales, marketing, customer success, partnerships and revenue operations.</p></div>
            <div className="cap-card"><span className="num">03</span><h3>Finance and Governance</h3><p>Financial strategy, controls, fundraising, board readiness and profitability.</p></div>
            <div className="cap-card"><span className="num">04</span><h3>Technology, Product and AI</h3><p>Technology strategy, product leadership, AI transformation and digital capability.</p></div>
            <div className="cap-card"><span className="num">05</span><h3>People and Organisation</h3><p>Organisation design, culture, performance, talent and leadership development.</p></div>
            <div className="cap-card"><span className="num">06</span><h3>Operations and Scale</h3><p>Operating discipline, process design, delivery, quality and business scale.</p></div>
          </RevealOnScroll>
          <RevealOnScroll className="partners-cta">
            <Link href="#partners" className="btn btn-outline">Meet the FxN Partners</Link>
          </RevealOnScroll>
        </div>
      </section>

      {/* SECTION 10 — SELECTED PARTNERS */}
      <section id="partners">
        <div className="wrap">
          <RevealOnScroll className="section-head">
            <span className="label">The People Behind FxN</span>
            <h2>Operators who have led before they advise.</h2>
          </RevealOnScroll>
          <RevealOnScroll>
            <PartnerGrid />
          </RevealOnScroll>
          <RevealOnScroll className="partners-cta">
            <Link href="/member-directory" className="btn btn-primary">View All 14 Partners</Link>
            <a href="https://forms.office.com/r/j6A1zADKL2" target="_blank" rel="noopener noreferrer" className="join-link">Join FxN as a Partner ↗</a>
          </RevealOnScroll>
        </div>
      </section>

      {/* SECTION 11 — PROOF AND CASE STUDIES */}
      <section className="dark">
        <div className="wrap">
          <RevealOnScroll className="section-head">
            <span className="label on-dark">Selected Outcomes</span>
            <h2>Leadership is measured by what changes.</h2>
          </RevealOnScroll>
          <RevealOnScroll className="case-grid">
            <div className="case-card">
              <div className="cond-label">GTM Pod</div>
              <h3>Building a repeatable GTM operating system</h3>
              <div className="row"><div className="k">Business Condition</div><p>A funded B2B SaaS company had founder-led sales, an unclear ICP and an inconsistent pipeline.</p></div>
              <div className="row"><div className="k">Leadership Intervention</div><p>A GTM Pod combining GTM, sales and revenue operations leadership over a structured 12-week engagement.</p></div>
              <div className="row"><div className="k">What Changed</div><p>A defined ICP, a repeatable sales process and a revenue operating cadence the founder no longer had to run personally.</p></div>
            </div>
            <div className="case-card">
              <div className="cond-label">Finance and Scale Pod</div>
              <h3>Preparing a founder-led company for capital</h3>
              <div className="row"><div className="k">Business Condition</div><p>A growth-stage company needed investor-ready financials but had no dedicated finance leadership.</p></div>
              <div className="row"><div className="k">Leadership Intervention</div><p>A Finance and Scale Pod established financial systems, board reporting and fundraising governance.</p></div>
              <div className="row"><div className="k">What Changed</div><p>Clean financial visibility, a board-ready reporting cadence and a stronger fundraising narrative.</p></div>
            </div>
            <div className="case-card">
              <div className="cond-label">Leadership as a Service</div>
              <h3>Evolving leadership as priorities shifted</h3>
              <div className="row"><div className="k">Business Condition</div><p>A scaling company needed financial discipline in one quarter and organisational redesign the next.</p></div>
              <div className="row"><div className="k">Leadership Intervention</div><p>An LaaS subscription providing flexible access to finance and people leadership as priorities changed.</p></div>
              <div className="row"><div className="k">What Changed</div><p>Continuous senior leadership coverage without hiring two separate full-time executives.</p></div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* SECTION 12 — THOUGHT LEADERSHIP */}
      <section id="insights">
        <div className="wrap">
          <RevealOnScroll className="section-head">
            <span className="label">FxN Insights</span>
            <h2>Building the next model of leadership in India.</h2>
          </RevealOnScroll>
          <RevealOnScroll className="insight-grid">
            <div className="insight-card"><span className="fmt">The Fractional Hour</span><h3>When should a company hire a full-time CXO?</h3></div>
            <div className="insight-card"><span className="fmt">Article</span><h3>What is Leadership as a Service?</h3></div>
            <div className="insight-card"><span className="fmt">Research</span><h3>Why fractional leadership is growing in India</h3></div>
            <div className="insight-card"><span className="fmt">Founder Insight</span><h3>Founder-led versus leadership-led companies</h3></div>
            <div className="insight-card"><span className="fmt">Leadership Guide</span><h3>How cross-functional Leadership Pods work</h3></div>
            <div className="insight-card"><span className="fmt">Research</span><h3>The economics of senior leadership</h3></div>
            <div className="insight-card"><span className="fmt">Partner Perspective</span><h3>Building leadership capacity in GCCs</h3></div>
            <div className="insight-card"><span className="fmt">Article</span><h3>When not to use a fractional leader</h3></div>
          </RevealOnScroll>
          <RevealOnScroll className="partners-cta">
            <Link href="/events-social" className="btn btn-outline">Explore Insights</Link>
            <Link href="/events-social#podcast" className="join-link">Listen to The Fractional Hour ↗</Link>
          </RevealOnScroll>
        </div>
      </section>

      {/* SECTION 13 — FINAL CTA */}
      <section className="final-cta" id="final-cta">
        <div className="wrap">
          <h2>What kind of leadership does your next stage require?</h2>
          <p>Tell us where the business is heading, what is changing and where leadership capacity is missing. FxN will help determine whether the company needs a Leadership Pod, Leadership as a Service or a focused leadership mandate.</p>
          <div className="hero-actions">
            <a href="https://cal.com/harinathpv" target="_blank" rel="noopener noreferrer" className="btn btn-teal">Start a Leadership Conversation</a>
            <Link href="#model" className="btn btn-outline light">Explore the FxN Model</Link>
          </div>
        </div>
      </section>
    </>
  );
}
