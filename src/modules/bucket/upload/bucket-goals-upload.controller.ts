import {
  BadRequestException,
  Controller,
  Post,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { memoryStorage } from 'multer';
import { JwtAuthGuard } from '../../../core/auth/guards/jwt-auth.guard';
import { BucketGoalsUploadService } from './bucket-goals-upload.service';

const MAX_FILE_SIZE = 8 * 1024 * 1024; // 8MB
const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

const bucketImageMulterOptions = {
  storage: memoryStorage(),
  limits: { fileSize: MAX_FILE_SIZE },
  fileFilter: (_req: any, file: Express.Multer.File, cb: (err: Error | null, accept: boolean) => void) => {
    if (ALLOWED_IMAGE_TYPES.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error(`Invalid file type. Allowed: ${ALLOWED_IMAGE_TYPES.join(', ')}`), false);
    }
  },
};

@Controller('bucket-goals/upload')
@UseGuards(JwtAuthGuard)
export class BucketGoalsUploadController {
  constructor(private readonly uploadService: BucketGoalsUploadService) { }

  /**
   * Upload cover image for a BucketGoal.
   * Form fields: file (image), goalId (number).
   * Returns URL and updates BucketGoal.coverUrl.
   */
  @Post('cover')
  @UseInterceptors(FileInterceptor('file', bucketImageMulterOptions))
  async uploadCover(
    @Req() req: any,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const userId = req.user?.id;
    if (!userId) {
      throw new BadRequestException('Authentication required');
    }

    const goalIdRaw = req.body?.goalId;
    if (goalIdRaw === undefined || goalIdRaw === null || goalIdRaw === '') {
      throw new BadRequestException('goalId is required');
    }
    const goalId = parseInt(String(goalIdRaw), 10);
    if (isNaN(goalId) || goalId < 1) {
      throw new BadRequestException('goalId must be a positive integer');
    }

    this.uploadService.validateFile(file);
    return this.uploadService.uploadCover(userId, goalId, file, req);
  }

  /**
   * Upload media image for BucketGoalMedia / VisionBoard items.
   * Form fields: file (image), and at least one of: goalId, boardId, logId.
   * Returns URL; frontend attaches it via GraphQL mutations.
   */
  @Post('media')
  @UseInterceptors(FileInterceptor('file', bucketImageMulterOptions))
  async uploadMedia(
    @Req() req: any,
    @UploadedFile() file: Express.Multer.File,
  ) {
    const userId = req.user?.id;
    if (!userId) {
      throw new BadRequestException('Authentication required');
    }

    const parseId = (val: any): number | undefined => {
      if (val === undefined || val === null || val === '') return undefined;
      const n = parseInt(String(val), 10);
      return !isNaN(n) && n >= 1 ? n : undefined;
    };

    const goalId = parseId(req.body?.goalId);
    const boardId = parseId(req.body?.boardId);
    const logId = parseId(req.body?.logId);

    if (!goalId && !boardId && !logId) {
      throw new BadRequestException('Provide at least one of: goalId, boardId, logId');
    }

    this.uploadService.validateFile(file);
    return this.uploadService.uploadMedia(
      userId,
      file,
      { goalId, boardId, logId },
      req,
    );
  }
}
