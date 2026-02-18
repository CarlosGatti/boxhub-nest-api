import { ForbiddenException, NotFoundException } from '@nestjs/common';
import { BucketService } from './bucket.service';
import { PrismaService } from '../../core/prisma/prisma.service';

jest.mock('../../core/services/create-log', () => ({
  createLog: jest.fn().mockResolvedValue(undefined),
}));

describe('BucketService', () => {
  let service: BucketService;
  let prisma: jest.Mocked<PrismaService>;

  const mockUserId = 1;
  const mockOtherUserId = 2;
  const mockGoalId = 10;

  beforeEach(() => {
    prisma = {
      bucketGoal: {
        findUnique: jest.fn(),
        findMany: jest.fn(),
        create: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
        count: jest.fn(),
        groupBy: jest.fn(),
      },
      bucketGoalLog: {
        findUnique: jest.fn(),
        create: jest.fn(),
        delete: jest.fn(),
      },
      bucketGoalPin: {
        findMany: jest.fn(),
        create: jest.fn(),
      },
    } as any;

    service = new BucketService(prisma);
  });

  describe('ownership scoping', () => {
    it('getGoal throws NotFound when goal does not exist', async () => {
      (prisma.bucketGoal.findUnique as jest.Mock).mockResolvedValue(null);

      await expect(service.getGoal(mockUserId, mockGoalId)).rejects.toThrow(NotFoundException);
      await expect(service.getGoal(mockUserId, mockGoalId)).rejects.toThrow(
        /Bucket goal with ID 10 not found/,
      );
    });

    it('getGoal throws Forbidden when goal belongs to another user', async () => {
      (prisma.bucketGoal.findUnique as jest.Mock).mockResolvedValue({
        id: mockGoalId,
        userId: mockOtherUserId,
        title: 'Other goal',
      } as any);

      await expect(service.getGoal(mockUserId, mockGoalId)).rejects.toThrow(ForbiddenException);
      await expect(service.getGoal(mockUserId, mockGoalId)).rejects.toThrow(
        /You do not have access to this goal/,
      );
    });

    it('getGoal returns goal when user owns it', async () => {
      const mockGoal = {
        id: mockGoalId,
        userId: mockUserId,
        title: 'My goal',
        logs: [],
        pins: [],
        media: [],
      };
      (prisma.bucketGoal.findUnique as jest.Mock)
        .mockResolvedValueOnce(mockGoal as any)
        .mockResolvedValueOnce(mockGoal as any);

      const result = await service.getGoal(mockUserId, mockGoalId);
      expect(result).toEqual(mockGoal);
    });
  });

  describe('createGoal', () => {
    it('creates goal with validated details', async () => {
      const input = {
        title: 'Visit Japan',
        type: 'TRAVEL' as const,
        status: 'PLANNED' as const,
        details: { where: 'Japan', startDate: '2025-04-01' },
      };
      const created = { id: 1, ...input, userId: mockUserId };
      (prisma.bucketGoal.create as jest.Mock).mockResolvedValue(created as any);

      const result = await service.createGoal(mockUserId, input as any);
      expect(result).toEqual(created);
      expect((prisma.bucketGoal.create as jest.Mock)).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({
            title: 'Visit Japan',
            type: 'TRAVEL',
            details: expect.objectContaining({ where: 'Japan' }),
          }),
        }),
      );
    });

    it('throws on invalid TRAVEL details', async () => {
      const input = {
        title: 'Bad travel',
        type: 'TRAVEL' as const,
        details: {}, // missing required 'where'
      };

      await expect(service.createGoal(mockUserId, input as any)).rejects.toThrow(
        /Invalid details for type TRAVEL/,
      );
      expect((prisma.bucketGoal.create as jest.Mock)).not.toHaveBeenCalled();
    });
  });
});
