// src/discart-item/upload/upload.controller.ts
import {
  Controller,
  Post,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
  BadRequestException,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { existsSync, mkdirSync } from 'fs';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import sharp from 'sharp';

// Limite de tamanho: 10MB por arquivo
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const MAX_WIDTH = 1920; // Largura máxima
const MAX_HEIGHT = 1920; // Altura máxima
const QUALITY = 85; // Qualidade JPEG (0-100)

const createMulterOptions = (folder: string) => {
  const uploadPath = `./uploads/${folder}`;
  
  // Criar pasta se não existir
  if (!existsSync(uploadPath)) {
    mkdirSync(uploadPath, { recursive: true });
  }

  return {
    storage: diskStorage({
      destination: uploadPath,
      filename: (req: any, file: Express.Multer["File"], callback: (error: Error | null, filename: string) => void) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = extname(file.originalname);
        const filename = `${file.fieldname}-${uniqueSuffix}${ext}`;
        callback(null, filename);
      },
    }),
    limits: {
      fileSize: MAX_FILE_SIZE,
    },
    fileFilter: (req: any, file: any, cb: any) => {
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
      if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
      } else {
        cb(new BadRequestException('Invalid file type. Only images (JPEG, PNG, GIF, WebP) are allowed.'), false);
      }
    },
  };
};

@Controller('uploads')
export class DiscartItemUploadController {
  @Post('discart-items')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FilesInterceptor('files', 10, createMulterOptions('discart-items')))
  async uploadDiscartItemImages(@UploadedFiles() files: Array<Express.Multer["File"]>) {
    if (!files || files.length === 0) {
      return { urls: [] };
    }

    const processedUrls: string[] = [];

    for (const file of files) {
      try {
        const filePath = join(process.cwd(), 'uploads', 'discart-items', file.filename);
        
        // Comprimir e redimensionar a imagem
        const image = sharp(filePath);
        const metadata = await image.metadata();
        
        let processedImage = image;
        
        // Redimensionar se necessário
        if (metadata.width && metadata.height) {
          if (metadata.width > MAX_WIDTH || metadata.height > MAX_HEIGHT) {
            processedImage = processedImage.resize(MAX_WIDTH, MAX_HEIGHT, {
              fit: 'inside',
              withoutEnlargement: true,
            });
          }
        }

        // Converter para JPEG com qualidade otimizada (mais compacto)
        const outputPath = filePath.replace(extname(file.filename), '.jpg');
        await processedImage
          .jpeg({ quality: QUALITY, mozjpeg: true })
          .toFile(outputPath);

        // Se o arquivo original não era JPEG, deletar o original
        if (extname(file.filename).toLowerCase() !== '.jpg' && extname(file.filename).toLowerCase() !== '.jpeg') {
          const fs = await import('fs/promises');
          await fs.unlink(filePath).catch(() => {});
        }

        const finalFilename = file.filename.replace(extname(file.filename), '.jpg');
        processedUrls.push(`/uploads/discart-items/${finalFilename}`);
      } catch (error) {
        console.error(`Error processing image ${file.filename}:`, error);
        // Em caso de erro, usar o arquivo original
        processedUrls.push(`/uploads/discart-items/${file.filename}`);
      }
    }

    return { urls: processedUrls };
  }
}

