import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  DefinedProposal,
  DefinedProposalPricingType,
  DefinedProposalSectionType,
  DefinedProposalStatus,
  LogAction,
  Prisma,
} from '@prisma/client';
import { randomBytes } from 'crypto';
import { Decimal } from '@prisma/client/runtime/library';
import { PrismaService } from '../../core/prisma/prisma.service';
import { createLog } from '../../core/services/create-log';
import { CreateDefinedProposalInput } from './dto/create-defined-proposal.input';
import { CreateDefinedProposalPricingOptionInput } from './dto/create-defined-proposal-pricing-option.input';
import { CreateDefinedProposalSectionInput } from './dto/create-defined-proposal-section.input';
import { UpdateDefinedProposalInput } from './dto/update-defined-proposal.input';
import { DefinedProposalRecipientView } from './types/defined-proposal-recipient-view.type';
import {
  DefinedProposalValidationError,
  DefinedProposalValidationResult,
} from './types/defined-proposal-validation-result.type';

const PROPOSAL_INCLUDE = {
  sections: { orderBy: { order: 'asc' as const } },
  pricingOptions: { orderBy: { order: 'asc' as const } },
};

const PROPOSAL_RECIPIENT_INCLUDE = {
  ...PROPOSAL_INCLUDE,
  client: true,
  project: true,
};

const PUBLIC_PROPOSAL_STATUSES = new Set<DefinedProposalStatus>([
  DefinedProposalStatus.SENT,
  DefinedProposalStatus.VIEWED,
  DefinedProposalStatus.APPROVED,
  DefinedProposalStatus.DECLINED,
]);

@Injectable()
export class DefinedProposalsService {
  constructor(private readonly prisma: PrismaService) {}

  async listProposals(
    clientId?: number,
    projectId?: number,
    status?: DefinedProposalStatus,
  ) {
    return this.prisma.definedProposal.findMany({
      where: { clientId, projectId, status },
      include: PROPOSAL_INCLUDE,
      orderBy: { createdAt: 'desc' },
    });
  }

  async getProposal(id: number) {
    return this.ensureProposal(id);
  }

  async getClientProposals(clientId: number) {
    return this.prisma.definedProposal.findMany({
      where: { clientId },
      include: PROPOSAL_INCLUDE,
      orderBy: { createdAt: 'desc' },
    });
  }

  async getProjectProposals(projectId: number) {
    return this.prisma.definedProposal.findMany({
      where: { projectId },
      include: PROPOSAL_INCLUDE,
      orderBy: { createdAt: 'desc' },
    });
  }

  async createProposal(input: CreateDefinedProposalInput, userId?: number) {
    return this.prisma.$transaction(async (tx) => {
      await this.ensureClient(input.clientId, tx);
      if (input.projectId) {
        await this.ensureProject(input.projectId, input.clientId, tx);
      }

      const proposal = await tx.definedProposal.create({
        data: {
          clientId: input.clientId,
          projectId: input.projectId,
          title: input.title,
          subtitle: input.subtitle,
          summary: input.summary,
          contentJson: input.contentJson as Prisma.InputJsonValue | undefined,
          currency: input.currency ?? 'USD',
          status: DefinedProposalStatus.DRAFT,
          createdById: userId,
          sections: input.sections?.length
            ? {
                create: this.mapSections(input.sections),
              }
            : undefined,
          pricingOptions: input.pricingOptions?.length
            ? {
                create: this.mapPricingOptions(input.pricingOptions),
              }
            : undefined,
        },
        include: PROPOSAL_INCLUDE,
      });

      await createLog({
        action: LogAction.CUSTOM_ACTION,
        userId,
        details: 'Defined proposal created',
        route: 'createDefinedProposal',
        metadata: {
          proposalId: proposal.id,
          clientId: proposal.clientId,
          projectId: proposal.projectId,
        },
      });

      return proposal;
    });
  }

