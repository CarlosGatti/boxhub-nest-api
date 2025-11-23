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
      'static',
      'email',
      'templates',
      'resident-rejected',
      'body.hbs',
    );
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

    default:
      return new Template();
  }
}
