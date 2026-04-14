import { Attachments, MailPath, TemplateInterface } from '../dto/mail.dto';

import { resolve } from 'node:path';

class Template implements TemplateInterface {
  get file() {
    return '';
  }

  get attachments() {
    return [{} as Attachments];
  }
}

class WelcomeTemplate extends Template {
  get file() {
    return resolve(
      __dirname,
      '..',
      '..',
      '..',
      '..',
      '..',
      '..',
      'static',
      'email',
      'templates',
      'welcome',
      'body.hbs',
    );
  }

  get attachments() {
    // Logo is now loaded via absolute URL, no attachments needed
    return [];
  }
}

class ForgotPasswordTemplate extends Template {
  get file() {
    return resolve(
      __dirname,
      '..',
      '..',
      '..',
      '..',
      '..',
      '..',
      'static',
      'email',
      'templates',
      'password-reset',
      'body.hbs',
    );
  }
}

class SendPassword extends Template {
  get file() {
    return resolve(
      __dirname,
      '..',
      '..',
      '..',
      '..',
      '..',
      '..',
      'static',
      'email',
      'templates',
      'send-password-to-user',
      'body.hbs',
    );
  }
}

class Contact extends Template {
  get file() {
    return resolve(
      __dirname,
      '..',
      '..',
      '..',
      '..',
      '..',
      '..',
      'static',
      'email',
      'templates',
      'contact-us',
      'body.hbs',
    );
  }
}

class ResidentApprovedTemplate extends Template {
  get file() {
    return resolve(
      __dirname,
      '..',
      '..',
      '..',
      '..',
      '..',
      '..',
      'static',
      'email',
      'templates',
      'resident-approved',
      'body.hbs',
    );
  }
}

class ResidentRejectedTemplate extends Template {
  get file() {
    return resolve(
      __dirname,
      '..',
      '..',
      '..',
      '..',
      '..',
      '..',
      'static',
      'email',
      'templates',
      'resident-rejected',
      'body.hbs',
    );
  }
}

class EmailVerificationTemplate extends Template {
  get file() {
    return resolve(
      __dirname,
      '..',
      '..',
      '..',
      '..',
      '..',
      '..',
      'static',
      'email',
      'templates',
      'email-verification',
      'body.hbs',
    );
  }

  get attachments() {
    // Logo can be loaded via URL or as attachment
    // If using attachment, uncomment below and add logo file
    return [];
  }
}

class DefinedLeadNotificationTemplate extends Template {
  get file() {
    return resolve(
      __dirname,
      '..',
      '..',
      '..',
      '..',
      '..',
      '..',
      'static',
      'email',
      'templates',
      'defined-lead-notification',
      'body.hbs',
    );
  }

  get attachments() {
    return [];
  }
}

class DefinedLeadClientWelcomeTemplate extends Template {
  get file() {
    return resolve(
      __dirname,
      '..',
      '..',
      '..',
      '..',
      '..',
      '..',
      'static',
      'email',
      'templates',
      'defined-lead-client-welcome',
      'body.hbs',
    );
  }

  get attachments() {
    return [
      {
        filename: 'logo-defined.png',
        path: resolve(
          __dirname,
          '..',
          '..',
          '..',
          '..',
          '..',
          '..',
          'static',
          'email',
          'img',
          'logo-defined.png',
        ),
        cid: 'defined-logo',
      },
    ];
  }
}


export function createTemplate(templateType: MailPath) {
  switch (templateType) {
    case 'welcome':
      return new WelcomeTemplate();

    case 'forgot_password':
      return new ForgotPasswordTemplate();

    case 'send_password':
      return new SendPassword();

    case 'contact_us':
      return new Contact();

    case 'resident_approved':
      return new ResidentApprovedTemplate();

    case 'resident_rejected':
      return new ResidentRejectedTemplate();

    case 'email-verification':
      return new EmailVerificationTemplate();

    case 'defined_lead_notification':
      return new DefinedLeadNotificationTemplate();

    case 'defined_lead_client_welcome':
      return new DefinedLeadClientWelcomeTemplate();

    default:
      return new Template();
  }
}
