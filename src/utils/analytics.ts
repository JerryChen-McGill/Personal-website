// Google Analytics 4 Integration

const GA_MEASUREMENT_ID = 'G-MD63SGHFJF';

// Declare gtag type
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    dataLayer?: any[];
  }
}

// Initialize Google Analytics
export const initGA = () => {
  if (!GA_MEASUREMENT_ID) {
    console.warn('GA Measurement ID not found. Set VITE_GA_MEASUREMENT_ID in .env');
    return;
  }

  // Load gtag.js script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: any[]) {
    window.dataLayer?.push(args);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: false, // We'll manually track page views
  });
};

// Track page view
export const trackPageView = (path: string, title?: string) => {
  if (!window.gtag) return;

  window.gtag('event', 'page_view', {
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
  if (!window.gtag) return;

  window.gtag('event', action, {
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

export default {
  initGA,
  trackPageView,
  trackEvent,
  trackSectionView,
  trackLanguageChange,
  trackBlogPostView,
  trackExternalLink,
  trackDownload,
  trackScrollDepth,
  trackTimeOnPage,
};
