import { BadRequestException } from '@nestjs/common';
import { DefinedAcademyShortLinkStatus } from '@prisma/client';
import { DefinedAcademyShortLinkService } from './defined-academy-shortlink.service';

jest.mock('../../core/services/create-log', () => ({
  createLog: jest.fn().mockResolvedValue(undefined),
}));

describe('DefinedAcademyShortlinkService', () => {
  const makeService = () => {
    const prisma = {
      definedAcademy: { findUnique: jest.fn() },
      definedAcademyShortLink: {
        findUnique: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
        findMany: jest.fn(),
      },
      definedAcademyShortLinkEvent: { create: jest.fn() },
      $transaction: jest.fn((ops: unknown[]) => Promise.all(ops)),
    };
    return { service: new DefinedAcademyShortLinkService(prisma as any), prisma };
  };

  it('rejects unsafe redirect protocols', async () => {
    const { service, prisma } = makeService();
    prisma.definedAcademyShortLink.findUnique.mockResolvedValue({
      id: 1,
      code: 'abc123',
      destinationUrl: 'javascript:alert(1)',
      status: DefinedAcademyShortLinkStatus.ACTIVE,
      expiresAt: null,
      academyId: 1,
    });

    await expect(service.resolveShortLink('abc123')).rejects.toBeInstanceOf(
      BadRequestException,
    );
  });

  it('rejects disabled short links', async () => {
    const { service, prisma } = makeService();
    prisma.definedAcademyShortLink.findUnique.mockResolvedValue({
      id: 1,
      code: 'abc123',
      destinationUrl: 'https://defined-lab.com/guide',
      status: DefinedAcademyShortLinkStatus.DISABLED,
      expiresAt: null,
      academyId: 1,
    });

    await expect(service.resolveShortLink('abc123')).rejects.toBeInstanceOf(
      BadRequestException,
    );
  });

  it('resolves active https short link and records event', async () => {
    const { service, prisma } = makeService();
    prisma.definedAcademyShortLink.findUnique.mockResolvedValue({
      id: 1,
      code: 'abc123',
      destinationUrl: 'https://defined-lab.com/guide',
      status: DefinedAcademyShortLinkStatus.ACTIVE,
      expiresAt: null,
      academyId: 1,
      visitCount: 0,
    });
    prisma.definedAcademyShortLink.update.mockResolvedValue({});
    prisma.definedAcademyShortLinkEvent.create.mockResolvedValue({});

    const result = await service.resolveShortLink('abc123', {
      anonymousSessionId: 'session-1',
    });
    expect(result.destinationUrl).toBe('https://defined-lab.com/guide');
    expect(prisma.definedAcademyShortLinkEvent.create).toHaveBeenCalled();
  });
});
