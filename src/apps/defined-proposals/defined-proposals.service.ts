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

const PROPOSAL_INCLUDE = {
  sections: { orderBy: { order: 'asc' as const } },
  pricingOptions: { orderBy: { order: 'asc' as const } },
};

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

    const updated = await this.prisma.definedProposal.update({
      where: { id },
      data: {
        status: DefinedProposalStatus.SENT,
        sentAt: proposal.sentAt ?? new Date(),
        shareToken: proposal.shareToken ?? this.generateShareToken(),
        shareTokenCreatedAt: proposal.shareTokenCreatedAt ?? new Date(),
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

  private generateShareToken() {
    return randomBytes(24).toString('hex');
  }
}
