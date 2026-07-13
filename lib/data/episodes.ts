export type Episode = {
  title: string;
  youtubeId: string;
  channel: string;
  thumb: string;
  link: string;
  sub?: string;
};

// The current featured episode is rendered directly in the page.
// Add additional past episodes here — they will render as rows
// above the "more episodes coming soon" placeholder.
export const episodes: Episode[] = [];