  async updateProposal(id: number, input: UpdateDefinedProposalInput, userId?: number) {
    return this.prisma.$transaction(async (tx) => {
      const current = await this.ensureProposal(id, tx);

      if (
        current.status !== DefinedProposalStatus.DRAFT &&
        current.status !== DefinedProposalStatus.SENT
      ) {
        throw new BadRequestException(
          'Only DRAFT and SENT proposals can be edited',
        );
      }

      const data: Prisma.DefinedProposalUpdateInput = {
        title: input.title,
        subtitle: input.subtitle,
        summary: input.summary,
        status: input.status as DefinedProposalStatus | undefined,
        currency: input.currency,
        contentJson: input.contentJson as Prisma.InputJsonValue | undefined,
      };

      if (input.sections) {
        await tx.definedProposalSection.deleteMany({ where: { proposalId: id } });
        if (input.sections.length) {
          await tx.definedProposalSection.createMany({
            data: this.mapSections(input.sections).map((section) => ({
              ...section,
              proposalId: id,
            })),
          });
        }
      }

      if (input.pricingOptions) {
        await tx.definedProposalPricingOption.deleteMany({
          where: { proposalId: id },
        });
        if (input.pricingOptions.length) {
          await tx.definedProposalPricingOption.createMany({
            data: this.mapPricingOptions(input.pricingOptions).map((option) => ({
              ...option,
              proposalId: id,
            })),
          });
        }
      }

      const proposal = await tx.definedProposal.update({
        where: { id },
        data,
        include: PROPOSAL_INCLUDE,
      });

      await createLog({
        action: LogAction.CUSTOM_ACTION,
        userId,
        details: 'Defined proposal updated',
        route: 'updateDefinedProposal',
        metadata: {
          proposalId: proposal.id,
          status: proposal.status,
        },
      });

      return proposal;
    });
  }

  async deleteProposal(id: number) {
    const proposal = await this.ensureProposal(id);
    if (proposal.status !== DefinedProposalStatus.DRAFT) {
      throw new BadRequestException('Only DRAFT proposals can be deleted');
    }
    await this.prisma.definedProposal.delete({ where: { id } });
    return true;
  }

  async publishProposal(id: number, userId?: number) {
    const proposal = await this.ensureProposal(id);
    const validation = this.validateProposalEntity(proposal);
    if (!validation.isValid) {
      throw new BadRequestException({
        code: 'PROPOSAL_VALIDATION_FAILED',
        message: 'Defined proposal failed validation',
        errors: validation.errors,
      });
    }

    const shouldRegenerateToken = !proposal.shareToken || !!proposal.shareRevokedAt;
    const nextShareToken = shouldRegenerateToken
      ? this.generateShareToken()
      : proposal.shareToken;

    const updated = await this.prisma.definedProposal.update({
      where: { id },
      data: {
        status: DefinedProposalStatus.SENT,
        sentAt: proposal.sentAt ?? new Date(),
        shareToken: nextShareToken,
        shareTokenCreatedAt:
          shouldRegenerateToken || !proposal.shareTokenCreatedAt
            ? new Date()
            : proposal.shareTokenCreatedAt,
        shareRevokedAt: shouldRegenerateToken ? null : proposal.shareRevokedAt,
      },
      include: PROPOSAL_INCLUDE,
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'Defined proposal published',
      route: 'publishDefinedProposal',
      metadata: {
        proposalId: updated.id,
        status: updated.status,
      },
    });

    return updated;
  }

  async validateProposal(id: number): Promise<DefinedProposalValidationResult> {
    const proposal = await this.ensureProposal(id);
    return this.validateProposalEntity(proposal);
  }

  async regenerateProposalShareToken(id: number, userId?: number) {
    await this.ensureProposal(id);
    const proposal = await this.prisma.definedProposal.update({
      where: { id },
      data: {
        shareToken: this.generateShareToken(),
        shareTokenCreatedAt: new Date(),
        shareRevokedAt: null,
      },
      include: PROPOSAL_INCLUDE,
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'Defined proposal share token regenerated',
      route: 'regenerateDefinedProposalShareToken',
      metadata: { proposalId: proposal.id },
    });

    return proposal;
  }

