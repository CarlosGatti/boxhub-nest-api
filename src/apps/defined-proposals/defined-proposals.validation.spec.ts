import { DefinedProposalStatus } from '@prisma/client';
import { DefinedProposalsService } from './defined-proposals.service';

describe('DefinedProposalsService validation', () => {
  const makeService = (proposal: any) => {
    const prisma = {
      definedProposal: {
        findUnique: jest.fn().mockResolvedValue(proposal),
      },
    };
    const service = new DefinedProposalsService(prisma as any);
    return { service, prisma };
  };

  it('returns validation errors for incomplete proposal', async () => {
    const { service } = makeService({
      id: 10,
      clientId: null,
      title: '  ',
      currency: 'USD',
      status: DefinedProposalStatus.DRAFT,
      sections: [],
      pricingOptions: [],
    });

    const result = await service.validateProposal(10);

    expect(result.isValid).toBe(false);
    expect(result.errors.map((error) => error.code)).toEqual(
      expect.arrayContaining([
        'TITLE_REQUIRED',
        'CLIENT_REQUIRED',
        'SECTION_REQUIRED',
        'PRICING_OPTION_REQUIRED',
      ]),
    );
  });

  it('returns valid for proposal with required data', async () => {
    const { service } = makeService({
      id: 11,
      clientId: 1,
      title: 'Proposal',
      currency: 'USD',
      status: DefinedProposalStatus.DRAFT,
      sections: [{ title: 'Scope', order: 0 }],
      pricingOptions: [
        { title: 'Package A', amount: null, currency: 'USD', isRecommended: false },
      ],
    });

    const result = await service.validateProposal(11);

    expect(result.isValid).toBe(true);
    expect(result.errors).toHaveLength(0);
  });
});
