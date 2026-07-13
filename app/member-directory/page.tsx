import type { Metadata } from "next";
import DirectoryClient from "@/components/DirectoryClient";
import { directoryMembers } from "@/lib/data/directory";

export const metadata: Metadata = {
  title: "Member Directory — FxN | The Fractional Executive Network India",
  description:
    "Browse FxN's network of fractional executives across industries, specialisations and company stages. Verified FxN Partners are highlighted at the top.",
};

export default function MemberDirectoryPage() {
  return (
    <>
      <section className="dir-hero">
        <div className="wrap">
          <span className="label">The FxN Collective</span>
          <h1>FxN Member Directory</h1>
          <p>Browse our network of fractional executives across industries, specialisations and company stages. Verified FxN Partners are curated, vetted more deeply and shown first.</p>
          <div className="legend">
            <div className="item">
              <span className="badge-verified">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M9 12l2 2 4-4" stroke="#2A1E08" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Verified
              </span>
              FxN Partner — curated, featured profile
            </div>
            <div className="item"><span className="tag" style={{ borderColor: "#4a5a70" }}>Standard</span> Open directory member</div>
          </div>
        </div>
      </section>

      <DirectoryClient members={directoryMembers} />
    </>
  );
}
