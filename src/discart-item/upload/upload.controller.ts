// src/discart-item/upload/upload.controller.ts
import {
  Controller,
  Post,
  UploadedFiles,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';

const createMulterOptions = (folder: string) => ({
  storage: diskStorage({
    destination: `./uploads/${folder}`, // pasta relativa à raiz do projeto
    filename: (req: any, file: Express.Multer["File"], callback: (error: Error | null, filename: string) => void) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      const ext = extname(file.originalname);
      const filename = `${file.fieldname}-${uniqueSuffix}${ext}`;
      callback(null, filename);
    },
  }),
  fileFilter: (req: any, file: any, cb: any) => {
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only images are allowed.'), false);
    }
  },
});

@Controller('uploads')
export class DiscartItemUploadController {
  @Post('discart-items')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(FilesInterceptor('files', 10, createMulterOptions('discart-items')))
  uploadDiscartItemImages(@UploadedFiles() files: Array<Express.Multer["File"]>) {
    if (!files || files.length === 0) {
      return { urls: [] };
    }

    const urls = files.map((file) => `/uploads/discart-items/${file.filename}`);
    return { urls };
  }
}

