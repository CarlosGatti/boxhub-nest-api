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
    return [
      {
        filename: 'logo.png',
        path: resolve(
          __dirname,
          '..',
          '..',
          '..',
          '..',
          'static',
          'email',
          'templates',
          'welcome',
          'views',
          'assets',
          'logo.png',
        ),
        cid: 'logo',
      },
      {
        filename: '1200x800-1.png',
        path: resolve(
          __dirname,
          '..',
          '..',
          '..',
          '..',
          'static',
          'email',
          'templates',
          'welcome',
          'views',
          'assets',
          '1200x800-1.png',
        ),
        cid: '1200x800-1',
      },
      {
        filename: '1200x800-2.png',
        path: resolve(
          __dirname,
          '..',
          '..',
          '..',
          '..',
          'static',
          'email',
          'templates',
          'welcome',
          'views',
          'assets',
          '1200x800-2.png',
        ),
        cid: '1200x800-2',
      },
    ];
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

    default:
      return new Template();
  }
}
