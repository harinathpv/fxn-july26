import { partners } from "@/lib/data/partners";

export default function PartnerGrid() {
  return (
    <div className="partner-grid">
      {partners.map((p) => (
        <div className="partner-card" key={p.name}>
          <div className="partner-photo">
            <img
              src={`https://www.fxn.network/images/members/${p.img}`}
              alt={p.name}
              loading="lazy"
            />
          </div>
          <div className="partner-body">
            <h3>{p.name}</h3>
            <div className="partner-role">{p.role}</div>
            <div className="partner-domain">{p.domain}</div>
            <div className="sfl">Best suited for</div>
            <ul className="sfl-list">
              {p.fit.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <div className="roles">FxN roles: {p.pods}</div>
            <a className="li-link" href={p.li} target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
