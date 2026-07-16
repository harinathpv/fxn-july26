'use client';

import { useState, useEffect } from 'react';

export default function TermsAndConditions() {
  const [showBanner, setShowBanner] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      const termsAccepted = localStorage.getItem('fxn-terms-accepted');
      if (!termsAccepted) {
        setShowBanner(true);
      } else {
        setAccepted(true);
      }
    }
  }, []);

  const handleAccept = () => {
    setAccepted(true);
    localStorage.setItem('fxn-terms-accepted', 'true');
    setShowBanner(false);
  };

  const handleReject = () => {
    setShowBanner(false);
  };

  if (!mounted || accepted) {
    return null;
  }

  return (
    <>
      {showBanner && (
        <div className="terms-cookie-banner">
          <div className="terms-cookie-content">
            <p>We use cookies to enhance your experience. By continuing to browse, you agree to our <a href="#" onClick={(e) => e.preventDefault()}>Terms & Conditions</a>.</p>
          </div>
          <div className="terms-cookie-actions">
            <button onClick={handleReject} className="btn btn-outline">Reject</button>
            <button onClick={handleAccept} className="btn btn-teal">Accept</button>
          </div>
        </div>
      )}
    </>
  );
}
