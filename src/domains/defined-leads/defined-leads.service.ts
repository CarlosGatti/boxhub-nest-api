import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import {
  DefinedLeadCrmSyncStatus,
  DefinedLeadNotificationStatus,
  DefinedLeadStatus,
} from '@prisma/client';
import { Request } from 'express';
import { PrismaService } from '../../core/prisma/prisma.service';
import { MailService } from '../../core/services/providers/mail/mail.service';
import { createInMemoryRateLimiter } from '../review-cards/common/rate-limit';
import { hashIp } from '../review-cards/common/ip-hash';
import {
  DEFINED_LEAD_CRM_SYNC,
  DefinedLeadCrmSync,
} from './crm/defined-lead-crm-sync.token';
import { SubmitDefinedLeadInput } from './dto/submit-defined-lead.input';
import { SubmitDefinedLeadPayload } from './types/submit-defined-lead-payload.type';

const RATE_WINDOW_MS = 60_000;
const RATE_MAX_PER_WINDOW = 12;

@Injectable()
export class DefinedLeadsService {
  private readonly log = new Logger(DefinedLeadsService.name);
  private readonly limiter = createInMemoryRateLimiter(RATE_WINDOW_MS, RATE_MAX_PER_WINDOW);

  constructor(
    private readonly prisma: PrismaService,
    private readonly mailService: MailService,
    @Inject(DEFINED_LEAD_CRM_SYNC) private readonly crmSync: DefinedLeadCrmSync,
  ) {}

  private clientIp(req: Request): string {
    const xf = req.headers['x-forwarded-for'];
    const raw = Array.isArray(xf) ? xf[0] : typeof xf === 'string' ? xf.split(',')[0].trim() : '';
    return (raw || req.ip || req.socket?.remoteAddress || 'unknown').toString();
  }

  private trimOpt(s?: string | null): string | undefined {
    if (s == null) {
      return undefined;
    }
    const t = s.trim();
    return t.length ? t : undefined;
  }

  private maskEmail(email: string): string {
    const [local, domain] = email.split('@');
    if (!domain) {
      return '(invalid)';
    }
    const vis = local.slice(0, 2);
    return `${vis}***@${domain}`;
  }

  private isTruthyEnv(name: string, defaultValue = false): boolean {
    const raw = process.env[name];
    if (!raw) {
      return defaultValue;
    }
    return ['1', 'true', 'yes', 'on'].includes(raw.trim().toLowerCase());
  }

