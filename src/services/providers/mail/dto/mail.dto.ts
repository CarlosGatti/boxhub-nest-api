interface Attachments {
  filename: string;
  path: string;
  cid: string;
}

type MailPath = 'welcome' | 'forgot_password' | 'send_password' | 'contact_us';

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
