import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  DefinedAcademyReferralCampaignStatus,
  DefinedAcademyReferralSourceType,
  DefinedAcademyReferralStatus,
  LogAction,
  Prisma,
} from '@prisma/client';
import { PrismaService } from '../../core/prisma/prisma.service';
import { createLog } from '../../core/services/create-log';
import { generateReferralCode } from './utils/academy-shortcode.util';

@Injectable()
export class DefinedAcademyReferralService {
  constructor(private readonly prisma: PrismaService) {}

  async createCampaign(
    academyId: number,
    input: {
      name: string;
      code?: string;
      description?: string;
      sourceType?: DefinedAcademyReferralSourceType;
      partnerId?: number;
      courseId?: number;
      resourceId?: number;
      status?: DefinedAcademyReferralCampaignStatus;
      startsAt?: Date;
      endsAt?: Date;
      metadata?: Prisma.InputJsonValue;
    },
    userId?: number,
  ) {
    await this.ensureAcademy(academyId);
    await this.validateCampaignRelations(academyId, input);

    const code = input.code?.trim() || generateReferralCode();
    const existingCode = await this.prisma.definedAcademyReferralCampaign.findUnique({
      where: { academyId_code: { academyId, code } },
    });
    if (existingCode) {
      throw new BadRequestException('Referral campaign code is already in use');
    }

    const campaign = await this.prisma.definedAcademyReferralCampaign.create({
      data: {
        academyId,
        name: input.name.trim(),
        code,
        description: input.description,
        sourceType: input.sourceType,
        partnerId: input.partnerId,
        courseId: input.courseId,
        resourceId: input.resourceId,
        status: input.status ?? DefinedAcademyReferralCampaignStatus.DRAFT,
        startsAt: input.startsAt,
        endsAt: input.endsAt,
        metadata: input.metadata,
      },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'Defined academy referral campaign created',
      route: 'createDefinedAcademyReferralCampaign',
      metadata: { academyId, campaignId: campaign.id },
    });

    return campaign;
  }

  async updateCampaign(
    academyId: number,
    campaignId: number,
    input: {
      name?: string;
      code?: string;
      description?: string;
      sourceType?: DefinedAcademyReferralSourceType;
      partnerId?: number | null;
      courseId?: number | null;
      resourceId?: number | null;
      status?: DefinedAcademyReferralCampaignStatus;
      startsAt?: Date | null;
      endsAt?: Date | null;
      metadata?: Prisma.InputJsonValue;
    },
    userId?: number,
  ) {
    await this.ensureCampaign(academyId, campaignId);
    await this.validateCampaignRelations(academyId, input);

    if (input.code) {
      const normalizedCode = input.code.trim();
      const duplicate = await this.prisma.definedAcademyReferralCampaign.findFirst({
        where: {
          academyId,
          code: normalizedCode,
          NOT: { id: campaignId },
        },
      });
      if (duplicate) {
        throw new BadRequestException('Referral campaign code is already in use');
      }
    }

    const campaign = await this.prisma.definedAcademyReferralCampaign.update({
      where: { id: campaignId },
      data: {
        name: input.name?.trim(),
        code: input.code?.trim(),
        description: input.description,
        sourceType: input.sourceType,
        partnerId: input.partnerId,
        courseId: input.courseId,
        resourceId: input.resourceId,
        status: input.status,
        startsAt: input.startsAt,
        endsAt: input.endsAt,
        metadata: input.metadata,
      },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'Defined academy referral campaign updated',
      route: 'updateDefinedAcademyReferralCampaign',
      metadata: { academyId, campaignId },
    });

    return campaign;
  }

  async listCampaigns(academyId: number, status?: DefinedAcademyReferralCampaignStatus) {
    await this.ensureAcademy(academyId);
    return this.prisma.definedAcademyReferralCampaign.findMany({
      where: { academyId, status },
      orderBy: { createdAt: 'desc' },
    });
  }

  async captureReferral(input: {
    academyId: number;
    referralCode: string;
    campaignId?: number;
    referrerUserId?: number;
    partnerId?: number;
    metadata?: Prisma.InputJsonValue;
  }) {
    const referralCode = input.referralCode?.trim();
    if (!referralCode) {
      throw new BadRequestException('referralCode is required');
    }

    await this.ensureAcademy(input.academyId);

    if (input.campaignId) {
      await this.ensureCampaign(input.academyId, input.campaignId);
    }

    const existingFirstTouch = await this.prisma.definedAcademyReferral.findFirst({
      where: {
        academyId: input.academyId,
        referralCode,
        status: DefinedAcademyReferralStatus.VISITED,
        referredUserId: null,
      },
      orderBy: { firstVisitedAt: 'asc' },
    });

    if (existingFirstTouch) {
      return existingFirstTouch;
    }

    const attributionExpiresAt = this.buildAttributionExpiryDate();

    const referral = await this.prisma.definedAcademyReferral.create({
      data: {
        academyId: input.academyId,
        campaignId: input.campaignId,
        referrerUserId: input.referrerUserId,
        partnerId: input.partnerId,
        referralCode,
        status: DefinedAcademyReferralStatus.VISITED,
        attributionExpiresAt,
        metadata: input.metadata,
      },
    });

    return referral;
  }

