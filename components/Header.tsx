"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-nav">
      <div className="nav-inner">
        <Link href="/" className="logo">
          <img
            className="logo-mark"
            src="https://www.fxn.network/images/fxn-logo-new.png"
            alt="FxN — The Fractional Executive Network India"
          />
        </Link>
        <nav className="primary">
          <ul>
            <li>
              <Link href="/#featured-pods">Leadership Pods</Link>
            </li>
            <li>
              <Link href="/leadership-as-a-service">Leadership as a Service</Link>
            </li>
            <li>
              <Link href="/#partners">Partners ▾</Link>
              <div className="dropdown">
                <Link href="/#partners">Meet the Partners</Link>
                <Link href="/member-directory">Member Directory</Link>
                <a href="https://forms.office.com/r/j6A1zADKL2" target="_blank" rel="noopener noreferrer">
                  Become a Member
                </a>
              </div>
            </li>
            <li>
              <Link href="/#insights">Insights ▾</Link>
              <div className="dropdown">
                <Link href="/#insights">Insights Overview</Link>
                <Link href="/events-social">Events &amp; Social</Link>
              </div>
            </li>
            <li>
              <Link href="/#collective">About</Link>
            </li>
          </ul>
        </nav>
        <div className="nav-cta">
          <Link href="/#final-cta" className="btn btn-outline">
            Talk to FxN
          </Link>
          <button
            className="mobile-toggle"
            aria-label="Menu"
            onClick={() => setOpen(!open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <div className={`mobile-panel${open ? " open" : ""}`}>
        <ul>
          <li>
            <Link href="/#featured-pods" onClick={() => setOpen(false)}>Leadership Pods</Link>
          </li>
          <li>
            <Link href="/leadership-as-a-service" onClick={() => setOpen(false)}>Leadership as a Service</Link>
          </li>
          <li>
            <Link href="/#partners" onClick={() => setOpen(false)}>Meet the Partners</Link>
          </li>
          <li className="sub-item">
            <Link href="/member-directory" onClick={() => setOpen(false)}>— Member Directory</Link>
          </li>
          <li className="sub-item">
            <a
              href="https://forms.office.com/r/j6A1zADKL2"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              — Become a Member
            </a>
          </li>
          <li>
            <Link href="/#insights" onClick={() => setOpen(false)}>Insights</Link>
          </li>
          <li className="sub-item">
            <Link href="/events-social" onClick={() => setOpen(false)}>— Events &amp; Social</Link>
          </li>
          <li>
            <Link href="/#collective" onClick={() => setOpen(false)}>About</Link>
          </li>
        </ul>
        <Link href="/#final-cta" className="btn btn-primary" onClick={() => setOpen(false)}>
          Talk to FxN
        </Link>
      </div>
    </header>
  );
}
