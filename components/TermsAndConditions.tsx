'use client';

import { useState, useEffect } from 'react';

export default function TermsAndConditions() {
  const [showModal, setShowModal] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      const termsAccepted = localStorage.getItem('fxn-terms-accepted');
      if (!termsAccepted) {
        setShowModal(true);
      } else {
        setAccepted(true);
      }
    }
  }, []);

  const handleAccept = () => {
    setAccepted(true);
    localStorage.setItem('fxn-terms-accepted', 'true');
    setShowModal(false);
  };

  const handleReject = () => {
    setShowModal(false);
  };

  if (!mounted || accepted) {
    return null;
  }

  return (
    <>
      {showModal && (
        <div className="terms-popup">
          <div className="terms-header">
            <h2>Terms & Conditions</h2>
          </div>
          <div className="terms-content">
            <h3>Welcome to FxN</h3>
            <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
            
            <h4>1. Use License</h4>
            <p>Permission is granted to temporarily download one copy of the materials (information or software) on FxN website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
            <ul>
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose, or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on FxN website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server</li>
            </ul>

            <h4>2. Disclaimer</h4>
            <p>The materials on FxN website are provided on an &apos;as is&apos; basis. FxN makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

            <h4>3. Limitations</h4>
            <p>In no event shall FxN or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on FxN website.</p>

            <h4>4. Accuracy of Materials</h4>
            <p>The materials appearing on FxN website could include technical, typographical, or photographic errors. FxN does not warrant that any of the materials on its website are accurate, complete, or current.</p>

            <h4>5. Links</h4>
            <p>FxN has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by FxN of the site. Use of any such linked website is at the user&apos;s own risk.</p>

            <h4>6. Modifications</h4>
            <p>FxN may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.</p>

            <h4>7. Governing Law</h4>
            <p>These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
          </div>
          <div className="terms-actions">
            <button onClick={handleAccept} className="btn btn-teal">Accept</button>
            <button onClick={handleReject} className="btn btn-outline">Reject</button>
          </div>
        </div>
      )}
    </>
  );
}
