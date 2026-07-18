import { DefinedAcademyReferralStatus } from '@prisma/client';
import { DefinedAcademyReferralService } from './defined-academy-referral.service';

jest.mock('../../core/services/create-log', () => ({
  createLog: jest.fn().mockResolvedValue(undefined),
}));

describe('DefinedAcademyReferralService', () => {
  const makeService = () => {
    const prisma = {
      definedAcademy: { findUnique: jest.fn() },
      definedAcademyReferralCampaign: {
        findFirst: jest.fn(),
        findUnique: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
        findMany: jest.fn(),
      },
      definedAcademyReferral: {
        findFirst: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
        findMany: jest.fn(),
      },
      definedAcademyCourse: { findUnique: jest.fn() },
    };
    return { service: new DefinedAcademyReferralService(prisma as any), prisma };
  };

  it('does not overwrite existing first-touch visit referral', async () => {
    const { service, prisma } = makeService();
    prisma.definedAcademy.findUnique.mockResolvedValue({ id: 1 });
    prisma.definedAcademyReferralCampaign.findFirst.mockResolvedValue({
      id: 1,
      academyId: 1,
      code: 'school-a',
      status: 'ACTIVE',
    });
    prisma.definedAcademyReferral.findFirst.mockResolvedValue({
      id: 10,
      referralCode: 'abc',
      status: DefinedAcademyReferralStatus.VISITED,
      referredUserId: null,
    });

    const result = await service.captureReferral({
      academyId: 1,
      referralCode: 'abc',
    });
    expect(result.id).toBe(10);
    expect(prisma.definedAcademyReferral.create).not.toHaveBeenCalled();
  });

  it('returns null on attach when self-referral detected', async () => {
    const { service, prisma } = makeService();
    prisma.definedAcademy.findUnique.mockResolvedValue({ id: 1 });
    prisma.definedAcademyReferral.findFirst.mockResolvedValue({
      id: 10,
      academyId: 1,
      referralCode: 'abc',
      referrerUserId: 5,
      referredUserId: null,
      status: DefinedAcademyReferralStatus.VISITED,
      attributionExpiresAt: new Date(Date.now() + 86400000),
    });

    const result = await service.attachReferralToUser(5, 'abc');
    expect(result).toBeNull();
  });

  it('attachReferralToUser never throws on missing referral', async () => {
    const { service, prisma } = makeService();
    prisma.definedAcademyReferral.findFirst.mockResolvedValue(null);

    await expect(service.attachReferralToUser(5, 'missing')).resolves.toBeNull();
  });
});
