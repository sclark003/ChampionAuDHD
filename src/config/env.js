// Environment configuration
// Access environment variables through this file for better type safety and defaults

// Note: In Vite, environment variables MUST be prefixed with VITE_ to be exposed to client-side code

export const config = {
  contactEmail: import.meta.env.VITE_CONTACT_EMAIL || '',
  instagramUrl1: import.meta.env.VITE_INSTAGRAM_URL_RACHEL || '',
  instagramUrl2: import.meta.env.VITE_INSTAGRAM_URL_CHAMPIONAUDHD || '',
  youtubeVideoId: import.meta.env.VITE_YOUTUBE_VIDEO_ID || '',
  peacePathwayUrl: import.meta.env.VITE_PEACE_PATHWAY_URL || '',
  // Media page
  bookPurchaseLink: import.meta.env.VITE_BOOK_PURCHASE_LINK || '',
  autisticaVideoId: import.meta.env.VITE_AUTISTICA_VIDEO_ID || '',
  podcastEmbedUrl: import.meta.env.VITE_PODCAST_EMBED_URL || '',
  podcastLink: import.meta.env.VITE_PODCAST_LINK || '',
  youtubeChannelVideoId: import.meta.env.VITE_YOUTUBE_CHANNEL_VIDEO_ID || '',
  youtubeChannelUrl: import.meta.env.VITE_YOUTUBE_CHANNEL_URL || '',
}
