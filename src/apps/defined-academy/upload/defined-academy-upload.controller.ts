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
import { DefinedAcademyUploadService } from './defined-academy-upload.service';

const MAX_IMAGE_SIZE = 8 * 1024 * 1024;
const MAX_RESOURCE_SIZE = 12 * 1024 * 1024;
const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const ALLOWED_RESOURCE_TYPES = [
  ...ALLOWED_IMAGE_TYPES,
  'application/pdf',
];

const imageMulterOptions = {
  storage: memoryStorage(),
  limits: { fileSize: MAX_IMAGE_SIZE },
  fileFilter: (
    _req: Express.Request,
    file: Express.Multer.File,
    cb: (err: Error | null, accept: boolean) => void,
  ) => {
    if (ALLOWED_IMAGE_TYPES.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(
        new Error(`Invalid file type. Allowed: ${ALLOWED_IMAGE_TYPES.join(', ')}`),
        false,
      );
    }
  },
};

const resourceMulterOptions = {
  storage: memoryStorage(),
  limits: { fileSize: MAX_RESOURCE_SIZE },
  fileFilter: (
    _req: Express.Request,
    file: Express.Multer.File,
    cb: (err: Error | null, accept: boolean) => void,
  ) => {
    if (ALLOWED_RESOURCE_TYPES.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(
        new Error(
          `Invalid file type. Allowed: ${ALLOWED_RESOURCE_TYPES.join(', ')}`,
        ),
        false,
      );
    }
  },
};

function parsePositiveInt(
  value: unknown,
  fieldName: string,
): number {
  if (value === undefined || value === null || value === '') {
    throw new BadRequestException(`${fieldName} is required`);
  }
  const parsed = parseInt(String(value), 10);
  if (Number.isNaN(parsed) || parsed < 1) {
    throw new BadRequestException(`${fieldName} must be a positive integer`);
  }
  return parsed;
}

@Controller('academy/upload')
@UseGuards(JwtAuthGuard)
export class DefinedAcademyUploadController {
  constructor(private readonly uploadService: DefinedAcademyUploadService) {}

  /**
   * Upload program (course) cover/thumbnail.
   * Updates DefinedAcademyCourse.coverImageUrl automatically.
   */
  @Post('programs/cover')
  @UseInterceptors(FileInterceptor('file', imageMulterOptions))
  async uploadProgramCover(
    @Req() req: { user?: { id?: number }; body?: Record<string, unknown> },
    @UploadedFile() file: Express.Multer.File,
  ) {
    const userId = req.user?.id;
    if (!userId) {
      throw new BadRequestException('Authentication required');
    }

    const academyId = parsePositiveInt(req.body?.academyId, 'academyId');
    const courseId = parsePositiveInt(req.body?.courseId, 'courseId');

    this.uploadService.validateImageFile(file);
    return this.uploadService.uploadProgramCover(
      userId,
      academyId,
      courseId,
      file,
      req as any,
    );
  }

  /**
   * Upload academy logo. Updates DefinedAcademy.logoUrl automatically.
   */
  @Post('academy/logo')
  @UseInterceptors(FileInterceptor('file', imageMulterOptions))
  async uploadAcademyLogo(
    @Req() req: { user?: { id?: number }; body?: Record<string, unknown> },
    @UploadedFile() file: Express.Multer.File,
  ) {
    const userId = req.user?.id;
    if (!userId) {
      throw new BadRequestException('Authentication required');
    }

    const academyId = parsePositiveInt(req.body?.academyId, 'academyId');

    this.uploadService.validateImageFile(file);
    return this.uploadService.uploadAcademyLogo(
      userId,
      academyId,
      file,
      req as any,
    );
  }

  /**
   * Upload partner logo. Updates DefinedAcademyPartner.logoUrl automatically.
   */
  @Post('partners/logo')
  @UseInterceptors(FileInterceptor('file', imageMulterOptions))
  async uploadPartnerLogo(
    @Req() req: { user?: { id?: number }; body?: Record<string, unknown> },
    @UploadedFile() file: Express.Multer.File,
  ) {
    const userId = req.user?.id;
    if (!userId) {
      throw new BadRequestException('Authentication required');
    }

    const academyId = parsePositiveInt(req.body?.academyId, 'academyId');
    const partnerId = parsePositiveInt(req.body?.partnerId, 'partnerId');

    this.uploadService.validateImageFile(file);
    return this.uploadService.uploadPartnerLogo(
      userId,
      academyId,
      partnerId,
      file,
      req as any,
    );
  }

  /**
   * Upload resource file (PDF/image). Returns URL for updateDefinedAcademyResource.
   */
  @Post('resources/file')
  @UseInterceptors(FileInterceptor('file', resourceMulterOptions))
  async uploadResourceFile(
    @Req() req: { user?: { id?: number }; body?: Record<string, unknown> },
    @UploadedFile() file: Express.Multer.File,
  ) {
    const userId = req.user?.id;
    if (!userId) {
      throw new BadRequestException('Authentication required');
    }

    const academyId = parsePositiveInt(req.body?.academyId, 'academyId');

    this.uploadService.validateResourceFile(file);
    return this.uploadService.uploadResourceFile(
      userId,
      academyId,
      file,
      req as any,
    );
  }
}