  async attachReferralToUser(userId: number, referralCode: string) {
    try {
      const normalizedCode = referralCode?.trim();
      if (!normalizedCode || userId <= 0) {
        return null;
      }

      const referral = await this.prisma.definedAcademyReferral.findFirst({
        where: {
          referralCode: normalizedCode,
          status: {
            in: [
              DefinedAcademyReferralStatus.VISITED,
              DefinedAcademyReferralStatus.REGISTERED,
            ],
          },
        },
        orderBy: { firstVisitedAt: 'asc' },
      });

      if (!referral) {
        return null;
      }

      if (referral.referrerUserId && referral.referrerUserId === userId) {
        await this.prisma.definedAcademyReferral.update({
          where: { id: referral.id },
          data: { status: DefinedAcademyReferralStatus.INVALID },
        });
        return null;
      }

      if (
        referral.attributionExpiresAt &&
        referral.attributionExpiresAt < new Date()
      ) {
        await this.prisma.definedAcademyReferral.update({
          where: { id: referral.id },
          data: { status: DefinedAcademyReferralStatus.EXPIRED },
        });
        return null;
      }

      if (referral.referredUserId && referral.referredUserId !== userId) {
        return null;
      }

      if (referral.referredUserId === userId) {
        return referral;
      }

      return this.prisma.definedAcademyReferral.update({
        where: { id: referral.id },
        data: {
          referredUserId: userId,
          status: DefinedAcademyReferralStatus.REGISTERED,
          registeredAt: new Date(),
        },
      });
    } catch {
      return null;
    }
  }

  async markReferralEnrolled(userId: number, courseId: number) {
    const course = await this.prisma.definedAcademyCourse.findUnique({
      where: { id: courseId },
      select: { academyId: true },
    });
    if (!course) {
      return null;
    }

    const referral = await this.prisma.definedAcademyReferral.findFirst({
      where: {
        academyId: course.academyId,
        referredUserId: userId,
        status: {
          in: [
            DefinedAcademyReferralStatus.VISITED,
            DefinedAcademyReferralStatus.REGISTERED,
          ],
        },
      },
      orderBy: { firstVisitedAt: 'asc' },
    });

    if (!referral) {
      return null;
    }

    if (referral.referrerUserId && referral.referrerUserId === userId) {
      return null;
    }

    if (
      referral.attributionExpiresAt &&
      referral.attributionExpiresAt < new Date()
    ) {
      await this.prisma.definedAcademyReferral.update({
        where: { id: referral.id },
        data: { status: DefinedAcademyReferralStatus.EXPIRED },
      });
      return null;
    }

    return this.prisma.definedAcademyReferral.update({
      where: { id: referral.id },
      data: {
        status: DefinedAcademyReferralStatus.ENROLLED,
        enrolledAt: new Date(),
      },
    });
  }

  private buildAttributionExpiryDate() {
    const daysRaw = process.env.DEFINED_ACADEMY_REFERRAL_ATTRIBUTION_DAYS;
    const parsedDays = daysRaw ? Number.parseInt(daysRaw, 10) : 30;
    const attributionDays =
      Number.isFinite(parsedDays) && parsedDays > 0 ? parsedDays : 30;
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + attributionDays);
    return expiresAt;
  }

  private async validateCampaignRelations(
    academyId: number,
    input: {
      partnerId?: number | null;
      courseId?: number | null;
      resourceId?: number | null;
    },
  ) {
    if (input.partnerId) {
      const partner = await this.prisma.definedAcademyPartner.findUnique({
        where: { id: input.partnerId },
      });
      if (!partner || partner.academyId !== academyId) {
        throw new BadRequestException('Partner does not belong to this academy');
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

  private async ensureCampaign(academyId: number, campaignId: number) {
    const campaign = await this.prisma.definedAcademyReferralCampaign.findUnique({
      where: { id: campaignId },
    });
    if (!campaign || campaign.academyId !== academyId) {
      throw new NotFoundException(
        `Defined academy referral campaign ${campaignId} not found in academy ${academyId}`,
      );
    }
    return campaign;
  }
}
