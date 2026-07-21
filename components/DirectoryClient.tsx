"use client";

import { useMemo, useState } from "react";
import type { DirectoryMember } from "@/lib/data/directory";

const ROLE_OPTIONS = ["Fractional CXO", "Advisor", "Consultant", "Coach / Mentor"];
const INDUSTRY_OPTIONS = [
  "FinTech", "Retail / Ecommerce", "SaaS", "AI & Deep Tech", "HealthTech",
  "Manufacturing", "Agriculture / FoodTech", "PropTech / Real Estate", "EdTech",
  "Travel & Hospitality", "Media & Entertainment", "Logistics / Mobility",
];
const STAGE_OPTIONS = [
  "Idea Stage", "Early Stage", "Growth Stage", "Scaling", "Mid-Large Enterprise", "Pre-IPO",
];

function initials(name: string) {
  return name.split(" ").filter(Boolean).map((w) => w[0]).slice(0, 2).join("").toUpperCase();
}

function TagRow({ list, more, roleTag = false }: { list: string[]; more: number; roleTag?: boolean }) {
  return (
    <div className="tag-row">
      {list.map((t) => (
        <span className={`tag${roleTag ? " role" : ""}`} key={t}>{t}</span>
      ))}
      {more > 0 && <span className="tag more">+{more}</span>}
    </div>
  );
}

function MemberCard({ m }: { m: DirectoryMember }) {
  return (
    <div className={`member-card${m.verified ? " verified" : ""}`}>
      <div className="mc-top">
        <div className="mc-avatar">
          {m.img ? (
            <img src={`/members/${m.img}`} alt={m.name} loading="lazy" />
          ) : (
            <span className="initials">{initials(m.name)}</span>
          )}
        </div>
        <div className="mc-id">
          <h3>{m.name}</h3>
          <div className="years">{m.years}</div>
          {m.verified && (
            <span className="badge-verified" style={{ marginTop: 6 }}>
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M9 12l2 2 4-4" stroke="#2A1E08" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Verified
            </span>
          )}
        </div>
      </div>
      <div className="mc-body">
        <div className="mc-block">
          <div className="bl">Industries</div>
          <TagRow list={m.industries} more={m.industriesMore} />
        </div>
        <div className="mc-block">
          <div className="bl">Key Skills</div>
          <TagRow list={m.skills} more={m.skillsMore} />
        </div>
        <div className="mc-block">
          <div className="bl">Company Stages</div>
          <TagRow list={m.stages} more={m.stagesMore} />
        </div>
        <div className="mc-block" style={{ marginBottom: 0 }}>
          <TagRow list={m.roles} more={m.rolesMore} roleTag />
        </div>
        <div className="mc-links">
          <a href={m.li} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          {m.site && <a href={m.site} target="_blank" rel="noopener noreferrer">Website ↗</a>}
        </div>
      </div>
    </div>
  );
}

export default function DirectoryClient({ members }: { members: DirectoryMember[] }) {
  const [query, setQuery] = useState("");
  const [roles, setRoles] = useState<Set<string>>(new Set());
  const [industries, setIndustries] = useState<Set<string>>(new Set());
  const [stages, setStages] = useState<Set<string>>(new Set());

  function toggle(set: Set<string>, setter: (s: Set<string>) => void, value: string) {
    const next = new Set(set);
    if (next.has(value)) next.delete(value);
    else next.add(value);
    setter(next);
  }

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return members.filter((m) => {
      const matchesSearch = !q || m.name.toLowerCase().includes(q);
      const matchesRole = roles.size === 0 || m.roles.some((r) => roles.has(r));
      const matchesIndustry = industries.size === 0 || m.industries.some((i) => industries.has(i));
      const matchesStage = stages.size === 0 || m.stages.some((s) => stages.has(s));
      return matchesSearch && matchesRole && matchesIndustry && matchesStage;
    });
  }, [members, query, roles, industries, stages]);

  const verifiedList = filtered.filter((m) => m.verified).sort((a, b) => a.name.localeCompare(b.name));
  const standardList = filtered.filter((m) => !m.verified).sort((a, b) => a.name.localeCompare(b.name));

  return (
    <>
      <section className="filter-section">
        <div className="filter-inner">
          <div className="filter-row">
            <div className="search-box">
              <input
                type="text"
                placeholder="Search by name…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <div className="result-count">Showing {filtered.length} of {members.length} members</div>
          </div>
          <div className="filter-groups">
            <div className="filter-group">
              <span className="fg-label">Role</span>
              <div className="chip-row">
                {ROLE_OPTIONS.map((o) => (
                  <span
                    key={o}
                    className={`chip${roles.has(o) ? " active" : ""}`}
                    onClick={() => toggle(roles, setRoles, o)}
                  >
                    {o}
                  </span>
                ))}
              </div>
            </div>
            <div className="filter-group">
              <span className="fg-label">Industry</span>
              <div className="chip-row">
                {INDUSTRY_OPTIONS.map((o) => (
                  <span
                    key={o}
                    className={`chip${industries.has(o) ? " active" : ""}`}
                    onClick={() => toggle(industries, setIndustries, o)}
                  >
                    {o}
                  </span>
                ))}
              </div>
            </div>
            <div className="filter-group">
              <span className="fg-label">Company Stage</span>
              <div className="chip-row">
                {STAGE_OPTIONS.map((o) => (
                  <span
                    key={o}
                    className={`chip${stages.has(o) ? " active" : ""}`}
                    onClick={() => toggle(stages, setStages, o)}
                  >
                    {o}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="dir-section">
        <div className="wrap">
          {verifiedList.length > 0 && (
            <>
              <div className="tier-heading"><h2>Verified FxN Partners</h2><div className="line"></div></div>
              <div className="member-grid">
                {verifiedList.map((m) => <MemberCard m={m} key={m.name} />)}
              </div>
            </>
          )}
          {standardList.length > 0 && (
            <>
              <div className="tier-heading"><h2>Directory Members</h2><div className="line"></div></div>
              <div className="member-grid">
                {standardList.map((m) => <MemberCard m={m} key={m.name} />)}
              </div>
            </>
          )}
          {filtered.length === 0 && (
            <div className="empty-state" style={{ display: "block" }}>
              No members match these filters. Try clearing a filter or search term.
            </div>
          )}
        </div>
      </section>
    </>
  );
}
