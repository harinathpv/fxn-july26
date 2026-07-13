'use client';

import Link from 'next/link';
import RevealOnScroll from '@/components/RevealOnScroll';

export default function GTMPodPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="hero" style={{ paddingBottom: '80px' }}>
        <div className="wrap">
          <div className="hero-copy">
            <span className="label" style={{ color: 'var(--fn-gtm)' }}>GTM Pod</span>
            <h1>Fix Your GTM Motion<br />Before You Scale It.</h1>
            <p className="lede">A 12-week, output-driven experience where founders and GTM leaders build a repeatable commercial engine using their own real-time data.</p>
            <div className="hero-actions">
              <Link href="#apply" className="btn btn-teal">Join the Next Cohort</Link>
              <Link href="#curriculum" className="btn btn-outline light">View Curriculum</Link>
            </div>
            <div className="hero-proof">
              <div><span className="num">12</span><span className="cap">Weeks</span></div>
              <div><span className="num">7</span><span className="cap">Deliverables</span></div>
              <div><span className="num">7+</span><span className="cap">Practitioners</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* KEY BENEFITS */}
      <section id="benefits">
        <div className="wrap">
          <RevealOnScroll className="section-head">
            <span className="label" style={{ color: 'var(--fn-gtm)' }}>What You'll Gain</span>
            <h2>Outcomes, not just lessons</h2>
          </RevealOnScroll>
          <RevealOnScroll className="gap-grid">
            <div className="cell">
              <span className="n" style={{ color: 'var(--fn-gtm)' }}>01</span>
              <h4 style={{ color: 'var(--navy-deep)', fontSize: '1.1rem', fontWeight: '600', marginBottom: '8px' }}>GTM Clarity</h4>
              <p>A clear, shared view of your ICP, motion, and where pipeline actually comes from.</p>
            </div>
            <div className="cell">
              <span className="n" style={{ color: 'var(--fn-gtm)' }}>02</span>
              <h4 style={{ color: 'var(--navy-deep)', fontSize: '1.1rem', fontWeight: '600', marginBottom: '8px' }}>Executable Playbooks</h4>
              <p>Working playbooks for positioning, demand gen, and sales — built with your data.</p>
            </div>
            <div className="cell">
              <span className="n" style={{ color: 'var(--fn-gtm)' }}>03</span>
              <h4 style={{ color: 'var(--navy-deep)', fontSize: '1.1rem', fontWeight: '600', marginBottom: '8px' }}>Pipeline Predictability</h4>
              <p>Improved conversion, healthier unit economics, and a forecast you can trust.</p>
            </div>
            <div className="cell">
              <span className="n" style={{ color: 'var(--fn-gtm)' }}>04</span>
              <h4 style={{ color: 'var(--navy-deep)', fontSize: '1.1rem', fontWeight: '600', marginBottom: '8px' }}>Aligned Revenue Teams</h4>
              <p>Sales, marketing, partnerships, and CS rowing in the same direction.</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section className="warm">
        <div className="wrap">
          <RevealOnScroll className="section-head">
            <span className="label" style={{ color: 'var(--fn-gtm)' }}>The Motion Clarity Problem</span>
            <h2>Most funded companies don&apos;t fail because of the product.</h2>
            <p>They fail because the GTM motion isn&apos;t repeatable.</p>
          </RevealOnScroll>
          <RevealOnScroll className="gap-grid">
            <div className="cell">
              <span className="n" style={{ color: 'var(--fn-gtm)' }}>01</span>
              <h4 style={{ color: 'var(--navy-deep)', fontSize: '1.1rem', fontWeight: '600', marginBottom: '8px' }}>Data-Driven Decisions</h4>
              <p>Replace gut feelings with metrics that matter. Build on real pipeline data, not assumptions.</p>
            </div>
            <div className="cell">
              <span className="n" style={{ color: 'var(--fn-gtm)' }}>02</span>
              <h4 style={{ color: 'var(--navy-deep)', fontSize: '1.1rem', fontWeight: '600', marginBottom: '8px' }}>Pod Alignment</h4>
              <p>Break down walls between sales, marketing, and CS. Create a unified revenue engine.</p>
            </div>
            <div className="cell">
              <span className="n" style={{ color: 'var(--fn-gtm)' }}>03</span>
              <h4 style={{ color: 'var(--navy-deep)', fontSize: '1.1rem', fontWeight: '600', marginBottom: '8px' }}>Working Playbooks</h4>
              <p>Move beyond theory to executable playbooks built with your actual data and context.</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* WHY FXN GTM POD */}
      <section id="why-fxn">
        <div className="wrap">
          <RevealOnScroll className="section-head">
            <span className="label" style={{ color: 'var(--fn-gtm)' }}>Why the FxN GTM Pod</span>
            <h2>Not another GTM course</h2>
          </RevealOnScroll>
          <RevealOnScroll>
            <table className="compare-table" style={{ marginTop: '48px' }}>
              <thead>
                <tr>
                  <th>FxN GTM Pod</th>
                  <th>Generic GTM Courses</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Built with your real data</strong><br/>Your pipeline, your ICP</td>
                  <td>Generic templates</td>
                </tr>
                <tr>
                  <td><strong>Tangible deliverables</strong><br/>7 working playbooks</td>
                  <td>Slides & notes</td>
                </tr>
                <tr>
                  <td><strong>Who teaches</strong><br/>Practicing operators</td>
                  <td>Career educators</td>
                </tr>
                <tr>
                  <td><strong>Team alignment</strong><br/>Founder + GTM leader pods</td>
                  <td>Solo learner</td>
                </tr>
                <tr>
                  <td><strong>Time commitment</strong><br/>3–4 focused hrs/week</td>
                  <td>Self-paced, often abandoned</td>
                </tr>
                <tr>
                  <td><strong>AI & modern GTM</strong><br/>Built into every phase</td>
                  <td>Rarely covered</td>
                </tr>
              </tbody>
            </table>
          </RevealOnScroll>
        </div>
      </section>

      {/* CURRICULUM */}
      <section id="curriculum" className="warm">
        <div className="wrap">
          <RevealOnScroll className="section-head">
            <span className="label" style={{ color: 'var(--fn-gtm)' }}>12-Week Curriculum</span>
            <h2>What you&apos;ll build, phase by phase</h2>
          </RevealOnScroll>

          {/* PHASE 1: DIAGNOSE */}
          <RevealOnScroll style={{ marginTop: '64px' }}>
            <div style={{ marginBottom: '64px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
                <span style={{ fontSize: '32px', fontWeight: '600', color: 'var(--fn-gtm)' }}>1</span>
                <h3 style={{ marginBottom: 0 }}>DIAGNOSE — Weeks 1-2</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
                <div style={{ padding: '24px', border: `1px solid var(--line)`, borderRadius: 'var(--radius)' }}>
                  <h4 style={{ color: 'var(--navy-deep)', marginBottom: '12px' }}>Week 1: EPIC Foundations</h4>
                  <p style={{ fontSize: '0.95rem' }}>Diagnostic layer foundation and EPIC framework introduction</p>
                </div>
                <div style={{ padding: '24px', border: `1px solid var(--line)`, borderRadius: 'var(--radius)' }}>
                  <h4 style={{ color: 'var(--navy-deep)', marginBottom: '12px' }}>Deliverable</h4>
                  <p style={{ fontSize: '0.95rem' }}>EPIC Framework Overview</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* PHASE 2: BUILD */}
          <RevealOnScroll>
            <div style={{ marginBottom: '64px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
                <span style={{ fontSize: '32px', fontWeight: '600', color: 'var(--fn-gtm)' }}>2</span>
                <h3 style={{ marginBottom: 0 }}>BUILD — Weeks 3-9</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                <div style={{ padding: '24px', border: `1px solid var(--line)`, borderRadius: 'var(--radius)' }}>
                  <h4 style={{ color: 'var(--navy-deep)', marginBottom: '8px' }}>Week 2</h4>
                  <p style={{ fontSize: '0.95rem', marginBottom: '12px' }}><strong>Live EPIC Scoring</strong></p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--grey)' }}>GTM baseline assessment</p>
                </div>
                <div style={{ padding: '24px', border: `1px solid var(--line)`, borderRadius: 'var(--radius)' }}>
                  <h4 style={{ color: 'var(--navy-deep)', marginBottom: '8px' }}>Week 3</h4>
                  <p style={{ fontSize: '0.95rem', marginBottom: '12px' }}><strong>Partnerships</strong></p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--grey)' }}>Partner strategy & governance</p>
                </div>
                <div style={{ padding: '24px', border: `1px solid var(--line)`, borderRadius: 'var(--radius)' }}>
                  <h4 style={{ color: 'var(--navy-deep)', marginBottom: '8px' }}>Week 4</h4>
                  <p style={{ fontSize: '0.95rem', marginBottom: '12px' }}><strong>Channel Sales & BD</strong></p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--grey)' }}>Channel execution playbook</p>
                </div>
                <div style={{ padding: '24px', border: `1px solid var(--line)`, borderRadius: 'var(--radius)' }}>
                  <h4 style={{ color: 'var(--navy-deep)', marginBottom: '8px' }}>Week 5</h4>
                  <p style={{ fontSize: '0.95rem', marginBottom: '12px' }}><strong>Product-Led Growth</strong></p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--grey)' }}>PLG readiness assessment</p>
                </div>
                <div style={{ padding: '24px', border: `1px solid var(--line)`, borderRadius: 'var(--radius)' }}>
                  <h4 style={{ color: 'var(--navy-deep)', marginBottom: '8px' }}>Week 6</h4>
                  <p style={{ fontSize: '0.95rem', marginBottom: '12px' }}><strong>Inbound & Buyer Journey</strong></p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--grey)' }}>Buyer journey mapping</p>
                </div>
                <div style={{ padding: '24px', border: `1px solid var(--line)`, borderRadius: 'var(--radius)' }}>
                  <h4 style={{ color: 'var(--navy-deep)', marginBottom: '8px' }}>Week 7</h4>
                  <p style={{ fontSize: '0.95rem', marginBottom: '12px' }}><strong>Outbound & Pipeline</strong></p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--grey)' }}>AXIS architecture</p>
                </div>
                <div style={{ padding: '24px', border: `1px solid var(--line)`, borderRadius: 'var(--radius)' }}>
                  <h4 style={{ color: 'var(--navy-deep)', marginBottom: '8px' }}>Week 8</h4>
                  <p style={{ fontSize: '0.95rem', marginBottom: '12px' }}><strong>MEDDPICC Sales</strong></p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--grey)' }}>Sales process customization</p>
                </div>
                <div style={{ padding: '24px', border: `1px solid var(--line)`, borderRadius: 'var(--radius)' }}>
                  <h4 style={{ color: 'var(--navy-deep)', marginBottom: '8px' }}>Week 9</h4>
                  <p style={{ fontSize: '0.95rem', marginBottom: '12px' }}><strong>Community & CS</strong></p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--grey)' }}>Community-Led Growth</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* PHASE 3: ACCELERATE */}
          <RevealOnScroll>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
                <span style={{ fontSize: '32px', fontWeight: '600', color: 'var(--fn-gtm)' }}>3</span>
                <h3 style={{ marginBottom: 0 }}>ACCELERATE — Weeks 10-12</h3>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                <div style={{ padding: '24px', border: `1px solid var(--line)`, borderRadius: 'var(--radius)' }}>
                  <h4 style={{ color: 'var(--navy-deep)', marginBottom: '8px' }}>Week 10</h4>
                  <p style={{ fontSize: '0.95rem', marginBottom: '12px' }}><strong>GTM Org Design</strong></p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--grey)' }}>Organization structure</p>
                </div>
                <div style={{ padding: '24px', border: `1px solid var(--line)`, borderRadius: 'var(--radius)' }}>
                  <h4 style={{ color: 'var(--navy-deep)', marginBottom: '8px' }}>Week 11</h4>
                  <p style={{ fontSize: '0.95rem', marginBottom: '12px' }}><strong>Unit Economics</strong></p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--grey)' }}>Finance & revenue model</p>
                </div>
                <div style={{ padding: '24px', border: `1px solid var(--line)`, borderRadius: 'var(--radius)' }}>
                  <h4 style={{ color: 'var(--navy-deep)', marginBottom: '8px' }}>Week 12</h4>
                  <p style={{ fontSize: '0.95rem', marginBottom: '12px' }}><strong>AI GTM & Review</strong></p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--grey)' }}>Final playbook & graduation</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section>
        <div className="wrap">
          <RevealOnScroll className="section-head">
            <span className="label" style={{ color: 'var(--fn-gtm)' }}>7 Working Deliverables</span>
            <h2>Tangible artifacts, not just slides</h2>
            <p style={{ marginTop: '16px' }}>Graduate with a complete GTM Playbook you can run from day one.</p>
          </RevealOnScroll>
          <RevealOnScroll className="cap-grid" style={{ marginTop: '48px' }}>
            <div className="cap-card">
              <span className="num">01</span>
              <h3>EPIC Framework Overview</h3>
              <p>A working artifact you can execute immediately.</p>
            </div>
            <div className="cap-card">
              <span className="num">02</span>
              <h3>EPIC Scoring & GTM Baseline</h3>
              <p>A working artifact you can execute immediately.</p>
            </div>
            <div className="cap-card">
              <span className="num">03</span>
              <h3>SCOPE & Partnership Governance</h3>
              <p>A working artifact you can execute immediately.</p>
            </div>
            <div className="cap-card">
              <span className="num">04</span>
              <h3>Channel Execution Playbook</h3>
              <p>A working artifact you can execute immediately.</p>
            </div>
            <div className="cap-card">
              <span className="num">05</span>
              <h3>PLG Readiness Assessment</h3>
              <p>A working artifact you can execute immediately.</p>
            </div>
            <div className="cap-card">
              <span className="num">06</span>
              <h3>Buyer Journey & Inbound Playbook</h3>
              <p>A working artifact you can execute immediately.</p>
            </div>
            <div className="cap-card">
              <span className="num">07</span>
              <h3>AXIS Outbound DemandGen</h3>
              <p>A working artifact you can execute immediately.</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* PROGRAM LOGISTICS */}
      <section className="warm">
        <div className="wrap">
          <RevealOnScroll className="section-head">
            <span className="label" style={{ color: 'var(--fn-gtm)' }}>Program Logistics</span>
            <h2>Designed for busy founders</h2>
          </RevealOnScroll>
          <RevealOnScroll className="gap-grid" style={{ marginTop: '48px' }}>
            <div className="cell">
              <span className="n" style={{ color: 'var(--fn-gtm)' }}>01</span>
              <h4 style={{ color: 'var(--navy-deep)', fontSize: '1.1rem', fontWeight: '600', marginBottom: '8px' }}>1 Live Session/Week</h4>
              <p>Expert-led, interactive workshops</p>
            </div>
            <div className="cell">
              <span className="n" style={{ color: 'var(--fn-gtm)' }}>02</span>
              <h4 style={{ color: 'var(--navy-deep)', fontSize: '1.1rem', fontWeight: '600', marginBottom: '8px' }}>3–4 Hours/Week</h4>
              <p>Designed for busy founders</p>
            </div>
            <div className="cell">
              <span className="n" style={{ color: 'var(--fn-gtm)' }}>03</span>
              <h4 style={{ color: 'var(--navy-deep)', fontSize: '1.1rem', fontWeight: '600', marginBottom: '8px' }}>Private Pod Group</h4>
              <p>Async access to practitioners</p>
            </div>
            <div className="cell">
              <span className="n" style={{ color: 'var(--fn-gtm)' }}>04</span>
              <h4 style={{ color: 'var(--navy-deep)', fontSize: '1.1rem', fontWeight: '600', marginBottom: '8px' }}>Practitioner Review</h4>
              <p>Direct feedback on your work</p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* WHO IS THIS FOR */}
      <section>
        <div className="wrap">
          <RevealOnScroll className="section-head">
            <span className="label" style={{ color: 'var(--fn-gtm)' }}>Who It&apos;s For</span>
            <h2>Is the GTM Pod right for you?</h2>
          </RevealOnScroll>
          <RevealOnScroll style={{ marginTop: '48px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
            <div>
              <h3 style={{ color: 'var(--fn-gtm)', marginBottom: '20px' }}>Great fit if…</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li style={{ display: 'flex', gap: '12px' }}><span style={{ color: 'var(--fn-gtm)', fontWeight: '600' }}>✓</span> <span>You&apos;re a funded B2B startup or $1M+ revenue company</span></li>
                <li style={{ display: 'flex', gap: '12px' }}><span style={{ color: 'var(--fn-gtm)', fontWeight: '600' }}>✓</span> <span>You own or lead GTM (founder, CRO, CMO, Head of GTM)</span></li>
                <li style={{ display: 'flex', gap: '12px' }}><span style={{ color: 'var(--fn-gtm)', fontWeight: '600' }}>✓</span> <span>You want working playbooks, not more theory</span></li>
                <li style={{ display: 'flex', gap: '12px' }}><span style={{ color: 'var(--fn-gtm)', fontWeight: '600' }}>✓</span> <span>You&apos;re ready to use your real company data</span></li>
                <li style={{ display: 'flex', gap: '12px' }}><span style={{ color: 'var(--fn-gtm)', fontWeight: '600' }}>✓</span> <span>You can commit 3–4 hours per week for 12 weeks</span></li>
              </ul>
            </div>
            <div>
              <h3 style={{ color: 'var(--fn-gtm)', marginBottom: '20px' }}>Not the right fit if…</h3>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li style={{ display: 'flex', gap: '12px' }}><span style={{ color: 'var(--grey)', fontWeight: '600' }}>✗</span> <span>You&apos;re pre-revenue with no GTM motion yet</span></li>
                <li style={{ display: 'flex', gap: '12px' }}><span style={{ color: 'var(--grey)', fontWeight: '600' }}>✗</span> <span>You want a passive, watch-only course</span></li>
                <li style={{ display: 'flex', gap: '12px' }}><span style={{ color: 'var(--grey)', fontWeight: '600' }}>✗</span> <span>You&apos;re looking for a quick hack, not a system</span></li>
                <li style={{ display: 'flex', gap: '12px' }}><span style={{ color: 'var(--grey)', fontWeight: '600' }}>✗</span> <span>You can&apos;t share real data or commit the time</span></li>
                <li style={{ display: 'flex', gap: '12px' }}><span style={{ color: 'var(--grey)', fontWeight: '600' }}>✗</span> <span>You expect done-for-you agency execution</span></li>
              </ul>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* INVESTMENT */}
      <section id="apply" className="warm">
        <div className="wrap">
          <RevealOnScroll className="section-head">
            <span className="label" style={{ color: 'var(--fn-gtm)' }}>Investment</span>
            <h2>Simple, transparent pricing</h2>
            <p>Full 12-week curriculum with all deliverables included.</p>
          </RevealOnScroll>
          <RevealOnScroll style={{ marginTop: '48px', textAlign: 'center' }}>
            <div style={{ padding: '48px', border: `2px solid var(--fn-gtm)`, borderRadius: 'var(--radius)', maxWidth: '600px', margin: '0 auto' }}>
              <div style={{ fontSize: '14px', fontWeight: '600', color: 'var(--fn-gtm)', marginBottom: '16px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Standard Price</div>
              <div style={{ fontSize: '48px', fontWeight: '600', color: 'var(--navy-deep)', marginBottom: '4px' }}>₹1,00,000</div>
              <div style={{ fontSize: '16px', color: 'var(--grey)', marginBottom: '32px' }}>per participant</div>
              <div style={{ fontSize: '14px', color: 'var(--navy-deep)', fontWeight: '600', marginBottom: '8px' }}>Next Cohort</div>
              <div style={{ fontSize: '16px', color: 'var(--grey)', marginBottom: '32px' }}>27 June 2026 at 9:30 AM IST</div>
              <p style={{ fontSize: '13px', color: 'var(--grey)', marginBottom: '32px' }}>Capped at a small group for high-touch practitioner review.</p>
              <div style={{ textAlign: 'left', fontSize: '14px', color: 'var(--grey)', lineHeight: '1.8', marginBottom: '32px' }}>
                <div style={{ marginBottom: '12px' }}>✓ 12-week practitioner-led cohort</div>
                <div style={{ marginBottom: '12px' }}>✓ 7 working deliverables</div>
                <div style={{ marginBottom: '12px' }}>✓ Private pod group support</div>
                <div style={{ marginBottom: '12px' }}>✓ Practitioner review on all work</div>
                <div style={{ marginBottom: '12px' }}>✓ Day 1 ready GTM Playbook</div>
              </div>
              <Link href="#" className="btn btn-teal" style={{ width: '100%', justifyContent: 'center', marginBottom: '16px' }}>Apply Now</Link>
              <div style={{ fontSize: '13px', color: 'var(--grey)' }}>No commitment required. Speak to an FxN advisor before enrolling.</div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="dark" id="final-cta">
        <div className="wrap">
          <RevealOnScroll style={{ textAlign: 'center' }}>
            <h2 style={{ color: 'var(--ivory)' }}>Ready to fix your GTM motion?</h2>
            <p style={{ color: 'rgba(250,246,236,0.8)', fontSize: '1.1rem', marginTop: '16px', marginBottom: '32px' }}>Join a cohort of founders and GTM leaders building repeatable commercial engines.</p>
            <Link href="#apply" className="btn btn-teal" style={{ marginRight: '16px' }}>Join the Next Cohort</Link>
            <Link href="/" className="btn btn-outline light">Back to FxN</Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
