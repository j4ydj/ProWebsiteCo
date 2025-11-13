import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { Resend } from 'https://esm.sh/resend@2'

const resend = new Resend('re_W1hufd82_Dakqg4zcYck8SNXoEZuAScaR')
const slackWebhook = 'https://hooks.slack.com/services/YOUR/WEBHOOK/URL' // Replace with your webhook

console.log('Edge Function loaded')

interface WebhookPayload {
  type: 'INSERT' | 'UPDATE' | 'DELETE'
  table: string
  record: any
  schema: string
  old_record: any | null
}

export default async function handler(req: Request) {
  try {
    const payload: WebhookPayload = await req.json()

    if (payload.type === 'INSERT' && payload.table === 'leads') {
      const lead = payload.record

      console.log('Processing new lead:', lead.name)

      // Send email via Resend
      try {
        const emailResult = await resend.emails.send({
          from: 'ProWebsiteCo <hello@prowebsiteco.com>',
          to: 'hello@prowebsiteco.com',
          subject: `New Lead: ${lead.trade} - ${lead.name}`,
          html: `
            <h2>New Lead Received</h2>
            <p><strong>Name:</strong> ${lead.name}</p>
            <p><strong>Email:</strong> ${lead.email}</p>
            <p><strong>Trade:</strong> ${lead.trade}</p>
            <p><strong>Message:</strong> ${lead.message}</p>
            <p><strong>Received:</strong> ${new Date(lead.created_at).toLocaleString()}</p>
          `
        })
        console.log('Email sent successfully')
      } catch (error) {
        console.error('Email error:', error)
      }

      // Send Slack notification
      try {
        const slackResult = await fetch(slackWebhook, {
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
        })

        if (slackResult.ok) {
          console.log('Slack notification sent successfully')
        } else {
          console.error('Slack error:', slackResult.status, await slackResult.text())
        }
      } catch (error) {
        console.error('Slack error:', error)
      }
    }

    return new Response('OK', { status: 200 })
  } catch (error) {
    console.error('Function error:', error)
    return new Response('Error', { status: 500 })
  }
}
