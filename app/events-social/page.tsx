import type { Metadata } from "next";
import { episodes } from "@/lib/data/episodes";
import { events, partnerEvents } from "@/lib/data/events";
import { partnerUpdates } from "@/lib/data/partnerUpdates";

export const metadata: Metadata = {
  title: "Events & Social — FxN | The Fractional Executive Network India",
  description:
    "The Fractional Hour podcast, upcoming FxN events, and updates from across the FxN Partner collective.",
};

export default function EventsSocialPage() {
  const sortedEvents = [...events].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="label">FxN Insights</span>
          <h1>Events &amp; Social</h1>
          <p>The Fractional Hour podcast, upcoming FxN events, and updates from across the FxN Partner collective.</p>
        </div>
      </section>

      {/* PODCAST */}
      <section id="podcast">
        <div className="wrap">
          <div className="section-head">
            <span className="label">The Fractional Hour</span>
            <h2>Conversations on leadership, from the people who&apos;ve done it.</h2>
          </div>
          <div className="podcast-layout">
            <div className="video-frame">
              <iframe
                src="https://www.youtube.com/embed/6iCvxlScYFo"
                title="How Fractional Leaders Accelerate Growth in Mid-Sized Firms"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="podcast-meta">
              <div className="show-name">The Fractional Hour</div>
              <h3>How Fractional Leaders Accelerate Growth in Mid-Sized Firms</h3>
              <div className="channel">theSTRATEGYmonk · YouTube</div>
              <p>A conversation on how fractional and shared leadership models help mid-sized companies move faster without adding permanent executive overhead.</p>
              <div style={{ marginTop: 24 }}>
                <a href="https://youtu.be/6iCvxlScYFo" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  Watch on YouTube
                </a>
              </div>
            </div>
          </div>

          <div className="ep-list">
            <div>
              {episodes.map((e) => (
                <div className="ep-row" key={e.youtubeId}>
                  <img className="ep-thumb" src={e.thumb} alt={e.title} />
                  <div className="ep-info">
                    <h3>{e.title}</h3>
                    <div className="ep-sub">{e.sub || ""}</div>
                  </div>
                  <a className="ep-link" href={e.link} target="_blank" rel="noopener noreferrer">Watch ↗</a>
                </div>
              ))}
            </div>
            {episodes.length === 0 && (
              <div className="ep-row placeholder">
                <div className="ep-thumb"></div>
                <div className="ep-info">
                  <h3>More episodes coming soon</h3>
                  <div className="ep-sub">Send over additional episode links and they&apos;ll be listed here.</div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section className="warm" id="events">
        <div className="wrap">
          <div className="section-head">
            <span className="label">Upcoming Events</span>
            <h2>Where to meet FxN next.</h2>
          </div>

          <div className="luma-banner">
            <div className="luma-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 2 C13 8 16 11 22 12 C16 13 13 16 12 22 C11 16 8 13 2 12 C8 11 11 8 12 2 Z" fill="#FFFFFF" />
              </svg>
            </div>
            <div className="luma-copy">
              <h3>Never miss an FxN event</h3>
              <p>
                Subscribe to our{" "}
                <span className="luma-word">
                  luma
                  <svg className="luma-spark" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2 C13 8 16 11 22 12 C16 13 13 16 12 22 C11 16 8 13 2 12 C8 11 11 8 12 2 Z" fill="currentColor" />
                  </svg>
                </span>{" "}
                calendar to get every upcoming session, roundtable and workshop as soon as it&apos;s announced.
              </p>
            </div>
            <a href="https://luma.com/fxn" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Subscribe on Luma
            </a>
          </div>

          <div className="event-grid">
            {sortedEvents.map((ev) => (
              <div className="event-card" key={ev.name + ev.date}>
                <div className="event-date-strip">
                  <span className="d">{ev.displayDate}</span>
                  <span className="fmt">{ev.format}</span>
                </div>
                <div className="event-body">
                  <h3>{ev.name}</h3>
                  <p>{ev.description}</p>
                  <a href={ev.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline">Register</a>
                </div>
              </div>
            ))}
            {sortedEvents.length === 0 && (
              <div className="event-card empty">
                <h3>Event details pending</h3>
                <p>Share your upcoming event names, dates, format and registration links, and they&apos;ll appear here as structured cards — sorted by date automatically.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* PARTNER / MEMBER DRIVEN EVENTS */}
      <section id="partner-events">
        <div className="wrap">
          <div className="section-head">
            <span className="label">Partner / Member Driven Events</span>
            <h2>Events from our community.</h2>
          </div>

          {partnerEvents.map((ev) => (
            <div className="partner-event-card" key={ev.host + ev.date}>
              <div className="partner-event-layout">
                <div className="partner-event-image">
                  <img src={ev.image} alt={ev.title} />
                </div>
                <div className="partner-event-content">
                  <h3>{ev.title}</h3>
                  <div className="partner-event-meta">
                    <div className="meta-row">
                      <span className="meta-label">Date</span>
                      <span className="meta-value">{ev.date}</span>
                    </div>
                    <div className="meta-row">
                      <span className="meta-label">Time</span>
                      <span className="meta-value">{ev.time}</span>
                    </div>
                  </div>
                  <p>{ev.description}</p>
                  <a href={ev.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    Link to Register
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PARTNER UPDATES */}
      <section className="dark" id="partner-updates">
        <div className="wrap">
          <div className="section-head">
            <span className="label on-dark">The FxN Collective</span>
            <h2>Partner updates from across the network.</h2>
            <p>A curated feed of what FxN Partners are publishing, speaking on and building — pulled together manually for now, with automated aggregation planned as the collective grows.</p>
          </div>
          <div className="update-grid">
            {partnerUpdates.map((u) => (
              <div className="update-card" key={u.name + u.link}>
                <div className="update-head">
                  <img className="update-avatar" src={u.avatar} alt={u.name} />
                  <div>
                    <div className="update-name">{u.name}</div>
                    <div className="update-role">{u.role}</div>
                  </div>
                </div>
                <div className="update-platform">{u.platform}</div>
                <div className="update-body"><p>{u.text}</p></div>
                <a href={u.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ alignSelf: "flex-start" }}>
                  View Post
                </a>
              </div>
            ))}
            {partnerUpdates.length === 0 && (
              <div className="update-empty">
                Partner updates will appear here once curated. Share a partner&apos;s post link and a short line of context, and it&apos;ll be added to this feed.
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
