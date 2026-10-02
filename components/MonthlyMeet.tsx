const REGISTER_URL = "https://fxn.zohobookings.in/October2026";

const sessions = [
  { day: "07", weekday: "Wed", label: "Session 1" },
  { day: "13", weekday: "Tue", label: "Session 2" },
  { day: "21", weekday: "Wed", label: "Session 3" },
  { day: "28", weekday: "Wed", label: "Session 4" },
];

const terms = [
  "One registration covers all 4 Monthly Meetings in October.",
  "Joining late? Registration does not roll over to the next month.",
  "The monthly meeting fee is non-refundable.",
];

export default function MonthlyMeet() {
  return (
    <article className="mm-card" aria-labelledby="mm-title">
      <div className="mm-main">
        <div className="mm-eyebrow">
          <span>Monthly Meet</span>
          <span className="mm-dot" aria-hidden="true" />
          <span>Online · 4 Sessions</span>
        </div>
        <h3 id="mm-title">FxN October 2026 Monthly Meet</h3>
        <p className="mm-desc">
          Practising Fractional Executives come together to exchange perspectives, learn from one another, discuss real
          business challenges and explore how fractional leadership creates greater value for Indian businesses.
        </p>

        <ol className="mm-sessions" aria-label="October 2026 session dates">
          {sessions.map((s) => (
            <li className="mm-session" key={s.day}>
              <span className="mm-session-label">{s.label}</span>
              <span className="mm-session-date">
                <span className="mm-day">{s.day}</span>
                <span className="mm-month">
                  Oct
                  <br />
                  {s.weekday}
                </span>
              </span>
              <span className="mm-time">7:00 – 8:30 PM IST</span>
            </li>
          ))}
        </ol>
      </div>

      <aside className="mm-side" aria-label="Registration">
        <div className="mm-price-label">Participation fee</div>
        <div className="mm-price">
          ₹499 <span>incl. GST</span>
        </div>
        <div className="mm-price-note">One fee · All 4 meetings</div>

        <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="btn mm-btn">
          Register for October →
        </a>

        <ul className="mm-terms">
          {terms.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </aside>
    </article>
  );
}