  async archiveProposal(id: number, userId?: number) {
    await this.ensureProposal(id);
    const proposal = await this.prisma.definedProposal.update({
      where: { id },
      data: { status: DefinedProposalStatus.ARCHIVED },
      include: PROPOSAL_INCLUDE,
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'Defined proposal archived',
      route: 'archiveDefinedProposal',
      metadata: { proposalId: proposal.id },
    });

    return proposal;
  }

  async duplicateProposal(id: number, userId?: number) {
    return this.prisma.$transaction(async (tx) => {
      const proposal = await this.ensureProposal(id, tx);
      const clone = await tx.definedProposal.create({
        data: {
          clientId: proposal.clientId,
          projectId: proposal.projectId,
          title: `${proposal.title} Copy`,
          subtitle: proposal.subtitle,
          summary: proposal.summary,
          currency: proposal.currency,
          contentJson: proposal.contentJson as Prisma.InputJsonValue | undefined,
          status: DefinedProposalStatus.DRAFT,
          createdById: userId,
          sections: proposal.sections.length
            ? {
                create: proposal.sections.map((section) => ({
                  type: section.type,
                  title: section.title,
                  body: section.body,
                  contentJson: section.contentJson as
                    | Prisma.InputJsonValue
                    | undefined,
                  order: section.order,
                })),
              }
            : undefined,
          pricingOptions: proposal.pricingOptions.length
            ? {
                create: proposal.pricingOptions.map((option) => ({
                  title: option.title,
                  description: option.description,
                  type: option.type,
                  amount: option.amount,
                  currency: option.currency,
                  billingNote: option.billingNote,
                  features: option.features,
                  isRecommended: option.isRecommended,
                  order: option.order,
                })),
              }
            : undefined,
        },
        include: PROPOSAL_INCLUDE,
      });

      await createLog({
        action: LogAction.CUSTOM_ACTION,
        userId,
        details: 'Defined proposal duplicated',
        route: 'duplicateDefinedProposal',
        metadata: { proposalId: proposal.id, duplicatedId: clone.id },
      });

      return clone;
    });
  }

  async getProposalForRecipient(token: string): Promise<DefinedProposalRecipientView> {
    const proposal = await this.ensureProposalByToken(token);
    const normalized = this.ensurePublicReadableProposal(proposal);

    if (normalized.status === DefinedProposalStatus.SENT && !normalized.viewedAt) {
      const markedViewed = await this.prisma.definedProposal.update({
        where: { id: normalized.id },
        data: {
          status: DefinedProposalStatus.VIEWED,
          viewedAt: new Date(),
        },
        include: PROPOSAL_RECIPIENT_INCLUDE,
      });
      return this.toRecipientView(markedViewed);
    }

    return this.toRecipientView(normalized);
  }

  async approveProposalByToken(token: string) {
    const proposal = await this.ensureProposalByToken(token);
    const readable = this.ensurePublicReadableProposal(proposal);

    if (readable.status === DefinedProposalStatus.ARCHIVED) {
      throw new BadRequestException('Archived proposal cannot be approved');
    }

    if (readable.status === DefinedProposalStatus.APPROVED) {
      return this.prisma.definedProposal.findUniqueOrThrow({
        where: { id: readable.id },
        include: PROPOSAL_INCLUDE,
      });
    }

    if (readable.status === DefinedProposalStatus.DECLINED) {
      throw new BadRequestException('Declined proposal cannot be approved');
    }

    if (
      readable.status !== DefinedProposalStatus.SENT &&
      readable.status !== DefinedProposalStatus.VIEWED
    ) {
      throw new BadRequestException('Only SENT or VIEWED proposals can be approved');
    }

    return this.prisma.definedProposal.update({
      where: { id: readable.id },
      data: {
        status: DefinedProposalStatus.APPROVED,
        approvedAt: readable.approvedAt ?? new Date(),
        viewedAt: readable.viewedAt ?? new Date(),
      },
      include: PROPOSAL_INCLUDE,
    });
  }

