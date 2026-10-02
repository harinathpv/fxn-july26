export type FxnEvent = {
  name: string;
  date: string;
  displayDate: string;
  format: string;
  description: string;
  link: string;
};

export type PartnerEvent = {
  name: string;
  host: string;
  title: string;
  date: string;
  time: string;
  description: string;
  image: string;
  link: string;
};

export const events: FxnEvent[] = [];

export const partnerEvents: PartnerEvent[] = [
  {
    name: "Design AI Products Customers actually Pay for",
    host: "Harinath Pudipedipeddi",
    title: "Design AI Products Customers actually Pay for",
    date: "8 AUGUST 2026",
    time: "10:00 AM IST · 12:30 PM SGT · 1:30 PM AEST",
    description: "A 4-hour live workshop to move from AI features to revenue loops, pricing, retention, and a CFO-ready business case.",
    image: "/events/ai-products-workshop.png",
    link: "https://www.studionavaka.com/learn",
  },
];
