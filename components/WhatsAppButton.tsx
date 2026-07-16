'use client';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/+919919918252"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      title="Chat with us on WhatsApp"
    >
      <img src="/whatsapp-icon.png" alt="WhatsApp" style={{ width: '32px', height: '32px', objectFit: 'contain' }} />
    </a>
  );
}
