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
  
  // Criar pasta se não existir com permissões corretas
  if (!existsSync(uploadPath)) {
    try {
      mkdirSync(uploadPath, { recursive: true, mode: 0o755 });
      console.log(`✅ Created upload directory: ${uploadPath}`);
    } catch (error: any) {
      console.error(`❌ Failed to create upload directory ${uploadPath}:`, error.message);
      throw new BadRequestException(`Failed to create upload directory: ${error.message}`);
    }
  } else {
    // Verificar permissões de escrita
    try {
      const fs = require('fs');
      fs.accessSync(uploadPath, fs.constants.W_OK);
    } catch (error: any) {
      console.error(`❌ No write permission for directory ${uploadPath}:`, error.message);
      throw new BadRequestException(`No write permission for upload directory: ${error.message}`);
    }
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
    console.log('📤 Upload request received');
    console.log('📦 Files received:', files?.length || 0);
    
    if (!files || files.length === 0) {
      console.error('❌ No files in request');
      throw new BadRequestException('No files uploaded');
    }

    const processedUrls: string[] = [];

    for (const file of files) {
      try {
        const filePath = join(process.cwd(), 'uploads', 'discart-items', file.filename);
        
        // Verificar se o arquivo foi salvo corretamente
        if (!existsSync(filePath)) {
          console.error(`❌ File not found after upload: ${filePath}`);
          throw new BadRequestException(`Failed to save file: ${file.originalname}`);
        }

        console.log(`📸 Processing image: ${file.originalname} (${(file.size / 1024).toFixed(2)}KB)`);
        
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

        // Verificar se o arquivo processado foi criado
        if (!existsSync(outputPath)) {
          throw new Error('Failed to create processed image');
        }

        // Se o arquivo original não era JPEG, deletar o original
        if (extname(file.filename).toLowerCase() !== '.jpg' && extname(file.filename).toLowerCase() !== '.jpeg') {
          const fs = await import('fs/promises');
          await fs.unlink(filePath).catch((err) => {
            console.warn(`⚠️ Could not delete original file ${filePath}:`, err.message);
          });
        }

        const finalFilename = file.filename.replace(extname(file.filename), '.jpg');
        processedUrls.push(`/uploads/discart-items/${finalFilename}`);
        console.log(`✅ Image processed successfully: ${finalFilename}`);
      } catch (error: any) {
        console.error(`❌ Error processing image ${file.originalname}:`, error);
        console.error(`   Error details:`, {
          message: error.message,
          code: error.code,
          path: error.path,
          syscall: error.syscall,
        });
        
        // Se for erro de permissão, retornar erro específico
        if (error.code === 'EACCES' || error.code === 'EPERM') {
          throw new BadRequestException(
            `Permission denied: Cannot write to upload directory. Please check folder permissions.`
          );
        }
        
        // Se for erro de espaço em disco
        if (error.code === 'ENOSPC') {
          throw new BadRequestException('No space left on device');
        }
        
        // Outros erros
        throw new BadRequestException(
          `Failed to process image ${file.originalname}: ${error.message}`
        );
      }
    }

    return { urls: processedUrls };
  }
}

