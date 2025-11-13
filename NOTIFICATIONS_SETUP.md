# Notifications Setup Guide

This guide explains how to configure email and Slack notifications for new leads.

**Note:** Since this site uses static export, client-side notifications can't access server environment variables for security. Notifications must be configured via Supabase Database Triggers or Edge Functions.

## Email Notifications

### Option 1: Using Resend (Recommended)

1. Sign up for a free account at [resend.com](https://resend.com)
2. Get your API key from the dashboard
3. Add to your `.env.local` file:
   ```
   RESEND_API_KEY=re_W1hufd82_Dakqg4zcYck8SNXoEZuAScaR
   NOTIFICATION_EMAIL=hello@prowebsiteco.com
   ```

4. Update `app/api/notify/route.ts` to use Resend:
   ```typescript
   import { Resend } from 'resend';
   const resend = new Resend(process.env.RESEND_API_KEY);
   
   await resend.emails.send({
     from: 'ProWebsiteCo <hello@prowebsiteco.com>',
     to: process.env.NOTIFICATION_EMAIL,
     subject: `New Lead: ${lead.trade} - ${lead.name}`,
     text: emailBody,
   });
   ```

### Option 2: Using a Webhook Service

1. Set up a webhook service (e.g., Zapier, Make.com, or custom endpoint)
2. Add to `.env.local`:
   ```
   EMAIL_WEBHOOK_URL=https://your-webhook-url.com/email
   NOTIFICATION_EMAIL=hello@prowebsiteco.com
   ```

## Slack Notifications

1. Go to [api.slack.com/apps](https://api.slack.com/apps)
2. Create a new app or use an existing one
3. Go to "Incoming Webhooks" and activate it
4. Create a webhook for your channel
5. Copy the webhook URL
6. Add to your `.env.local` file:
   ```
   SLACK_WEBHOOK_URL=
   ```

## Environment Variables Summary

Add these to your `.env.local` file (or Cloudflare Pages environment variables):

```
# Email notifications
RESEND_API_KEY=your_resend_key (if using Resend)
EMAIL_WEBHOOK_URL=your_email_webhook (if using webhook)
NOTIFICATION_EMAIL=hello@prowebsiteco.com

# Slack notifications
SLACK_WEBHOOK_URL=https://hooks.slack.com/services/YOUR/WEBHOOK/URL

# Meta Pixel (for analytics)
NEXT_PUBLIC_META_PIXEL_ID=your_pixel_id
```

## Testing

After setup, test by submitting a form on your site. You should receive:
- Email notification (if configured)
- Slack notification (if configured)

## Troubleshooting

- Check browser console for errors
- Verify environment variables are set correctly
- Check Supabase logs for database errors
- Ensure webhook URLs are correct and accessible

