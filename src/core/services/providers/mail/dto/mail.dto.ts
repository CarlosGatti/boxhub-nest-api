interface Attachments {
  filename: string;
  path: string;
  cid: string;
}

type MailPath =
  | 'welcome'
  | 'forgot_password'
  | 'send_password'
  | 'contact_us'
  | 'resident_approved'
  | 'resident_rejected'
  | 'email-verification'
  | 'defined_lead_notification'
  | 'defined_lead_client_welcome';

interface IMailSendDTO {
  to: string;
  subject: string;
  path: MailPath;
  variables?: any;
  attachments?: Attachments[];
}

export { IMailSendDTO, Attachments, MailPath };

export interface TemplateInterface {
  file: string;
  attachments: Array<Attachments>;
}
