import { BadRequestException, NotFoundException } from '@nestjs/common';
import { Decimal } from '@prisma/client/runtime/library';
import { DefinedProposalStatus } from '@prisma/client';
import { createLog } from '../../core/services/create-log';
import { DefinedProposalsService } from './defined-proposals.service';

jest.mock('../../core/services/create-log', () => ({
  createLog: jest.fn().mockResolvedValue(undefined),
}));

const makeProposal = (overrides: Record<string, unknown> = {}) => ({
  id: 1,
  clientId: 1,
  title: 'Test proposal',
  subtitle: null,
  summary: null,
  status: DefinedProposalStatus.SENT,
  currency: 'USD',
  shareToken: 'token-123',
  shareTokenCreatedAt: null,
  shareTokenExpiresAt: null,
  shareRevokedAt: null,
  sentAt: new Date('2026-01-01T00:00:00.000Z'),
  viewedAt: null,
  approvedAt: null,
  declinedAt: null,
  projectId: null,
  createdById: null,
  createdAt: new Date('2026-01-01T00:00:00.000Z'),
  updatedAt: new Date('2026-01-01T00:00:00.000Z'),
  sections: [{ id: 1, title: 'Scope', type: 'TEXT', body: null, contentJson: null, order: 0 }],
  pricingOptions: [
    {
      id: 1,
      title: 'Package',
      description: null,
      type: 'ONE_TIME',
      amount: new Decimal(100),
      currency: 'USD',
      billingNote: null,
      features: [],
      isRecommended: true,
      order: 0,
    },
  ],
  client: { companyName: 'Defined', contactName: 'Team', email: 'team@defined.one' },
  project: null,
  ...overrides,
});

describe('DefinedProposalsService', () => {
  const makeService = () => {
    const prisma = {
      definedProposal: {
        findUnique: jest.fn(),
        findUniqueOrThrow: jest.fn(),
        update: jest.fn(),
      },
    };
    const service = new DefinedProposalsService(prisma as any);
    return { prisma, service };
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('blocks publish when validation fails', async () => {
    const { prisma, service } = makeService();
    prisma.definedProposal.findUnique.mockResolvedValue(
      makeProposal({
        title: '',
        sections: [],
        pricingOptions: [],
      }),
    );

    await expect(service.publishProposal(1, 9)).rejects.toBeInstanceOf(
      BadRequestException,
    );
    expect(prisma.definedProposal.update).not.toHaveBeenCalled();
  });

  it('publishes valid proposal and ensures share token', async () => {
    const { prisma, service } = makeService();
    prisma.definedProposal.findUnique.mockResolvedValue(
      makeProposal({ shareToken: null, status: DefinedProposalStatus.DRAFT }),
    );
    prisma.definedProposal.update.mockResolvedValue(
      makeProposal({ status: DefinedProposalStatus.SENT }),
    );

    await service.publishProposal(1, 7);

    expect(prisma.definedProposal.update).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { id: 1 },
        data: expect.objectContaining({
          status: DefinedProposalStatus.SENT,
          shareToken: expect.any(String),
        }),
      }),
    );
  });

  it('returns public proposal by token and marks SENT as VIEWED', async () => {
    const { prisma, service } = makeService();
    prisma.definedProposal.findUnique.mockResolvedValue(makeProposal());
    prisma.definedProposal.update.mockResolvedValue(
      makeProposal({ status: DefinedProposalStatus.VIEWED, viewedAt: new Date() }),
    );

    const result = await service.getProposalForRecipient('token-123');

    expect(result.id).toBe(1);
    expect(result.sections[0].title).toBe('Scope');
    expect(prisma.definedProposal.update).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({
          status: DefinedProposalStatus.VIEWED,
        }),
      }),
    );
  });

  it('fails public lookup for invalid token', async () => {
    const { prisma, service } = makeService();
    prisma.definedProposal.findUnique.mockResolvedValue(null);

    await expect(service.getProposalForRecipient('bad')).rejects.toBeInstanceOf(
      NotFoundException,
    );
  });

  it('fails public lookup for expired token', async () => {
    const { prisma, service } = makeService();
    prisma.definedProposal.findUnique.mockResolvedValue(
      makeProposal({
        shareTokenExpiresAt: new Date('2020-01-01T00:00:00.000Z'),
      }),
    );

    await expect(service.getProposalForRecipient('token-123')).rejects.toBeInstanceOf(
      BadRequestException,
    );
  });

  it('is idempotent when approving already approved proposal', async () => {
    const { prisma, service } = makeService();
    prisma.definedProposal.findUnique.mockResolvedValue(
      makeProposal({ status: DefinedProposalStatus.APPROVED }),
    );
    prisma.definedProposal.findUniqueOrThrow.mockResolvedValue(
      makeProposal({ status: DefinedProposalStatus.APPROVED }),
    );

    const approved = await service.approveProposalByToken('token-123');

    expect(approved.status).toBe(DefinedProposalStatus.APPROVED);
    expect(prisma.definedProposal.update).not.toHaveBeenCalled();
  });

  it('declines SENT proposal by token', async () => {
    const { prisma, service } = makeService();
    prisma.definedProposal.findUnique.mockResolvedValue(makeProposal());
    prisma.definedProposal.update.mockResolvedValue(
      makeProposal({ status: DefinedProposalStatus.DECLINED, declinedAt: new Date() }),
    );

    const declined = await service.declineProposalByToken('token-123', 'Not now');

    expect(declined.status).toBe(DefinedProposalStatus.DECLINED);
    expect(createLog).toHaveBeenCalled();
  });
});
