// Google Analytics 4 Integration
// GA script is loaded in index.html for reliability
const GA_MEASUREMENT_ID = 'G-M99NRWL0WQ';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

// Check if gtag is available
const isReady = (): boolean => {
  if (!window.gtag) {
    console.warn('GA gtag not loaded. Check index.html script tag.');
    return false;
  }
  return true;
};

// Track page view (manual, for SPA section changes)
export const trackPageView = (path: string, title?: string) => {
  if (!isReady()) return;
  window.gtag!('event', 'page_view', {
    page_path: path,
    page_title: title || document.title,
    page_location: window.location.href,
  });
};

// Track custom event
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (!isReady()) return;
  window.gtag!('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Track section view
export const trackSectionView = (section: string, language: string) => {
  trackEvent('view_section', 'navigation', `${section}_${language}`);
  trackPageView(`/${section}`, section);
};

// Track language change
export const trackLanguageChange = (from: string, to: string) => {
  trackEvent('change_language', 'localization', `${from}_to_${to}`);
};

// Track blog post view
export const trackBlogPostView = (slug: string, title: string) => {
  trackEvent('view_post', 'blog', title);
  trackPageView(`/blog/${slug}`, title);
};

// Track external link click
export const trackExternalLink = (url: string, label: string) => {
  trackEvent('click_external_link', 'outbound', label, 1);
};

// Track CV download
export const trackDownload = (fileType: string, label: string) => {
  trackEvent('download', 'file', `${fileType}_${label}`);
};

// Track scroll depth
export const trackScrollDepth = (percentage: number) => {
  trackEvent('scroll_depth', 'engagement', `${percentage}%`, percentage);
};

// Track time on page
export const trackTimeOnPage = (seconds: number) => {
  const buckets = [10, 30, 60, 120, 300, 600];
  const bucket = buckets.find(b => seconds <= b) || 600;
  trackEvent('time_on_page', 'engagement', `${bucket}s`, seconds);
};

// No-op initGA (script loaded via index.html)
export const initGA = () => {};
