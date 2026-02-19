import {
  ForbiddenException,
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../../../core/prisma/prisma.service';
import { createLog } from '../../../core/services/create-log';
import { LogAction } from '@prisma/client';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { join, extname } from 'path';
import { randomUUID } from 'crypto';
import sharp from 'sharp';
import type { Request } from 'express';

const MAX_FILE_SIZE = 8 * 1024 * 1024; // 8MB
const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const COVER_MAX_WIDTH = 1600;
const MEDIA_MAX_WIDTH = 1400;
const QUALITY = 85;

const SAFE_EXTENSIONS: Record<string, string> = {
  'image/jpeg': '.jpg',
  'image/png': '.png',
  'image/webp': '.webp',
};

@Injectable()
export class BucketGoalsUploadService {
  constructor(private readonly prisma: PrismaService) {}

  getPublicBaseUrl(req?: Request): string {
    const base = process.env.PUBLIC_API_URL;
    if (base) {
      return base.replace(/\/$/, '');
    }
    if (req?.headers?.host) {
      const proto = req.headers['x-forwarded-proto'] || 'http';
      return `${proto}://${req.headers.host}`;
    }
    return 'http://localhost:3000';
  }

  private normalizeExt(mimetype: string, originalName?: string): string {
    const ext = SAFE_EXTENSIONS[mimetype];
    if (ext) return ext;
    const fromName = originalName ? extname(originalName).toLowerCase() : '';
    if (['.jpg', '.jpeg', '.png', '.webp'].includes(fromName)) return fromName;
    return '.jpg';
  }

  private async assertGoalOwnership(goalId: number, userId: number) {
    const goal = await this.prisma.bucketGoal.findUnique({
      where: { id: goalId },
    });
    if (!goal) {
      throw new NotFoundException(`Bucket goal with ID ${goalId} not found`);
    }
    if (goal.userId !== userId) {
      throw new ForbiddenException('You do not have access to this goal');
    }
    return goal;
  }

  private async assertBoardOwnership(boardId: number, userId: number) {
    const board = await this.prisma.bucketVisionBoard.findUnique({
      where: { id: boardId },
    });
    if (!board) {
      throw new NotFoundException(`Vision board with ID ${boardId} not found`);
    }
    if (board.userId !== userId) {
      throw new ForbiddenException('You do not have access to this board');
    }
    return board;
  }

  private async assertLogOwnership(logId: number, userId: number) {
    const log = await this.prisma.bucketGoalLog.findUnique({
      where: { id: logId },
      include: { goal: true },
    });
    if (!log) {
      throw new NotFoundException(`Log with ID ${logId} not found`);
    }
    if (log.goal.userId !== userId) {
      throw new ForbiddenException('You do not have access to this log');
    }
    return log;
  }

  validateFile(file: Express.Multer.File): void {
    if (!file || !file.buffer) {
      throw new BadRequestException('No file uploaded');
    }
    if (file.size > MAX_FILE_SIZE) {
      throw new BadRequestException(`File size exceeds ${MAX_FILE_SIZE / 1024 / 1024}MB limit`);
    }
    if (!ALLOWED_IMAGE_TYPES.includes(file.mimetype)) {
      throw new BadRequestException(
        `Invalid file type. Allowed: ${ALLOWED_IMAGE_TYPES.join(', ')}`,
      );
    }
  }

  async uploadCover(
    userId: number,
    goalId: number,
    file: Express.Multer.File,
    req?: Request,
  ): Promise<{ goalId: number; url: string }> {
    await this.assertGoalOwnership(goalId, userId);

    const ext = this.normalizeExt(file.mimetype, file.originalname);
    const fileName = `${randomUUID()}${ext}`;
    const relPath = join('bucket-goals', 'cover', String(userId), String(goalId));
    const dirPath = join(process.cwd(), 'uploads', relPath);

    if (!existsSync(dirPath)) {
      await mkdir(dirPath, { recursive: true, mode: 0o755 });
    }

    let buffer = file.buffer;
    let finalFileName = fileName;
    try {
      const image = sharp(buffer);
      const metadata = await image.metadata();
      if (metadata.width && metadata.width > COVER_MAX_WIDTH) {
        buffer = await image
          .resize(COVER_MAX_WIDTH, null, { fit: 'inside', withoutEnlargement: true })
          .webp({ quality: QUALITY })
          .toBuffer();
        finalFileName = fileName.replace(ext, '.webp');
      }
    } catch {
      // Use original buffer
    }

    const filePath = join(dirPath, finalFileName);
    await writeFile(filePath, buffer);
    const url = `${this.getPublicBaseUrl(req)}/uploads/${relPath}/${finalFileName}`;
    await this.prisma.bucketGoal.update({
      where: { id: goalId },
      data: { coverUrl: url },
    });
    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      metadata: { feature: 'bucket', upload: 'cover', goalId },
    });
    return { goalId, url };
  }

  async uploadMedia(
    userId: number,
    file: Express.Multer.File,
    scope: { goalId?: number; boardId?: number; logId?: number },
    req?: Request,
  ): Promise<{ scope: string; url: string }> {
    let scopeKey = 'misc';
    if (scope.goalId) {
      await this.assertGoalOwnership(scope.goalId, userId);
      scopeKey = `goal-${scope.goalId}`;
    } else if (scope.boardId) {
      await this.assertBoardOwnership(scope.boardId, userId);
      scopeKey = `board-${scope.boardId}`;
    } else if (scope.logId) {
      await this.assertLogOwnership(scope.logId, userId);
      scopeKey = `log-${scope.logId}`;
    } else {
      throw new BadRequestException('Provide at least one of: goalId, boardId, logId');
    }

    const ext = this.normalizeExt(file.mimetype, file.originalname);
    const fileName = `${randomUUID()}${ext}`;
    const relPath = join('bucket-goals', 'media', String(userId), scopeKey);
    const dirPath = join(process.cwd(), 'uploads', relPath);

    if (!existsSync(dirPath)) {
      await mkdir(dirPath, { recursive: true, mode: 0o755 });
    }

    let buffer = file.buffer;
    let finalFileName = fileName;
    try {
      const image = sharp(buffer);
      const metadata = await image.metadata();
      if (metadata.width && metadata.width > MEDIA_MAX_WIDTH) {
        buffer = await image
          .resize(MEDIA_MAX_WIDTH, null, { fit: 'inside', withoutEnlargement: true })
          .webp({ quality: QUALITY })
          .toBuffer();
        finalFileName = fileName.replace(ext, '.webp');
      }
    } catch {
      // Use original buffer
    }

    const filePath = join(dirPath, finalFileName);
    await writeFile(filePath, buffer);
    const url = `${this.getPublicBaseUrl(req)}/uploads/${relPath}/${finalFileName}`;
    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      metadata: { feature: 'bucket', upload: 'media', ...scope },
    });
    return { scope: scopeKey, url };
  }
}
