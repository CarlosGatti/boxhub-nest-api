import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  DefinedAcademyShortLinkStatus,
  LogAction,
  Prisma,
} from '@prisma/client';
import { createHash } from 'crypto';
import { PrismaService } from '../../core/prisma/prisma.service';
import { createLog } from '../../core/services/create-log';
import {
  assertValidCustomShortCode,
  generateShortCode,
  normalizeShortCode,
} from './utils/academy-shortcode.util';
import {
  assertSafeExternalUrl,
  isSafeExternalUrl,
} from './utils/academy-url.util';

export type ShortLinkTrackingMetadata = {
  userId?: number;
  anonymousSessionId?: string;
  referrer?: string;
  userAgentSummary?: string;
  campaignMetadata?: Prisma.InputJsonValue;
};

@Injectable()
export class DefinedAcademyShortLinkService {
  constructor(private readonly prisma: PrismaService) {}

  async createShortLink(
    academyId: number,
    input: {
      destinationUrl: string;
      resourceId?: number;
      courseId?: number;
      partnerId?: number;
      referralCampaignId?: number;
      customCode?: string;
      expiresAt?: Date;
    },
    userId?: number,
  ) {
    await this.ensureAcademy(academyId);
    try {
      assertSafeExternalUrl(input.destinationUrl, 'destinationUrl');
    } catch (error) {
      throw new BadRequestException((error as Error).message);
    }

    await this.validateOptionalRelations(academyId, input);

    const code = await this.resolveShortCode(input.customCode);

    const shortLink = await this.prisma.definedAcademyShortLink.create({
      data: {
        academyId,
        code,
        destinationUrl: input.destinationUrl.trim(),
        resourceId: input.resourceId,
        courseId: input.courseId,
        partnerId: input.partnerId,
        referralCampaignId: input.referralCampaignId,
        expiresAt: input.expiresAt,
        createdById: userId,
      },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'Defined academy short link created',
      route: 'createDefinedAcademyShortLink',
      metadata: { academyId, shortLinkId: shortLink.id, code: shortLink.code },
    });

    return shortLink;
  }

  async disableShortLink(academyId: number, shortLinkId: number, userId?: number) {
    await this.ensureShortLink(academyId, shortLinkId);
    const shortLink = await this.prisma.definedAcademyShortLink.update({
      where: { id: shortLinkId },
      data: { status: DefinedAcademyShortLinkStatus.DISABLED },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'Defined academy short link disabled',
      route: 'disableDefinedAcademyShortLink',
      metadata: { academyId, shortLinkId },
    });

    return shortLink;
  }

