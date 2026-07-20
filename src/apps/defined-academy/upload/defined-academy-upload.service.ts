import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { LogAction } from '@prisma/client';
import { existsSync } from 'fs';
import { mkdir, writeFile } from 'fs/promises';
import { join, extname } from 'path';
import { randomUUID } from 'crypto';
import type { Request } from 'express';
import sharp from 'sharp';
import { PrismaService } from '../../../core/prisma/prisma.service';
import { createLog } from '../../../core/services/create-log';
import { deleteUploadByUrl } from '../../../core/utils/upload-delete.util';
import { DefinedAcademyService } from '../defined-academy.service';

const MAX_IMAGE_SIZE = 8 * 1024 * 1024;
const MAX_RESOURCE_SIZE = 12 * 1024 * 1024;
const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const ALLOWED_RESOURCE_TYPES = [
  ...ALLOWED_IMAGE_TYPES,
  'application/pdf',
];
const COVER_MAX_WIDTH = 1600;
const LOGO_MAX_WIDTH = 800;
const QUALITY = 85;

const SAFE_IMAGE_EXTENSIONS: Record<string, string> = {
  'image/jpeg': '.jpg',
  'image/png': '.png',
  'image/webp': '.webp',
};

@Injectable()
export class DefinedAcademyUploadService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly definedAcademyService: DefinedAcademyService,
  ) {}

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

  private async assertDefinedAccess(userId: number): Promise<void> {
    const access = await this.prisma.userAppAccess.findFirst({
      where: {
        userId,
        app: { code: 'DEFINED' },
      },
    });
    if (!access) {
      throw new ForbiddenException('Defined backoffice access required');
    }
  }

  validateImageFile(file: Express.Multer.File): void {
    if (!file?.buffer) {
      throw new BadRequestException('No file uploaded');
    }
    if (file.size > MAX_IMAGE_SIZE) {
      throw new BadRequestException(
        `File size exceeds ${MAX_IMAGE_SIZE / 1024 / 1024}MB limit`,
      );
    }
    if (!ALLOWED_IMAGE_TYPES.includes(file.mimetype)) {
      throw new BadRequestException(
        `Invalid file type. Allowed: ${ALLOWED_IMAGE_TYPES.join(', ')}`,
      );
    }
  }

  validateResourceFile(file: Express.Multer.File): void {
    if (!file?.buffer) {
      throw new BadRequestException('No file uploaded');
    }
    if (file.size > MAX_RESOURCE_SIZE) {
      throw new BadRequestException(
        `File size exceeds ${MAX_RESOURCE_SIZE / 1024 / 1024}MB limit`,
      );
    }
    if (!ALLOWED_RESOURCE_TYPES.includes(file.mimetype)) {
      throw new BadRequestException(
        `Invalid file type. Allowed: ${ALLOWED_RESOURCE_TYPES.join(', ')}`,
      );
    }
  }

  private normalizeImageExt(mimetype: string, originalName?: string): string {
    const ext = SAFE_IMAGE_EXTENSIONS[mimetype];
    if (ext) return ext;
    const fromName = originalName ? extname(originalName).toLowerCase() : '';
    if (['.jpg', '.jpeg', '.png', '.webp'].includes(fromName)) return fromName;
    return '.jpg';
  }

  private async saveProcessedImage(params: {
    file: Express.Multer.File;
    relPath: string;
    maxWidth: number;
    req?: Request;
  }): Promise<string> {
    const ext = this.normalizeImageExt(params.file.mimetype, params.file.originalname);
    const fileName = `${randomUUID()}${ext}`;
    const dirPath = join(process.cwd(), 'uploads', params.relPath);

    if (!existsSync(dirPath)) {
      await mkdir(dirPath, { recursive: true, mode: 0o755 });
    }

    let buffer = params.file.buffer;
    let finalFileName = fileName;
    try {
      const image = sharp(buffer);
      const metadata = await image.metadata();
      if (metadata.width && metadata.width > params.maxWidth) {
        buffer = await image
          .resize(params.maxWidth, null, {
            fit: 'inside',
            withoutEnlargement: true,
          })
          .webp({ quality: QUALITY })
          .toBuffer();
        finalFileName = fileName.replace(ext, '.webp');
      }
    } catch {
      // keep original buffer
    }

    const filePath = join(dirPath, finalFileName);
    await writeFile(filePath, buffer);
    return `${this.getPublicBaseUrl(params.req)}/uploads/${params.relPath}/${finalFileName}`;
  }

  async uploadProgramCover(
    userId: number,
    academyId: number,
    courseId: number,
    file: Express.Multer.File,
    req?: Request,
  ): Promise<{ academyId: number; courseId: number; url: string }> {
    await this.assertDefinedAccess(userId);
    const course = await this.definedAcademyService.ensureCourse(academyId, courseId);

    const relPath = join(
      'academy',
      'programs',
      'cover',
      String(academyId),
      String(courseId),
    );
    const url = await this.saveProcessedImage({
      file,
      relPath,
      maxWidth: COVER_MAX_WIDTH,
      req,
    });

    if (course.coverImageUrl) {
      await deleteUploadByUrl(course.coverImageUrl);
    }

    await this.prisma.definedAcademyCourse.update({
      where: { id: courseId },
      data: { coverImageUrl: url },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'Defined academy program cover uploaded',
      route: 'uploadDefinedAcademyProgramCover',
      metadata: { academyId, courseId, feature: 'defined-academy' },
    });

    return { academyId, courseId, url };
  }

  async uploadAcademyLogo(
    userId: number,
    academyId: number,
    file: Express.Multer.File,
    req?: Request,
  ): Promise<{ academyId: number; url: string }> {
    await this.assertDefinedAccess(userId);
    const academy = await this.prisma.definedAcademy.findUnique({
      where: { id: academyId },
    });
    if (!academy) {
      throw new NotFoundException(`Defined academy ${academyId} not found`);
    }

    const relPath = join('academy', 'logo', String(academyId));
    const url = await this.saveProcessedImage({
      file,
      relPath,
      maxWidth: LOGO_MAX_WIDTH,
      req,
    });

    if (academy.logoUrl) {
      await deleteUploadByUrl(academy.logoUrl);
    }

    await this.prisma.definedAcademy.update({
      where: { id: academyId },
      data: { logoUrl: url },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'Defined academy logo uploaded',
      route: 'uploadDefinedAcademyLogo',
      metadata: { academyId, feature: 'defined-academy' },
    });

    return { academyId, url };
  }

  async uploadPartnerLogo(
    userId: number,
    academyId: number,
    partnerId: number,
    file: Express.Multer.File,
    req?: Request,
  ): Promise<{ academyId: number; partnerId: number; url: string }> {
    await this.assertDefinedAccess(userId);
    const partner = await this.definedAcademyService.ensurePartner(
      academyId,
      partnerId,
    );

    const relPath = join(
      'academy',
      'partners',
      'logo',
      String(academyId),
      String(partnerId),
    );
    const url = await this.saveProcessedImage({
      file,
      relPath,
      maxWidth: LOGO_MAX_WIDTH,
      req,
    });

    if (partner.logoUrl) {
      await deleteUploadByUrl(partner.logoUrl);
    }

    await this.prisma.definedAcademyPartner.update({
      where: { id: partnerId },
      data: { logoUrl: url },
    });

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'Defined academy partner logo uploaded',
      route: 'uploadDefinedAcademyPartnerLogo',
      metadata: { academyId, partnerId, feature: 'defined-academy' },
    });

    return { academyId, partnerId, url };
  }

  async uploadResourceFile(
    userId: number,
    academyId: number,
    file: Express.Multer.File,
    req?: Request,
  ): Promise<{ academyId: number; url: string; mimeType: string; fileName: string }> {
    await this.assertDefinedAccess(userId);
    await this.definedAcademyService.ensureAcademy(academyId);

    const ext =
      file.mimetype === 'application/pdf'
        ? '.pdf'
        : this.normalizeImageExt(file.mimetype, file.originalname);
    const storedName = `${randomUUID()}${ext}`;
    const relPath = join('academy', 'resources', String(academyId));
    const dirPath = join(process.cwd(), 'uploads', relPath);

    if (!existsSync(dirPath)) {
      await mkdir(dirPath, { recursive: true, mode: 0o755 });
    }

    let buffer = file.buffer;
    let finalName = storedName;
    if (ALLOWED_IMAGE_TYPES.includes(file.mimetype)) {
      try {
        buffer = await sharp(buffer).webp({ quality: QUALITY }).toBuffer();
        finalName = storedName.replace(ext, '.webp');
      } catch {
        // keep original
      }
    }

    await writeFile(join(dirPath, finalName), buffer);
    const url = `${this.getPublicBaseUrl(req)}/uploads/${relPath}/${finalName}`;

    await createLog({
      action: LogAction.CUSTOM_ACTION,
      userId,
      details: 'Defined academy resource file uploaded',
      route: 'uploadDefinedAcademyResourceFile',
      metadata: { academyId, feature: 'defined-academy' },
    });

    return {
      academyId,
      url,
      mimeType: file.mimetype,
      fileName: file.originalname,
    };
  }
}
