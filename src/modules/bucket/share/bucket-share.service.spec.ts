import { ForbiddenException, NotFoundException } from '@nestjs/common';
import { BucketShareService } from './bucket-share.service';
import { PrismaService } from '../../../core/prisma/prisma.service';

jest.mock('../../../core/services/create-log', () => ({
  createLog: jest.fn().mockResolvedValue(undefined),
}));

describe('BucketShareService', () => {
  let service: BucketShareService;
  let prisma: jest.Mocked<PrismaService>;

  const mockUserId = 1;
  const mockGoalId = 5;
  const mockToken = 'abc123xyz789abcdef123456'; // min 16 chars for isValidTokenFormat

  beforeEach(() => {
    prisma = {
      userAppAccess: { findFirst: jest.fn() },
      user: { findUnique: jest.fn() },
      bucketGoal: {
        findUnique: jest.fn(),
        findMany: jest.fn(),
      },
      bucketShare: {
        findUnique: jest.fn(),
        create: jest.fn(),
        findMany: jest.fn(),
        delete: jest.fn(),
      },
    } as any;

    service = new BucketShareService(prisma);
  });

  describe('createFromGoal', () => {
    it('creates share from goal for authorized user', async () => {
      (prisma.userAppAccess.findFirst as jest.Mock).mockResolvedValue({ id: 1 });
      (prisma.bucketGoal.findUnique as jest.Mock).mockResolvedValue({
        id: mockGoalId,
        userId: mockUserId,
        title: 'My Japan Trip',
      });
      (prisma.bucketGoal.findMany as jest.Mock).mockResolvedValue([
        {
          id: mockGoalId,
          userId: mockUserId,
          title: 'My Japan Trip',
          description: '2 weeks',
          type: 'TRAVEL',
          status: 'PLANNED',
          priority: 10,
          coverUrl: null,
          tags: [],
          details: {},
          targetDate: null,
          completedAt: null,
          createdAt: new Date(),
          _count: { logs: 0, pins: 0, media: 0 },
          logs: [],
          pins: [],
        },
      ]);
      (prisma.bucketShare.findUnique as jest.Mock).mockResolvedValue(null);
      (prisma.bucketShare.create as jest.Mock).mockResolvedValue({
        id: 1,
        userId: mockUserId,
        token: mockToken,
        type: 'GOAL',
        payload: { version: 1, kind: 'GOAL', goals: [] },
        createdAt: new Date(),
      });

      const result = await service.createFromGoal(mockUserId, mockGoalId, 'My Trip');

      expect(result.token).toBe(mockToken);
      expect(result.type).toBe('GOAL');
      expect(prisma.bucketShare.create).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({
            userId: mockUserId,
            type: 'GOAL',
          }),
        })
      );
    });

    it('throws Forbidden when user lacks BUCKET access', async () => {
      (prisma.userAppAccess.findFirst as jest.Mock).mockResolvedValue(null);

      await expect(service.createFromGoal(mockUserId, mockGoalId)).rejects.toThrow(
        ForbiddenException
      );
      await expect(service.createFromGoal(mockUserId, mockGoalId)).rejects.toThrow(
        /Bucket List access required/
      );
    });

    it('throws NotFound when goal does not exist', async () => {
      (prisma.userAppAccess.findFirst as jest.Mock).mockResolvedValue({ id: 1 });
      (prisma.bucketGoal.findUnique as jest.Mock).mockResolvedValue(null);

      await expect(service.createFromGoal(mockUserId, mockGoalId)).rejects.toThrow(
        NotFoundException
      );
      await expect(service.createFromGoal(mockUserId, mockGoalId)).rejects.toThrow(
        /not found/
      );
    });
  });

  describe('getPublicByToken', () => {
    it('returns payload when token exists (no auth)', async () => {
      const mockPayload = {
        version: 1,
        kind: 'GOAL',
        title: 'Shared',
        goals: [{ id: 1, title: 'Goal' }],
      };
      (prisma.bucketShare.findUnique as jest.Mock).mockResolvedValue({
        token: mockToken,
        type: 'GOAL',
        payload: mockPayload,
        createdAt: new Date(),
      });

      const result = await service.getPublicByToken(mockToken);

      expect(result.token).toBe(mockToken);
      expect(result.type).toBe('GOAL');
      expect(result.payload).toEqual(mockPayload);
      expect(prisma.userAppAccess.findFirst).not.toHaveBeenCalled();
    });

    it('throws NotFound when token is invalid', async () => {
      (prisma.bucketShare.findUnique as jest.Mock).mockResolvedValue(null);

      await expect(service.getPublicByToken('bad-token')).rejects.toThrow(NotFoundException);
      await expect(service.getPublicByToken('bad-token')).rejects.toThrow(
        /not found|expired/
      );
    });

    it('throws NotFound when token format is invalid', async () => {
      await expect(service.getPublicByToken('')).rejects.toThrow(NotFoundException);
      await expect(service.getPublicByToken('x')).rejects.toThrow(NotFoundException);
    });
  });
});