  async declineProposalByToken(token: string, reason?: string) {
    const proposal = await this.ensureProposalByToken(token);
    const readable = this.ensurePublicReadableProposal(proposal);

    if (readable.status === DefinedProposalStatus.ARCHIVED) {
      throw new BadRequestException('Archived proposal cannot be declined');
    }

    if (readable.status === DefinedProposalStatus.DECLINED) {
      return this.prisma.definedProposal.findUniqueOrThrow({
        where: { id: readable.id },
        include: PROPOSAL_INCLUDE,
      });
    }

    if (readable.status === DefinedProposalStatus.APPROVED) {
      throw new BadRequestException('Approved proposal cannot be declined');
    }

    if (
      readable.status !== DefinedProposalStatus.SENT &&
      readable.status !== DefinedProposalStatus.VIEWED
    ) {
      throw new BadRequestException('Only SENT or VIEWED proposals can be declined');
    }

    const declined = await this.prisma.definedProposal.update({
      where: { id: readable.id },
      data: {
        status: DefinedProposalStatus.DECLINED,
        declinedAt: readable.declinedAt ?? new Date(),
        viewedAt: readable.viewedAt ?? new Date(),
      },
      include: PROPOSAL_INCLUDE,
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      details: 'Defined proposal declined by token',
      route: 'declineDefinedProposalByToken',
      metadata: {
        proposalId: declined.id,
        reason: reason?.trim() ? reason.trim() : undefined,
      },
    });

    return declined;
  }

  buildProposalShareUrl(proposal: DefinedProposal): string | null {
    if (!proposal.shareToken) {
      return null;
    }

    const frontendUrl = process.env.FRONTEND_URL?.trim();
    if (!frontendUrl) {
      return null;
    }

    return `${frontendUrl.replace(/\/$/, '')}/proposal/${proposal.shareToken}`;
  }

  private async ensureProposal(id: number, tx: PrismaService | Prisma.TransactionClient = this.prisma) {
    const proposal = await tx.definedProposal.findUnique({
      where: { id },
      include: PROPOSAL_INCLUDE,
    });
    if (!proposal) {
      throw new NotFoundException(`Defined proposal ${id} not found`);
    }
    return proposal;
  }

  private async ensureProposalByToken(token: string) {
    const normalizedToken = token?.trim();
    if (!normalizedToken) {
      throw new BadRequestException('Invalid proposal token');
    }

    const proposal = await this.prisma.definedProposal.findUnique({
      where: { shareToken: normalizedToken },
      include: PROPOSAL_RECIPIENT_INCLUDE,
    });

    if (!proposal) {
      throw new NotFoundException('Proposal not found');
    }

    return proposal;
  }

  private ensurePublicReadableProposal(
    proposal: Awaited<ReturnType<DefinedProposalsService['ensureProposalByToken']>>,
  ) {
    if (proposal.shareRevokedAt) {
      throw new BadRequestException('Proposal share link has been revoked');
    }

    if (proposal.shareTokenExpiresAt && proposal.shareTokenExpiresAt < new Date()) {
      throw new BadRequestException('Proposal share link has expired');
    }

    if (!PUBLIC_PROPOSAL_STATUSES.has(proposal.status)) {
      throw new BadRequestException('Proposal is not publicly available');
    }

    return proposal;
  }

  private async ensureClient(
    clientId: number,
    tx: Prisma.TransactionClient,
  ) {
    const client = await tx.definedClient.findUnique({ where: { id: clientId } });
    if (!client) {
      throw new NotFoundException(`Defined client ${clientId} not found`);
    }
    return client;
  }

  private async ensureProject(
    projectId: number,
    clientId: number,
    tx: Prisma.TransactionClient,
  ) {
    const project = await tx.definedProject.findUnique({ where: { id: projectId } });
    if (!project) {
      throw new NotFoundException(`Defined project ${projectId} not found`);
    }
    if (project.clientId !== clientId) {
      throw new BadRequestException(
        'Defined project must belong to the selected client',
      );
    }
    return project;
  }

  private mapSections(sections: CreateDefinedProposalSectionInput[]) {
    return sections.map((section, index) => ({
      type: section.type ?? DefinedProposalSectionType.TEXT,
      title: section.title,
      body: section.body,
      contentJson: section.contentJson as Prisma.InputJsonValue | undefined,
      order: section.order ?? index,
    }));
  }

