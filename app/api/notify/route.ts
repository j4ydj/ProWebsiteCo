import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, lead } = body;

    if (type === 'email') {
      // Email notification via Resend or SMTP
      const emailBody = `
        New Lead Received:
        
        Name: ${lead.name}
        Email: ${lead.email}
        Trade: ${lead.trade}
        Message: ${lead.message}
        Received: ${lead.createdAt}
      `;

      // TODO: Replace with actual email service (Resend, SendGrid, etc.)
      // For now, we'll use a webhook or environment variable
      const emailServiceUrl = process.env.EMAIL_WEBHOOK_URL;
      
      if (emailServiceUrl) {
        await fetch(emailServiceUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            to: process.env.NOTIFICATION_EMAIL || 'hello@prowebsiteco.com',
            subject: `New Lead: ${lead.trade} - ${lead.name}`,
            text: emailBody,
          }),
        });
      } else {
        console.log('Email notification (configure EMAIL_WEBHOOK_URL):', emailBody);
      }
    }

    if (type === 'slack') {
      // Slack notification via webhook
      const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;
      
      if (slackWebhookUrl) {
        await fetch(slackWebhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            text: `🎯 New Lead: ${lead.name} (${lead.trade})`,
            blocks: [
              {
                type: 'section',
                text: {
                  type: 'mrkdwn',
                  text: `*New Lead Received*\n\n*Name:* ${lead.name}\n*Email:* ${lead.email}\n*Trade:* ${lead.trade}\n*Message:* ${lead.message}`,
                },
              },
              {
                type: 'actions',
                elements: [
                  {
                    type: 'button',
                    text: {
                      type: 'plain_text',
                      text: 'Reply via Email',
                    },
                    url: `mailto:${lead.email}?subject=Re: Your Website Inquiry`,
                  },
                ],
              },
            ],
          }),
        });
      } else {
        console.log('Slack notification (configure SLACK_WEBHOOK_URL):', lead);
      }
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Notification error:', error);
    return NextResponse.json(
      { error: 'Failed to send notification' },
      { status: 500 }
    );
  }
}

