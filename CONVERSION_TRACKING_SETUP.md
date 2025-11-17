# Conversion Tracking Setup Guide

Your site has conversion tracking fully implemented! Here's how to configure and use it.

## ✅ What's Already Implemented

### 1. Google Analytics 4 (GA4)
- **Tracking ID**: `G-XMC4RYWEJ8`
- **Location**: `app/layout.tsx`
- **Status**: Active and tracking page views + custom events

### 2. Meta Pixel (Facebook/Instagram)
- **Status**: Configured, needs Pixel ID
- **Location**: `app/layout.tsx`
- **Setup**: Add `NEXT_PUBLIC_META_PIXEL_ID` to `.env.local`

### 3. Custom Conversion Events
All events are tracked to both GA4 and Meta Pixel:

| Event | Trigger | Value |
|-------|---------|-------|
| `form_submit` | Contact form submission | 0 |
| `lead_form_submitted` | Contact form submission | includes trade type |
| `whatsapp_click` | WhatsApp button click | 0 |
| `whatsapp_clicked` | WhatsApp button click | - |
| `email_click` | Email link click | 0 |
| `email_clicked` | Email link click | - |
| `phone_click` | Phone number click | 0 |
| `phone_clicked` | Phone number click | - |
| `cta_clicked` | CTA button clicks | includes location |

## 📊 Setup Instructions