  async listShortLinks(academyId: number) {
    await this.ensureAcademy(academyId);
    return this.prisma.definedAcademyShortLink.findMany({
      where: { academyId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async resolveShortLink(code: string, tracking?: ShortLinkTrackingMetadata) {
    const normalizedCode = normalizeShortCode(code);
    if (!normalizedCode) {
      throw new BadRequestException('code is required');
    }

    const shortLink = await this.prisma.definedAcademyShortLink.findUnique({
      where: { code: normalizedCode },
    });

    if (!shortLink) {
      throw new NotFoundException(`Short link "${code}" not found`);
    }

    if (shortLink.status === DefinedAcademyShortLinkStatus.DISABLED) {
      throw new BadRequestException('Short link is disabled');
    }

    if (shortLink.expiresAt && shortLink.expiresAt <= new Date()) {
      if (shortLink.status === DefinedAcademyShortLinkStatus.ACTIVE) {
        await this.prisma.definedAcademyShortLink.update({
          where: { id: shortLink.id },
          data: { status: DefinedAcademyShortLinkStatus.EXPIRED },
        });
      }
      throw new BadRequestException('Short link has expired');
    }

    if (shortLink.status !== DefinedAcademyShortLinkStatus.ACTIVE) {
      throw new BadRequestException('Short link is not active');
    }

    if (!isSafeExternalUrl(shortLink.destinationUrl)) {
      throw new BadRequestException('Short link destination is not safe');
    }

    const anonymousSessionHash = this.hashAnonymousSession(
      tracking?.anonymousSessionId,
    );

    const [updatedShortLink] = await this.prisma.$transaction([
      this.prisma.definedAcademyShortLink.update({
        where: { id: shortLink.id },
        data: { visitCount: { increment: 1 } },
      }),
      this.prisma.definedAcademyShortLinkEvent.create({
        data: {
          shortLinkId: shortLink.id,
          userId: tracking?.userId,
          anonymousSessionHash,
          referrer: tracking?.referrer,
          userAgentSummary: tracking?.userAgentSummary,
          campaignMetadata: tracking?.campaignMetadata,
        },
      }),
    ]);

    return {
      shortLink: updatedShortLink,
      destinationUrl: shortLink.destinationUrl.trim(),
    };
  }

  private async resolveShortCode(customCode?: string) {
    if (customCode?.trim()) {
      try {
        assertValidCustomShortCode(customCode);
      } catch (error) {
        throw new BadRequestException((error as Error).message);
      }
      const normalized = normalizeShortCode(customCode);
      const existing = await this.prisma.definedAcademyShortLink.findUnique({
        where: { code: normalized },
      });
      if (existing) {
        throw new BadRequestException('Short code is already in use');
      }
      return normalized;
    }

    for (let attempt = 0; attempt < 5; attempt += 1) {
      const code = generateShortCode();
      const existing = await this.prisma.definedAcademyShortLink.findUnique({
        where: { code },
      });
      if (!existing) {
        return code;
      }
    }

    throw new BadRequestException('Unable to generate a unique short code');
  }

  private hashAnonymousSession(sessionId?: string) {
    if (!sessionId?.trim()) {
      return undefined;
    }
    const salt =
      process.env.DEFINED_ACADEMY_SHORTLINK_HASH_SALT?.trim() ||
      'defined-academy-shortlink';
    return createHash('sha256')
      .update(`${salt}:${sessionId.trim()}`)
      .digest('hex');
  }

  private async validateOptionalRelations(
    academyId: number,
    input: {
      resourceId?: number;
      courseId?: number;
      partnerId?: number;
      referralCampaignId?: number;
    },
  ) {
    if (input.resourceId) {
      const resource = await this.prisma.definedAcademyResource.findUnique({
        where: { id: input.resourceId },
      });
      if (!resource || resource.academyId !== academyId) {
        throw new BadRequestException(
          'Resource does not belong to this academy',
        );
      }
    }

    if (input.courseId) {
      const course = await this.prisma.definedAcademyCourse.findUnique({
        where: { id: input.courseId },
      });
      if (!course || course.academyId !== academyId) {
        throw new BadRequestException('Course does not belong to this academy');
      }
    }

    if (input.partnerId) {
      const partner = await this.prisma.definedAcademyPartner.findUnique({
        where: { id: input.partnerId },
      });
      if (!partner || partner.academyId !== academyId) {
        throw new BadRequestException('Partner does not belong to this academy');
      }
    }

    if (input.referralCampaignId) {
      const campaign = await this.prisma.definedAcademyReferralCampaign.findUnique({
        where: { id: input.referralCampaignId },
      });
      if (!campaign || campaign.academyId !== academyId) {
        throw new BadRequestException(
          'Referral campaign does not belong to this academy',
        );
      }
    }
  }

  private async ensureAcademy(academyId: number) {
    const academy = await this.prisma.definedAcademy.findUnique({
      where: { id: academyId },
    });
    if (!academy) {
      throw new NotFoundException(`Defined academy ${academyId} not found`);
    }
    return academy;
  }

  private async ensureShortLink(academyId: number, shortLinkId: number) {
    const shortLink = await this.prisma.definedAcademyShortLink.findUnique({
      where: { id: shortLinkId },
    });
    if (!shortLink || shortLink.academyId !== academyId) {
      throw new NotFoundException(
        `Defined academy short link ${shortLinkId} not found in academy ${academyId}`,
      );
    }
    return shortLink;
  }
}