  private mapPricingOptions(options: CreateDefinedProposalPricingOptionInput[]) {
    return options.map((option, index) => ({
      title: option.title,
      description: option.description,
      type: option.type ?? DefinedProposalPricingType.ONE_TIME,
      amount:
        option.amount === null || option.amount === undefined
          ? null
          : new Decimal(option.amount),
      currency: option.currency ?? 'USD',
      billingNote: option.billingNote,
      features: option.features ?? [],
      isRecommended: option.isRecommended ?? false,
      order: option.order ?? index,
    }));
  }

  private validateProposalEntity(
    proposal: Awaited<ReturnType<DefinedProposalsService['ensureProposal']>>,
  ): DefinedProposalValidationResult {
    const errors: DefinedProposalValidationError[] = [];

    if (!proposal.title?.trim()) {
      errors.push({
        code: 'TITLE_REQUIRED',
        field: 'title',
        message: 'Title is required',
      });
    }

    if (!proposal.clientId) {
      errors.push({
        code: 'CLIENT_REQUIRED',
        field: 'clientId',
        message: 'Client is required',
      });
    }

    const validSections = proposal.sections.filter((section) => section.title?.trim());
    if (!validSections.length) {
      errors.push({
        code: 'SECTION_REQUIRED',
        field: 'sections',
        message: 'At least one section with title is required',
      });
    }

    const validPricingOptions = proposal.pricingOptions.filter((option) =>
      option.title?.trim(),
    );
    if (!validPricingOptions.length) {
      errors.push({
        code: 'PRICING_OPTION_REQUIRED',
        field: 'pricingOptions',
        message: 'At least one pricing option with title is required',
      });
    }

    proposal.pricingOptions.forEach((option, index) => {
      if (option.amount !== null && Number(option.amount) < 0) {
        errors.push({
          code: 'PRICING_AMOUNT_INVALID',
          field: `pricingOptions[${index}].amount`,
          message: 'Pricing amount must be greater than or equal to zero',
        });
      }
    });

    const recommendedCount = proposal.pricingOptions.filter(
      (option) => option.isRecommended,
    ).length;
    if (recommendedCount > 1) {
      errors.push({
        code: 'MULTIPLE_RECOMMENDED_OPTIONS',
        field: 'pricingOptions',
        message: 'Only one pricing option can be marked as recommended',
      });
    }

    const inconsistentCurrency = proposal.pricingOptions.find(
      (option) => !!option.currency && option.currency !== proposal.currency,
    );
    if (inconsistentCurrency) {
      errors.push({
        code: 'CURRENCY_MISMATCH',
        field: 'pricingOptions.currency',
        message: 'All pricing options must use the same proposal currency',
      });
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  }

  private toRecipientView(
    proposal: Awaited<ReturnType<DefinedProposalsService['ensureProposalByToken']>>,
  ): DefinedProposalRecipientView {
    return {
      id: proposal.id,
      title: proposal.title,
      subtitle: proposal.subtitle,
      summary: proposal.summary,
      status: proposal.status,
      currency: proposal.currency,
      sentAt: proposal.sentAt,
      clientDisplayName:
        proposal.client.companyName ||
        proposal.client.contactName ||
        proposal.client.email,
      projectName: proposal.project?.name ?? null,
      sections: proposal.sections
        .sort((a, b) => a.order - b.order)
        .map((section) => ({
          type: section.type,
          title: section.title,
          body: section.body,
          contentJson: section.contentJson,
          order: section.order,
        })),
      pricingOptions: proposal.pricingOptions
        .sort((a, b) => a.order - b.order)
        .map((option) => ({
          title: option.title,
          description: option.description,
          type: option.type,
          amount: option.amount ? Number(option.amount) : null,
          currency: option.currency,
          billingNote: option.billingNote,
          features: option.features,
          isRecommended: option.isRecommended,
          order: option.order,
        })),
      shareTokenExpiresAt: proposal.shareTokenExpiresAt,
      shareRevokedAt: proposal.shareRevokedAt,
    };
  }

  private generateShareToken() {
    return randomBytes(24).toString('hex');
  }
}
