// Notification service for lead alerts

export interface LeadNotification {
  name: string;
  email: string;
  trade: string;
  message: string;
  createdAt: string;
}

export const sendEmailNotification = async (lead: LeadNotification): Promise<boolean> => {
  try {
    const resendApiKey = process.env.RESEND_API_KEY;
    const notificationEmail = process.env.NOTIFICATION_EMAIL || 'hello@prowebsiteco.com';

    if (!resendApiKey) {
      console.log('Resend API key not configured. Lead notification:', lead);
      return true;
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'ProWebsiteCo <hello@prowebsiteco.com>',
        to: notificationEmail,
        subject: `New Lead: ${lead.trade} - ${lead.name}`,
        html: `
          <h2>New Lead Received</h2>
          <p><strong>Name:</strong> ${lead.name}</p>
          <p><strong>Email:</strong> ${lead.email}</p>
          <p><strong>Trade:</strong> ${lead.trade}</p>
          <p><strong>Message:</strong> ${lead.message}</p>
          <p><strong>Received:</strong> ${lead.createdAt}</p>
        `,
      }),
    });

    if (!response.ok) {
      throw new Error(`Resend API error: ${response.status}`);
    }

    console.log('Email notification sent successfully for lead:', lead.name);
    return true;
  } catch (error) {
    console.error('Error sending email notification:', error);
    return false;
  }
};

export const sendSlackNotification = async (lead: LeadNotification): Promise<boolean> => {
  try {
    const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;

    if (!slackWebhookUrl) {
      console.log('Slack webhook URL not configured. Slack notification:', lead);
      return true;
    }

    const response = await fetch(slackWebhookUrl, {
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

    if (!response.ok) {
      throw new Error(`Slack webhook error: ${response.status}`);
    }

    console.log('Slack notification sent successfully for lead:', lead.name);
    return true;
  } catch (error) {
    console.error('Error sending Slack notification:', error);
    return false;
  }
};

export const sendNotifications = async (lead: LeadNotification): Promise<void> => {
  // Send both email and Slack notifications
  await Promise.all([
    sendEmailNotification(lead),
    sendSlackNotification(lead),
  ]);
};

