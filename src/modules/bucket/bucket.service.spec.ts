import { BadRequestException, ForbiddenException, NotFoundException } from '@nestjs/common';
import { BucketService } from './bucket.service';
import { PrismaService } from '../../core/prisma/prisma.service';

jest.mock('../../core/services/create-log', () => ({
  createLog: jest.fn().mockResolvedValue(undefined),
}));

jest.mock('../../core/utils/upload-delete.util', () => ({
  deleteUploadByUrl: jest.fn().mockResolvedValue(undefined),
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
      bucketGoalMedia: {
        findUnique: jest.fn(),
        create: jest.fn(),
        delete: jest.fn(),
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

  describe('removeBucketGoalCover', () => {
    it('updates goal and removes coverUrl', async () => {
      const goalWithCover = {
        id: mockGoalId,
        userId: mockUserId,
        coverUrl: '/uploads/bucket-goals/cover/1/10/file.webp',
      };
      const updatedGoal = { ...goalWithCover, coverUrl: null };
      (prisma.bucketGoal.findUnique as jest.Mock).mockResolvedValue(goalWithCover);
      (prisma.bucketGoal.update as jest.Mock).mockResolvedValue(updatedGoal);

      const result = await service.removeBucketGoalCover(mockUserId, mockGoalId);
      expect(result.coverUrl).toBeNull();
      expect(prisma.bucketGoal.update).toHaveBeenCalledWith({
        where: { id: mockGoalId },
        data: { coverUrl: null },
      });
    });

    it('throws Forbidden when goal belongs to another user', async () => {
      (prisma.bucketGoal.findUnique as jest.Mock).mockResolvedValue({
        id: mockGoalId,
        userId: mockOtherUserId,
      });

      await expect(service.removeBucketGoalCover(mockUserId, mockGoalId)).rejects.toThrow(
        ForbiddenException,
      );
    });
  });

  describe('deleteBucketGoalMedia', () => {
    it('deletes media record', async () => {
      const media = {
        id: 5,
        url: '/uploads/bucket-goals/media/1/goal-10/uuid.webp',
        goalId: mockGoalId,
        goal: { userId: mockUserId },
      };
      (prisma.bucketGoalMedia.findUnique as jest.Mock).mockResolvedValue(media);
      (prisma.bucketGoalMedia.delete as jest.Mock).mockResolvedValue(undefined);

      const result = await service.deleteBucketGoalMedia(mockUserId, 5);
      expect(result).toBe(true);
      expect(prisma.bucketGoalMedia.delete).toHaveBeenCalledWith({ where: { id: 5 } });
    });

    it('throws NotFound when media does not exist', async () => {
      (prisma.bucketGoalMedia.findUnique as jest.Mock).mockResolvedValue(null);

      await expect(service.deleteBucketGoalMedia(mockUserId, 999)).rejects.toThrow(
        NotFoundException,
      );
    });
  });

  describe('addBucketGoalMedia', () => {
    it('creates media with goalId only', async () => {
      (prisma.bucketGoal.findUnique as jest.Mock).mockResolvedValue({
        id: mockGoalId,
        userId: mockUserId,
      });
      const created = { id: 1, goalId: mockGoalId, logId: null, url: '/uploads/1.webp' };
      (prisma.bucketGoalMedia.create as jest.Mock).mockResolvedValue(created);

      const result = await service.addBucketGoalMedia(mockUserId, {
        goalId: mockGoalId,
        url: '/uploads/1.webp',
      });
      expect(result).toEqual(created);
      expect(prisma.bucketGoalMedia.create).toHaveBeenCalledWith({
        data: expect.objectContaining({ goalId: mockGoalId, logId: null, url: '/uploads/1.webp' }),
      });
    });

    it('creates media with logId only', async () => {
      const logId = 5;
      (prisma.bucketGoalLog.findUnique as jest.Mock).mockResolvedValue({
        id: logId,
        goal: { userId: mockUserId },
      });
      const created = { id: 1, goalId: null, logId, url: '/uploads/2.webp' };
      (prisma.bucketGoalMedia.create as jest.Mock).mockResolvedValue(created);

      const result = await service.addBucketGoalMedia(mockUserId, {
        logId,
        url: '/uploads/2.webp',
      });
      expect(result).toEqual(created);
      expect(prisma.bucketGoalMedia.create).toHaveBeenCalledWith({
        data: expect.objectContaining({ goalId: null, logId, url: '/uploads/2.webp' }),
      });
    });

    it('throws BadRequest when both goalId and logId provided', async () => {
      await expect(
        service.addBucketGoalMedia(mockUserId, {
          goalId: mockGoalId,
          logId: 5,
          url: '/uploads/both.webp',
        }),
      ).rejects.toThrow(BadRequestException);
      await expect(
        service.addBucketGoalMedia(mockUserId, {
          goalId: mockGoalId,
          logId: 5,
          url: '/uploads/both.webp',
        }),
      ).rejects.toThrow(/exactly one of goalId or logId/);
    });

    it('throws BadRequest when neither goalId nor logId provided', async () => {
      await expect(
        service.addBucketGoalMedia(mockUserId, {
          url: '/uploads/none.webp',
        }),
      ).rejects.toThrow(BadRequestException);
      await expect(
        service.addBucketGoalMedia(mockUserId, {
          url: '/uploads/none.webp',
        }),
      ).rejects.toThrow(/exactly one of goalId or logId/);
    });

    it('throws Forbidden when goal belongs to another user', async () => {
      (prisma.bucketGoal.findUnique as jest.Mock).mockResolvedValue({
        id: mockGoalId,
        userId: mockOtherUserId,
      });

      await expect(
        service.addBucketGoalMedia(mockUserId, {
          goalId: mockGoalId,
          url: '/uploads/1.webp',
        }),
      ).rejects.toThrow(ForbiddenException);
    });
  });
});
