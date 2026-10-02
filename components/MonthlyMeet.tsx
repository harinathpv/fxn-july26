const REGISTER_URL = "https://fxn.zohobookings.in/October2026";

const sessions = [
  { day: "07", weekday: "Wednesday" },
  { day: "13", weekday: "Tuesday" },
  { day: "21", weekday: "Wednesday" },
  { day: "28", weekday: "Wednesday" },
];

const terms = [
  "One registration covers all 4 Monthly Meetings in October.",
  "If you join in the last week, the registration will not roll over to the next month.",
  "The monthly meeting fee is non-refundable.",
];

export default function MonthlyMeet() {
  return (
    <article className="mm-card" aria-labelledby="mm-title">
      <div className="mm-dates">
        <div className="mm-dates-head">
          <span className="mm-month-label">October 2026</span>
          <span className="mm-format">Online · 4 Sessions</span>
        </div>
        <ol className="mm-session-list" aria-label="October 2026 session dates">
          {sessions.map((s) => (
            <li key={s.day} className="mm-session-row">
              <span className="mm-day">{s.day}</span>
              <span className="mm-session-meta">
                <span className="mm-weekday">{s.weekday}, Oct</span>
                <span className="mm-time">7:00 PM – 8:30 PM IST</span>
              </span>
            </li>
          ))}
        </ol>
      </div>

      <div className="mm-body">
        <h3 id="mm-title">FxN October 2026 Monthly Meet</h3>
        <p className="mm-desc">
          Our FxN Monthly Meetings bring together practising Fractional Executives to exchange perspectives, learn from
          one another, discuss business challenges and explore how fractional leadership can create greater value for
          Indian businesses.
        </p>

        <div className="mm-fee">
          <span className="mm-fee-label">Participation Fee</span>
          <span className="mm-fee-value">
            ₹499 <small>including GST · one fee for all 4 meetings</small>
          </span>
        </div>

        <ul className="mm-terms">
          {terms.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary mm-btn">
          Register for the October Meetings →
        </a>
      </div>
    </article>
  );
}
