export type PartnerUpdate = {
  name: string;
  role: string;
  avatar: string;
  platform: string;
  text: string;
  link: string;
};

// Manually curated feed of Partner social updates.
// Structured so it can later be swapped for a live social-aggregator
// embed without changing the surrounding page layout.
export const partnerUpdates: PartnerUpdate[] = [];