### Step 1: Verify Google Analytics 4
1. Go to [Google Analytics](https://analytics.google.com/)
2. Select your property (ID: G-XMC4RYWEJ8)
3. Go to **Admin** → **Data Streams** → Select your web stream
4. Verify the measurement ID matches `G-XMC4RYWEJ8`

### Step 2: Add Meta Pixel ID
1. Go to [Facebook Events Manager](https://business.facebook.com/events_manager)
2. Find or create your Pixel
3. Copy the Pixel ID (format: `1234567890123456`)
4. Add to `.env.local`:
   ```
   NEXT_PUBLIC_META_PIXEL_ID=your_pixel_id_here
   ```
5. Redeploy your site

### Step 3: Set Up Google Ads Conversion Tracking

#### Option A: Import from GA4 (Recommended)
1. Go to [Google Ads](https://ads.google.com/)
2. Navigate to **Tools & Settings** → **Conversions**
3. Click **"+ New conversion action"**
4. Select **"Import"** → **"Google Analytics 4 properties"**
5. Select your GA4 property and import these events:
   - `form_submit` (Primary conversion)
   - `whatsapp_click`
   - `email_click`
   - `phone_click`
6. Set conversion values and category (e.g., Lead = £50-100)

#### Option B: Manual Google Ads Tag (If import not available)
1. In Google Ads: **Tools & Settings** → **Conversions**
2. Click **"+ New conversion action"** → **"Website"**
3. Create conversions for:
   - **Lead Form Submit** - Goal: Submit lead form
   - **WhatsApp Click** - Goal: Click WhatsApp
   - **Phone Click** - Goal: Click phone number
   - **Email Click** - Goal: Click email

4. For each conversion, Google Ads will give you a snippet like:
   ```javascript
   gtag('event', 'conversion', {'send_to': 'AW-XXXXX/YYYYY'});
   ```

5. Update `lib/utils/tracking.ts` to include Google Ads conversion IDs:
   ```typescript
   // Add at the top of tracking.ts
   const ADS_CONVERSION_IDS = {
     form_submit: 'AW-XXXXX/YYYYY',
     whatsapp_click: 'AW-XXXXX/ZZZZZ',
     // ... etc
   };

   // Update trackConversion function:
   export const trackConversion = (conversionType: string, value?: number) => {
     trackEvent(conversionType, { value: value || 0, currency: 'GBP' });
     
     // Track to Google Ads
     if (typeof window !== 'undefined' && window.gtag && ADS_CONVERSION_IDS[conversionType]) {
       window.gtag('event', 'conversion', {
         'send_to': ADS_CONVERSION_IDS[conversionType],
         'value': value || 0,
         'currency': 'GBP'
       });
     }
   };
   ```

### Step 4: Test Conversions

#### Test in Real-Time
1. Go to GA4 → **Reports** → **Realtime**
2. Open your site in an incognito window
3. Trigger events:
   - Submit the contact form
   - Click WhatsApp button
   - Click email link
   - Click phone number
4. Verify events appear in GA4 Realtime (may take 5-10 seconds)

#### Test Meta Pixel
1. Install [Meta Pixel Helper](https://chrome.google.com/webstore/detail/meta-pixel-helper/) Chrome extension
2. Visit your site
3. Click the extension icon - should show your Pixel ID and events
4. Trigger conversions and verify they fire

#### Test Google Ads Conversions
1. Go to Google Ads → **Tools & Settings** → **Conversions**
2. Wait 24-48 hours for conversions to appear
3. Check conversion counts for each action

### Step 5: Set Up Conversion Goals & Funnels

#### GA4 Custom Reports
1. In GA4: **Explore** → **Create new exploration**
2. Create a funnel:
   - Step 1: Page view (/)
   - Step 2: `cta_clicked` (hero or pricing)
   - Step 3: `form_submit` or `whatsapp_click` or `phone_click`
3. Monitor conversion rates by source/medium

#### Set Conversion Values (Google Ads)
Set estimated values for each conversion to calculate ROI:
- `form_submit`: £50-100 (average lead value)
- `whatsapp_click`: £30-50
- `phone_click`: £30-50
- `email_click`: £20-40

### Step 6: Attribution & Remarketing

#### GA4 Audiences for Remarketing
1. GA4 → **Admin** → **Audiences** → **New Audience**
2. Create audiences:
   - **Form abandoners**: Visited contact section but didn't submit
   - **WhatsApp clickers**: Clicked WhatsApp but didn't convert
   - **High-intent visitors**: 2+ page views + pricing view

#### Link to Google Ads
1. GA4 → **Admin** → **Google Ads Links**
2. Link your Google Ads account
3. Enable automatic import of GA4 audiences
4. Use audiences for remarketing campaigns

## 📈 Key Metrics to Monitor

### Daily (in GA4 Realtime)
- Page views
- Event counts (`form_submit`, `whatsapp_click`, etc.)
- Conversion rate (events / sessions)

### Weekly (in GA4 Reports)
- Traffic sources (organic, paid, social, direct)
- Conversion rate by source
- Top landing pages
- Device/browser breakdown

### Monthly (in Google Ads)
- Cost per conversion (CPC)
- Conversion rate by campaign
- Return on ad spend (ROAS)
- Quality score trends

## 🔧 Troubleshooting

### Events Not Showing in GA4
1. Check browser console for errors
2. Verify GA4 ID is correct: `G-XMC4RYWEJ8`
3. Disable ad blockers and test
4. Check GA4 DebugView (enable with `?debug_mode=true` in URL)

### Meta Pixel Not Working
1. Verify `NEXT_PUBLIC_META_PIXEL_ID` is set
2. Use Meta Pixel Helper to debug
3. Check browser console for `fbq` errors
4. Ensure site is deployed (Meta Pixel requires HTTPS)

### Google Ads Conversions Not Importing
1. Verify GA4 and Google Ads are linked
2. Check conversion import settings (may take 24-48 hours)
3. Ensure events are marked as "Conversions" in GA4
4. Check conversion time window settings

## 📋 Conversion Tracking Checklist

- [x] GA4 installed and tracking page views
- [x] Custom events implemented (form, WhatsApp, email, phone, CTA)
- [ ] Meta Pixel ID added to `.env.local`
- [ ] Google Ads account created
- [ ] Google Ads conversions imported from GA4
- [ ] Test conversions verified in GA4 Realtime
- [ ] Conversion values set in Google Ads
- [ ] Remarketing audiences created in GA4
- [ ] Weekly conversion reports scheduled

## 🎯 Next Steps

1. **Add Meta Pixel ID** to `.env.local` (or Cloudflare Pages env vars)
2. **Link Google Ads** to GA4 and import conversions
3. **Launch Google Ads campaigns** targeting:
   - "plumber website uk"
   - "electrician website design"
   - "builder website"
   - etc.
4. **Monitor conversions** daily for first week
5. **Optimize campaigns** based on conversion data

All tracking code is live and working! You just need to configure the Google Ads and Meta Pixel IDs.

