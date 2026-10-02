"use client";

import Link from "next/link";
import { useState } from "react";

// Updated logo deployment

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-nav">
      <div className="nav-inner">
        <Link href="/" className="logo">
          <img
            className="logo-mark"
            src="/fxn-logo.png"
            alt="FxN — The Fractional Executive Network India"
          />
        </Link>
        <nav className="primary">
          <ul>
            <li>
              <Link href="/#featured-pods">Our Offerings ▾</Link>
              <div className="dropdown">
                <Link href="/#featured-pods">Leadership Pods</Link>
                <Link href="/leadership-as-a-service">Leadership as a Service</Link>
              </div>
            </li>
            <li>
              <Link href="/#partners">The Network ▾</Link>
              <div className="dropdown">
                <Link href="/#partners">Meet the Partners</Link>
                <Link href="/member-directory">Member Directory</Link>
                <a href="https://forms.office.com/r/j6A1zADKL2" target="_blank" rel="noopener noreferrer">
                  Become a Member
                </a>
              </div>
            </li>
            <li>
              <Link href="/events-social">Events</Link>
            </li>
            <li>
              <Link href="/engage">Engage</Link>
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
            <Link href="/#featured-pods" onClick={() => setOpen(false)}>Our Offerings</Link>
          </li>
          <li className="sub-item">
            <Link href="/#featured-pods" onClick={() => setOpen(false)}>— Leadership Pods</Link>
          </li>
          <li className="sub-item">
            <Link href="/leadership-as-a-service" onClick={() => setOpen(false)}>— Leadership as a Service</Link>
          </li>
          <li>
            <Link href="/#partners" onClick={() => setOpen(false)}>The Network</Link>
          </li>
          <li className="sub-item">
            <Link href="/#partners" onClick={() => setOpen(false)}>— Meet the Partners</Link>
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
            <Link href="/events-social" onClick={() => setOpen(false)}>Events</Link>
          </li>
          <li>
            <Link href="/engage" onClick={() => setOpen(false)}>Engage</Link>
          </li>
        </ul>
        <Link href="/#final-cta" className="btn btn-primary" onClick={() => setOpen(false)}>
          Talk to FxN
        </Link>
      </div>
    </header>
  );
}
