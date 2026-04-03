# Analytics Integration Guide

This portfolio uses **Google Analytics 4** for tracking user behavior and engagement.

## Setup Instructions

### 1. Create Google Analytics 4 Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new GA4 property
3. Get your **Measurement ID** (format: `G-XXXXXXXXXX`)

### 2. Configure Environment Variable

Create `.env.local` file in project root:

```bash
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 3. Verify Installation

Open browser DevTools → Network → filter by "google-analytics"

You should see requests to:
- `gtag/js` (script load)
- `g/collect` (events)

## Tracked Events

### Automatic Tracking

| Event | Category | Trigger |
|-------|----------|---------|
| `page_view` | - | Section navigation |
| `view_section` | navigation | Section change |
| `change_language` | localization | Language switch |
| `scroll_depth` | engagement | 25%, 50%, 75%, 100% scroll |
| `time_on_page` | engagement | Page exit/visibility change |

### Manual Tracking

```typescript
import { trackEvent, trackExternalLink, trackDownload } from '@/utils/analytics';

// Custom event
trackEvent('click_cta', 'engagement', 'contact_me');

// External link
trackExternalLink('https://example.com', 'Example Site');

// File download
trackDownload('pdf', 'research-cv.pdf');
```

## Analytics Dashboard

### Key Metrics to Monitor

1. **User Engagement**
   - Average time on page
   - Scroll depth
   - Section visit frequency

2. **Content Performance**
   - Most viewed sections
   - Blog post popularity
   - CV downloads

3. **User Behavior**
   - Language preference
   - Navigation patterns
   - Exit points

### Custom Reports

Create custom reports for:
- Section engagement by language
- Blog post performance
- External link clicks
- Download conversion rate

## Privacy Considerations

- GA4 is GDPR compliant by default
- No PII (Personal Identifiable Information) collected
- IP anonymization enabled
- User consent recommended for EU visitors

## Advanced Features

### Real-time Tracking

```typescript
// Track custom dimensions
gtag('event', 'view_section', {
  'section_name': 'research',
  'language': 'en',
  'user_type': 'academic'
});
```

### E-commerce Tracking (for future)

```typescript
gtag('event', 'purchase', {
  'transaction_id': 'T12345',
  'value': 9.99,
  'currency': 'USD'
});
```

## Debugging

Install [Google Analytics Debugger](https://chrome.google.com/webstore/detail/google-analytics-debugger/jnkmfdileelhofjcijamephohjechhna) Chrome extension for detailed event logging.

## Alternatives

If you prefer not to use Google Analytics:
- **Plausible Analytics** - Privacy-focused, open source
- **Fathom Analytics** - Simple, GDPR compliant
- **Matomo** - Self-hosted, full control
- **Simple Analytics** - Lightweight, privacy-first

To switch, just modify `src/utils/analytics.ts` to use your preferred service.
