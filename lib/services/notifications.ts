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
    // For static sites, notifications must use Supabase database triggers
    // API keys can't be exposed client-side for security
    console.log('Email notification logged for lead:', lead.name);
    console.log('To enable real notifications, set up Supabase triggers: https://supabase.com/docs/guides/database/triggers');
    console.log('Use Resend API key from .env.local in the trigger function');
    return true;
  } catch (error) {
    console.error('Error with email notification:', error);
    return false;
  }
};

export const sendSlackNotification = async (lead: LeadNotification): Promise<boolean> => {
  try {
    // For static sites, notifications must use Supabase database triggers
    // Webhook URLs can't be exposed client-side for security
    console.log('Slack notification logged for lead:', lead.name);
    console.log('To enable real notifications, set up Supabase triggers: https://supabase.com/docs/guides/database/triggers');
    console.log('Use Slack webhook URL from .env.local in the trigger function');
    return true;
  } catch (error) {
    console.error('Error with Slack notification:', error);
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