  async submit(
    input: SubmitDefinedLeadInput,
    req: Request,
  ): Promise<SubmitDefinedLeadPayload> {
    const ip = this.clientIp(req);
    const salt = process.env.DEFINED_LEAD_IP_HASH_SALT ?? process.env.REVIEW_CARDS_IP_HASH_SALT ?? '';
    const ipKey = hashIp(ip, salt) ?? 'anonymous';
    const rate = this.limiter(ipKey);
    if (!rate.allowed) {
      this.log.warn(`Defined lead rate limited (ipHash=${ipKey.slice(0, 8)}…)`);
      throw new HttpException('Too many submissions. Please try again shortly.', HttpStatus.TOO_MANY_REQUESTS);
    }

    const hp = this.trimOpt(input.honeypot);
    if (hp) {
      this.log.warn(`Defined lead honeypot triggered (ipHash=${ipKey.slice(0, 8)}…)`);
      return {
        success: true,
        message: 'Thank you.',
        leadId: null,
        submissionAccepted: true,
      };
    }

    const fullName = this.trimOpt(input.fullName)!;
    const email = this.trimOpt(input.email)!;

    this.log.log(`Defined lead received landingSlug=${this.trimOpt(input.landingSlug) ?? 'n/a'} email=${this.maskEmail(email)}`);

    let lead;
    try {
      lead = await this.prisma.definedLead.create({
        data: {
          fullName,
          email,
          phone: this.trimOpt(input.phone),
          companyName: this.trimOpt(input.companyName),
          businessType: this.trimOpt(input.businessType),
          city: this.trimOpt(input.city),
          state: this.trimOpt(input.state),
          selectedPackage: this.trimOpt(input.selectedPackage),
          serviceInterest: this.trimOpt(input.serviceInterest),
          message: this.trimOpt(input.message),
          landingSlug: this.trimOpt(input.landingSlug),
          referrer: this.trimOpt(input.referrer),
          utmSource: this.trimOpt(input.utmSource),
          utmMedium: this.trimOpt(input.utmMedium),
          utmCampaign: this.trimOpt(input.utmCampaign),
          utmContent: this.trimOpt(input.utmContent),
          utmTerm: this.trimOpt(input.utmTerm),
          gclid: this.trimOpt(input.gclid),
          fbclid: this.trimOpt(input.fbclid),
          consent: input.consent,
          status: DefinedLeadStatus.STORED,
          notificationStatus: DefinedLeadNotificationStatus.PENDING,
          crmSyncStatus: DefinedLeadCrmSyncStatus.PENDING,
        },
      });
    } catch (err) {
      this.log.error(`Defined lead DB persist failed: ${err instanceof Error ? err.message : err}`);
      throw new InternalServerErrorException('Could not save your request. Please try again later.');
    }

    this.log.log(`Defined lead stored leadId=${lead.id} landingSlug=${lead.landingSlug ?? 'n/a'}`);

    const notifyTo = (process.env.DEFINED_LEAD_NOTIFICATION_EMAIL ?? '').trim();
    if (!notifyTo) {
      this.log.warn('DEFINED_LEAD_NOTIFICATION_EMAIL not set; skipping email notification');
      await this.prisma.definedLead.update({
        where: { id: lead.id },
        data: { notificationStatus: DefinedLeadNotificationStatus.FAILED },
      });
    } else {
      this.log.log(`Defined lead notification attempt leadId=${lead.id}`);
      try {
        const utmParts = [
          lead.utmSource && `source=${lead.utmSource}`,
          lead.utmMedium && `medium=${lead.utmMedium}`,
          lead.utmCampaign && `campaign=${lead.utmCampaign}`,
          lead.utmContent && `content=${lead.utmContent}`,
          lead.utmTerm && `term=${lead.utmTerm}`,
        ].filter(Boolean);
        const utmSummary = utmParts.length ? utmParts.join(' | ') : '—';
        const clickIds = [lead.gclid && `gclid=${lead.gclid}`, lead.fbclid && `fbclid=${lead.fbclid}`]
          .filter(Boolean)
          .join(' | ') || '—';

        const sent = await this.mailService.send({
          path: 'defined_lead_notification',
          to: notifyTo,
          subject: `[Defined] New lead #${lead.id} — ${fullName}`,
          variables: {
            leadId: String(lead.id),
            createdAt: lead.createdAt.toISOString(),
            fullName,
            email,
            phone: lead.phone ?? '—',
            companyName: lead.companyName ?? '—',
            selectedPackage: lead.selectedPackage ?? '—',
            serviceInterest: lead.serviceInterest ?? '—',
            landingSlug: lead.landingSlug ?? '—',
            utmSummary,
            clickIds,
            message: lead.message ?? '',
          },
        });

        if (sent) {
          await this.prisma.definedLead.update({
            where: { id: lead.id },
            data: { notificationStatus: DefinedLeadNotificationStatus.SENT },
          });
          this.log.log(`Defined lead notification sent leadId=${lead.id}`);
        } else {
          await this.prisma.definedLead.update({
            where: { id: lead.id },
            data: { notificationStatus: DefinedLeadNotificationStatus.FAILED },
          });
          this.log.warn(`Defined lead notification failed (no messageId) leadId=${lead.id}`);
        }
      } catch (err) {
        await this.prisma.definedLead.update({
          where: { id: lead.id },
          data: { notificationStatus: DefinedLeadNotificationStatus.FAILED },
        });
        this.log.warn(
          `Defined lead notification error leadId=${lead.id}: ${err instanceof Error ? err.message : err}`,
        );
      }
    }

    const shouldSendClientWelcome = this.isTruthyEnv('DEFINED_LEAD_SEND_CLIENT_WELCOME', false);
    if (!shouldSendClientWelcome) {
      this.log.log(`Defined lead client welcome disabled leadId=${lead.id}`);
    } else {
      const firstName = fullName.split(/\s+/u)[0] || 'there';
      const websiteUrl = process.env.FRONTEND_URL_PROD || process.env.FRONTEND_URL || 'https://carlosgatti.com';
      this.log.log(`Defined lead client welcome attempt leadId=${lead.id}`);
      try {
        const sentToClient = await this.mailService.send({
          path: 'defined_lead_client_welcome',
          to: email,
          subject: 'Recebemos seu contato - Defined',
          variables: {
            firstName,
            fullName,
            email,
            phone: lead.phone,
            selectedPackage: lead.selectedPackage,
            serviceInterest: lead.serviceInterest,
            websiteUrl,
          },
        });
        if (sentToClient) {
          this.log.log(`Defined lead client welcome sent leadId=${lead.id}`);
        } else {
          this.log.warn(`Defined lead client welcome failed (no messageId) leadId=${lead.id}`);
        }
      } catch (err) {
        this.log.warn(
          `Defined lead client welcome error leadId=${lead.id}: ${err instanceof Error ? err.message : err}`,
        );
      }
    }

    try {
      await this.crmSync.onLeadPersisted(lead.id);
    } catch (err) {
      this.log.warn(
        `Defined lead CRM hook error leadId=${lead.id}: ${err instanceof Error ? err.message : err}`,
      );
    }

    return {
      success: true,
      message: 'Thank you — we received your details.',
      leadId: lead.id,
      submissionAccepted: true,
    };
  }
}
