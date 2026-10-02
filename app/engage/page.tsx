import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engage — FxN | The Fractional Executive Network India",
  description:
    "Get to know FxN before deciding how you want to engage. Start with an FxN Monthly Meeting.",
};

const OCTOBER_REGISTRATION_URL = "https://fxn.zohobookings.in/October2026";

export default function EngagePage() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="label">Engage</span>
          <h1>Experience FxN</h1>
          <p>Get to know FxN before deciding how you want to engage.</p>
        </div>
      </section>

      <section id="about-fxn">
        <div className="wrap engage-intro">
          <div className="section-head">
            <span className="label">Why FxN exists</span>
            <h2 className="text-balance">Advancing fractional leadership in India.</h2>
          </div>
          <div className="engage-body">
            <p>
              FxN exists to make fractional leadership a recognised and trusted way for businesses in India to
              access experienced executive talent.
            </p>
            <p>
              Our mission is to bring together committed, practising Fractional Executives who learn from one
              another, strengthen awareness of the profession, and collaborate to create distinctive offerings
              that address real business needs.
            </p>
            <p className="engage-emphasis">At its core, FxN is about advancing fractional leadership in India.</p>
            <p>
              Business opportunities may naturally emerge through the relationships built within the network, but
              FxN is not a lead-generation network. The community is built around participation, shared learning,
              professional growth and collaboration.
            </p>
          </div>
        </div>
      </section>

      <section className="warm" id="monthly-meetings">
        <div className="wrap engage-meeting">
          <div className="engage-meeting-copy">
            <span className="label">Start here</span>
            <h2 className="text-balance">Start with an FxN Monthly Meeting</h2>
            <p className="engage-lead">The best way to understand FxN is to experience it.</p>
            <p>
              Our FxN Monthly Meetings bring together practising Fractional Executives to exchange perspectives,
              learn from one another, discuss business challenges and explore how fractional leadership can create
              greater value for Indian businesses.
            </p>
            <p>
              You don&apos;t need to make a commitment to FxN to attend. Come to the meetings, meet the community,
              understand how we work, and decide whether FxN is something you would like to be part of.
            </p>
          </div>

          <aside className="engage-card" aria-label="Meeting details">
            <dl>
              <div>
                <dt>When</dt>
                <dd>Every Wednesday, 7:00 PM IST</dd>
                <dd className="engage-note">During the monthly programme</dd>
              </div>
              <div>
                <dt>Participation Fee</dt>
                <dd>₹499</dd>
                <dd className="engage-note">Including GST</dd>
              </div>
            </dl>
            <a
              href={OCTOBER_REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Participate in the October FxN Meetings →
            </a>
          </aside>
        </div>
      </section>
    </>
  );
}
