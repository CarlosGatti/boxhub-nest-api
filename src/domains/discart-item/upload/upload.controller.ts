// src/domains/discart-item/upload/upload.controller.ts
import {
  Controller,
  Post,
  UploadedFile,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
  BadRequestException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
import { existsSync, mkdirSync } from 'fs';
import { JwtAuthGuard } from 'src/core/auth/guards/jwt-auth.guard';
import sharp from 'sharp';

// Limite de tamanho: 10MB por arquivo
const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB
const MAX_WIDTH = 1920; // Largura máxima
const MAX_HEIGHT = 1920; // Altura máxima
const QUALITY = 85; // Qualidade JPEG (0-100)

const createMulterOptions = (folder: string) => {
  const uploadPath = join(process.cwd(), 'uploads', folder);
  
  // Criar pasta se não existir (sem verificar permissões aqui - deixa o multer tentar)
  if (!existsSync(uploadPath)) {
    try {
      mkdirSync(uploadPath, { recursive: true, mode: 0o755 });
      console.log(`✅ Created upload directory: ${uploadPath}`);
    } catch (error: any) {
      console.error(`⚠️ Failed to create upload directory ${uploadPath}:`, error.message);
      // Não lançar erro aqui - deixa o multer tentar
    }
  }

  return {
    storage: diskStorage({
      destination: (req: any, file: Express.Multer["File"], cb: (error: Error | null, destination: string) => void) => {
        // Garantir que a pasta existe no momento do upload
        if (!existsSync(uploadPath)) {
          try {
            mkdirSync(uploadPath, { recursive: true, mode: 0o755 });
          } catch (err: any) {
            return cb(new Error(`Failed to create directory: ${err.message}`), '');
          }
        }
        cb(null, uploadPath);
      },
      filename: (req: any, file: Express.Multer["File"], callback: (error: Error | null, filename: string) => void) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const ext = extname(file.originalname);
        const filename = `file-${uniqueSuffix}${ext}`;
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
        cb(new Error('Invalid file type. Only images (JPEG, PNG, GIF, WebP) are allowed.'), false);
      }
    },
  };
};

@Controller('uploads')
export class DiscartItemUploadController {
  @Post('avatars')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FileInterceptor('file', createMulterOptions('avatars')))
  async uploadAvatar(@UploadedFile() file: Express.Multer["File"]) {
    if (!file) {
      throw new BadRequestException('No file uploaded');
    }

    try {
      const filePath = join(process.cwd(), 'uploads', 'avatars', file.filename);

      // Verify file exists
      if (!existsSync(filePath)) {
        return { url: `/uploads/avatars/${file.filename}` };
      }

      // Process image (resize/compress)
      try {
        const image = sharp(filePath);
        const metadata = await image.metadata();

        let processedImage = image;
        if (metadata.width && metadata.height) {
          if (metadata.width > MAX_WIDTH || metadata.height > MAX_HEIGHT) {
            processedImage = processedImage.resize(MAX_WIDTH, MAX_HEIGHT, {
              fit: 'inside',
              withoutEnlargement: true,
            });
          }
        }

        const outputPath = filePath.replace(extname(file.filename), '.jpg');
        await processedImage
          .jpeg({ quality: QUALITY, mozjpeg: true })
          .toFile(outputPath);

        if (existsSync(outputPath)) {
          if (extname(file.filename).toLowerCase() !== '.jpg' && extname(file.filename).toLowerCase() !== '.jpeg') {
            const fs = await import('fs/promises');
            await fs.unlink(filePath).catch(() => {});
          }

          const finalFilename = file.filename.replace(extname(file.filename), '.jpg');
          return { url: `/uploads/avatars/${finalFilename}` };
        }

        return { url: `/uploads/avatars/${file.filename}` };
      } catch (processError: any) {
        console.warn(`⚠️ Avatar processing failed, using original:`, processError.message);
        return { url: `/uploads/avatars/${file.filename}` };
      }
    } catch (error: any) {
      if (error.code === 'EACCES' || error.code === 'EPERM') {
        throw new HttpException(
          `Permission denied: Cannot write to upload directory. Please check folder permissions.`,
          HttpStatus.FORBIDDEN
        );
      }
      if (error.code === 'ENOSPC') {
        throw new HttpException('No space left on device', 507);
      }
      throw error;
    }
  }

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
        
        console.log(`📸 Processing image: ${file.originalname} (${(file.size / 1024).toFixed(2)}KB)`);
        console.log(`📁 File saved at: ${filePath}`);
        
        // Verificar se o arquivo foi salvo corretamente
        if (!existsSync(filePath)) {
          console.error(`❌ File not found after upload: ${filePath}`);
          // Tentar usar o arquivo original sem processar
          processedUrls.push(`/uploads/discart-items/${file.filename}`);
          continue;
        }

        // Tentar comprimir, mas se falhar, usar o arquivo original
        try {
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

          // Converter para JPEG com qualidade otimizada
          const outputPath = filePath.replace(extname(file.filename), '.jpg');
          await processedImage
            .jpeg({ quality: QUALITY, mozjpeg: true })
            .toFile(outputPath);

          // Verificar se o arquivo processado foi criado
          if (existsSync(outputPath)) {
            // Se o arquivo original não era JPEG, deletar o original
            if (extname(file.filename).toLowerCase() !== '.jpg' && extname(file.filename).toLowerCase() !== '.jpeg') {
              const fs = await import('fs/promises');
              await fs.unlink(filePath).catch(() => {});
            }

            const finalFilename = file.filename.replace(extname(file.filename), '.jpg');
            processedUrls.push(`/uploads/discart-items/${finalFilename}`);
            console.log(`✅ Image processed successfully: ${finalFilename}`);
          } else {
            // Se processamento falhou, usar original
            processedUrls.push(`/uploads/discart-items/${file.filename}`);
            console.log(`⚠️ Processing failed, using original: ${file.filename}`);
          }
        } catch (processError: any) {
          console.warn(`⚠️ Image processing failed, using original:`, processError.message);
          // Usar arquivo original se processamento falhar
          processedUrls.push(`/uploads/discart-items/${file.filename}`);
        }
      } catch (error: any) {
        console.error(`❌ Error with file ${file.originalname}:`, error);
        console.error(`   Error details:`, {
          message: error.message,
          code: error.code,
          path: error.path,
          syscall: error.syscall,
        });
        
        // Se for erro de permissão, retornar erro específico
        if (error.code === 'EACCES' || error.code === 'EPERM') {
          throw new HttpException(
            `Permission denied: Cannot write to upload directory. Please check folder permissions.`,
            HttpStatus.FORBIDDEN
          );
        }
        
        // Se for erro de espaço em disco
        if (error.code === 'ENOSPC') {
          throw new HttpException('No space left on device', 507);
        }
        
        // Outros erros - não falhar completamente, apenas logar
        console.error(`⚠️ Skipping file due to error: ${file.originalname}`);
      }
    }

    if (processedUrls.length === 0) {
      throw new BadRequestException('Failed to process any files');
    }

    return { urls: processedUrls };
  }

  @Post('qrack-items')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FilesInterceptor('files', 10, createMulterOptions('qrack-items')))
  async uploadQrackItemImages(@UploadedFiles() files: Array<Express.Multer["File"]>) {
    console.log('📤 QRack upload request received');
    console.log('📦 Files received:', files?.length || 0);

    if (!files || files.length === 0) {
      console.error('❌ No files in request');
      throw new BadRequestException('No files uploaded');
    }

    const processedUrls: string[] = [];

    for (const file of files) {
      try {
        const filePath = join(process.cwd(), 'uploads', 'qrack-items', file.filename);

        console.log(`📸 Processing image: ${file.originalname} (${(file.size / 1024).toFixed(2)}KB)`);
        console.log(`📁 File saved at: ${filePath}`);

        if (!existsSync(filePath)) {
          console.error(`❌ File not found after upload: ${filePath}`);
          processedUrls.push(`/uploads/qrack-items/${file.filename}`);
          continue;
        }

        try {
          const image = sharp(filePath);
          const metadata = await image.metadata();

          let processedImage = image;

          if (metadata.width && metadata.height) {
            if (metadata.width > MAX_WIDTH || metadata.height > MAX_HEIGHT) {
              processedImage = processedImage.resize(MAX_WIDTH, MAX_HEIGHT, {
                fit: 'inside',
                withoutEnlargement: true,
              });
            }
          }

          const outputPath = filePath.replace(extname(file.filename), '.jpg');
          await processedImage
            .jpeg({ quality: QUALITY, mozjpeg: true })
            .toFile(outputPath);

          if (existsSync(outputPath)) {
            if (extname(file.filename).toLowerCase() !== '.jpg' && extname(file.filename).toLowerCase() !== '.jpeg') {
              const fs = await import('fs/promises');
              await fs.unlink(filePath).catch(() => {});
            }

            const finalFilename = file.filename.replace(extname(file.filename), '.jpg');
            processedUrls.push(`/uploads/qrack-items/${finalFilename}`);
            console.log(`✅ Image processed successfully: ${finalFilename}`);
          } else {
            processedUrls.push(`/uploads/qrack-items/${file.filename}`);
            console.log(`⚠️ Processing failed, using original: ${file.filename}`);
          }
        } catch (processError: any) {
          console.warn(`⚠️ Image processing failed, using original:`, processError.message);
          processedUrls.push(`/uploads/qrack-items/${file.filename}`);
        }
      } catch (error: any) {
        console.error(`❌ Error with file ${file.originalname}:`, error);

        if (error.code === 'EACCES' || error.code === 'EPERM') {
          throw new HttpException(
            `Permission denied: Cannot write to upload directory. Please check folder permissions.`,
            HttpStatus.FORBIDDEN
          );
        }

        if (error.code === 'ENOSPC') {
          throw new HttpException('No space left on device', 507);
        }

        console.error(`⚠️ Skipping file due to error: ${file.originalname}`);
      }
    }

    if (processedUrls.length === 0) {
      throw new BadRequestException('Failed to process any files');
    }

    return { urls: processedUrls };
  }
}

