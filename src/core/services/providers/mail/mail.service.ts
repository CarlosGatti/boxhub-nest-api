import * as fs from 'node:fs';
// @ts-ignore
import * as nodemailer from 'nodemailer';

import { IMailSendDTO, MailPath, TemplateInterface } from './dto/mail.dto';
import { Injectable, Logger } from '@nestjs/common';

import { MailEntity } from './entities/mail.entity';
import { createTemplate } from './template-class/template';
import handlebars from 'handlebars';
import { resolve } from 'node:path';

@Injectable()
class MailService implements MailEntity {
  private _CLIENT!: any;
  private _SMTP_HOST: string = process.env.SMTP_HOST || 'smtp.gmail.com';
  private _SMTP_PORT: number = process.env.SMTP_PORT || 465;
  private _SMTP_ACCOUNT_USERNAME: string = process.env.SMTP_USERNAME || '';
  private _SMTP_ACCOUNT_PASSWORD: string = process.env.SMTP_PASSWORD || '';

  constructor() {
    // @ts-ignore
    const transporter = nodemailer.createTransport({
      host: this._SMTP_HOST,
      port: this._SMTP_PORT,
      secure: true,
      auth: {
        user: this._SMTP_ACCOUNT_USERNAME,
        pass: this._SMTP_ACCOUNT_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    transporter.verify(function (error: Error | null, success: boolean) {
      if (error) {
        return console.error(error);
      }
      if (success) {
        Logger.log(
          'Connection with SMTP Server successful, the server is ready to receive our messages',
          'MailService',
        );
      }
    });

    this._CLIENT = transporter;
  }

  async send({
    path,
    subject,
    to,
    variables,
    attachments,
  }: IMailSendDTO): Promise<boolean> {
    const template = this._getTemplateAndAttachment(path);
    const tamplateFileContent = fs
      .readFileSync(template.file)
      .toString('utf-8');
    const tamplateParse = handlebars.compile(tamplateFileContent);
    
    // Ensure year is always included in variables
    const templateVariables = {
      ...variables,
      year: variables?.year || new Date().getFullYear(),
    };
    
    const templateHTML = tamplateParse(templateVariables);

    const message = await this._CLIENT.sendMail({
      from: `${process.env.HANDLEBARS_CLIENT_NAME} <${process.env.HANDLEBARS_CLIENT_EMAIL}>`,
      to,
      subject,
      html: templateHTML,
      attachments: template.attachments,
    });

    Logger.log(`Message send: ${message.messageId}`, 'MailService');

    if (!message.messageId) {
      return false;
    }

    return true;
  }

  //TODO: REMOVE HTML TEMPLATE, USE MJML IN THE FUTURE
  private _getTemplateAndAttachment(templateType: MailPath): TemplateInterface {
    return createTemplate(templateType);
  }
}

export { MailService };
